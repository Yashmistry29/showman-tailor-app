import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  useMemo,
} from "react";
import {
  checked,
  jobData as initialJobData,
} from "../../utils/data/InitialValue";
import { sendRequest } from "../../utils/Helpers/HelpersMethod";

// Context
const MeasurementContext = createContext();

// Provider
export const MeasurementProvider = ({ children }) => {
  const [jobId, setjobId] = useState(0); //last Job Id of customer for loading last measurement.
  const [id, setId] = useState(0); //latestJobID
  const [sdata, setSdata] = useState(initialJobData.shirt_data);
  const [pdata, setPdata] = useState(initialJobData.pant_data);
  const [quantities, setQuantities] = useState({
    shirt: initialJobData.shirt_quantity,
    pant: initialJobData.pant_quantity,
  });
  const [priceData, setPriceData] = useState({});
  const [checkedData, setChecked] = useState({ ...checked });
  const [nameList, setNameList] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});
  const [selectedName, setSelectedName] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [returnDate, setReturnDate] = useState(initialJobData.returnDate);
  const createdAt = useMemo(() => new Date(), []);

  const resetMeasurement = async () => {
    setSdata(initialJobData.shirt_data);
    setPdata(initialJobData.pant_data);
    setQuantities({
      shirt: initialJobData.shirt_quantity,
      pant: initialJobData.pant_quantity,
    });
    setChecked(checked);
    setCustomerDetails({});
    setSelectedName(null);
    setSelectedJob(null);
    getLatestJobId();
    loadCustomers();
  };

  const handleSubmit = () => {
    const data = {
      job_id: id,
      createdAt,
      returnDate,
      shirt_data: sdata,
      pant_data: pdata,
      shirt_quantity: quantities.shirt,
      pant_quantity: quantities.pant,
      totalPrice: 900,
    };
    console.log(data);
  };

  const getLatestJobId = async () => {
    try {
      const res = await sendRequest("/job/getId", "POST");
      if (res.success) setId(res.message);
    } catch (err) {
      console.log(err, "Error getting latest JobId");
    }
  };

  const loadCustomers = async () => {
    try {
      const res = await sendRequest("/customer/getnamelist", "POST");
      if (res.success) {
        const list = res.data.map((item) => ({
          label: item.name,
          value: item.id,
          job_ids: item.job_ids,
        }));
        // console.log(list[3]);
        setNameList(list);
      }
    } catch (err) {
      console.log(err, "error loading customerList");
    }
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    if (checkedData.shirt) {
      total += Number(sdata.price) * quantities.shirt;
    }
    if (checkedData.pant) {
      total += Number(pdata.price) * quantities.pant;
    }
    return total;
  }, [sdata, pdata, quantities, checkedData]);

  useEffect(() => {
    sendRequest("/price/getPrice", "POST").then((res) => {
      const price = res.data;
      sdata["price"] = price.shirt_price;
      pdata["price"] = price.pant_price;
      setPriceData({ shirt: res.data.shirt_price, pant: res.data.pant_price })
    }).catch((err) => {
      console.log(err);
    })
  }, []);

  useEffect(() => {
    const fetchInitialData = async () => {
      await Promise.all([getLatestJobId(), loadCustomers()]);
    };
    fetchInitialData();
  }, []);

  return (
    <MeasurementContext.Provider
      value={{
        id,
        setId,
        sdata,
        setSdata,
        pdata,
        setPdata,
        checkedData,
        setChecked,
        nameList,
        setNameList,
        jobId,
        setjobId,
        customerDetails,
        setCustomerDetails,
        selectedName,
        setSelectedName,
        selectedJob,
        setSelectedJob,
        loadCustomers,
        quantities,
        setQuantities,
        returnDate,
        setReturnDate,
        initialJobData,
        createdAt,
        resetMeasurement,
        handleSubmit,
        totalPrice,
      }}
    >
      {children}
    </MeasurementContext.Provider>
  );
};

// Custom hook for easy usage
export const useMeasurement = () => useContext(MeasurementContext);
