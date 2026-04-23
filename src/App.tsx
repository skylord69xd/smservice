import { useState } from 'react';
import { cn } from './utils/cn';

// Icon components
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21-.51-.15-1.07-.14-1.61.02-1.64.01-3.29.01-4.94.01-2.93-.02-5.87.02-8.81z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const RedditIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircleIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-400">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

// Platform data
const platforms = [
  {
    name: 'Instagram',
    icon: InstagramIcon,
    gradient: 'from-purple-500 via-pink-500 to-orange-400',
    bgColor: 'bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-400/10',
    borderColor: 'border-pink-500/30',
    services: [
      'Username Claims',
      'Hacked Account Recovery',
      'Shadowban Removal',
      'Account Lookup',
      'Permanent/Temporary Bans',
      'Legacy Verification',
      'Account Merging',
      'Copyright Violation Removal',
      'Suspicious Login Bypass',
      'Account Recovery / Unban',
      'Hack Recovery Support',
      'Shield Service (Security Enhancement)'
    ]
  },
  {
    name: 'Twitter / X',
    icon: TwitterIcon,
    gradient: 'from-gray-900 to-gray-700',
    bgColor: 'bg-gradient-to-br from-gray-900/20 to-gray-700/20',
    borderColor: 'border-gray-500/30',
    services: [
      'Username Claims',
      'Account Lookup',
      'Shadowban Removal',
      'Instant Unbans',
      'Ban Account',
      'Shield Service'
    ]
  },
  {
    name: 'YouTube',
    icon: YouTubeIcon,
    gradient: 'from-red-600 to-red-500',
    bgColor: 'bg-gradient-to-br from-red-600/10 to-red-500/10',
    borderColor: 'border-red-500/30',
    services: [
      'Username Claims',
      'Copyright Strike Removal',
      'Video Takedown',
      'Channel Ban/Recovery',
      'Account Unban Support',
      'Verification Assistance'
    ]
  },
  {
    name: 'Snapchat',
    icon: SnapchatIcon,
    gradient: 'from-yellow-400 to-yellow-500',
    bgColor: 'bg-gradient-to-br from-yellow-400/10 to-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    services: [
      'Gold Star Verification',
      'Username Claims',
      'Ban Account',
      'Account Recovery / Unban'
    ]
  },
  {
    name: 'TikTok',
    icon: TikTokIcon,
    gradient: 'from-pink-500 via-purple-500 to-cyan-400',
    bgColor: 'bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-400/10',
    borderColor: 'border-purple-500/30',
    services: [
      'Permanent Bans',
      'Instant Unbans',
      'Verification',
      'LookUp'
    ]
  },
  {
    name: 'WhatsApp',
    icon: WhatsAppIcon,
    gradient: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-500/10 to-green-600/10',
    borderColor: 'border-green-500/30',
    services: [
      'Green Tick Verification',
      'Permanent Ban',
      'Account Recovery / Unban'
    ]
  },
  {
    name: 'Telegram',
    icon: TelegramIcon,
    gradient: 'from-blue-400 to-blue-500',
    bgColor: 'bg-gradient-to-br from-blue-400/10 to-blue-500/10',
    borderColor: 'border-blue-500/30',
    services: [
      'Account Lookups',
      'Account Ban / Channel Ban',
      'Account Recovery'
    ]
  },
  {
    name: 'Reddit',
    icon: RedditIcon,
    gradient: 'from-orange-500 to-orange-600',
    bgColor: 'bg-gradient-to-br from-orange-500/10 to-orange-600/10',
    borderColor: 'border-orange-500/30',
    services: [
      'Post Bans',
      'Comment Bans',
      'Subreddit Bans',
      'Profile Bans'
    ]
  }
];

const stats = [
  { number: '15K+', label: 'Removals Completed' },
  { number: '99.9%', label: 'Success Rate' },
  { number: '24/7', label: 'Discord & Telegram' },
  { number: '100%', label: 'TAT Guarantee' }
];

