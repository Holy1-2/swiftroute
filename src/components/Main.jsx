import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// FAQ data
const faqs = [
  {
    question: "What is Swift Route and how does it work?",
    answer:
      "Swift Route is a courier tracking app that allows real-time tracking of packages using QR codes. It ensures secure and efficient delivery by keeping customers informed about the location of their packages.",
  },
  {
    question: "How do QR codes help in tracking packages?",
    answer:
      "Each package is assigned a unique QR code that stores delivery details. Couriers scan the QR code at different points in the delivery process, updating the package's location in real-time.",
  },
  {
    question: "Can customers track their packages independently?",
    answer:
      "Yes, customers can scan the package's QR code or use a tracking ID in the app to view the real-time location and estimated delivery time of their packages.",
  },
  {
    question: "Is Swift Route suitable for businesses?",
    answer:
      "Absolutely! Swift Route is designed to support businesses of all sizes. It provides a centralized system for managing deliveries, tracking couriers, and ensuring transparency with customers.",
  },
  {
    question: "How secure is Swift Route for tracking packages?",
    answer:
      "Swift Route prioritizes security. All data, including QR code scans and package locations, is encrypted to protect both customers and businesses.",
  },
];

const companies = [
  { name: "FedEx", logo: "/vr.png", description: "Global logistics leader" },
  { name: "DHL", logo: "/vr.png", description: "International shipping experts" },
  { name: "UPS", logo: "/ki.png", description: "Supply chain solutions" },
  { name: "Amazon", logo: "/vuba.png", description: "E-commerce giant" },
  { name: "eBay", logo: "/kigalismart.png", description: "Online marketplace" },
  { name: "Shopify", logo: "/roo.png", description: "Retail platform" },
  { name: "Walmart", logo: "/vr.png", description: "Retail corporation" },
  { name: "Maersk", logo: "/vr.png", description: "Shipping conglomerate" },
];
const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    features: ["10 Projects", "5 GB Storage", "Email Support"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["50 Projects", "50 GB Storage", "Priority Email Support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Projects", "200 GB Storage", "24/7 Support"],
  },
];
const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-900 text-white font-inter">
      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
          <svg
  className="w-10 h-10 text-teal-500 hover:text-teal-600 transition-colors cursor-pointer"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="1.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  {/* Cube front face */}
  <path d="M5 8L12 4L19 8V16L12 20L5 16V8Z" />
  
  {/* Top flap shading */}
  <path 
    d="M12 4L19 8L12 12L5 8L12 4Z" 
    className="opacity-60"
  />
  
  {/* Vertical depth line */}
  <path d="M12 12V20" />
  
  {/* Diagonal fold line */}
  <path 
    d="M12 12L19 8" 
    className="opacity-40"
  />
  
  {/* Animated highlight effect */}
  <path
    d="M12 4L5 8L12 12M12 4L19 8L12 12"
    className="opacity-30 animate-pulse"
  />
