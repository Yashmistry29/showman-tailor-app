import { Keyboard,KeyboardAvoidingView, Platform } from 'react-native';
import { Image, View } from 'react-native'
import { TextInput, Button, HelperText, Text } from 'react-native-paper'
import { sendRequest } from '../utils/Helpers/HelpersMethod';
import {useState,useRef} from 'react'
import logo from '../images/SM_Logo.png'
import { Login } from '../utils/data/InitialValue'
import Toast from 'react-native-toast-message';
import { validateSignin } from '../utils/Validation/FormValidation'


const Loginscreen = ({navigation}) => {
  const [data, setData] = useState(Login);
  const [errorMessages, setErrorsMessages] = useState({});
  const [showPassword, setShowpassword] = useState(false);

  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const toggleShowPassword = () => {
    setShowpassword(!showPassword);
  };

  const handleChange = (value, name) => {
    setData(prev => {
      const updatedData = { ...prev, [name]: value };

      const validationErrors = validateSignin(updatedData,name);
      setErrorsMessages(validationErrors);
      return updatedData;
    });
  };

  const handlePress = () => {
    Keyboard.dismiss();

    const hasErrors = Object.keys(errorMessages).length > 0;
    const isFormFilled = data.username && data.password;

    if (!hasErrors && isFormFilled) {
      console.log(data);
      sendRequest("/user/login", "POST", data)
        .then(res => {
          if (res.success) {
            console.log(res);
            Toast.show({
              type: 'success',
              text1: res.message,
              position: 'top',
              topOffset: 60
            });
            navigation.replace('Dashboardscreen');
          } else {
            Toast.show({
              type: 'error',
              text1: res.message,
              text2: 'Check username or password',
              position: 'top',
              topOffset: 60
            });
          }
        });
    } else {
      Toast.show({
        type: 'error',
        text1: 'Please correct the errors',
        text2: 'Username and password must be valid',
        position: 'top',
        topOffset: 60
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      className="items-center justify-center flex-1 bg-neutral-200"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
    >
      <Toast/>
      <Image source={logo} className="w-96 h-64" />
      <View className="w-80 p-1 m-4">
        <TextInput
          label="Username"
          textColor='rgb(0,0,0)'
          mode='outlined'
          value={data.username}
          onChangeText={(value) => handleChange(value, "username")}
          outlineColor='rgb(0,0,0)'
          activeOutlineColor='rgb(0,0,0)'
          autoCapitalize='none'
          className="m-1"
          returnKeyType='next'
          ref={usernameRef}
          onSubmitEditing={() => passwordRef.current.focus()}
          submitBehavior='submit'
        />
        {errorMessages.username ? <HelperText type='error' visible='true'>{errorMessages.username}</HelperText> : ''}
        <TextInput
          label="Password"
          textColor='rgb(0,0,0)'
          mode='outlined'
          autoCapitalize='none'
          value={data.password}
          onChangeText={(value) => handleChange(value, "password")}
          outlineColor='rgb(0,0,0)'
          activeOutlineColor='rgb(0,0,0)'
          className="m-1"
          secureTextEntry={!showPassword}
          returnKeyType='done'
          ref={passwordRef}
          right={<TextInput.Icon icon={showPassword ? "eye" : "eye-off"} onPress={toggleShowPassword} />}
        />
        {errorMessages.password ? <HelperText type='error' visible='true'>{errorMessages.password}</HelperText> : ''}
        <Button
          icon="login"
          mode='contained'
          className="my-3 p-1"
          contentStyle={{ flexDirection: 'row-reverse' }}
          buttonColor='rgb(124,23,23)'
          onPress={handlePress}
        >Login</Button>
      </View>
    </KeyboardAvoidingView>
  )
}

export default Loginscreen