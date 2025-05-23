import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { 
  faHandsHelping, faBullseye, faUserPlus, faShareAlt,faHeart,
  faHandshake, faCommentDots, faMicrophone, faRobot,
  faQrcode, faGift, faFeather, faCheck, faShare,faShieldAlt,faClock,faUserCheck,faLock,
  faBoxOpen,
  faBoxes
} from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';

const STORAGE_KEY = 'ndakwizeyeStories';
const LIKES_KEY = 'ndakwizeyeLikes';

const heroSlides = [
  {
    title: '#Ndakwizeye',
    subtitle: 'Building Digital Trust',
    description: 'Transforming logistics into moments of human connection through verified trust and shared stories',
    gradient: 'from-teal-400 to-blue-400'
  },
  {
    title: 'SwiftRoute',
    subtitle: 'Redefining Deliveries',
    description: 'Experience logistics with emotional intelligence and technological excellence',
    gradient: 'from-blue-400 to-teal-400'
  }
];

const roadmapPhases = [
  {
    quarter: 'Q1',
    title: 'Foundation Phase',
    items: [
      'System Architecture Design',
      'Core Team Assembly',
      'Initial Partner Onboarding'
    ],
    milestones: ['50+ Partners', 'MVP Development', '$10k Funding']
  },
  {
    quarter: 'Q2',
    title: 'Implementation Phase',
    items: [
      'Trust Token Deployment',
      'Mobile App Launch',
      'Beta Testing Program'
    ],
    milestones: ['1000+ Users', 'App Store Live', '20k Packages']
  }
];

