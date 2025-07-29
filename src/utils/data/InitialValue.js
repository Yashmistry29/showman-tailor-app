export const Login = {
  username: "",
  password: "",
};

export const checked = {
  shirt: true,
  pant: true,
};

export const belt_type = [
  { label: "1.25", value: "1.25" },
  { label: "1.5", value: "1.5" },
  { label: "1.25 Cut", value: "1.25 Cut" },
  { label: "1.5 Cut", value: "1.5 Cut" },
];

export const pocket_type = [
  { label: "Cross", value: "cross" },
  { label: "Side", value: "side" },
];

export const shirt_type_dropdown = [
  { label: "Open Shirt", value: "ઓપન શર્ટ" },
  { label: "Bu Shirt", value: "બુશર્ટ" },
  { label: "Bu Shirt Cut", value: "બુશર્ટ કટ" },
  { label: "Safari", value: "સફારી" },
  { label: "Kafni", value: "કફની" },
  { label: "Kurtu", value: "કુર્તુ" },
];

export const pocket_strip = [
  { label: "In", value: "અંદર" },
  { label: "Out", value: "આગળ" },
  { label: "Out 1.25in", value: "આગળ 1.25in" },
  { label: "Out 1.5in", value: "આગળ 1.5in" },
];

export const jobData = {
  shirt_quantity: 1,
  pant_quantity: 1,
  createdAt: new Date(),
  returnDate: new Date(),
  totalPrice: 0,
  shirt_data: {
    s_length: "",
    shoulder: "",
    sleeve: "",
    cuff: "",
    chest: "",
    waist: "",
    seat: "",
    pocket: "",
    collar: "",
    strip: "",
    shirt_type: "",
    description: "",
    price: 0,
  },
  pant_data: {
    p_length: "",
    waist: "",
    jholo: "",
    seat: "",
    thighs: "",
    knee: "",
    bottom: "",
    back_pocket: "",
    chipti: "",
    pocket_type: "",
    belt_type: "",
    description: "",
    price: 0,
  },
};
