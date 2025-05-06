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
      <section id="features" className="py-28 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          Powerful Features
        </span> for Seamless Logistics
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-xl text-gray-400 max-w-3xl mx-auto"
      >
        Advanced tools designed to optimize your entire delivery ecosystem
      </motion.p>
    </div>

    <div className="space-y-24">
      {/* Feature 1 - Driver Dashboard */}
      <motion.div 
        className="grid lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-3xl -z-10"/>
          <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <img 
              src="/DD.PNG" 
              alt="Driver Dashboard Interface" 
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-teal-400/10 rounded-xl flex items-center justify-center mr-6">
              <i className="fas fa-tachometer-alt text-2xl text-teal-400"/>
            </div>
            <h3 className="text-3xl font-bold">Real-Time Driver Dashboard</h3>
          </div>
          <p className="text-gray-400 text-lg mb-8">
            Empower your drivers with an intuitive interface that displays assigned packages, optimized routes, 
            and scanning capabilities - all updated in real-time for maximum efficiency.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">QR code scanning for instant package updates</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Turn-by-turn navigation integrated with traffic data</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Offline functionality for areas with poor connectivity</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Feature 2 - Package Tracking */}
      <motion.div 
        className="grid lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="lg:order-last">
          <div className="relative">
            <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-3xl -z-10"/>
            <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              <img 
                src="/map.PNG" 
                alt="Live Package Tracking Map" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="lg:order-first">
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-teal-400/10 rounded-xl flex items-center justify-center mr-6">
              <i className="fas fa-map-marked-alt text-2xl text-teal-400"/>
            </div>
            <h3 className="text-3xl font-bold">Advanced Package Tracking</h3>
          </div>
          <p className="text-gray-400 text-lg mb-8">
            Gain complete visibility into your shipments with our predictive tracking system that provides 
            real-time location data and accurate ETAs using AI-powered algorithms.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Interactive map view with live vehicle locations</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Automated customer notifications at key milestones</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Historical data analysis for performance insights</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Feature 3 - Admin Console */}
      <motion.div 
        className="grid lg:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-3xl -z-10"/>
          <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <img 
              src="/adm.PNG" 
              alt="Admin Management Console" 
              className="w-full h-auto"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <div className="w-14 h-14 bg-teal-400/10 rounded-xl flex items-center justify-center mr-6">
              <i className="fas fa-chart-line text-2xl text-teal-400"/>
            </div>
            <h3 className="text-3xl font-bold">Comprehensive Admin Console</h3>
          </div>
          <p className="text-gray-400 text-lg mb-8">
            Take full control of your logistics operations with our centralized management platform that 
            provides actionable insights and complete fleet visibility.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Real-time driver and package monitoring</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">Customizable reports and performance dashboards</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-teal-400 mt-1 mr-4"/>
              <span className="text-gray-300">API integrations with existing business systems</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
