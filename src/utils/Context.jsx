import { data } from "react-router-dom";
import axios from "./axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

function Context(props) {

  // const [data, setdata] = useState([])
  const [products, setproducts] = useState([])
  const getdata = async () => {
    let d = await axios.get('products')
    setproducts(d.data)
  }
  useEffect(() => {
    getdata()
  }, [])

  localStorage.setItem('products', JSON.stringify(products))
  // console.log(data)


  // const getproduct = async () => {
  //   try {
  //     const { data } = await axios("/products");
  //     setproducts(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // useEffect(() => {
  //   getproduct();
  // }, [])
  return (
    <ProductContext.Provider value={[products, setproducts]} className="context">
      {props.children}
    </ProductContext.Provider>
  );
}
export default Context;