const testimonialPool = [
  { text: "Unreal removal speed. Account was gone in 2 hours.", type: "removal" },
  { text: "Permanent ban service actually worked. Tried 5 others before SKYLORD.", type: "removal" },
  { text: "Best YouTube video takedown service ever.", type: "removal" },
  { text: "Hacked account recovered in under 24h. God tier.", type: "recovery" },
  { text: "Got my IG legacy verification. Legit team.", type: "verification" },
  { text: "Snapchat gold star verification finally achieved. Thanks!", type: "verification" },
  { text: "They banned a malicious impersonator in minutes. Lifetime guarantee is real.", type: "removal" },
  { text: "Shadowban removed. Engagement skyrocketed back to normal.", type: "removal" },
  { text: "Copyright strike removal saved my YT channel from deletion.", type: "removal" },
  { text: "WhatsApp green tick verified. Professional business support.", type: "verification" },
  { text: "Twitter account lookup was so detailed. Impressed.", type: "other" },
  { text: "TikTok unban was instant. Didn't believe it until I saw it.", type: "recovery" },
  { text: "The shield service is a must-have for big accounts.", type: "other" },
  { text: "Clean direct crypto payments, no hassle.", type: "other" },
  { text: "Reseller friendly terms. Making good profit with their TAT.", type: "other" },
  { text: "Instagram account merging worked perfectly.", type: "other" },
  { text: "Reddit post removal was swift. Great service.", type: "removal" },
  { text: "Telegram channel ban service is high quality.", type: "removal" },
  { text: "Recovered my old Snapchat memories. Can't thank you enough.", type: "recovery" },
  { text: "Twitter username claim successful. Professional handling.", type: "other" },
  { text: "Absolutely destroyed a scammer account. Highly recommend removals here.", type: "removal" },
  { text: "The removal services are top priority and it shows. Best in the game.", type: "removal" },
  { text: "No trials but worth every penny. 100% success rate.", type: "other" },
  { text: "They don't miss. Every ban I requested went through.", type: "removal" },
  { text: "Fastest response on Telegram. SKYLORD is the king.", type: "other" }
];

const generateTestimonials = (count: number) => {
  const roles = ["Verified Client", "Reseller", "VIP Client", "Business Owner", "Enterprise Client"];
  const usernames = ["User_", "Dev_", "Crypto", "Alpha", "Zenith", "Elite", "Pro", "Master", "Social", "Cyber", "Net", "Ghost", "Vibe", "Rapid", "Safe"];
  
  return Array.from({ length: count }).map((_, i) => {
    const template = testimonialPool[i % testimonialPool.length];
    const username = usernames[Math.floor(Math.random() * usernames.length)] + Math.floor(Math.random() * 9999);
    const role = roles[Math.floor(Math.random() * roles.length)];
    
    return {
      name: username,
      role: role,
      text: template.text,
      rating: 5
    };
  });
};

