import React, { useState, useEffect } from 'react';
import { Truck, Package, Home, Building2, MapPin, Phone, Mail, Clock, Shield, Users, Star, ArrowRight, CheckCircle2, Menu, X, ChevronDown, Quote, Award, Target, Heart, Briefcase, Archive, Trash2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { useRef } from "react";
import { sendEmail } from "./services/emailService";

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
};

// Simple Router Implementation
const Router = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-xl' : 'bg-white/95 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div 
            onClick={() => navigateTo('home')}
            className="flex items-center space-x-4 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-600 to-orange-500 p-3 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Moving Ease
              </h1>
              <p className="text-sm text-gray-600 font-semibold">Ottawa , Gatineau and Quebec Moving Services</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => navigateTo('home')} 
              className={`font-bold transition-colors duration-200 ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Home
            </button>
            <button 
              onClick={() => navigateTo('services')} 
              className={`font-bold transition-colors duration-200 ${
                currentPage === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Services
            </button>
            <button 
              onClick={() => navigateTo('about')} 
              className={`font-bold transition-colors duration-200 ${
                currentPage === 'about' ? 'text-blue-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              About Us
            </button>
            <button 
              onClick={() => navigateTo('testimonials')} 
              className={`font-bold transition-colors duration-200 ${
                currentPage === 'testimonials' ? 'text-blue-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              Testimonials
            </button>
            <button 
              onClick={() => navigateTo('faq')} 
              className={`font-bold transition-colors duration-200 ${
                currentPage === 'faq' ? 'text-blue-600' : 'text-gray-700 hover:text-orange-500'
              }`}
            >
              FAQ
            </button>
            <button 
              onClick={() => navigateTo('contact')} 
              className="relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative px-8 py-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl font-bold text-white shadow-lg transform group-hover:scale-105 transition-all duration-200">
                Get Free Quote
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-4 py-6 space-y-3">
            <button onClick={() => navigateTo('home')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all duration-200">
              Home
            </button>
            <button onClick={() => navigateTo('services')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all duration-200">
              Services
            </button>
            <button onClick={() => navigateTo('about')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all duration-200">
              About Us
            </button>
            <button onClick={() => navigateTo('testimonials')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all duration-200">
              Testimonials
            </button>
            <button onClick={() => navigateTo('faq')} className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-bold transition-all duration-200">
              FAQ
            </button>
            <button onClick={() => navigateTo('contact')} className="block w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg font-bold text-white text-center shadow-lg">
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );

  // Footer Component
  const Footer = () => (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-blue-600 to-orange-500 p-3 rounded-xl">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black">Moving Ease</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              The most trusted moving services provider company in Ottawa and Gatineau. Professional moving services at a low cost!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => navigateTo('home')} className="text-gray-400 hover:text-orange-500 transition-colors">Home</button></li>
              <li><button onClick={() => navigateTo('services')} className="text-gray-400 hover:text-orange-500 transition-colors">Services</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-gray-400 hover:text-orange-500 transition-colors">About Us</button></li>
              <li><button onClick={() => navigateTo('testimonials')} className="text-gray-400 hover:text-orange-500 transition-colors">Testimonials</button></li>
              <li><button onClick={() => navigateTo('faq')} className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Residential Moving</li>
              <li>Commercial Moving</li>
              <li>Long Distance Moving</li>
              <li>Packing & Unpacking</li>
              <li>Storage Solutions</li>
              <li>Junk Removal</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <div className="text-white font-bold">(819) 661-3882</div>
                  <div className="text-sm text-gray-400">Available 24/7</div>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">mrhalf696@gmail.com</div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">Ottawa & Gatineau<br />Ontario, Canada</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 Moving Ease. All rights reserved (Ryan Notam & Junior Notam)
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );

  // Render appropriate page
  const renderPage = () => {
    switch(currentPage) {
      case 'home':
        return <HomePage navigateTo={navigateTo} />;
      case 'services':
        return <ServicesPage navigateTo={navigateTo} />;
      case 'about':
        return <AboutPage navigateTo={navigateTo} />;
      case 'testimonials':
        return <TestimonialsPage navigateTo={navigateTo} />;
      case 'faq':
        return <FAQPage navigateTo={navigateTo} />;
      case 'contact':
        return <ContactPage navigateTo={navigateTo} />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="pt-24">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
};

// HOME PAGE
const HomePage = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Hero Content */}
            <div className="text-white space-y-8">
              <div className="inline-flex items-center space-x-2 px-5 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
                <Star className="w-5 h-5 text-yellow-300 fill-yellow-300" />
                <span className="text-sm font-bold">Rated 5-Stars by 1000+ Customers</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="block">Stress-Free</span>
                <span className="block text-yellow-300">Moving Services</span>
                <span className="block text-3xl md:text-5xl mt-4 font-bold">in Ottawa & Gatineau</span>
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-white/90">
                Wanting to move but don't want to deal with the stress and tension moving comes with? We are here to help! 
                At Moving Ease our main goal is to provide professional moving services at a low cost!
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigateTo('contact')}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center space-x-2 px-10 py-5 bg-yellow-400 hover:bg-yellow-300 rounded-2xl font-black text-xl text-gray-900 shadow-2xl transform group-hover:scale-105 transition-all duration-200">
                    <span>Get Free Quote</span>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
                
                <button 
                  onClick={() => navigateTo('services')}
                  className="px-10 py-5 border-3 border-white/40 hover:border-white rounded-2xl font-black text-xl text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                >
                  View Services
                </button>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-5xl font-black text-yellow-300">
                    <AnimatedCounter end={15} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/80 mt-2">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-yellow-300">
                    <AnimatedCounter end={10000} suffix="+" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/80 mt-2">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-black text-yellow-300">
                    <AnimatedCounter end={99} suffix="%" />
                  </div>
                  <div className="text-sm md:text-base font-semibold text-white/80 mt-2">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?w=800&h=900&fit=crop" 
                  alt="Professional movers loading truck" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Moving Ease?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With years of experience, our team understands the challenges of moving and is committed to making the process as seamless as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Skilled Movers",
                description: "Our team of skilled movers is highly trained and experienced, ensuring that your belongings are in capable hands."
              },
              {
                icon: Shield,
                title: "Safety Priority",
                description: "We prioritize the safety of your possessions. From proper packing techniques to secure transportation, we go above and beyond to protect your valuables."
              },
              {
                icon: Award,
                title: "Professional Service",
                description: "Whether it's residential, commercial, or specialized moving services, we've got you covered with professionalism and care."
              },
              {
                icon: Clock,
                title: "On-Time Delivery",
                description: "We respect your schedule and ensure timely pickups and deliveries, making your move stress-free and efficient."
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moving can be overwhelming and time-consuming, but with our team of experienced professionals, we guarantee a smooth transition from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Home,
                title: "Local & Residential Moving",
                description: "From apartments and houses to offices and retail spaces, we handle moves of all sizes with precision and care."
              },
              {
                icon: MapPin,
                title: "Long Distance Moving",
                description: "Whether it's a neighboring province or across the country. With our expertise and resources, embark on this significant move with peace of mind."
              },
              {
                icon: Archive,
                title: "Storage Solutions",
                description: "If you require temporary or long-term storage, we offer secure and climate-controlled storage solutions to keep your possessions safe."
              },
              {
                icon: Package,
                title: "Packing Services",
                description: "Our expert packers use high-quality materials to ensure the safety of your belongings. We also offer packing supplies for DIY movers."
              },
              {
                icon: Briefcase,
                title: "Heavy Lifting",
                description: "Need help with heavy lifting? Our skilled team is ready for efficient assistance, making moving day a breeze."
              },
              {
                icon: Trash2,
                title: "Junk Removal",
                description: "Need to declutter before your move? We provide hassle-free junk removal to dispose of unwanted items responsibly."
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-100 to-orange-100 mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-orange-500 transition-all duration-300">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigateTo('services')}
              className="group relative inline-flex items-center space-x-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl font-black text-lg text-white shadow-xl transform group-hover:scale-105 transition-all duration-200">
                <span>View All Services</span>
                <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Simple <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">3-Step Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Moving Ease, we believe in simplifying your move and ensuring a stress-free experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {[
              {
                number: "01",
                title: "Get an Estimate",
                description: "Getting started is as easy as reaching out to us for an estimate. Simply provide us with some basic information about your move, and our team will promptly provide you with a comprehensive estimate that outlines the cost of your move. Our transparent pricing means no surprises, allowing you to plan your budget with confidence."
              },
              {
                number: "02",
                title: "Schedule Your Date",
                description: "Once you have your estimate in hand, it's time to choose a moving date that suits your schedule. We understand that your time is valuable, so we work closely with you to find a convenient moving day. Our flexibility ensures that your move happens at a time that works best for you."
              },
              {
                number: "03",
                title: "We Handle Everything",
                description: "On the day of your move, our dedicated team arrives on time and ready to work. We take care of every detail, from packing and loading to transportation and unloading. Our experts handle your belongings with care, ensuring that they arrive at your new destination in the same condition they left."
              }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-orange-500 text-3xl font-black text-white mb-6 shadow-lg">
                    {step.number}
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Make Your Move?
          </h2>
          <p className="text-2xl mb-10 text-white/90">
            Don't let the fear of moving keep you from starting afresh in your dream home. Take action today by contacting us for a free quote.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center space-x-2 px-12 py-6 bg-yellow-400 hover:bg-yellow-300 rounded-2xl font-black text-2xl text-gray-900 shadow-2xl transform group-hover:scale-105 transition-all duration-200">
              <span>Get Your Free Quote Today</span>
              <ArrowRight className="w-7 h-7 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

// SERVICES PAGE
const ServicesPage = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Comprehensive moving solutions tailored to your needs. Whether you're moving across town or across the country, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* Service 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <Home className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Local & Residential Moving
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  From apartments and houses to offices and retail spaces, we handle moves of all sizes with precision and care. Our experienced team knows Ottawa and Gatineau like the back of their hand.
                </p>
                <ul className="space-y-4">
                  {[
                    "Apartment and house relocations",
                    "Furniture disassembly and reassembly",
                    "Professional packing services",
                    "Same-day moves available",
                    "Full insurance coverage"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=700&fit=crop" 
                  alt="Residential moving" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=700&h=700&fit=crop" 
                  alt="Long distance moving" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Long Distance Moving
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Whether it's a neighboring province or across the country, with our expertise and resources, embark on this significant move with peace of mind.
                </p>
                <ul className="space-y-4">
                  {[
                    "Nationwide moving services",
                    "GPS tracking for your belongings",
                    "Dedicated moving coordinator",
                    "Climate-controlled transportation",
                    "Flexible delivery schedules"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <Building2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Commercial Moving
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Minimize downtime with our efficient office and retail space relocation services. We understand business moves require precision and speed.
                </p>
                <ul className="space-y-4">
                  {[
                    "Office relocations of any size",
                    "After-hours and weekend moves",
                    "IT equipment handling",
                    "Minimal business disruption",
                    "Professional project management"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&h=700&fit=crop" 
                  alt="Commercial moving" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=700&fit=crop" 
                  alt="Storage solutions" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <Archive className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Storage Solutions
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  If you require temporary or long-term storage, we offer secure and climate-controlled storage solutions to keep your possessions safe.
                </p>
                <ul className="space-y-4">
                  {[
                    "Climate-controlled facilities",
                    "24/7 security monitoring",
                    "Short and long-term options",
                    "Easy access to your items",
                    "Flexible contracts"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Packing Services
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Our expert packers use high-quality materials to ensure the safety of your belongings. We also offer packing supplies for DIY movers.
                </p>
                <ul className="space-y-4">
                  {[
                    "Professional packing team",
                    "High-quality packing materials",
                    "Fragile item specialists",
                    "Unpacking services available",
                    "Packing supplies for sale"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=700&fit=crop" 
                  alt="Packing services" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>

            {/* Service 6 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=700&fit=crop" 
                  alt="Junk removal" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />
              </div>
              <div>
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg">
                  <Trash2 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
                  Junk Removal
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                  Need to declutter before your move? We provide hassle-free junk removal to dispose of unwanted items responsibly.
                </p>
                <ul className="space-y-4">
                  {[
                    "Responsible disposal practices",
                    "Eco-friendly recycling",
                    "Same-day service available",
                    "No item too big or small",
                    "Donation coordination"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-lg text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-2xl mb-10 text-white/90">
            Every move is unique. Contact us to discuss your specific needs and get a personalized quote.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative px-12 py-6 bg-yellow-400 hover:bg-yellow-300 rounded-2xl font-black text-2xl text-gray-900 shadow-2xl transform group-hover:scale-105 transition-all duration-200">
              Contact Us Today
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

// ABOUT PAGE
const AboutPage = ({ navigateTo }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-black mb-6">
                About <span className="text-yellow-300">Us</span>
              </h1>
              <p className="text-2xl text-white/90 leading-relaxed">
                Moving Ease is the most trusted moving services provider company in Ottawa and Gatineau. 
                With years of experience, our team understands the challenges of moving and is committed to making the process as seamless as possible.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?w=700&h=700&fit=crop" 
                alt="Our team" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=700&h=600&fit=crop" 
                alt="Our mission" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-5xl font-black text-gray-900">
                Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Moving Ease our main goal is to provide professional moving services at a low cost! We believe that quality moving services shouldn't break the bank.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Say goodbye to the overwhelming burden of packing, lifting heavy furniture, and transporting your belongings. Our highly trained team of movers is here to handle every aspect of your move with utmost care and efficiency.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                With years of experience under our belt, we have perfected the art of seamless relocations. Trust us to handle all the logistics while you focus on settling into your new space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do at Moving Ease
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Safety First",
                description: "We prioritize the safety of your possessions. From proper packing techniques to secure transportation, we go above and beyond to protect your valuables."
              },
              {
                icon: Heart,
                title: "Customer Care",
                description: "Our friendly representatives are ready to answer all your questions and guide you through the entire process. We treat your belongings as if they were our own."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We provide top-notch packing materials and techniques to ensure that everything arrives at its destination in pristine condition."
              }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="group p-10 rounded-2xl bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              By the <span className="text-yellow-300">Numbers</span>
            </h2>
            <p className="text-2xl text-white/90">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { end: 15, suffix: '+', label: 'Years of Experience' },
              { end: 10000, suffix: '+', label: 'Happy Customers' },
              { end: 50, suffix: '+', label: 'Professional Movers' },
              { end: 99, suffix: '%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="text-6xl font-black text-yellow-300 mb-4">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-bold text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team of skilled movers is highly trained and experienced, ensuring that your belongings are in capable hands.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Charles', role: 'Lead Mover', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop' },
              { name: 'Jordan', role: 'Senior Mover', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop' },
              { name: 'Noah', role: 'Moving Specialist', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop' },
              { name: 'Antoine', role: 'Logistics Expert', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' }
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-black">{member.name}</h3>
                    <p className="text-sm text-gray-200">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
            Join Thousands of <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Satisfied Customers</span>
          </h2>
          <p className="text-2xl text-gray-600 mb-10">
            Experience the difference that professional, caring service makes. Get your free quote today!
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative px-12 py-6 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl font-black text-2xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-200">
              Get Started Now
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

// TESTIMONIALS PAGE
const TestimonialsPage = ({ navigateTo }) => {
  const testimonials = [
    {
      name: "Ryan Bellefeuille",
      text: "I recently moved with Moving Ease Ottawa, and I couldn't be more impressed! Their team was punctual, professional, and treated my belongings with the utmost care. From the initial consultation to the final delivery, the entire process was seamless and stress-free. The movers were efficient yet careful, ensuring everything was securely packed and safely transported. I appreciated their transparent pricing-no hidden fees or surprises. They went above and beyond to make my move as smooth as possible. I highly recommend Moving Ease Ottawa to anyone looking for reliable and high-quality moving services!",
      rating: 5
    },
    {
      name: "David Daud",
      text: "5-star experience with Moving Ease! A huge move from a 5-bedroom house in Ottawa to a 4-story townhouse in London. Charles, Kemo, Arnold, and Antione worked for 13 hours almost constantly. Amazing crew; absolutely no issues. Real professionals are client-oriented, humble, respectful, and have strong ethics. Thank you! I'm really happy with this move, and I would recommend them to anyone.",
      rating: 5
    },
    {
      name: "Karen Hunter",
      text: "Dear Jordan, Mohamed, Arnaud, Gadir and Noah, I cannot begin to express my gratitude to all of you for my recent move from Brockville to Echo Bay, Ontario. I have moved locations many times in my life, and without a doubt, this was, by far, the most incredible service I have ever received. You were all so very experienced in all aspects of this move, from the impeccable job of wrapping the furniture to the cautious way you manouvered my belongings down 3 flights of stairs. Upon delivery there was nothing broken or misplaced, amazing!! As for the drive that should have been 6 hours, there were 2 serious accidents along highway 17 forcing the highway to be closed twice, and yet the boys showed up with smiles on their faces and ready to start unloading without having stopped to even eat in 12 1/2 hours!! Five stars is definitely not enough, in my opinion for this company. I urge anyone who is about to consider a move, to look no further than Best Movers.",
      rating: 5
    },
    {
      name: "Lyssa Biadora",
      text: "Loved their service! It's the second time we use this company. Alhaj and Noah were great. They were fast, made sure to be careful with our belongings and helped us with whatever we needed. Moving can be stressful, but not with these guys!",
      rating: 5
    },
    {
      name: "Mittal Patel",
      text: "We had the pleasure of working with Antoine, Noah, Kemo, and Omer for a big move involving furniture for our motel, and I can't say enough good things about them! From start to finish, they were incredibly professional, efficient, and went above and beyond to make sure everything went smoothly. The team handled a very large and heavy load with ease, ensuring that all items were safely transported and placed exactly where we needed them. Their attention to detail and dedication to the job was evident in every step of the process. Not only were they prompt and hardworking, but they were also friendly and courteous, making the entire experience stress-free. We are so grateful for their excellent service and would highly recommend them to anyone needing movers. Thank you, Antoine, Noah, Kemo, and Omer - you guys truly made a big difference for our business!",
      rating: 5
    },
    {
      name: "Dan Miller",
      text: "They did an amazing job! They moved quickly, handled everything with care, and were very friendly. Saved us from a lot of stress and aggravation. Would recommend to everyone!",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Customer <span className="text-yellow-300">Testimonials</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers who have experienced our exceptional moving services.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-blue-600/20 mb-4" />

                {/* Stars */}
                <div className="flex space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="font-black text-xl text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">Verified Customer</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Why Customers <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Trust Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Star, value: '5.0', label: 'Average Rating' },
              { icon: Users, value: '1000+', label: 'Reviews' },
              { icon: Award, value: '100%', label: 'Verified' },
              { icon: Heart, value: '99%', label: 'Would Recommend' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-bold text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Ready to Experience <span className="text-yellow-300">5-Star Service?</span>
          </h2>
          <p className="text-2xl mb-10 text-white/90">
            Join thousands of satisfied customers who chose Moving Ease for their relocation needs.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative px-12 py-6 bg-yellow-400 hover:bg-yellow-300 rounded-2xl font-black text-2xl text-gray-900 shadow-2xl transform group-hover:scale-105 transition-all duration-200">
              Get Your Free Quote
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

// FAQ PAGE
const FAQPage = ({ navigateTo }) => {
  const faqs = [
    {
      question: "What services do you provide?",
      answer: "We provide a range of services including packing, loading, transportation, unloading, and unpacking. We offer both local and long-distance moves, residential and commercial moving services, storage solutions, and junk removal."
    },
    {
      question: "How can I request a quote?",
      answer: "You can request a quote through our website contact page by providing details about your move such as the starting and ending locations, the size of your property, and any specific services you require. Alternatively, you can call us at (819) 661-3882 for a personalized quote."
    },
    {
      question: "Are your movers experienced?",
      answer: "Yes, our movers are highly experienced and undergo thorough training to ensure the safe handling of your belongings. They are skilled in packing, loading, and transporting items of all sizes."
    },
    {
      question: "Do you offer packing and unpacking services?",
      answer: "Absolutely! We offer both packing and unpacking services to make your move as convenient as possible. Our team can carefully pack your belongings, label boxes, and unpack them at your new location."
    },
    {
      question: "How far in advance should I schedule my move?",
      answer: "It's recommended to schedule your move as soon as you have a confirmed moving date. This helps us ensure availability and ample time for preparation. However, we do our best to accommodate last-minute requests whenever possible."
    },
    {
      question: "Can you handle valuable and fragile items?",
      answer: "Certainly. We have experience moving valuable and fragile items such as artwork, antiques, electronics, and more. We take extra precautions to ensure these items are properly protected during the move."
    },
    {
      question: "How long does a typical move take?",
      answer: "The time required for a move depends on various factors such as the distance, the size of your inventory, and any additional services you've requested. We can provide you with an estimated timeline based on your specific circumstances."
    },
    {
      question: "What if there are delays or changes in the moving schedule?",
      answer: "We understand that plans can change. If there are delays or changes in the moving schedule, please inform us as soon as possible. We will do our best to accommodate the new schedule while minimizing any inconvenience."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured. Your belongings are protected throughout the entire moving process, giving you complete peace of mind."
    },
    {
      question: "Do you provide storage solutions?",
      answer: "Yes, we offer secure and climate-controlled storage solutions for both short-term and long-term needs. Our facilities are monitored 24/7 to ensure the safety of your belongings."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Frequently Asked <span className="text-yellow-300">Questions</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Everything you need to know about our moving services. Can't find the answer you're looking for? Feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-500 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 bg-gradient-to-br from-gray-50 to-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-orange-50 transition-colors duration-300"
                >
                  <span className="text-xl font-black text-gray-900 text-left pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 pt-0 text-lg text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900">
              Moving <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Tips</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional advice to make your move even smoother
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Book a Legitimate Business",
                description: "When browsing around for movers, its best to make sure that you are booking with a legitimate business and not just two men and their truck off Kijiji. This will give you assurance that your movers will show up on your move date with all the equipment they need and the right size truck."
              },
              {
                title: "Start Packing Early",
                description: "Begin packing non-essential items weeks before your move. Label all boxes clearly with their contents and destination room to make unpacking easier."
              },
              {
                title: "Declutter Before Moving",
                description: "Moving is the perfect opportunity to get rid of items you no longer need. Donate, sell, or dispose of unwanted items before your move to reduce costs and effort."
              },
              {
                title: "Take Photos of Electronics",
                description: "Before disconnecting electronics, take photos of how cables are connected. This will make reassembly at your new location much easier."
              }
            ].map((tip, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border-2 border-gray-200 hover:border-orange-500 hover:shadow-xl transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-gray-900">{tip.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Still Have Questions?
          </h2>
          <p className="text-2xl mb-10 text-white/90">
            Our friendly team is here to help! Contact us today and we'll be happy to answer any questions you have.
          </p>
          <button 
            onClick={() => navigateTo('contact')}
            className="group relative"
          >
            <div className="absolute inset-0 bg-yellow-400 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative px-12 py-6 bg-yellow-400 hover:bg-yellow-300 rounded-2xl font-black text-2xl text-gray-900 shadow-2xl transform group-hover:scale-105 transition-all duration-200">
              Contact Us Now
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

// CONTACT PAGE
const ContactPage = ({ navigateTo }) => {
 const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    sendEmail(formRef)
      .then(() => {
        alert("Message envoyé avec succès !");
        formRef.current.reset();
      })
      .catch(() => {
        alert("Erreur lors de l’envoi");
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Get in <span className="text-yellow-300">Touch</span>
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto">
            Ready to start your move? Contact us today for a free, no-obligation quote. Our friendly team is available 24/7 to assist you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-black mb-4 text-gray-900">
                  Contact <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Information</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Our friendly representatives are ready to answer all your questions and guide you through the entire process.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center shadow-lg">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-gray-900 mb-1 text-lg">Phone</div>
                    <div className="text-2xl font-bold text-blue-600 mb-1">(819) 661-3882</div>
                    <div className="text-sm text-gray-600">Available 24/7 for your convenience</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center shadow-lg">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-gray-900 mb-1 text-lg">Email</div>
                    <div className="text-lg font-bold text-blue-600 mb-1 break-words">mrhalf696@gmail.com</div>
                    <div className="text-sm text-gray-600">Response within 2 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center shadow-lg">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-gray-900 mb-1 text-lg">Service Area</div>
                    <div className="text-lg font-bold text-blue-600 mb-1">Ottawa & Gatineau</div>
                    <div className="text-sm text-gray-600">Ontario & Quebec, Canada</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-orange-50 border-2 border-blue-200">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-black text-gray-900 mb-1 text-lg">Business Hours</div>
                    <div className="text-lg font-bold text-blue-600 mb-1">24/7 Availability</div>
                    <div className="text-sm text-gray-600">We're always here when you need us</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - 3 columns */}
           

            <div className="lg:col-span-3">
              <form className="p-10 rounded-3xl bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 shadow-xl"
              ref={formRef}
              onSubmit={handleSubmit}>
                <h3 className="text-3xl font-black mb-8 text-gray-900">Request Your Free Quote</h3>
                
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name = "fullname"
                        className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name = "phone"
                        className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name = "emailaddress"
                      className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Move From *</label>
                      <input
                        type="text"
                        name = "movefrom"
                        className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                        placeholder="Current Address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Move To *</label>
                      <input
                        type="text"
                        name = "moveto"
                        className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200"
                        placeholder="Destination Address"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Move Date *</label>
                      <input
                        type="date"
                        name = "movedate"
                        className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-black text-gray-700 mb-2">Service Type *</label>
                      <select name="serviceType" required className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 transition-all duration-200">
                        <option value="">Select a service</option>
                        <option value="Residential Move">Residential Move</option>
                        <option value="Commercial Move">Commercial Move</option>
                        <option value="Long Distance Move">Long Distance Move</option>
                        <option value="Packing Services">Packing Services</option>
                        <option value="Storage Solutions">Storage Solutions</option>
                        <option value="Junk Removal">Junk Removal</option>
                      </select>
                    </div>
                    
                  </div>

                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2" name ="message">Additional Details</label>
                    <textarea
                      rows="6"
                      className="w-full px-4 py-4 rounded-xl bg-white border-2 border-gray-300 focus:border-blue-600 focus:outline-none text-gray-900 placeholder-gray-400 transition-all duration-200 resize-none"
                      placeholder="Tell us about your moving needs: number of bedrooms, special items, stairs, etc."
                    ></textarea>
                  </div>

                  <button className="w-full group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl blur opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center justify-center space-x-2 px-8 py-5 bg-gradient-to-r from-blue-600 to-orange-500 rounded-2xl font-black text-xl text-white shadow-2xl transform group-hover:scale-105 transition-all duration-200">
                      <span>Get Your Free Quote</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </button>

                  <p className="text-sm text-gray-600 text-center">
                    * Required fields. We respect your privacy and will never share your information.
                  </p>
                </div>

              </form>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4 text-gray-900">
              Our <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Service Area</span>
            </h2>
            <p className="text-xl text-gray-600">
              Proudly serving Ottawa, Gatineau, and surrounding areas
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px]">
            <iframe
              title="Ottawa Gatineau Map"
              src="https://www.google.com/maps?q=Ottawa%20Gatineau&t=&z=11&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
    </>
  );
};

// Main App
const MoversWebsite = () => {
  return (
    <div className="font-sans antialiased">
      <Router />
      
      {/* Global Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Montserrat', sans-serif;
          scrollbar-width: thin;
          scrollbar-color: #2563eb #e5e7eb;
        }

        *::-webkit-scrollbar {
          width: 10px;
        }

        *::-webkit-scrollbar-track {
          background: #e5e7eb;
        }

        *::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #2563eb 0%, #f97316 100%);
          border-radius: 5px;
        }

        *::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #1d4ed8 0%, #ea580c 100%);
        }

        details summary::-webkit-details-marker {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default MoversWebsite;