</section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 bg-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Streamlined <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Workflow</span>
      </motion.h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Our three-step process ensures seamless package tracking from sender to recipient
      </p>
    </div>

    <div className="relative">
      {/* Timeline line */}
      <div className="hidden lg:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-400 -ml-px"></div>
      
      {/* Step 1 */}
      <div className="relative lg:grid lg:grid-cols-2 gap-12 mb-24">
        <motion.div 
          className="lg:pr-20 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="lg:hidden w-14 h-14 bg-teal-400/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-teal-400">1</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Smart Package Registration</h3>
          <p className="text-gray-400 mb-6">
            Each package is registered with our system and assigned a unique encrypted QR code that serves as its digital fingerprint throughout the journey.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <i className="fas fa-qrcode text-teal-400 mr-3"/>
              Unique package identifier
            </li>
            <li className="flex items-center">
              <i className="fas fa-database text-teal-400 mr-3"/>
              Encrypted tracking data
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="lg:pl-20 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="hidden lg:flex absolute -left-12 w-24 h-24 bg-teal-400/10 rounded-full items-center justify-center border-4 border-gray-900">
            <span className="text-3xl font-bold text-teal-400">1</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
            <img 
              src="/pkg.jpg" 
              alt="Package Registration" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Step 2 */}
      <div className="relative lg:grid lg:grid-cols-2 gap-12 mb-24">
        <motion.div 
          className="lg:pl-20 order-last lg:order-first relative"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="hidden lg:flex absolute -right-12 w-24 h-24 bg-blue-400/10 rounded-full items-center justify-center border-4 border-gray-900">
            <span className="text-3xl font-bold text-blue-400">2</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
            <img 
              src="/scan.jpg" 
              alt="Driver Scanning" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
        <motion.div 
          className="lg:pr-20 mb-10 lg:mb-0 order-first lg:order-last"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="lg:hidden w-14 h-14 bg-blue-400/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-blue-400">2</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Real-Time Driver Updates</h3>
          <p className="text-gray-400 mb-6">
            Drivers scan packages at each checkpoint using our mobile app, updating the package's status and location in real-time.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <i className="fas fa-mobile-alt text-blue-400 mr-3"/>
              Mobile scanning interface
            </li>
            <li className="flex items-center">
              <i className="fas fa-sync-alt text-blue-400 mr-3"/>
              Instant status updates
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Step 3 */}
      <div className="relative lg:grid lg:grid-cols-2 gap-12">
        <motion.div 
          className="lg:pr-20 mb-10 lg:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="lg:hidden w-14 h-14 bg-purple-400/10 rounded-xl flex items-center justify-center mb-6">
            <span className="text-2xl font-bold text-purple-400">3</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">Centralized Administration</h3>
          <p className="text-gray-400 mb-6">
            Our comprehensive admin dashboard gives you complete visibility and control over your entire delivery network.
          </p>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center">
              <i className="fas fa-chart-pie text-purple-400 mr-3"/>
              Advanced analytics
            </li>
            <li className="flex items-center">
              <i className="fas fa-users-cog text-purple-400 mr-3"/>
              Team management
            </li>
          </ul>
        </motion.div>
        <motion.div 
          className="lg:pl-20 relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <div className="hidden lg:flex absolute -left-12 w-24 h-24 bg-purple-400/10 rounded-full items-center justify-center border-4 border-gray-900">
            <span className="text-3xl font-bold text-purple-400">3</span>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
            <img 
              src="/adm.PNG" 
              alt="Admin Dashboard" 
              className="w-full h-auto"
            />
          </div>
        </motion.div>
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
      <section className="py-28 bg-gradient-to-b from-gray-800 to-gray-900">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6"
      >
        Community <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Initiatives</span>
      </motion.h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Building Rwanda's logistics infrastructure through innovative programs
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Ndakwizeye Campaign */}
      <motion.div 
        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-teal-400/30 transition-all h-full"
        whileHover={{ y: -5 }}
      >
        <div className="h-48 bg-gradient-to-r from-teal-900/30 to-blue-900/30 relative overflow-hidden">
          <img 
            src="/ndk.jpg" 
            alt="Ndakwizeye Campaign" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-handshake text-6xl text-white opacity-20 group-hover:opacity-30 transition-opacity"/>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-hands-helping text-xl text-teal-400"/>
            </div>
            <h3 className="text-xl font-bold">#Ndakwizeye</h3>
          </div>
          <p className="text-gray-400 mb-6">
            National trust-building initiative enhancing transparency in last-mile deliveries across Rwanda.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-teal-400 mb-1">
                <i className="fas fa-map-marked-alt"/>
              </div>
              <div className="text-sm font-medium">5 Districts</div>
              <div className="text-xs text-gray-500">Coverage</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-teal-400 mb-1">
                <i className="fas fa-users"/>
              </div>
              <div className="text-sm font-medium">200+</div>
              <div className="text-xs text-gray-500">Partners</div>
            </div>
          </div>
          <Link  to="/ndakwizeye" className="w-full py-3 bg-teal-600/10 hover:bg-teal-600/20 border border-teal-400/20 hover:border-teal-400/30 rounded-lg text-teal-400 transition-all flex items-center justify-center">
            Learn More <i className="fas fa-arrow-right ml-2"/>
          </Link>
        </div>
      </motion.div>

      {/* Rural Access */}
      <motion.div 
        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-400/30 transition-all h-full"
        whileHover={{ y: -5 }}
      >
        <div className="h-48 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 relative overflow-hidden">
          <img 
            src="/ndakwizeye rider.jpg" 
            alt="Rural Access Program" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-truck text-6xl text-white opacity-20 group-hover:opacity-30 transition-opacity"/>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-blue-400/10 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-mountain text-xl text-blue-400"/>
            </div>
            <h3 className="text-xl font-bold">Rural Access</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Expanding logistics networks to remote areas through community hubs and mobile solutions.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-blue-400 mb-1">
                <i className="fas fa-hubspot"/>
              </div>
              <div className="text-sm font-medium">150+ Hubs</div>
              <div className="text-xs text-gray-500">Nationwide</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-blue-400 mb-1">
                <i className="fas fa-percentage"/>
              </div>
              <div className="text-sm font-medium">85%</div>
              <div className="text-xs text-gray-500">Coverage</div>
            </div>
          </div>
          <button className="w-full py-3 bg-blue-600/10 hover:bg-blue-600/20 border border-blue-400/20 hover:border-blue-400/30 rounded-lg text-blue-400 transition-all flex items-center justify-center">
           coming soon <i className="fas fa-lock ml-2"/>
          </button>
        </div>
      </motion.div>

      {/* SME Program */}
      <motion.div 
        className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-400/30 transition-all h-full"
        whileHover={{ y: -5 }}
      >
        <div className="h-48 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 relative overflow-hidden">
          <img 
            src="/w.jpeg" 
            alt="SME Growth Program" 
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <i className="fas fa-store text-6xl text-white opacity-20 group-hover:opacity-30 transition-opacity"/>
          </div>
        </div>
        <div className="p-8">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-purple-400/10 rounded-lg flex items-center justify-center mr-4">
              <i className="fas fa-chart-line text-xl text-purple-400"/>
            </div>
            <h3 className="text-xl font-bold">SME Growth</h3>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering small businesses with subsidized logistics solutions and training programs.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-purple-400 mb-1">
                <i className="fas fa-building"/>
              </div>
              <div className="text-sm font-medium">500+</div>
              <div className="text-xs text-gray-500">Businesses</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-3">
              <div className="text-purple-400 mb-1">
                <i className="fas fa-coins"/>
              </div>
              <div className="text-sm font-medium">40%</div>
              <div className="text-xs text-gray-500">Cost Savings</div>
            </div>
          </div>
          <button className="w-full py-3 bg-purple-600/10 hover:bg-purple-600/20 border border-purple-400/20 hover:border-purple-400/30 rounded-lg text-purple-400 transition-all flex items-center justify-center">
            Learn More <i className="fas fa-arrow-right ml-2"/>
          </button>
        </div>
      </motion.div>
    </div>
  </div>