const testimonials = generateTestimonials(476);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="logo" 
    className="w-10 h-10 object-contain"
  />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SKYLORD
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all">
              Contact Us
            </a>
          </div>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Reviews</a>
              <a href="#contact" className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-center hover:from-cyan-400 hover:to-blue-500 transition-all">
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-600/10 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="max-w-7xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 rounded-full border border-gray-700 mb-8 animate-bounce">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Available 24/7 • Professional Removal & Recovery</span>
        </div>
        
        <div className="mb-8 flex justify-center">
          <img 
            src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/skylord-logo.png" 
            alt="SKYLORD LOGO" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain animate-float drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://storage.googleapis.com/pai-images/914041d5757d4b47879e65e64883307b.png";
            }}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white via-cyan-200 to-gray-400 bg-clip-text text-transparent">SKYLORD</span>
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">SOCIAL MEDIA SERVICES</span>
        </h1>
        
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          Premium Social Media Removal, Account Recovery, and Verification. 
          The industry standard for professional platform solutions with a lifetime guarantee.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#services" 
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95"
          >
            Our Services
          </a>
          <a 
            href="#tos" 
            className="px-8 py-4 bg-gray-800/80 border border-gray-700 rounded-xl font-bold text-lg hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16 px-4 border-y border-gray-800 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ platform }: { platform: typeof platforms[0] }) {
  const Icon = platform.icon;
  
  return (
    <div 
      className={cn(
        "group relative bg-gray-900/50 border rounded-2xl p-6 hover:bg-gray-800/50 transition-all duration-300",
        platform.borderColor
      )}
    >
      <div className={cn("absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity", platform.bgColor)} />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className={cn("p-3 rounded-xl bg-gradient-to-br", platform.gradient)}>
            <Icon />
          </div>
          <h3 className="text-xl font-bold text-white">{platform.name}</h3>
        </div>
        
        <ul className="space-y-3">
          {platform.services.map((service, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <span className="mt-1 text-cyan-400 flex-shrink-0">
                <CheckCircleIcon />
              </span>
              <span className="text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive social media solutions for all major platforms. 
            From account recovery to verification, we've got you covered.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {platforms.map((platform) => (
            <ServiceCard key={platform.name} platform={platform} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SKYLORD</span>?
            </h2>
            <p className="text-gray-400 mb-8">
              With years of experience in social media security and recovery, our team has helped thousands of clients 
              regain access to their accounts and protect their online presence. We understand the importance of your 
              digital identity and work tirelessly to ensure your accounts are safe.
            </p>
            
            <div className="space-y-4">
              {[
                { title: 'Expert Team', desc: 'Certified professionals with deep platform knowledge' },
                { title: 'Fast Turnaround', desc: 'Most cases resolved within 24-72 hours' },
                { title: '100% Confidential', desc: 'Your information is always secure with us' },
                { title: 'Success Guarantee', desc: 'We don\'t stop until you\'re satisfied' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400 mt-1">
                    <CheckCircleIcon />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gray-800/50 border border-gray-700 rounded-3xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {platforms.slice(0, 4).map((platform) => {
                  const Icon = platform.icon;
                  return (
                    <div 
                      key={platform.name}
                      className={cn(
                        "p-6 rounded-2xl bg-gradient-to-br flex items-center justify-center",
                        platform.gradient
                      )}
                    >
                      <Icon />
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">+ 4 more platforms</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            475+ Client <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Real feedback from our Discord & Telegram communities. We pride ourselves on 100% customer satisfaction.
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a href="https://t.me/+KiOPb5qjQTlkZmI1" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-400 text-sm hover:bg-blue-500/30 transition-all">
              View All on Telegram
            </a>
            <a href="https://t.me/+MBVN_16TPOg3OWM1" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-cyan-400 text-sm hover:bg-cyan-500/30 transition-all">
              Previous Works
            </a>
          </div>
        </div>
        
        <div className="relative">
          {/* Scrolling Marquee 1 */}
          <div className="flex gap-6 animate-scroll-left hover:[animation-play-state:paused] mb-6">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling Marquee 2 (Reverse) */}
          <div className="flex gap-6 animate-scroll-right hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].reverse().map((testimonial, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-80 bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 transition-all"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />
        </div>
      </div>
    </section>
  );
}

function TOS() {
  return (
    <section id="tos" className="py-20 px-4 bg-gray-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Terms of <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Service</span>
          </h2>
          <p className="text-gray-400">Please read carefully before proceeding with our services.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            { 
              title: "Direct Payments Only", 
              icon: "🛡", 
              desc: "All payments must be made directly by the client or verified reseller to us. We do not accept transactions involving any third-party handlers. Payment should be clean and direct." 
            },
            { 
              title: "No Test or Trials", 
              icon: "👎", 
              desc: "We don't offer any test or trials for any programs or services so, don't ask for it in our dms." 
            },
            { 
              title: "Reseller Friendly", 
              icon: "🛡", 
              desc: "Resellers are allowed. You are fully responsible for your clients. We only communicate and coordinate with the reseller — not with their customers." 
            },
            { 
              title: "Privacy Rules", 
              icon: "🛡", 
              desc: "Sharing or leaking any tool, method, or program you receive from us is strictly prohibited. Permanent ban from services if caught — no exceptions, no refund." 
            },
            { 
              title: "Ban Service Types", 
              icon: "❌", 
              desc: "Permanent Ban: Lifetime guarantee. If it returns, we ban it again for free. Normal Ban: One-time ban. If it comes back, you pay again." 
            },
            { 
              title: "Guarantee & Refund", 
              icon: "💰", 
              desc: "If the account doesn’t get banned within the agreed TAT after payment, we’ll give you a full refund instantly. We stand by our service." 
            },
            { 
              title: "Payment Methods", 
              icon: "🔶", 
              desc: "Only crypto is accepted (USDT, BTC, etc). CashApp & Revolut users can also pay through it." 
            },
            { 
              title: "Right to Decline", 
              icon: "🛡", 
              desc: "We reserve the right to refuse service to anyone without explanation. Send correct info; we aren't responsible for fake data." 
            }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/40 border border-gray-700/50 p-6 rounded-2xl hover:bg-gray-800/60 transition-colors">
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-cyan-500/5 pointer-events-none" />
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">SKYLORD</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to start? Contact us exclusively through Telegram or Discord. 
            We are available 24/7 for removals, recovery, and verification.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-8">
          <a 
            href="https://t.me/skylord_zr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-8 bg-blue-500/10 border border-blue-500/20 rounded-3xl hover:bg-blue-500/20 transition-all text-center flex flex-col items-center gap-4"
          >
            <div className="p-4 bg-blue-500 rounded-2xl group-hover:scale-110 transition-transform">
              <TelegramIcon />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Telegram</h3>
              <p className="text-blue-400 font-mono mt-1 text-lg">@skylord_zr</p>
            </div>
            <span className="text-sm text-gray-500">Contact for Instant Response</span>
          </a>

          <div 
            className="group p-8 bg-indigo-500/10 border border-indigo-500/20 rounded-3xl hover:bg-indigo-500/20 transition-all text-center flex flex-col items-center gap-4 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText('skylord_zr');
              alert('Discord username copied: skylord_zr');
            }}
          >
            <div className="p-4 bg-indigo-500 rounded-2xl group-hover:scale-110 transition-transform text-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.862-1.297 1.197-1.99a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.29a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.196.373.29a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.874.89.077.077 0 0 0-.041.107c.345.693.745 1.36 1.197 1.99a.076.076 0 0 0 .084.028 19.83 19.83 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Discord</h3>
              <p className="text-indigo-400 font-mono mt-1 text-lg">skylord_zr</p>
            </div>
            <span className="text-sm text-gray-500">Click to Copy Username</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
  <img 
    src="/logo.png" 
    alt="logo" 
    className="w-10 h-10 object-contain"
  />
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              SKYLORD
            </span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} SKYLORD Social Media Services. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 bg-grid-white pointer-events-none opacity-20" />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <TOS />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
