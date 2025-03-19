const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <section className="mb-16">
        <h2 className="text-4xl text-[#2c1810] mb-8 text-center">Our Story</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Founded in 2015, Coffee Haven is more than just a coffee shop - it's a sanctuary for coffee lovers seeking quality, ethically sourced beverages in a warm, inviting atmosphere. Our skilled baristas craft each drink with precision and passion, ensuring every cup tells a story.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl text-[#2c1810] mb-8 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="text-[#2c1810] text-xl mb-4">Quality First</h3>
            <p className="text-gray-600 leading-relaxed">
              We source only the finest ethically grown coffee beans and maintain the highest standards in our brewing process.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-[#2c1810] text-xl mb-4">Community</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe in creating a welcoming space where everyone feels at home, fostering connections over great coffee.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md text-center transition-transform duration-300 hover:-translate-y-2">
            <div className="text-4xl mb-4">🌱</div>
            <h3 className="text-[#2c1810] text-xl mb-4">Sustainability</h3>
            <p className="text-gray-600 leading-relaxed">
              We're committed to eco-friendly practices, from our sourcing to our packaging and daily operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;