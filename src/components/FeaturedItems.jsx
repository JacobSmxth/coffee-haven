import { featuredItems } from '../data/featuredItems';
import { FaStar, FaShoppingCart } from 'react-icons/fa';

function FeaturedItems() {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-amber-800 flex items-center justify-center gap-2">
        <FaStar className="text-amber-500" />
        Featured Items
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
            <div className="relative h-64 bg-gray-200">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-amber-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                <FaStar className="text-yellow-200" />
                Featured
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-amber-600 font-bold text-lg">{item.price}</span>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2">
                  <FaShoppingCart />
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedItems; 