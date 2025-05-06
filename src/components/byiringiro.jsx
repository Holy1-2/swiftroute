import { faMapMarkerAlt, faRoad, faShieldAlt, faStore, faSms, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Byiringiro = () => (
  <section className="py-20 bg-gradient-to-b from-gray-900/95 to-gray-800/90 relative overflow-hidden">
    {/* Animated Background Elements */}
    <svg className="absolute top-0 left-0 w-full h-full opacity-10 z-0" viewBox="0 0 100 100">
      <path 
        d="M25,-25C34.7,-14.3,47.2,-7.1,50.5,3.6C53.9,14.3,48.1,28.6,38.4,37.3C28.6,46,15.3,49.2,1.4,47.8C-12.5,46.4,-25,40.5,-33.5,31.8C-42,23.1,-46.5,11.5,-48.9,-2.6C-51.3,-16.8,-51.5,-33.5,-43,-44.2C-34.5,-55,-17.3,-59.7,-3.1,-56.6C11.1,-53.5,22.2,-42.5,25,-25Z" 
        className="fill-teal-400/20 animate-blob"
        transform="translate(50 50)"
      />
    </svg>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Byiringiro
          </span> 
          - Hope Through Tracking
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Access reliable package tracking via USSD *123# - No smartphone or internet required
        </p>
      </div>

      {/* USSD Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: faMapMarkerAlt,
            title: "Last-Mile Visibility",
            description: "Real-time location updates even on rural roads through driver scans"
          },
          {
            icon: faRoad,
            title: "Reduce Trips",
            description: "SMS alerts when parcels arrive at local hubs - travel only once"
          },
          {
            icon: faShieldAlt,
            title: "Damage Proof",
            description: "Timestamped, geo-tagged scan history for insurance claims"
          },
          {
            icon: faStore,
            title: "Community Hubs",
            description: "Designate local shops as scan points for village-wide updates"
          },
          {
            icon: faSms,
            title: "SMS Fallback",
            description: "Get updates via text message in low-connectivity areas"
          },
          {
            icon: faHandHoldingHeart,
            title: "Empower Sellers",
            description: "Artisans share live tracking links with buyers nationwide"
          }
        ].map((feature, index) => (
          <div key={index} className="p-8 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl border border-teal-400/20 hover:border-blue-400/40 backdrop-blur-sm hover:-translate-y-2 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-xl flex items-center justify-center mb-6">
              <FontAwesomeIcon icon={feature.icon} className="text-teal-400 text-xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-100">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* USSD Workflow */}
      <div className="grid lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-gray-800/30 to-gray-900/40 rounded-3xl p-12 backdrop-blur-sm border border-teal-400/20">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold mb-6 text-gray-100">
            How USSD Tracking Works
          </h3>
          <div className="space-y-6">
            {[
              "Dial *123# from any mobile phone",
              "Enter your tracking number",
              "Receive instant SMS updates",
              "Check delivery status anytime",
              "No app install or data needed"
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 bg-gray-800/30 p-4 rounded-xl hover:bg-teal-400/5 transition">
                <div className="w-8 h-8 bg-teal-400/10 rounded-lg flex items-center justify-center">
                  <span className="text-teal-400 font-bold">{index + 1}</span>
                </div>
                <p className="text-gray-300">{step}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Phone Mockup */}
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-3xl w-72 shadow-xl border border-teal-400/20">
            <div className="bg-gray-700/40 h-12 rounded-t-xl mb-4 border-b border-teal-400/20"></div>
            <div className="space-y-4">
              <div className="bg-gray-800/40 p-4 rounded-lg border border-teal-400/10">
                <p className="text-blue-400 font-mono">*123#</p>
                <p className="text-sm text-teal-400/80 mt-1">SwiftRoute USSD</p>
              </div>
              <div className="bg-gray-800/40 p-4 rounded-lg border border-teal-400/10">
                <p className="text-teal-400">1. Track Package</p>
                <p className="text-teal-400">2. Delivery Proof</p>
                <p className="text-teal-400">3. Hub Locations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rural Impact */}
      <div className="mt-20 text-center">
        <h3 className="text-3xl font-bold mb-8 text-gray-100">
          Transforming Rural Logistics
        </h3>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { value: "85%", label: "Reduced collection trips" },
            { value: "48h", label: "Faster dispute resolution" },
            { value: "92%", label: "Villages covered" },
            { value: "1M+", label: "Monthly USSD requests" }
          ].map((stat, index) => (
            <div key={index} className="p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl border border-teal-400/20 hover:border-blue-400/40 transition">
              <div className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Byiringiro;