import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="w-full mt-10 bg-gray-900">
      <footer className="bg-gray-900 text-white py-10 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">About Us</h3>
            <p className="text-gray-400">
              Your one-stop destination for the best shopping experience. We bring quality products to your doorstep.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">Customer Service</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Track Order</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-300">Subscribe to our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates, offers, and promotions delivered to your inbox.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 bg-gray-800 text-white rounded-l-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 px-4 py-3 rounded-r-lg text-white hover:bg-blue-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm px-6">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your E-Commerce. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-all duration-200">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-all duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-all duration-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-lg transition-all duration-200">
              <FaYoutube />
            </a>
          </div>
          <button
            className="mt-4 md:mt-0 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}
