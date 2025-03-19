import { featuredItems } from '../data/featuredItems';

const Featured = () => {
  return (
    <section className="py-16 px-8 bg-[#f9f5f0]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-[#2c1810] text-4xl mb-12">Featured Drinks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-[#2c1810] text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
              <span className="block text-[#8b4513] font-bold mt-4">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;