import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaUsers, FaMapMarker, FaChartLine, FaEnvelope, FaCheck, FaSkype, FaBusinessTime, FaRegBuilding, FaLocationArrow, FaMapPin, FaUserAstronaut, FaUserFriends } from 'react-icons/fa';

const OnboardingWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyType: '',
    employeeCount: '',
    location: '',
    monthlyUsers: '',
    referralSource: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your submission logic here
  };

  const ProgressIndicator = () => (
    <div className="relative mb-8">
      <div className="flex justify-between max-w-md mx-auto">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="relative z-10">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center 
              ${step >= num ? 'bg-teal-400 text-gray-900' : 'bg-gray-700 text-gray-400'}`}>
              {num}
            </div>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700 transform -translate-y-1/2"></div>
    </div>
  );

  const Step1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
        Company Information
      </h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Company Type</label>
          <div className="grid gap-3">
            {['E-commerce', 'Logistics', 'Delivery Service', 'Other'].map((type) => (
              <label key={type} className="flex items-center space-x-3 bg-gray-800 p-4 rounded-lg hover:bg-gray-700/50 cursor-pointer">
                <input
                  type="radio"
                  name="companyType"
                  value={type}
                  checked={formData.companyType === type}
                  onChange={handleInputChange}
                  className="form-radio text-teal-400"
                />
                <span className="text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const Step2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
        Operational Details
      </h2>
      <div className="space-y-4"> <div className="relative">
          <FaRegBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="employeeCount"
            placeholder="Company name or brand"
            value={formData.employeeCount}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
        <div className="relative">
          <FaUsers className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            name="employeeCount"
            placeholder="Number of Employees"
            value={formData.employeeCount}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
        <div className="relative">
          <FaMapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="location"
            placeholder="Company Location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
        <div className="relative">
          <FaChartLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="number"
            name="monthlyUsers"
            placeholder="Active Monthly Users"
            value={formData.monthlyUsers}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
      </div>
    </motion.div>
  );

  const Step3 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
        How Did You Find Us?
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white appearance-none focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          >
            <option value="">Select referral source</option>
            <option value="Search Engine">Search Engine</option>
            <option value="Social Media">Social Media</option>
            <option value="Recommendation">Recommendation</option>
            <option value="Other">Other</option>
          </select>
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </motion.div>
  );

  const Step4 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
        Contact Information
      </h2>
      <div className="space-y-4">
        <div className="relative">
          <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            name="contactName"
            placeholder="Contact Name"
            value={formData.contactName}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            name="contactEmail"
            placeholder="Contact Email"
            value={formData.contactEmail}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
        <div className="relative">
          <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="tel"
            name="contactPhone"
            placeholder="Contact Phone"
            value={formData.contactPhone}
            onChange={handleInputChange}
            className="w-full pl-10 pr-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 outline-none transition"
          />
        </div>
      </div>
    </motion.div>
  );

  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center space-y-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-400/20 rounded-full">
        <FaCheck className="text-3xl text-teal-400" />
      </div>
      <h2 className="text-2xl font-bold text-white">Submission Successful!</h2>
      <p className="text-gray-400">
        Thank you for your interest. Our team will review your information and contact you via email within 2 business days.
      </p>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-gray-800 rounded-2xl shadow-xl p-8">
        <ProgressIndicator />

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            {step === 1 && <Step1 />}
            {step === 2 && <Step2 />}
            {step === 3 && <Step3 />}
            {step === 4 && <Step4 />}

            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className={`px-6 py-2 rounded-lg ${step > 1 ? 'text-gray-300 hover:text-white' : 'text-gray-600 cursor-not-allowed'}`}
              >
                Back
              </button>
              <button
                type="button"
                onClick={step === 4 ? handleSubmit : handleNext}
                className="px-6 py-2 bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-colors"
              >
                {step === 4 ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        ) : (
          <SuccessMessage />
        )}
      </div>
    </div>
  );
};

export default OnboardingWizard;