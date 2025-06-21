import React, { useState, useEffect } from 'react';
import { ExternalLink, Star, Trophy, Code, Calendar, TrendingUp, User, Award, Target, Zap, Settings, RefreshCw, AlertCircle, Eye, EyeOff, Image } from 'lucide-react';

const CodingProfilesDashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usernames, setUsernames] = useState({
    leetcode: 'shreeyasriv12',
    geeksforgeeks: 'shreeyasrivh7ss',
    codechef: 'troop_eagle_85',
    codeforces: 'Shreeya_sriv12',
    hackerrank: '404notfound123',
    atcoder: 'shreeyasriv12',
    github: 'shreesriv12'
  });
  const [showSettings, setShowSettings] = useState(false);
  const [refreshing, setRefreshing] = useState({});
  const [imageErrors, setImageErrors] = useState({});
  const [viewMode, setViewMode] = useState('visual'); // 'visual' or 'stats'

  // Platform configurations with visual stats URLs
  const platformConfigs = {
    leetcode: {
      color: 'from-orange-400 to-orange-600',
      icon: <Code className="w-6 h-6" />,
      description: 'Algorithm & Data Structure Problems',
      hasVisualStats: true,
      getVisualUrl: (username) => `https://leetcard.jacoblin.cool/${username}?theme=dark&font=Baloo%202&ext=heatmap&border=0`,
      getAltVisualUrl: (username) => `https://leetcode-stats-api.herokuapp.com/${username}/solved`,
      profileUrl: (username) => `https://leetcode.com/${username}`,
      fallbackApi: (username) => `https://leetcode-stats-api.herokuapp.com/${username}`
    },
    codeforces: {
      color: 'from-blue-400 to-blue-600',
      icon: <Zap className="w-6 h-6" />,
      description: 'Algorithmic Contests & Problem Solving',
      hasVisualStats: true,
      getVisualUrl: (username) => `https://codeforces-readme-stats.vercel.app/api/card?username=${username}&theme=dark&force_username=true&border=%23334155`,
      getAltVisualUrl: (username) => `https://cf-stats-api.herokuapp.com/${username}`,
      profileUrl: (username) => `https://codeforces.com/profile/${username}`,
      fallbackApi: (username) => `https://codeforces.com/api/user.info?handles=${username}`
    },
codechef: {
  color: 'from-yellow-400 to-yellow-600',
  icon: <Trophy className="w-6 h-6" />,
  description: 'Competitive Programming Contests',
  hasVisualStats: true,

  // ✅ SVG badge
  getVisualUrl: (username) => `https://cp-logo.vercel.app/codechef/${username}?logo=true`,

  // ❌ no usable alt image or working JSON API
  getAltVisualUrl: () => '',
  fallbackApi: null,

  // ✅ actual profile URL
  profileUrl: (username) => `https://www.codechef.com/users/${username}`
},
    geeksforgeeks: {
      color: 'from-green-400 to-green-600',
      icon: <Target className="w-6 h-6" />,
      description: 'Coding Practice & Interview Prep',
      hasVisualStats: true,
      getVisualUrl: (username) => `https://geeks-for-geeks-stats-card.vercel.app/?username=${username}&theme=dark`,
      getAltVisualUrl: (username) => `https://gfg-readme-stats.vercel.app/api?username=${username}&theme=dark`,
      profileUrl: (username) => `https://auth.geeksforgeeks.org/user/${username}`,
      fallbackApi: (username) => `https://geeksforgeeks-api.vercel.app/${username}`
    },
hackerrank: {
  color: 'from-purple-400 to-purple-600',
  icon: <Award className="w-6 h-6" />,
  description: 'Skill Assessment & Challenges',
  hasVisualStats: true,
  getVisualUrl: (username) => 
    `https://cp-logo.vercel.app/hackerrank/${username}?logo=true`,
  getAltVisualUrl: () => '',
  profileUrl: (username) => `https://www.hackerrank.com/${username}`,
  fallbackApi: null,
}
,
 atcoder: {
  color: 'from-red-400 to-red-600',
  icon: <Star className="w-6 h-6" />,
  description: 'Japanese Competitive Programming',
  hasVisualStats: false, // readme-stats is broken
  getVisualUrl: () => '',
  getAltVisualUrl: () => '',
  profileUrl: (username) => `https://atcoder.jp/users/${username}`,
  fallbackApi: (username) => `https://atcoder.jp/users/${username}/history/json`
},
    github: {
      color: 'from-gray-400 to-gray-600',
      icon: <Code className="w-6 h-6" />,
      description: 'Open Source Contributions',
      hasVisualStats: true,
      getVisualUrl: (username) => `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&hide_border=true`,
      getAltVisualUrl: (username) => `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true`,
      profileUrl: (username) => `https://github.com/${username}`,
      fallbackApi: (username) => `https://api.github.com/users/${username}`
    }
  };

  // Initialize profiles
  const initializeProfiles = () => {
    const profilesData = Object.entries(usernames).map(([platform, username]) => {
      const config = platformConfigs[platform];
      if (!config || !username || username.includes('your-')) return null;

      return {
        platform: platform.charAt(0).toUpperCase() + platform.slice(1),
        username,
        platformKey: platform,
        ...config
      };
    }).filter(Boolean);

    setProfiles(profilesData);
    setLoading(false);
  };

  // Handle image load error
  const handleImageError = (platformKey, imageType = 'primary') => {
    setImageErrors(prev => ({
      ...prev,
      [`${platformKey}-${imageType}`]: true
    }));
  };

  // Get image URL with fallback
  const getImageUrl = (profile, imageType = 'primary') => {
    const errorKey = `${profile.platformKey}-${imageType}`;
    
    if (imageErrors[errorKey] && imageType === 'primary') {
      return profile.getAltVisualUrl ? profile.getAltVisualUrl(profile.username) : null;
    }
    
    return profile.getVisualUrl(profile.username);
  };

  // Refresh profiles
  const refreshProfiles = () => {
    setImageErrors({});
    setRefreshing(true);
    
    // Force reload images by adding timestamp
    const timestamp = Date.now();
    setProfiles(prev => prev.map(profile => ({
      ...profile,
      refreshKey: timestamp
    })));
    
    setTimeout(() => setRefreshing(false), 1000);
  };

  // Update usernames and save to localStorage
  const updateUsernames = (newUsernames) => {
    setUsernames(newUsernames);
    localStorage.setItem('coding-profiles-usernames', JSON.stringify(newUsernames));
  };

  // Load usernames from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('coding-profiles-usernames');
    if (saved) {
      try {
        setUsernames(JSON.parse(saved));
      } catch (e) {
        console.error('Error parsing saved usernames:', e);
      }
    }
  }, []);

  // Initialize profiles when usernames change
  useEffect(() => {
    initializeProfiles();
  }, [usernames]);

  // Settings modal component
  const renderSettings = () => {
    const [tempUsernames, setTempUsernames] = useState(usernames);

    return (
        
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md max-h-[80vh] overflow-y-auto shadow-2xl">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gray-800">
            <Settings className="w-5 h-5" />
            Configure Usernames
          </h3>
          
          <div className="space-y-4">
            {Object.entries(tempUsernames).map(([platform, username]) => (
              <div key={platform}>
                <label className="block text-sm font-medium mb-1 capitalize text-gray-700">
                  {platform} Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setTempUsernames(prev => ({
                    ...prev,
                    [platform]: e.target.value
                  }))}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder={`Enter your ${platform} username`}
                />
              </div>
            ))}
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={() => {
                updateUsernames(tempUsernames);
                setShowSettings(false);
              }}
              className="flex-1 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Save & Apply
            </button>
            <button
              onClick={() => setShowSettings(false)}
              className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Render visual stats card
  const renderVisualCard = (profile) => {
    const imageUrl = getImageUrl(profile);
    const errorKey = `${profile.platformKey}-primary`;
    const hasError = imageErrors[errorKey];

    return (
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            {profile.icon}
            <span className="font-medium text-white">{profile.platform}</span>
          </div>
          <a
            href={profile.profileUrl(profile.username)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        <div className="mb-3">
          <p className="text-gray-300 text-sm">@{profile.username}</p>
          <p className="text-gray-400 text-xs">{profile.description}</p>
        </div>

        {imageUrl && !hasError ? (
          <div className="relative rounded-lg overflow-hidden bg-gray-700/50 min-h-[200px] flex items-center justify-center">
            <img
              src={`${imageUrl}${profile.refreshKey ? `&t=${profile.refreshKey}` : ''}`}
              alt={`${profile.platform} stats for ${profile.username}`}
              className="w-full h-auto max-w-full"
              onError={() => handleImageError(profile.platformKey, 'primary')}
              onLoad={() => {
                // Remove error state if image loads successfully
                setImageErrors(prev => {
                  const newErrors = { ...prev };
                  delete newErrors[errorKey];
                  return newErrors;
                });
              }}
            />
          </div>
        ) : (
          <div className="bg-gray-700/50 rounded-lg p-8 text-center">
            <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">Visual stats unavailable</p>
            <p className="text-gray-500 text-xs mt-1">Visit profile for details</p>
          </div>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading your profiles...</p>
        </div>
      </div>
    );
  }

  return (
       <section 
      className="relative min-h-screen flex items-center justify-center py-20 px-6 sm:px-12 overflow-hidden"
      id="coding"
    >
        <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            🚀 Competitive Programming Dashboard
          </h1>
          <p className="text-gray-400 mb-6">
            Visual stats from your coding platforms
          </p>
          
          {/* Control buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setShowSettings(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium"
            >
              <Settings className="w-4 h-4" />
              Configure
            </button>
            <button
              onClick={refreshProfiles}
              disabled={refreshing}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
              {refreshing ? 'Refreshing...' : 'Refresh All'}
            </button>
          </div>
        </div>

        {/* Error display */}
        {error && (
          <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-red-200">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          </div>
        )}

        {/* Profiles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {profiles.map((profile) => (
            <div
              key={profile.platformKey}
              className={`bg-gradient-to-br ${profile.color} rounded-xl p-1 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
            >
              {renderVisualCard(profile)}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Image className="w-4 h-4" />
              <span className="text-sm">Visual stats from official APIs</span>
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div className="text-gray-400 text-sm">
              Last updated: {new Date().toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && renderSettings()}
    </div>
    </section>
  );
};

export default CodingProfilesDashboard;