import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="flex justify-center items-center w-full mt-10 mb-10">
      <div className="bg-white shadow-2xl rounded-3xl p-8 max-w-4xl w-full space-y-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Contact Us</h2>
        <p className="text-gray-600 text-center mb-8">
          Have questions or need support? We’re here to help. Reach out to us anytime!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: Contact Form */}
          <div className="space-y-6">
            <form>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-gray-700">Message</label>
                <textarea
                  rows="5"
                  placeholder="Write your message here"
                  className="w-full mt-2 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-300 ease-in-out"
                ></textarea>
              </div>
              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 ease-in-out">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Contact Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Other Ways to Reach Us</h3>
            <p className="text-gray-600">You can also contact us via:</p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-indigo-600" />
                <span>Phone: +1 (123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-600" />
                <span>Email: support@yourcompany.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-indigo-600" />
                <span>Address: 123 Business Rd, Suite 456, City, State</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