</section>
<section className="relative py-28 bg-gradient-to-br from-teal-900/30 to-blue-900/30 overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400 rounded-full blur-3xl opacity-10"></div>
    <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10"></div>
  </div>

  <div className="max-w-7xl mx-auto px-6">
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <h2 className="text-5xl font-bold mb-6">
        Make <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">SwiftRoute</span><br/>
        Your Daily Delivery Companion
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        Join millions who trust SwiftRoute for seamless logistics. Enjoy exclusive rewards, priority support, 
        and special benefits as a regular user.
      </p>
    </motion.div>

    <div className="grid lg:grid-cols-2 gap-16 items-center">
      {/* App Preview */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-blue-400/10 rounded-3xl -z-10"/>
        <div className="rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
          <img 
            src="/moc.png" 
            alt="SwiftRoute Mobile App Preview" 
            className="w-full h-auto"
          />
        </div>
      </motion.div>

      {/* Benefits & Promotions */}
      <motion.div 
        className="space-y-8"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
      >
        <div className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-teal-400/20">
          <div className="flex items-start mb-4">
            <div className="w-12 h-12 bg-teal-400/10 rounded-lg flex items-center justify-center mr-6">
              <i className="fas fa-gift text-xl text-teal-400"/>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Loyalty Rewards Program</h3>
              <p className="text-gray-400">
                Earn points with every delivery and redeem them for exclusive benefits:
              </p>
            </div>
          </div>
          <ul className="space-y-4 pl-18">
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-400 mr-3"/>
              <span className="text-gray-300">Free priority deliveries</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-400 mr-3"/>
              <span className="text-gray-300">Exclusive partner discounts</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-check-circle text-teal-400 mr-3"/>
              <span className="text-gray-300">VIP customer support</span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Referral Program */}
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-teal-400/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-teal-400/10 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-user-plus text-teal-400"/>
              </div>
              <h4 className="text-lg font-bold">Refer & Earn</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Get $10 credit for every friend who joins SwiftRoute
            </p>
          </div>

          {/* Streak Rewards */}
          <div className="p-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-blue-400/20">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-400/10 rounded-lg flex items-center justify-center mr-4">
                <i className="fas fa-fire text-blue-400"/>
              </div>
              <h4 className="text-lg font-bold">Daily Streak</h4>
            </div>
            <p className="text-gray-400 text-sm">
              Maintain 7-day streak for bonus rewards
            </p>
          </div>
        </div>

        {/* App Download CTA */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-teal-600 hover:bg-teal-500 rounded-xl flex items-center gap-3 w-full sm:w-auto"
          >
            <i className="fab fa-apple text-2xl"/>
            <div className="text-left">
              <span className="block text-xs">Download on</span>
              <span className="text-lg font-semibold">App Store</span>
            </div>
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="px-8 py-4 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center gap-3 w-full sm:w-auto"
          >
            <i className="fab fa-google-play text-2xl"/>
            <div className="text-left">
              <span className="block text-xs">Get it on</span>
              <span className="text-lg font-semibold">Google Play</span>
            </div>
          </motion.button>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-8 opacity-75">
          <div className="flex items-center">
            <i className="fas fa-shield-alt text-teal-400 mr-2"/>
            <span className="text-sm">SSL Secure</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-yellow-400 mr-2"/>
            <span className="text-sm">4.9/5 Ratings</span>
          </div>
        </div>
      </motion.div>
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
