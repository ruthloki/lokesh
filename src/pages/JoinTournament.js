import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinTournament = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    sport: '',
    level: '',
    teamName: '',
    preferredDate: '',
    experience: '',
    achievements: '',
    notes: '',
    terms: false,
    newsletter: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'dob', 'sport', 'level'];
    const missingFields = requiredFields.filter(field => !formData[field].trim());
    
    if (missingFields.length > 0) {
      showNotification('Please fill in all required fields.', 'error');
      return;
    }
    
    if (!formData.terms) {
      showNotification('Please agree to the Terms and Conditions.', 'error');
      return;
    }

    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      showNotification('Tournament registration submitted successfully! You will receive a confirmation email within 24 hours.', 'success');
      setIsLoading(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        sport: '',
        level: '',
        teamName: '',
        preferredDate: '',
        experience: '',
        achievements: '',
        notes: '',
        terms: false,
        newsletter: false
      });
      
      // Redirect after success
      setTimeout(() => {
        navigate('/tournaments');
      }, 3000);
    }, 2000);
  };

  const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-xl text-white font-medium transform transition-all duration-300 max-w-md ${
      type === 'error' ? 'bg-red-500' : 'bg-green-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
      notification.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      notification.style.opacity = '0';
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  };

  const teamSports = ['football', 'basketball', 'cricket', 'volleyball'];
  const showTeamName = teamSports.includes(formData.sport);

  return (
    <main className="relative z-10 py-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-accent via-green-400 to-blue-400 bg-clip-text text-transparent animate-text-glow">
              Join Tournament
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to compete? Fill out the form below to join your next tournament and showcase your skills.
          </p>
        </div>

        {/* Tournament Registration Form */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 glass-morphism p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="text-3xl">👤</span>
                <span>Personal Information</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your last name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Date of Birth *</label>
                  <input 
                    type="date" 
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Gender</label>
                  <select 
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Tournament Selection */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="text-3xl">🏆</span>
                <span>Tournament Details</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Sport Category *</label>
                  <select 
                    name="sport"
                    value={formData.sport}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a sport</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                    <option value="cricket">Cricket</option>
                    <option value="volleyball">Volleyball</option>
                    <option value="table-tennis">Table Tennis</option>
                    <option value="badminton">Badminton</option>
                    <option value="athletics">Athletics</option>
                    <option value="swimming">Swimming</option>
                    <option value="boxing">Boxing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Tournament Level *</label>
                  <select 
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
                {showTeamName && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Team Name *</label>
                    <input 
                      type="text" 
                      name="teamName"
                      value={formData.teamName}
                      onChange={handleInputChange}
                      required={showTeamName}
                      className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="Enter team name"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Preferred Tournament Date</label>
                  <input 
                    type="date" 
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Experience & Additional Info */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                <span className="text-3xl">📊</span>
                <span>Experience & Additional Information</span>
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Years of Experience</label>
                  <select 
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="2-5">2-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Previous Achievements (Optional)</label>
                  <textarea 
                    name="achievements"
                    value={formData.achievements}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your previous tournament wins, rankings, or notable achievements..."
                  ></textarea>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Special Requirements or Notes</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Any dietary restrictions, accessibility needs, or other special requirements..."
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="flex items-start space-x-3">
                <input 
                  id="terms" 
                  name="terms"
                  type="checkbox" 
                  checked={formData.terms}
                  onChange={handleInputChange}
                  required
                  className="w-5 h-5 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2 mt-1"
                />
                <div>
                  <label htmlFor="terms" className="text-sm text-gray-300">
                    I agree to the <a href="#" className="text-primary hover:text-blue-400 underline">Terms and Conditions</a> 
                    and <a href="#" className="text-primary hover:text-blue-400 underline">Privacy Policy</a>. 
                    I understand that tournament fees are non-refundable and I commit to participating 
                    in the selected tournament if accepted. *
                  </label>
                </div>
              </div>
              <div className="flex items-start space-x-3 mt-4">
                <input 
                  id="newsletter" 
                  name="newsletter"
                  type="checkbox" 
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-primary bg-white/10 border-white/20 rounded focus:ring-primary focus:ring-2 mt-1"
                />
                <label htmlFor="newsletter" className="text-sm text-gray-300">
                  I would like to receive updates about upcoming tournaments and sports events via email.
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button 
                type="submit" 
                disabled={isLoading}
                className="bg-gradient-to-r from-accent to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-12 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Submitting...' : 'Join Tournament'}
              </button>
              <p className="text-gray-400 text-sm mt-4">
                You will receive a confirmation email within 24 hours
              </p>
            </div>
          </form>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-2">Win Prizes</h3>
            <p className="text-gray-300">Compete for cash prizes, trophies, and recognition in your sport.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold text-white mb-2">Meet Athletes</h3>
            <p className="text-gray-300">Connect with like-minded athletes and build lasting friendships.</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 glass-morphism text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold text-white mb-2">Improve Skills</h3>
            <p className="text-gray-300">Challenge yourself against top competitors and elevate your game.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default JoinTournament;