</svg>            <span className="text-xl font-bold">SwiftRoute</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="hover:text-teal-400 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-teal-400 transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-teal-400 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-teal-400 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="flex items-center hover:text-teal-400">
              <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
                <i className="fas fa-user text-teal-400 text-xl"></i>
              </div>
            </Link>
            <button className="bg-teal-600 hover:bg-teal-500 px-6 py-2 rounded-lg">
              Get App
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 space-y-8">
            <h1 className="text-5xl font-bold leading-tight">
              Delivering trust{" "}
              <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Every Mile
              </span>
            </h1>
            <p className="text-xl text-gray-400">
              Track your package for free and revolutionize your shipping experience.
            </p>
            <div className="flex space-x-4">
              <button className="bg-teal-600 hover:bg-teal-500 px-8 py-4 rounded-lg text-lg flex items-center">
                <i className="fab fa-apple mr-2"></i>Download
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400/10 px-8 py-4 rounded-lg text-lg flex items-center">
                <i className="fab fa-google-play mr-2"></i>Get App
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 animate-float">
            <i className="fas fa-route text-[300px] text-teal-400/20"></i>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
            <i className="fas fa-dashboard text-4xl text-teal-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Driver Real Time Dashboard</h3>
            <p className="text-gray-400">
              Drivers can view packages assigned to their vehicle, scan QR codes, and update delivery statuses in real time, streamlining on-the-go operations.
            </p>
          </div>
          <div className="p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
            <i className="fas fa-box text-4xl text-teal-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Real-Time Packages Tracking</h3>
            <p className="text-gray-400">
              Monitor your packages on an interactive map with live location updates, ensuring a seamless and efficient delivery experience.
            </p>
          </div>
          <div className="p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors">
            <i className="fas fa-tachometer text-4xl text-teal-400 mb-4"></i>
            <h3 className="text-xl font-bold mb-2">Admin & Company Dashboard</h3>
            <p className="text-gray-400">
              Manage your entire operation from a centralized dashboard—add packages to the system, track driver locations, generate reports, and more.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gray-800 p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-teal-400/10 text-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <i className="font-bold">1</i>
                </div>
                <h3 className="text-xl font-bold mb-4">Real-Time Package Registration</h3>
                <p className="text-gray-400">
                  Users register their package on SwiftRoute, automatically generating a unique QR code. This code acts as a digital fingerprint for the package, enabling seamless real-time tracking.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gray-800 p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-teal-400/10 text-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <i className="font-bold">2</i>
                </div>
                <h3 className="text-xl font-bold mb-4">Driver In-Car Update</h3>
                <p className="text-gray-400">
                  Drivers use their dedicated dashboard to scan the QR code during pickup and delivery. This instant scan updates the package’s status and location in real time, ensuring all parties are kept informed.
                </p>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
              <div className="relative bg-gray-800 p-8 rounded-xl h-full">
                <div className="w-12 h-12 bg-teal-400/10 text-teal-400 rounded-lg flex items-center justify-center mb-4">
                  <i className="font-bold">3</i>
                </div>
                <h3 className="text-xl font-bold mb-4">Centralized Administration</h3>
                <p className="text-gray-400">
                  The SwiftRoute admin dashboard provides companies with full control over their operations. Administrators can manage packages, track driver locations, generate detailed reports, and optimize logistics from a single, intuitive interface.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-6 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Logistics?</h2>
          <p className="text-xl text-gray-400 mb-8">Join 500+ companies already optimizing their delivery operations</p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Link to="/PackageStatusCard" className="bg-teal-600 hover:bg-teal-500 px-8 py-4 rounded-lg text-lg">
            Free  Trial
            </Link>
            <Link to="/onboarding" className="border border-teal-400 text-teal-400 hover:bg-teal-400/10 px-8 py-4 rounded-lg text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-4 bg-white bg-clip-text text-transparent"
        >
          Subscription Plans
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mb-12"
        >
          Choose a plan that suits your business needs.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`p-8 rounded-xl bg-gray-800 shadow-lg relative ${
                plan.popular ? "border-4 border-teal-400" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-teal-400 text-gray-900 px-3 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center">
                    <i className="fas fa-check text-teal-400 mr-2"></i>
                    <span className="text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/onboarding" className="w-full bg-teal-600 hover:bg-teal-500 px-6 py-3 rounded-lg text-lg font-semibold">
                Choose Plan
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
      {/* Trusted Partners Section */}
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-white  bg-clip-text text-transparent">
              Trusted Partners
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Collaborating with industry leaders to deliver exceptional logistics solutions worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-all cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16">
                    <img
                      src={company.logo}
                      alt={`${company.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{company.name}</h3>
                  <p className="text-sm text-gray-400">{company.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-gray-400 text-sm"
          >
            And 50+ other global partners
          </motion.div>
        </div>
      </section>
      <section className="py-20 bg-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-4 text-white">Campaigns & Programs</h2>
    <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
      Our initiatives designed to build trust and efficiency in Rwanda's logistics ecosystem. 
      Explore our current programs driving transparency and accessibility nationwide.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Trust Building Initiative */}
      <div className="relative group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
        <i className="fas fa-handshake text-4xl text-teal-400 mb-4"></i>
        <h3 className="text-xl font-bold mb-2 text-gray-100">Trust Building Initiative</h3>
        <p className="text-gray-400 mb-4">
          Community workshops and partner training programs to enhance delivery transparency nationwide.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-teal-400">
            <i className="fas fa-map-marker-alt mr-2"></i>
            <span>Active in 5 districts</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <i className="fas fa-clock mr-2"></i>
            <span>2023–2025 Program</span>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          Learn More
        </a>
      </div>

      {/* Rural Access Expansion */}
      <div className="relative group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
        <i className="fas fa-truck text-4xl text-teal-400 mb-4"></i>
        <h3 className="text-xl font-bold mb-2 text-gray-100">Rural Access Expansion</h3>
        <p className="text-gray-400 mb-4">
          Special logistics solutions for hard-to-reach areas with community pickup points.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-teal-400">
            <i className="fas fa-users mr-2"></i>
            <span>150+ Community Hubs</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <i className="fas fa-percentage mr-2"></i>
            <span>85% Coverage Achieved</span>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          Learn More
        </a>
      </div>

      {/* SME Growth Program */}
      <div className="relative group p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
        <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl opacity-20 group-hover:opacity-30 transition"></div>
        <i className="fas fa-store text-4xl text-teal-400 mb-4"></i>
        <h3 className="text-xl font-bold mb-2 text-gray-100">SME Growth Program</h3>
        <p className="text-gray-400 mb-4">
          Subsidized logistics solutions for small businesses with training and support.
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-teal-400">
            <i className="fas fa-chart-line mr-2"></i>
            <span>500+ Businesses Enrolled</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <i className="fas fa-hand-holding-usd mr-2"></i>
            <span>40% Cost Reduction</span>
          </div>
        </div>
        <a href="#" className="mt-4 inline-block bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition-colors cursor-pointer">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>


      {/* FAQ Section */}
      <section id="faq" className="bg-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-gray-700 pb-4">
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center py-4 hover:text-teal-400"
                >
                  <span className="text-lg text-left">{item.question}</span>
                  <i
                    className={`fas fa-chevron-down transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  ></i>
                </button>
                {openIndex === index && (
                  <div className="overflow-hidden transition-all duration-300">
                    <p className="text-gray-400 pb-4">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">SwiftRoute</h3>
            <p className="text-gray-400">© 2025 All rights reserved</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-phone text-teal-400 mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li>
                <i className="fas fa-envelope text-teal-400 mr-2"></i>
                support@swiftroute.com
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-400 font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="hover:text-teal-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
