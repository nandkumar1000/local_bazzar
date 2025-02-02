import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export default function Edit() {
  const [products, setproducts] = useContext(ProductContext)
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useState(
    {
      title: "",
      price: "",
      description: "",
      image: "",
      category: "",
    }
  );

  const chagehandler = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id])


  const AddProductHandler = (e) => {
    e.preventDefault();
    console.log(product)
    if (product.title.trim().length < 5 || product.price.trim().length < 1 || product.category.trim().length < 5 || product.description.trim().length < 5 || product.image.trim().length < 5) {
      alert("Please fill all the fields");
      return;
    }

    const pi = products.findIndex((p) => p.id == id);
    const copyData = [...products];
    copyData[pi] = { ...products[pi], ...product };

    setproducts(copyData);

    localStorage.setItem(
      "products",
      JSON.stringify((copyData))
    );
    toast.success("successfully edited . ")
    navigate(-1);
  }
  return (
    <form action="/" onSubmit={AddProductHandler} className="flex flex-col items-center p-[5%] w-screen h-screen">
      <h1 className="mb-5 w-1/2 text-3xl">Edit Product</h1>
      <input type="url" placeholder="image-Link" className="text-2xl bg-zinc-100 rounded p-3 w-1/2" onChange={chagehandler} name="image" value={product && product.image}></input>
      <input type="text" placeholder="title" className=" mt-2 text-2xl bg-zinc-100 rounded p-3 w-1/2" onChange={chagehandler} name="title" value={product && product.title}></input>

      <div className="w-1/2 flex justify-between">
        <input type="text" placeholder="category" className=" mt-2 text-2xl bg-zinc-100 rounded p-3 w-[48%]" onChange={chagehandler} name="category" value={product && product.category}></input>
        <input type="Number" placeholder="price" className="mt-2 text-2xl bg-zinc-100 rounded p-3 w-[48%]" onChange={chagehandler} name="price" value={product && product.price}></input>
      </div>
      <textarea rows="10" onChange={chagehandler} name="description" value={product && product.description} placeholder="enter your description." className="mt-2 text-2xl bg-zinc-100 rounded p-3 w-[48%]"
      ></textarea>
      <div className="w-1/2">
        <button className=" mt-2 py-2 px-5 border rounded border-blue-200 text-blue-300" > edit product</button>
      </div>

    </form>
  )
}