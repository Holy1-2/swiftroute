import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyPolicy = () => {
  const [lang, setLang] = useState("en");
  const [showTooltip, setShowTooltip] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedLang = localStorage.getItem("language");
    if (storedLang) setLang(storedLang);
  }, []);

  const handleLanguageSelect = (selectedLang) => {
    setLang(selectedLang);
    localStorage.setItem("language", selectedLang);
    setDropdownOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Language Selector */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 bg-gray-800/80 backdrop-blur-md text-teal-400 rounded-full hover:bg-teal-400/10 transition-all"
          >
            <i className="fas fa-language text-xl"></i>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-48 bg-gray-800/80 backdrop-blur-md rounded-lg shadow-xl p-3"
              >
                <h3 className="text-sm font-semibold mb-2 text-teal-400">
                  {lang === "rw" ? "Hitamo Ururimi" : "Select Language"}
                </h3>
                <div className="space-y-2">
                  <button
                    onClick={() => handleLanguageSelect("en")}
                    className="w-full px-3 py-2 text-left rounded-md hover:bg-gray-700/50 transition-colors"
                  >
                    English
                  </button>
                  <button
                    onClick={() => handleLanguageSelect("rw")}
                    className="w-full px-3 py-2 text-left rounded-md hover:bg-gray-700/50 transition-colors"
                  >
                    Kinyarwanda
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-gray-800/80 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link 
            to="/"
            className="flex items-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>... </span>
            <span className="font-semibold">{lang === "rw" ? "Ahabanza" : "Home"}</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            {lang === "rw" ? "Politiki y'Ibanga" : "Privacy Policy"}
          </h1>
          <p className="mt-4 text-gray-400">
            {lang === "rw" 
              ? "Swift Route yubahiriza ibanga ry'abarangura" 
              : "Swift Route values your privacy and security"}
          </p>
        </header>

        {/* Policy Sections */}
        <div className="space-y-8">
          {[
            {
              icon: "fa-user-shield",
              title: lang === "rw" ? "Amakuru Dukusanya" : "Information Collection",
              content: (
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>{lang === "rw" ? "Amazina na kontakt" : "Names & contact details"}</li>
                  <li>{lang === "rw" ? "Ibyerekeye gahunda zohereza" : "Delivery preferences"}</li>
                </ul>
              )
            },
            {
              icon: "fa-shield-alt",
              title: lang === "rw" ? "Umutekano" : "Data Security",
              content: (
                <p className="text-gray-300">
                  {lang === "rw" 
                    ? "Dukoresha ubwibatsi bwa AES-256 n'ubwibatsi bw'ingenzi" 
                    : "We use AES-256 encryption and modern security protocols"}
                </p>
              )
            },
            {
              icon: "fa-cookie",
              title: "Cookies",
              content: (
                <p className="text-gray-300">
                  {lang === "rw"
                    ? "Tugukurikirana gusa kugirango dushobore kunoza serivisi"
                    : "Tracking only for service improvement purposes"}
                </p>
              )
            },
            {
              icon: "fa-exchange-alt",
              title: lang === "rw" ? "Guhindura" : "Updates",
              content: (
                <p className="text-gray-300">
                  {lang === "rw"
                    ? "Turabimenyesha iyo politiki yacu yarahindutse"
                    : "We notify users of any policy changes via email"}
                </p>
              )
            }
          ].map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/70 transition-colors"
            >
              <div className="flex items-center mb-4 space-x-3">
                <i className={`fas ${section.icon} text-2xl text-teal-400`}></i>
                <h3 className="text-xl font-semibold">{section.title}</h3>
              </div>
              {section.content}
            </motion.div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 text-center border-t border-gray-800 pt-16">
            <h2 className="text-2xl font-semibold text-teal-400 mb-6">
              {lang === "rw" ? "Twandikire" : "Contact Us"}
            </h2>
            <div className="space-y-2 text-gray-400">
              <p>
                <i className="fas fa-envelope mr-2"></i>
                support@swiftroute.com
              </p>
              <p>
                <i className="fas fa-phone mr-2"></i>
                +250 791 234 567
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;