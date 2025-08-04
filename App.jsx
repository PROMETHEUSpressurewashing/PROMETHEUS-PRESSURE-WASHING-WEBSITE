import React, { useState } from 'react';
import { Menu, X, Home, Droplet, DollarSign, CheckCircle, Phone, Sparkles, Handshake, ShieldCheck, Feather } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-gray-900">
            Prometheus <span className="text-blue-600">Pressure Washing</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">Services</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-300">Contact</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-blue-600 focus:outline-none">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow-inner">
            <button onClick={() => scrollToSection('home')} className="block py-2 text-gray-700 hover:text-blue-600 border-b border-gray-200 w-full text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="block py-2 text-gray-700 hover:text-blue-600 border-b border-gray-200 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('about')} className="block py-2 text-gray-700 hover:text-blue-600 border-b border-gray-200 w-full text-left">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="block py-2 text-gray-700 hover:text-blue-600 w-full text-left">Contact</button>
          </div>
        )}
      </nav>
      <main className="pt-20">
        <section id="home" className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-4"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080/0d47a1/ffffff?text=Professional+Pressure+Washing')" }}>
          <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
          <div className="relative z-10 text-white max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in">
              Unleash the <span className="text-blue-300">Power of Clean</span> for Your Property
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-slide-up">
              Prometheus Pressure Washing: Your Janesville, WI, experts for a spotless clean.
            </p>
            <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
              Get Your Free Estimate
            </button>
          </div>
        </section>
        <section id="services" className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            We provide a full range of pressure washing services to restore the beauty of your home or business.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Home size={48} />} title="Residential Cleaning" description="From siding to patios, we safely and effectively remove dirt, grime, and mildew." />
            <ServiceCard icon={<Droplet size={48} />} title="Driveway & Walkway Cleaning" description="Blast away oil stains, tire marks, and moss to make your concrete look new again." />
            <ServiceCard icon={<Sparkles size={48} />} title="Deck & Fence Restoration" description="Gentle yet powerful cleaning that prepares your wood for staining or sealing." />
            <ServiceCard icon={<DollarSign size={48} />} title="Commercial Properties" description="Keep your business looking its best with our tailored commercial cleaning solutions." />
            <ServiceCard icon={<Feather size={48} />} title="Interior Gutter Cleaning" description="We remove all debris and blockages from inside your gutters to ensure proper water flow." />
            <ServiceCard icon={<ShieldCheck size={48} />} title="Gutter Guard Installation" description="Protect your gutters from future clogs with our professional gutter guard installation." />
            <ServiceCard icon={<CheckCircle size={48} />} title="Gutter Brightening" description="Remove stubborn black streaks and oxidation from the exterior of your gutters." />
            <ServiceCard icon={<Handshake size={48} />} title="Custom Solutions" description="Have a unique cleaning need? We're ready to create a plan just for you." />
          </div>
        </section>
        <section id="about" className="bg-blue-600 text-white px-4 py-16">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold mb-4">Janesville's Trusted Pressure Washing Experts</h2>
            <p className="text-lg mb-8 leading-relaxed">
              At Prometheus Pressure Washing, we are committed to providing top-quality service to our community in Janesville, Wisconsin. We use professional-grade equipment and eco-friendly cleaning solutions to deliver a superior clean that is safe for your property, family, and pets. Our dedication to detail and customer satisfaction sets us apart.
            </p>
            <p className="text-lg leading-relaxed font-light">
              We believe in restoring the pride you have in your home or business, one clean surface at a time.
            </p>
          </div>
        </section>
        <section id="contact" className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Ready for a Clean Start?</h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-xl mx-auto">
            Contact us today for a free, no-obligation estimate. We're here to answer your questions and schedule your service.
          </p>
          <div className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-2xl">
            <div className="flex flex-col md:flex-row justify-around items-center mb-8">
              <div className="flex items-center mb-4 md:mb-0">
                <Phone className="text-blue-600 mr-3" size={24} />
                <span className="text-lg">(608) 555-1234</span>
              </div>
              <div className="flex items-center">
                <Home className="text-blue-600 mr-3" size={24} />
                <span className="text-lg">Janesville, WI</span>
              </div>
            </div>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email Address</label>
                <input type="email" id="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" placeholder="How can we help you?" className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition duration-300"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-gray-400 py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm">
            &copy; 2024 Prometheus Pressure Washing. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Visit us at <a href="http://PROMETHEUS-PRESSURE-WASHING.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-300">PROMETHEUS-PRESSURE-WASHING.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="text-blue-600 mx-auto w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default App;
