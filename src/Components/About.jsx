import { FaShippingFast, FaMedal, FaHeadset, FaUndo, FaInfoCircle, FaShoppingCart } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex justify-center items-center w-full py-16 bg-gray-100">
      <div className="max-w-6xl w-full bg-white shadow-2xl rounded-2xl p-10 space-y-8">

        {/* About Us Section with Icon */}
        <h2 className="text-4xl font-extrabold text-gray-800 text-center flex items-center justify-center gap-3">
          <FaInfoCircle className="text-indigo-600" /> About Us
        </h2>
        <p className="text-gray-600 text-lg text-center mx-auto max-w-3xl">
          Welcome to our e-commerce platform, where we bring you the best products at unbeatable prices.
          We are committed to providing quality, variety, and a seamless shopping experience. Whether you’re
          looking for the latest trends or classic essentials, we’ve got something for everyone!
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">

          {/* Feature Cards */}
          <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <FaShippingFast className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Get your products delivered at lightning speed, wherever you are.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <FaMedal className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Best Quality</h3>
            <p className="text-gray-600">We ensure top-notch quality for every product we offer.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <FaHeadset className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our customer support is available anytime you need assistance.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-indigo-50 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <FaUndo className="text-indigo-600 text-5xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Easy Returns</h3>
            <p className="text-gray-600">Enjoy hassle-free returns and simple refund policies.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            With our commitment to excellence, we aim to provide you with the best online shopping experience.
            Explore our wide selection of products today!
          </p>
          <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg text-lg font-semibold flex items-center justify-center gap-2 hover:bg-indigo-700 transition duration-300 shadow-lg">
            <FaShoppingCart className="text-xl" /> Shop Now
          </button>
        </div>

      </div>
    </div>
  );
}
