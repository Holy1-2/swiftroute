import React, { useState, useRef, useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Dashboard = () => {
  const [isHistoryOpen, setHistoryOpen] = useState(false);
  const [isReportOpen, setReportOpen] = useState(false);
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  // Toggle Package History Panel
  const togglePackageHistory = () => {
    setHistoryOpen(!isHistoryOpen);
  };

  // Toggle Report Modal
  const openReportModal = () => setReportOpen(true);
  const closeReportModal = () => setReportOpen(false);

  // Initialize Leaflet map once the component mounts
  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      mapInstance.current = L.map(mapRef.current).setView([51.505, -0.09], 13);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      const deliveryIcon = L.icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/535/535137.png",
        iconSize: [40, 40],
      });

      L.marker([51.5, -0.09], { icon: deliveryIcon })
        .addTo(mapInstance.current)
        .bindPopup("Package: #12SWFT");
    }
    // Cleanup on unmount: remove the map instance
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  // Close Report Modal when clicking outside modal content
  const handleModalClick = (e) => {
    if (e.target.id === "reportModal") {
      closeReportModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Header */}
      <header className="bg-gray-800 shadow-lg py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <i className="fas fa-box-open text-teal-400 text-2xl"></i>
          <h1 className="text-xl font-bold">My Swift Tracking</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* History Toggle */}
          <button
            onClick={togglePackageHistory}
            title="Package History"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <i className="fas fa-history text-xl"></i>
          </button>
          {/* Notification Icon */}
          <div className="relative group">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              <i className="fas fa-bell text-xl"></i>
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-xl p-4 text-sm">
              <h3 className="font-bold mb-2">Notifications</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-teal-400">
                  <i className="fas fa-truck-moving mr-2"></i>
                  Driver 5 min away
                </li>
                <li className="flex items-center text-gray-400">
                  <i className="fas fa-check-circle mr-2"></i>
                  Package scanned at facility
                </li>
              </ul>
            </div>
          </div>
          {/* Report Issue Button */}
          <button
            onClick={openReportModal}
            className="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-lg flex items-center space-x-2 focus:outline-none transition-colors"
          >
            <i className="fas fa-flag"></i>
            <span>Report Issue</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col lg:flex-row gap-6 p-6">
        {/* Left Column: Map Section */}
        <section className="flex-1 space-y-6">
          <div className="bg-gray-800 rounded-xl shadow-lg p-4 h-[500px]">
            <div
              id="deliveryMap"
              ref={mapRef}
              className="h-full w-full rounded-lg"
            ></div>
          </div>
        </section>

        {/* Right Column: Delivery Details */}
        <aside className="w-full lg:w-96 space-y-6">
          {/* Driver Info Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <i className="fas fa-user-shield mr-2 text-teal-400"></i>
              Driver Details
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-teal-500/20 flex items-center justify-center">
                  <i className="fas fa-user-astronaut text-teal-400 text-2xl"></i>
                </div>
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900"></span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">John Deliveryman</h3>
                <p className="text-sm text-gray-400">License: D-234156</p>
                <div className="flex items-center space-x-2">
                  {/* Delivery Company Logo */}
                  <img
                    src="/unnamed.png"
                    alt="Delivery Company Logo"
                    className="w-8 h-8"
                  />
                  <span className="text-sm text-gray-400">
                    Company: Vubavuba
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">
                  <i className="fas fa-clock mr-2"></i>Last Scan:
                </span>
                <span>2:45 PM (15 min ago)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  <i className="fas fa-car mr-2"></i>Vehicle:
                </span>
                <span>White Van • ABC 1234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">
                  <i className="fas fa-stopwatch mr-2"></i>ETA:
                </span>
                <span className="text-teal-400">25-35 min</span>
              </div>
            </div>
          </div>

          {/* Delivery Progress Card */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-bold mb-4 flex items-center">
              <i className="fas fa-map-marked-alt mr-2 text-teal-400"></i>
              Delivery Progress
            </h2>
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center">
                  <i className="fas fa-warehouse text-lg text-gray-900"></i>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-1 bg-gray-700 rounded-full">
                    <div className="w-3/4 h-full bg-teal-500 rounded-full"></div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <i className="fas fa-home text-lg text-gray-400"></i>
                </div>
              </div>
              <div className="flex justify-between text-sm">
                <span>Distribution Center</span>
                <span>Your Address</span>
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Package History Slide-in Panel */}
      <div
        id="packageHistoryPanel"
        className={`fixed top-0 right-0 h-full w-80 bg-gray-800 shadow-lg transform transition-transform duration-300 z-40 ${
          isHistoryOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 flex items-center">
            <i className="fas fa-history mr-2 text-teal-400"></i>
            Package History
          </h2>
          <div className="space-y-4">
            {/* History Items */}
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <div>
                <h3 className="font-medium">Package #12SWFT</h3>
                <p className="text-sm text-gray-400">Delivered on 2025-03-06</p>
              </div>
              <span className="text-teal-400 text-sm">
                <i className="fas fa-check-circle mr-1"></i>Delivered
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-700 pb-2">
              <div>
                <h3 className="font-medium">Package #98XTRP</h3>
                <p className="text-sm text-gray-400">Scanned on 2025-03-05</p>
              </div>
              <span className="text-teal-400 text-sm">
                <i className="fas fa-truck-moving mr-1"></i>In Transit
              </span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Package #77PQLX</h3>
                <p className="text-sm text-gray-400">Delayed on 2025-03-04</p>
              </div>
              <span className="text-red-400 text-sm">
                <i className="fas fa-exclamation-circle mr-1"></i>Delayed
              </span>
            </div>
          </div>
          <button
            onClick={togglePackageHistory}
            className="mt-6 w-full bg-teal-500 hover:bg-teal-400 py-2 rounded-lg font-medium transition-colors focus:outline-none"
          >
            Close History
          </button>
        </div>
      </div>

      {/* Report Modal */}
      {isReportOpen && (
        <div
          id="reportModal"
          className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={handleModalClick}
        >
          <div className="bg-gray-800 rounded-2xl p-6 w-11/12 md:w-1/2 max-w-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold flex items-center">
                <i className="fas fa-flag mr-2 text-red-400"></i>
                Report an Issue
              </h3>
              <button
                onClick={closeReportModal}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <i className="fas fa-times text-2xl"></i>
              </button>
            </div>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Issue Type
                </label>
                <select className="w-full bg-gray-700 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-400">
                  <option>Late Delivery</option>
                  <option>Damaged Package</option>
                  <option>Wrong Address</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea className="w-full bg-gray-700 rounded-lg p-2 h-32 focus:outline-none focus:ring-2 focus:ring-teal-400"></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-400 py-2 rounded-lg font-medium transition-colors focus:outline-none"
              >
                Submit Report
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
