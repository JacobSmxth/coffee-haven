import FeaturedItems from '../components/FeaturedItems';
import { menuItems } from '../data/featuredItems';
import { BiCoffeeTogo, BiDrink } from 'react-icons/bi';
import { FaShoppingCart, FaMugHot, FaCoffee } from 'react-icons/fa';

function Menu() {
  console.log('Menu component rendering');
  console.log('menuItems:', menuItems);

  // Group menu items by category
  const groupedItems = menuItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  console.log('groupedItems:', groupedItems);

  // Get icon component based on icon name
  const getIcon = (iconName) => {
    console.log('getIcon called with:', iconName);
    switch (iconName) {
      case 'BsCupHot':
        return <FaMugHot className="text-4xl text-amber-600" />;
      case 'BsCupStraw':
        return <BiCoffeeTogo className="text-4xl text-amber-600" />;
      case 'BsTea':
        return <BiDrink className="text-4xl text-amber-600" />;
      case 'BsCup':
        return <FaCoffee className="text-4xl text-amber-600" />;
      default:
        return <FaMugHot className="text-4xl text-amber-600" />;
    }
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    console.log('getCategoryIcon called with:', category);
    switch (category) {
      case 'Espresso':
        return <FaMugHot className="text-amber-600" />;
      case 'Cold Coffee':
        return <BiCoffeeTogo className="text-amber-600" />;
      case 'Tea':
        return <BiDrink className="text-amber-600" />;
      default:
        return <FaMugHot className="text-amber-600" />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-amber-800">Our Menu</h1>
      
      {/* Featured Items Section */}
      <FeaturedItems />

      {/* Regular Menu Items */}
      <div className="space-y-12">
        {Object.entries(groupedItems).map(([category, items]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-amber-800 border-b-2 border-amber-200 pb-2 flex items-center gap-2">
              {getCategoryIcon(category)}
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-40 bg-amber-50 flex items-center justify-center">
                    {getIcon(item.icon)}
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 flex items-center gap-2">
                      {getCategoryIcon(item.category)}
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-amber-600 font-bold">{item.price}</span>
                      <button className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm hover:bg-amber-700 transition-colors flex items-center gap-2">
                        <FaShoppingCart />
                        Order
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu; 