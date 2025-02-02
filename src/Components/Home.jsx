import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import axios from "../utils/axios";
import About from "./About";
import Contact from "./Contact";
export default function Home() {
  const [products] = useContext(ProductContext);

  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1]);

  const [filteredProducts, setfilteredProducts] = useState(null)

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (!filteredProducts || category == "undefined") setfilteredProducts(products);
    if (category != "undefined") {
      setfilteredProducts(products.filter((p) => p.category == category));
      // getproductscategory();
    }
  }, [category, products]);


  return products ? (
    <>
      <Nav />
      <div className="w-[85%] p-10 pt-[5%] flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProducts && filteredProducts.map((p, i) =>
          <Link to={`/details/${p.id}`} className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[50vh] flex-col flex justify-center items-center">
            <div className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${p.image})` }}></div>
            <h1 className="hover:text-red-500">{p.title}</h1>
          </Link>
        )}

      </div>

    </>
  ) : <h1>hii</h1>
}