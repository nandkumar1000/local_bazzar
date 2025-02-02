import { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [products] = useContext(ProductContext);

  let distinct_category = products && products.reduce((accu, cv) => [...accu, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  const generateColor = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`;
  };

  return (
    <nav className="w-64 h-full bg-white shadow-lg flex flex-col items-center py-6 border-r border-gray-200 rounded-lg">
      <Link
        to="/create"
        className="mb-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Add New Product
      </Link>
      <hr className="my-6 w-[80%] border-gray-300" />
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Category Filter</h1>
      <div className="w-[80%] space-y-4">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="flex items-center text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out transform hover:translate-x-2"
          >
            <span
              style={{ backgroundColor: generateColor() }}
              className="rounded-full mr-3 inline-block w-[30px] h-[30px] shadow-lg"
            ></span>
            <span className="font-medium">{c}</span>
          </Link>
        ))}
      </div>
      <hr className="my-6 w-[80%] border-gray-300" />
      <div className="flex flex-col items-center space-y-4">
        <Link to="/Contact" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out transform hover:translate-x-2">
          Contact
        </Link>
        <Link to="/About" className="text-gray-700 hover:text-blue-600 transition duration-200 ease-in-out transform hover:translate-x-2">
          About
        </Link>
      </div>
    </nav>
  );
}
