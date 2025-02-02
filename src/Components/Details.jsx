import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

export default function Details() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!product) {
      setProduct(products.find((p) => p.id == id));
    }
  }, [products, id, product]);

  const ProductDeleteHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
    localStorage.setItem("products", JSON.stringify(filteredProducts));
    navigate("/");
  };

  return product ? (
    <div className="w-[70%] flex flex-col md:flex-row justify-between items-center m-auto py-10 px-5 shadow-lg bg-white rounded-lg">
      <img className="object-contain h-[300px] w-[300px] md:h-[400px] md:w-[400px] rounded-lg" src={product.image} alt={product.title} />
      <div className="content w-full md:w-[50%] p-5">
        <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
        <h3 className="text-gray-500 my-3 text-lg">{product.category}</h3>
        <h2 className="text-red-500 text-2xl font-semibold">${product.price}</h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">{product.description}</p>
        <div className="mt-6 flex space-x-4">
          <Link to={`/edit/${product.id}`} className="py-2 px-6 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Edit</Link>
          <button onClick={() => ProductDeleteHandler(product.id)} className="py-2 px-6 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition">Delete</button>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
}
