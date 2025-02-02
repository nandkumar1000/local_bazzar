import { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Create() {
  const navigate = useNavigate();
  const [products, setProducts] = useContext(ProductContext);

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (!title || !price || !category || !description || !image) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    const product = {
      id: nanoid(),
      image,
      title,
      category,
      description,
      price,
    };

    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    toast.success("New product added successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center py-10 px-5 w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Product</h1>
      <form onSubmit={AddProductHandler} className="w-full flex flex-col space-y-4">
        <input type="url" placeholder="Image URL" className="p-3 bg-gray-100 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setImage(e.target.value)} value={image} required />
        <input type="text" placeholder="Title" className="p-3 bg-gray-100 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setTitle(e.target.value)} value={title} required />
        <div className="flex space-x-4">
          <input type="text" placeholder="Category" className="p-3 bg-gray-100 rounded-lg text-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setCategory(e.target.value)} value={category} required />
          <input type="number" placeholder="Price" className="p-3 bg-gray-100 rounded-lg text-lg flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setPrice(e.target.value)} value={price} required />
        </div>
        <textarea rows="4" placeholder="Description" className="p-3 bg-gray-100 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) => setDescription(e.target.value)} value={description} required></textarea>
        <button type="submit" className="mt-4 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700 transition">Add Product</button>
      </form>
    </div>
  );
}
