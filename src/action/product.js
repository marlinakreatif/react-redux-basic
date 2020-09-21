// disini kita akan membuat action creator

export const ambilData = () => {
  const data = [
    { id: 1, productName: "Accer", price: 100000 },
    { id: 2, productName: "Asus", price: 200000 },
    { id: 3, productName: "Lenovo", price: 30000 },
    { id: 4, productName: "Axio", price: 402342 },
    { id: 5, productName: "Zhenfon", price: 495029 },
    { id: 6, productName: "Xiomi", price: 349023 },
  ];
  return {
    type: "AMBIL_DATA",
    payload: data,
  };
};

export const chooseProduct = (product) => {
  return {
    type: "CHOOSE_PRODUCT",
    payload: product,
  };
};
