import React, { useState } from 'react';

import {  useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const translations = {
  en: {
    heroTitle: "Track Your Packages with SwiftRoute.",
    heroSubtitle: "Track your package for free and revolutionize your shipping experience.",
    heroDescription:
      "Our app transforms transportation and commerce, keeping you updated every mile of the journey.",
    packagePlaceholder: "Enter Package ID",
    trackNow: "Track Now",
    aboutLabel: "About Us",
    aboutTitle: "Get To Know Us.",
    aboutText:
      "SwiftRoute is a modern, innovative application designed to streamline courier and package delivery processes through real-time tracking .",
    aboutText2:
      "We believe in transformation and modernising courier delivery. Join us now for updates and supporting us.",
    visionLabel: "Vision",
    visionTitle: "Our Vision, Goals, and Mission",
    visionDescription:
      "Paving the way for efficient, reliable, and customer-focused courier solutions.",
    goalsTitle: "Goals",
    goalsList: [
      "Ensure seamless, real-time tracking for all deliveries.",
      "Streamline courier processes with cutting-edge technology.",
      "Enhance customer satisfaction through transparency and efficiency.",
    ],
    missionTitle: "Mission",
    missionText:
      "To revolutionize the courier industry by leveraging QR code technology, delivering trust every mile, and fostering stronger connections between customers and service providers.",
    visionText:
      "Our vision is to become a global leader in the courier industry, recognized for innovation, reliability, and unmatched customer experience.",
    featuresLabel: "Features",
    featuresTitle: "Discover SwiftRoute Capabilities",
    featuresDescription:
      "Empowering courier services with innovative, real-time tracking and intelligent delivery management.",
    feature1Title: "Real-Time Package Tracking",
    feature1Description:
      "Monitor your packages on an interactive map with live location updates, ensuring a seamless and efficient delivery experience.",
    feature2Title: "Driver's Real-Time Dashboard",
    feature2Description:
      "Drivers can view packages assigned to their vehicle, scan QR codes, and update delivery statuses in real time, streamlining on-the-go operations.",
    feature3Title: "Admin & Company Dashboard",
    feature3Description:
      "Manage your entire operation from a centralized dashboard—add packages to the system, track driver locations, generate reports, and more.",
    howItWorksLabel: "How It Works",
    howItWorksTitle: "Experience SwiftRoute in Action",
    howItWorksDescription:
      "Follow these simple steps to see how SwiftRoute streamlines package tracking and delivery.",
    step1Title: "Real-Time Package Registration",
    step1Description:
      "Users register their package on SwiftRoute, automatically generating a unique QR code. This code acts as a digital fingerprint for the package, enabling seamless real-time tracking.",
    step2Title: "Driver In-Car Updates",
    step2Description:
      "Drivers use their dedicated dashboard to scan the QR code during pickup and delivery. This instant scan updates the package’s status and location in real time, ensuring all parties are kept informed.",
    step3Title: "Centralized Administration",
    step3Description:
      "The SwiftRoute admin dashboard provides companies with full control over their operations. Administrators can manage packages, track driver locations, generate detailed reports, and optimize logistics from a single, intuitive interface.",
    faqLabel: "FAQs",
    faqTitle: "Frequently Asked Questions",
    faqDescription:
      "Learn more about Swift Route, your QR-code-powered courier tracking app.",
    faqItems: [
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
    ],
    downloadTitle:
      "Download Now and Begin Your Journey with Swift Route",
    downloadDescription:
      "SwiftRoute is a modern, innovative application designed to streamline courier and package delivery processes through real-time tracking using QR codes.",
    getItOnGooglePlay: "Get it on Google Play",
    downloadOnAppStore: "Download on App Store",
    partnersLabel: "Countries & Companies",
    partnersTitle: "Where We Work & Who We Work With",
    partnersDescription:
      "Expanding globally with trusted partners and services across leading industries.",
    testimonialLabel: "Testimonials",
    testimonialTitle: "What Our Clients Say",
    testimonialDescription:
      "Hear directly from our satisfied customers who have transformed their businesses.",
  },
  rw: {
    heroTitle: "Kurikirana imizigo yawe aho igeze hamwe na SwiftRoute.",
    heroSubtitle:
      "Kurikirana imizigo yawe ku buntu kandi uhindure uburyo bwo gutumiza no kohereza imizigo n'ibicuruzwa byawe.",
    heroDescription:
      "Porogaramu yacu ihindura  ubwikorezi n'ubucuruzi, igakomeza kuguha amakuru y'icuruzwa byawe kuri buri ntera.",
    packagePlaceholder: "Andika ID y'Umuzigo wawe",
    trackNow: "Kurikirana Ubu",
    aboutLabel: "Ibitwerekeye",
    aboutTitle: "Menya Ibitwerekeye.",
    aboutText:
      "SwiftRoute ni porogaramu y'ikoranabuhanga, igamije koroshya servisi za courier hifashishijwe gukurikirana aho imizigo igeze  muri ako  kanya .",
    aboutText2:
      "Twizera ko tuzahindura no guteza imbere uburyo servise za courier zitangwa. Ifatanye natwe mu kumenya amakuru yacu buri munsi no kudushyigikira.",
    visionLabel: "Intego",
    visionTitle: "Intego zacu, Icyerekezo, n'Icyifuzo",
    visionDescription:
      "Gushyiraho inzira y'uburyo butanga serivisi bwizewe kandi bunoze.",
    goalsTitle: "Intego",
    goalsList: [
      "Gufasha abantu kumenya aho  imizigo yabo igeze muri  ako kanya.",
      "Guteza imbere service za courier hifashishijwe ikoranabuhanga rihambaye.",
      "Kongerera abakiriya ibyishimo , icyizere no gutanga serivisi zizewe.",
    ],
    missionTitle: "Icyerekezo",
    missionText:
      "Kuvugurura inganda za courier hifashishijwe ikoranabuhanga rya QR code, dutanga icyizere muri rugendo rwose ku bakiriya nama company bifasha mu gukomeza umubano hagati ya bakiriya n'abatanga serivisi.",
    visionText:
      "Icyerekezo cyacu ni uguhindura isoko mpuzamahanga, tukaba abambere mu gutanga serivisi zizewe, zigezweho kandi zihagije.",
    featuresLabel: "Ibikubiye muri Porogaramu",
    featuresTitle: "Menya ubushobozi bwa SwiftRoute",
    featuresDescription:
      "Guteza imbere servisi za courier hifashishijwe gukurikirana ako kanya n'ubuyobozi bwa  courier bufite ubuhanga buhanitse.",
    feature1Title: "Kukurikirana umuzigo  wawe aho ugeze ako kanya",
    feature1Description:
      "Kurikirana umuzigo wawe urebera kwi karita yisi aho umuzigo wawe ugeze,ikarita ikwereka aho umuzigo wawe uri ako kanya .",
    feature2Title: "Dashboard y'Abashoferi yerekana operasiyo zirikuba muri ako kanya",
    feature2Description:
      "Abashoferi bashobora kureba imizigo yashyizwe mu modoka yabo, gusikana QR codes, no kuvugurura aho imizigo igeze  ako kanya .",
    feature3Title: "Dashboard y'Abayobozi & Ibigo",
    feature3Description:
      "Shyira mu bikorwa operasiyo zose ukoresheje dashboard imwe—ongera imizigo  muri sisitemu, ukurikire aho abashoferi bahagaze, ubone raporo, n'ibindi byinshi.",
    howItWorksLabel: "Uko Bikorwa",
    howItWorksTitle: "Reba uko SwiftRoute ikora",
    howItWorksDescription:
      "Kurikirana intambwe zoroshye urebe uko SwiftRoute itanga uburyo bworoshye gukurikirana  aho imizigo igeze .",
    step1Title: "Kwandikisha umuzigo muri sisiteme",
    step1Description:
      "Abakiriya bandikisha imizigo yabo  muri SwiftRoute babifashijwe na company cyangwa agency bahisemo, bagahabwa QR code yihariye. Iyi code iba ikimenyetso cy'umuzigo, igafasha gukurikirana aho umuzigo ugeze.",
    step2Title: "Ibyo Abashoferi bakora mu modoka",
    step2Description:
      "Abashoferi bakoresha dashboard yabo mu gusikana QR code igihe cyo gukusanya no gutanga imizigo, bituma aho imizigo igeze hamenywa.",
    step3Title: "Ubuyobozi bwimbitse",
    step3Description:
      "Dashboard y'abayobozi ya SwiftRoute itanga uburyo bwo gucunga operasiyo yose. Abayobozi bashobora gucunga imizigo yose aho igeze, gukurikirana aho abashoferi bahagaze, kubona raporo, no kunoza imikorere muri sisitemu imwe.",
    faqLabel: "Ibibazo Bikunze Kubazwa",
    faqTitle: "Ibibazo Bikunze Kubazwa",
    faqDescription:
      "Menya byinshi kuri Swift Route, porogaramu yawe ikoresha QR code mu gukurikirana imizigo.",
    faqItems: [
      {
        question: "Swift Route ni iki kandi ikora ite?",
        answer:
          "Swift Route ni porogaramu yo gukurikirana imizigo ikoresha QR codes mu gukurikirana imi mu gihe nyacyo. Itanga umutekano n'uburyo bwiza bwo kugeza imizigo aho igenewe.",
      },
      {
        question: "Ni gute QR codes zafasha mu gukurikirana imizigo yawe?",
        answer:
          "Buri muzigo ugira QR code yihariye ibika amakuru y'umuzigo. Abatwara courier basikana QR code mu bice bitandukanye by'urugendo, bakerekana aho imizigo igeze muri ako kanya.",
      },
      {
        question: "Abakiriya bashobora gukurikirana imizigo cyangwa ibicuruzwa ubwabo?",
        answer:
          "Yego, abakiriya bashobora gukurikirana  imizigo cyangwa ibicuruzwa hakoreshejwe gukoresha tracking ID muri porogaramu kugira ngo barebe aho imizigo igeze n'igihe cyegereje imizigo ngo igere aho igenewe.",
      },
      {
        question: "Swift Route ikwiriye ibigo?",
        answer:
          "Nibyo rwose! Swift Route igenewe gushyigikira ibigo binini byose. Itanga uburyo bwo gukontorora operasiyo mu buryo bwimbitse, gukurikirana abatwara courier, no gutanga uburyo bwo kugirana imikoranire isobanutse n'abakiriya.",
      },
      {
        question: "Swift Route ifite umutekano ku rwego ki mu gukurikirana imizigo?",
        answer:
          "Swift Route ishyira imbere umutekano. Amakuru yose, harimo incuro imizigo yasikanwe QR  n'aho imizigo igeze, abikwa mu buryo bwizewe kugira ngo barinde abakiriya n'ibigo.",
      },
    ],
    downloadTitle:
      "Kurura porogramu ubu maze Utangire Urugendo rwawe na Swift Route",
    downloadDescription:
      "SwiftRoute ni porogaramu y'ikoranabuhanga, igamije koroshya services za courier ndetse n'ubwikorezi hifashishijwe gukurikirana mu gihe nyacyo ukoresheje QR codes.",
    getItOnGooglePlay: "Kurura kuri Google Play",
    downloadOnAppStore: "Kurura kuri App Store",
    partnersLabel: "Ibihugu & Ibigo",
    partnersTitle: "Aho Dukorera & N'abo Dukorana",
    partnersDescription:
      "Turikwaguka ku isi yose hamwe n'abafatanyabikorwa n'ibigo byizewe mu nganda zitandukanye.",
    testimonialLabel: "Ibyo Abakiriya Bavuga",
    testimonialTitle: "Icyo Abakiriya Bacu Bavuga",
    testimonialDescription:
      "Iyumvire ibyo abakiriya bacu bashimangira ku buryo bwo gukoresha SwiftRoute.",
  },
};

const Main = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(-1);
  const [lang, setLang] = useState(localStorage.getItem("language") || "en"); // Load language from localStorage
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  // Store language selection in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("language", lang);
  }, [lang]);

  const t = translations[lang];

  const handleLanguageSelect = (selectedLang) => {
    setLang(selectedLang);
    setDropdownOpen(false);
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div>
    {/* Language Toggle Button */}
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <button
          onClick={() => setDropdownOpen((prev) => !prev)}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          className="p-2 bg-gradient-to-br from-green-800 to-gray-900 text-white rounded-full focus:outline-none transition-transform duration-200 transform hover:scale-110"
        >
          <i className="fas fa-language text-xl"></i>
        </button>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 px-2 py-1 bg-gradient-to-br from-green-800 to-gray-900 text-white text-xs rounded shadow-md"
            >
              {lang === "rw" ? "Hindura ururimi" : "Change Language"}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Language Toggle Popover/Dialog */}
        <AnimatePresence>
          {dropdownOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
            >
              <h3 className="text-lg font-semibold mb-2">
                {lang === "rw" ? "Hitamo Ururimi" : "Select Language"}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {lang === "rw"
                  ? "Nyamuneka hitamo ururimi ukunda:"
                  : "Please choose your preferred language:"}
              </p>
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleLanguageSelect("en")}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-200"
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageSelect("rw")}
                  className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-200"
                >
                  Kinyarwanda
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>

    {/* Hero Section */}
    <motion.section
      id="home"
      className="relative bg-gradient-to-br from-green-800 to-gray-900 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
          {t.heroTitle}
        </h1>
        <p className="mt-6 text-xl text-gray-300">{t.heroSubtitle}</p>
        <p className="mt-2 text-lg text-gray-300">{t.heroDescription}</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center">
          <input
            type="text"
            placeholder={t.packagePlaceholder}
            className="w-full sm:w-1/2 px-5 text-black py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
          />
          <button 
                onClick={() => navigate("/PackageStatusCard")}
          className="mt-4 sm:mt-0 sm:ml-4 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300">
            {t.trackNow}
            
          </button>
        </div>
      </div>
    </motion.section>

    {/* About Section */}
    <motion.section
      id="about"
      className="bg-gray-50 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center lg:space-x-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg
              className="w-5 h-5 inline-block mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {t.aboutLabel}
          </div>
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6 sm:text-5xl lg:text-6xl">
            {t.aboutTitle}
          </h2>
          <p className="text-gray-600 text-lg mb-6">{t.aboutText}</p>
          <p className="text-gray-600 text-lg">{t.aboutText2}</p>
        </div>
        <div className="lg:w-1/2 flex justify-center relative mt-10 lg:mt-0">
          <div className="relative w-40 lg:w-52 transform hover:scale-105 transition-transform duration-500 rounded-xl">
            <img
              src="mocki.jpg"
              alt="App mockup 1"
              className="w-full rounded-xl"
            />
          </div>
          <div className="relative w-40 lg:w-52 rounded-xl transform hover:scale-105 transition-transform duration-500 ml-6 lg:ml-10 -mt-10">
            <img
              src="mockup.jpg"
              alt="App mockup 2"
              className="w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </motion.section>

    {/* Vision Section */}
    <motion.section
      id="vision"
      className="bg-gray-100 py-16"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-4 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-eye mr-2"></i> {t.visionLabel}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
            {t.visionTitle}
          </h2>
          <p className="text-lg text-gray-600 mt-4">{t.visionDescription}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {/* Goals */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              {t.goalsTitle}
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              {t.goalsList.map((goal, i) => (
                <li key={i}>{goal}</li>
              ))}
            </ul>
          </div>
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              {t.missionTitle}
            </h3>
            <p className="text-gray-600">{t.missionText}</p>
          </div>
          {/* Vision Text */}
          <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-green-500">
            <h3 className="text-2xl font-semibold text-green-600 mb-3">
              {t.visionLabel}
            </h3>
            <p className="text-gray-600">{t.visionText}</p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Features Section */}
    <motion.section
      id="features"
      className="relative bg-gradient-to-br from-green-900 to-gray-800 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-green-100 text-green-600 px-4 py-4 rounded-full text-sm font-medium mb-4">
          <i className="fas fa-cogs mr-2"></i> {t.featuresLabel}
        </div>
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {t.featuresTitle}
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            {t.featuresDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t.feature1Title}
              </h3>
            </div>
            <p className="text-gray-300">{t.feature1Description}</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <i className="fas fa-car-side text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t.feature2Title}
              </h3>
            </div>
            <p className="text-gray-300">{t.feature2Description}</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <i className="fas fa-tachometer-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white">
                {t.feature3Title}
              </h3>
            </div>
            <p className="text-gray-300">{t.feature3Description}</p>
          </div>
        </div>
      </div>
    </motion.section>

    {/* How It Works Section */}
    <motion.section
      id="how-it-works"
      className="relative bg-gradient-to-br from-green-900 to-gray-800 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <i className="fas fa-cogs mr-2"></i> {t.howItWorksLabel}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {t.howItWorksTitle}
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            {t.howItWorksDescription}
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-500"></div>
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t.step1Title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-300">{t.step1Description}</p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                <i className="fas fa-qrcode text-green-400 text-8xl"></i>
              </div>
            </div>
            {/* Step 2 */}
            <div className="md:flex md:items-center flex-col-reverse md:flex-row">
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                <i className="fa-solid fa-truck-fast text-green-400 text-8xl"></i>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t.step2Title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-300">{t.step2Description}</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/2 md:pr-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-3xl font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {t.step3Title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-300">{t.step3Description}</p>
              </div>
              <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
                <i className="fas fa-tachometer-alt text-green-400 text-8xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>

    {/* FAQ Section */}
    <motion.section
      className="bg-white py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium">
            <i className="fas fa-question-circle mr-2"></i> {t.faqLabel}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            {t.faqTitle}
          </h2>
          <p className="text-gray-600 text-lg mt-4">
            {t.faqDescription}
          </p>
        </div>
        <div className="space-y-6">
          {t.faqItems.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6"
            >
              <div
                className="flex justify-between items-center cursor-pointer group"
                onClick={() =>
                  setOpenFaqIndex(openFaqIndex === index ? -1 : index)
                }
              >
                <h3 className="text-lg font-medium text-gray-800 group-hover:text-green-500">
                  {faq.question}
                </h3>
                <i
                  className={`fas fa-plus text-green-500 transition-transform ${
                    openFaqIndex === index ? "rotate-45" : ""
                  }`}
                ></i>
              </div>
              <p
                className={`mt-3 text-gray-600 ${
                  openFaqIndex === index ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>

    {/* App Download / Mockup Section */}
    <motion.section
      className="relative bg-gradient-to-br from-green-900 to-gray-800 py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0">
          <div className="relative">
            <div className="absolute inset-0 bg-green-700 opacity-50 rounded-full w-96 h-96 -top-16 -left-16"></div>
            <img
              src="mockii.png"
              alt="App Mockup 1"
              className="w-64 lg:w-72 rounded-xl relative z-10"
            />
          </div>
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-white leading-tight mb-6">
            {t.downloadTitle}
          </h2>
          <p className="text-gray-100 text-lg mb-6">
            {t.downloadDescription}
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            <a
              href="#"
              className="bg-white text-green-700 font-bold px-6 py-3 rounded-full flex items-center space-x-2 shadow hover:bg-gray-100"
            >
              <i className="fab fa-google-play"></i>
              <span>{t.getItOnGooglePlay}</span>
            </a>
            <a
              href="#"
              className="bg-white text-green-700 font-bold px-6 py-3 rounded-full flex items-center space-x-2 shadow hover:bg-gray-100"
            >
              <i className="fab fa-apple"></i>
              <span>{t.downloadOnAppStore}</span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Partners Section */}
    <motion.section
      id="partners"
      className="relative bg-white py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <i className="fas fa-globe mr-2"></i> {t.partnersLabel}
        </div>
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            {t.partnersTitle}
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            {t.partnersDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sample Partner Cards */}
        
          <div className="group relative overflow-hidden rounded-lg bg-green-50 border border-green-300 p-6 shadow-lg">
            <img
              src="ki.png"
              alt="Kigali Coach"
              className="h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-6">
              Kigali Coach
            </h3>
            <p className="text-gray-600 mt-2">
              Trusted logistics company in Rwanda.
            </p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-green-50 border border-green-300 p-6 shadow-lg">
            <img
              src="tuma.png"
              alt="Tuma 250"
              className="h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-6">
              Tuma 250
            </h3>
            <p className="text-gray-600 mt-2">
              Trusted online ordering shop in Kigali.
            </p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-green-50 border border-green-300 p-6 shadow-lg">
            <img
              src="vr.png"
              alt="Virunga"
              className="h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-6">
              Virunga
            </h3>
            <p className="text-gray-600 mt-2">
              Trusted logistics partner in Africa.
            </p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-green-50 border border-green-300 p-6 shadow-lg">
            <img
              src="roo.png"
              alt="Roots Rwanda"
              className="h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-6">
              Roots Rwanda
            </h3>
            <p className="text-gray-600 mt-2">
              Leaders in online delivery innovations.
            </p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-green-50 border border-green-300 p-6 shadow-lg">
            <img
              src="kigalismart.png"
              alt="Kigali Smart"
              className="h-32 mx-auto transition-transform duration-300 group-hover:scale-105"
            />
            <h3 className="text-xl font-semibold text-green-700 mt-6">
              Kigali Smart solutions
            </h3>
            <p className="text-gray-600 mt-2">
              Best electronics device store in Rwanda.
            </p>
            <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </div>
        </div>
      </div>
    </motion.section>

    {/* Testimonials Section */}
    <motion.section
      id="testimonials"
      className="relative bg-gradient-to-br from-green-900 to-gray-800 py-20 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="inline-block bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <i className="fas fa-quote-left mr-2"></i> {t.testimonialLabel}
        </div>
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            {t.testimonialTitle}
          </h2>
          <p className="text-lg text-gray-300 mt-4">
            {t.testimonialDescription}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Testimonial Card 1 */}
          <div className="relative bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="users.avif"
                alt="Alex Johnson"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div className="ml-4 text-left">
                <h4 className="text-white font-semibold">
                  Alex Johnson
                </h4>
                <p className="text-gray-300 text-sm">CEO, TechCorp</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "This app revolutionized our workflow. The real-time insights have been a game-changer!"
            </p>
          </div>
          {/* Testimonial Card 2 */}
          <div className="relative bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="users.avif"
                alt="Maria Gonzalez"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div className="ml-4 text-left">
                <h4 className="text-white font-semibold">
                  Maria Gonzalez
                </h4>
                <p className="text-gray-300 text-sm">Founder, StartupX</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "An intuitive and efficient solution that helped our business scale in no time."
            </p>
          </div>
          {/* Testimonial Card 3 */}
          <div className="relative bg-green-700/20 border border-green-500 rounded-lg p-6 shadow-lg text-left transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center mb-4">
              <img
                src="users.avif"
                alt="John Doe"
                className="w-12 h-12 rounded-full border-2 border-green-500"
              />
              <div className="ml-4 text-left">
                <h4 className="text-white font-semibold">
                  John Doe
                </h4>
                <p className="text-gray-300 text-sm">CTO, Innovatech</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The analytics provided by this app are unmatched. It’s like having a personal data scientist at your fingertips."
            </p>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-spin-slow opacity-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              fill="none"
              className="w-96 h-96 text-green-500 absolute top-10 left-10"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>
          <div className="animate-spin-slower opacity-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              fill="none"
              className="w-72 h-72 text-green-400 absolute bottom-10 right-10"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.section>
  </div>
  );
};

export default Main;