const Campaign = () => {
  const [stories, setStories] = useState([]);
  const [formData, setFormData] = useState({ name: '', story: '' });
  const [likedStories, setLikedStories] = useState(new Set());

  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const savedLikes = JSON.parse(localStorage.getItem(LIKES_KEY)) || [];
    setStories(savedStories);
    setLikedStories(new Set(savedLikes));
  }, []);

  const handleLike = (storyId) => {
    const newLikes = new Set(likedStories);
    const updatedStories = stories.map(story => {
      if (story.id === storyId) {
        if (newLikes.has(storyId)) {
          newLikes.delete(storyId);
          return { ...story, likes: story.likes - 1 };
        } else {
          newLikes.add(storyId);
          return { ...story, likes: (story.likes || 0) + 1 };
        }
      }
      return story;
    });

    setLikedStories(newLikes);
    setStories(updatedStories);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStories));
    localStorage.setItem(LIKES_KEY, JSON.stringify([...newLikes]));
  };

 const handleShare = async (story) => {
  try {
    const shareContent = `${story?.story || ''}\n\n- ${story?.name || 'Anonymous'}\n${window.location.href}`;
    
    const shareData = {
      title: `#Ndakwizeye Story`,
      text: shareContent,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(shareContent);
      alert('Story content copied to clipboard!');
    } else {
      alert('Sharing not supported in this browser');
    }
  } catch (err) {
    console.error('Sharing failed:', err);
    alert('Sharing failed. Please try again.');
  }
};

    
  useEffect(() => {
    const savedStories = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setStories(savedStories);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: Date.now(),
      ...formData,
      date: new Date().toISOString()
    };
    const updatedStories = [newStory, ...stories];
    setStories(updatedStories);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStories));
    setFormData({ name: '', story: '' });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white relative overflow-x-hidden">
      <svg className="absolute top-20 -right-40 opacity-10 w-[600px] h-[600px] z-0 animate-rotate">
        <path d="M241 161C207 134 112 81 110 36C108-8 190-22 251 17C312 56 325 136 278 177C231 218 164 208 127 173" 
              stroke="#38b2ac" fill="none" strokeWidth="2"/>
      </svg>

      {/* Navigation */}
      <nav className="fixed container mx-auto px-6 py-8 backdrop-blur-lg sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg" />
            <span className="text-xl font-bold">Ndakwizeye</span>
          </div>
          <div className="hidden md:flex gap-8">
            {['Mission', 'Pillars', 'Roadmap', 'Metrics', 'Stories'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} 
                 className="hover:text-teal-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Carousel */}
      <section className="relative py-28 px-6 z-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          loop
          className="container mx-auto"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                  <span className={`bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                    {slide.title}
                  </span>
                  <div className="mt-4">{slide.subtitle}</div>
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
                  {slide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Mission Objectives */}
      <section id="mission" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our <span className="text-teal-400">Mission</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: faHandsHelping, title: 'Build Trust', text: 'Reinforce confidence through visible tokens...' },
              { icon: faBullseye, title: 'Differentiate', text: 'Position as emotional bridge...' },
              { icon: faUserPlus, title: 'Drive Adoption', text: 'Track 500+ packages...' },
              { icon: faShareAlt, title: 'Create Moments', text: 'Turn deliveries into viral content...' }
            ].map((obj, index) => (
              <div key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-teal-400/20 hover:-translate-y-2 transition">
                <div className="w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-6">
                  <FontAwesomeIcon icon={obj.icon} className="text-teal-400 text-xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{obj.title}</h3>
                <p className="text-gray-400">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Pillars */}
      <section id="pillars" className="py-28 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden">
                <img src="/ndakwizeye rider.jpg" 
                     className="w-full h-96 object-cover" 
                     alt="Trust Tokens" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-teal-400/10 rounded-2xl flex items-center justify-center animate-blob">
                <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-center mb-20">
                Campaign <span className="text-blue-400">Pillars</span>
              </h2>
              <div className="grid lg:grid-cols-2 gap-16">
                <Pillar 
                  icon={faHandshake}
                  color="teal"
                  title="Trust Tokens"
                  items={[
                    { icon: faQrcode, text: 'Physical/Digital Trust Cards' },
                    { icon: faGift, text: 'Personalized Gift Messages' }
                  ]}
                />
                <Pillar 
                  icon={faCommentDots}
                  color="blue"
                  title="Interactive Tools"
                  items={[
                    { icon: faMicrophone, text: 'Voice Note Messages' },
                    { icon: faRobot, text: 'Smart Chat Assistance' }
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Share Story Section */}
      <section id="share-story" className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">
              Share Your <span className="text-teal-400">#Ndakwizeye</span> Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Inspire others with your personal experience. Your story could be the spark that builds trust in someone's heart.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-24 bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-[2rem] p-1">
            <div className="bg-gray-900/20 rounded-[2rem] p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b-2 border-teal-400/20 pb-3 text-xl focus:border-teal-400/50 outline-none transition-all"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-5 text-gray-400 text-sm">Your Name</label>
                </div>
                
                <div className="relative">
                  <textarea
                    id="story"
                    value={formData.story}
                    onChange={(e) => setFormData({ ...formData, story: e.target.value })}
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-teal-400/20 pb-3 text-xl focus:border-teal-400/50 outline-none resize-none transition-all"
                    placeholder=" "
                  />
                  <label className="absolute left-0 -top-5 text-gray-400 text-sm">Your Story</label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-400 to-blue-400 hover:opacity-90 rounded-xl py-5 text-lg font-semibold transition-all flex items-center justify-center gap-3"
                >
                  <FontAwesomeIcon icon={faFeather} />
                  Publish Your Story
                </button>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <div key={story.id} className="group relative p-6 bg-gray-900/20 rounded-2xl hover:bg-gray-900/40 transition-all duration-300">
                <div className="absolute inset-0 border border-teal-400/20 rounded-2xl opacity-20 group-hover:opacity-40 transition-all pointer-events-none" />
                  <div className="relative z-10"> 
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-xl flex items-center justify-center text-lg font-bold">
                    {story.name[0].toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{story.name}</h3>
                    <p className="text-sm text-teal-400/80">
                      {new Date(story.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300/90 leading-relaxed mb-6">{story.story}</p>
                  <div className="flex items-center justify-between">
                    
  <div className="flex gap-3">
    <button 
      onClick={() => handleLike(story.id)}
      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-all cursor-pointer"
    >
      <FontAwesomeIcon 
        icon={likedStories.has(story.id) ? faHeartSolid : faHeart} 
        className={`text-sm ${likedStories.has(story.id) ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-red-300'}`}
      />
      <span className="text-sm">{story.likes || 0}</span>
    </button>
    <button 
  onClick={(e) => {
    e.stopPropagation();
    if (story?.id) handleShare(story);
  }}
  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-all cursor-pointer group"
  disabled={!story}
>
  <FontAwesomeIcon 
    icon={faShare} 
    className={`text-sm ${
      story 
        ? 'text-gray-400 group-hover:text-blue-400' 
        : 'text-gray-600 cursor-not-allowed'
    } transition-colors`}
  />
  <span className={`text-sm ${
    story 
      ? 'text-gray-400 group-hover:text-blue-300' 
      : 'text-gray-600 cursor-not-allowed'
  } transition-colors`}>
    Share
  </span>
</button>
  </div>
</div>
</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-20">
            Implementation <span className="text-blue-400">Timeline</span>
          </h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 w-1 h-full bg-gradient-to-b from-teal-400 to-blue-400 transform -translate-x-1/2" />
            <div className="space-y-24">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative lg:grid grid-cols-2 gap-16 items-center">
                  <div className="bg-gray-900/50 p-8 rounded-2xl lg:mr-16 mb-8 lg:mb-0">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-400 rounded-lg flex items-center justify-center">
                        <span className="font-bold">{phase.quarter}</span>
                      </div>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                    </div>
                    <ul className="space-y-4 text-gray-300">
                      {phase.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <FontAwesomeIcon icon={faCheck} className="text-teal-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-start-2 lg:pl-16">
                    <div className="bg-gray-900/50 p-8 rounded-2xl">
                      <h4 className="text-xl font-bold mb-4">Milestone Achievements</h4>
                      <div className="flex flex-wrap gap-4">
                        {phase.milestones.map((milestone, idx) => (
                          <div key={idx} className="py-2 px-4 bg-teal-400/10 rounded-full text-teal-400">
                            {milestone}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
{/* You Deserve to Trust Section */}
<section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        You Deserve to 
        <span className="bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent"> Trust</span>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        At Swift Route, we're redefining trust in logistics and delivery through transparent operations and verifiable interactions
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
      {[
        {
          icon: faShieldAlt,
          title: "Real-Time Verification",
          text: "QR-code enabled tracking for every delivery milestone"
        },
        {
          icon: faClock,
          title: "Instant Updates",
          text: "Get notified at every package handoff stage"
        },
        {
          icon: faUserCheck,
          title: "Driver Verification",
          text: "Biometrically authenticated delivery personnel"
        },
        {
          icon: faLock,
          title: "Secure Chain",
          text: "Blockchain-backed transaction records"
        }
      ].map((item, index) => (
        <div key={index} className="p-8 bg-gray-900/50 rounded-2xl border border-teal-400/20 hover:-translate-y-2 transition">
          <div className="w-12 h-12 bg-teal-400/10 rounded-xl flex items-center justify-center mb-6">
            <FontAwesomeIcon icon={item.icon} className="text-teal-400 text-xl" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
          <p className="text-gray-400">{item.text}</p>
        </div>
      ))}
    </div>

    {/* Why Trust Matters */}
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="w-full h-96 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-3xl blur-[100px] opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <FontAwesomeIcon icon={faBoxes} className="text-teal-400 text-9xl opacity-20" />
        </div>
      </div>
      
      <div>
        <h3 className="text-3xl font-bold mb-8">
          Why Trust Matters in 
          <span className="text-blue-400"> Logistics</span>
        </h3>
        <div className="space-y-8">
          {[
            "Builds long-term customer relationships through reliability",
            "Reduces conflict and dispute resolution costs",
            "Enables seamless cross-border transactions",
            "Creates community-driven delivery networks",
            "Accelerates adoption of new technologies"
          ].map((point, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-6 h-6 bg-teal-400/10 rounded-full flex items-center justify-center mt-1">
                <FontAwesomeIcon icon={faCheck} className="text-teal-400 text-sm" />
              </div>
              <p className="text-gray-400 text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gray-900/80 py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-6 mb-8">
            {['facebook', 'twitter', 'instagram'].map((platform) => (
              <a key={platform} href="#" className="hover:text-teal-400">
                <FontAwesomeIcon icon={['fab', platform]} />
              </a>
            ))}
          </div>
          <p className="text-gray-400">&copy; 2025 Ndakwizeye Campaign. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const Pillar = ({ icon, color, title, items }) => (
  <div className="flex gap-8 items-start">
    <div className="w-24 flex-shrink-0">
      <div className={`w-full aspect-square bg-${color}-400/10 rounded-2xl flex items-center justify-center`}>
        <FontAwesomeIcon icon={icon} className={`text-3xl text-${color}-400`} />
      </div>
    </div>
    <div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <ul className="space-y-4 text-gray-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <FontAwesomeIcon icon={item.icon} className={`text-${color}-400 mr-3`} />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Campaign;