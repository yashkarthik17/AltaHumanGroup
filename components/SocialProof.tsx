
import React from 'react';
import { Instagram, Twitter, Heart, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

const SOCIAL_POSTS = [
  {
    platform: 'twitter',
    author: 'Sarah Jenkins',
    handle: '@sarahj_speaks',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
    content: "I'm so grateful for everyone who speaks out loudly and proudly against hate. We must protect each other. #JoinTheCircle [LOGO]",
    likes: '24K',
    comments: '842',
    verified: true
  },
  {
    platform: 'instagram',
    author: 'Marcus Thompson',
    handle: '@marcus.t',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    content: "Silence is not an option. We stand together. [LOGO] #JoinTheCircle",
    likes: '18K',
    comments: '421',
    verified: false
  },
  {
    platform: 'twitter',
    author: 'Dr. Angela Moore',
    handle: '@drmoore',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&q=80',
    content: "Education is the first step. Action is the second. Join us in making a difference. [LOGO]",
    likes: '31K',
    comments: '1.2K',
    verified: true
  },
  {
    platform: 'instagram',
    author: 'Jordan Lee',
    handle: '@jordanlee_art',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: "Art can change minds. Communities can change the world. #JoinTheCircle [LOGO]",
    likes: '12K',
    comments: '289',
    verified: false
  },
  {
    platform: 'twitter',
    author: 'Community First',
    handle: '@communityfirst',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    content: "When we stand together, hate cannot win. This is our moment. [LOGO]",
    likes: '45K',
    comments: '2.1K',
    verified: true
  },
  {
    platform: 'instagram',
    author: 'David Chen',
    handle: '@davidc',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    content: "Proud to be part of this movement. Every voice matters. #JoinTheCircle [LOGO]",
    likes: '9.8K',
    comments: '156',
    verified: false
  }
];

const SocialCard: React.FC<typeof SOCIAL_POSTS[0]> = ({ 
  platform, 
  author, 
  handle, 
  avatar, 
  content, 
  likes, 
  comments, 
  verified 
}) => {
  const Icon = platform === 'twitter' ? Twitter : Instagram;
  const iconColor = platform === 'twitter' ? 'text-[#1DA1F2]' : 'text-[#E1306C]';
  
  return (
    <div className="flex-shrink-0 w-[300px] sm:w-[380px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 mx-3">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <img 
          src={avatar} 
          alt={author}
          className="w-12 h-12 rounded-full object-cover border border-gray-100"
        />
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-1">
            <span className="font-bold text-gray-900 truncate text-base">{author}</span>
            {verified && (
              <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <span className="text-sm text-gray-500 truncate block">{handle}</span>
        </div>
        <Icon className={`w-5 h-5 flex-shrink-0 ${iconColor}`} />
      </div>
      
      {/* Content */}
      <div className="text-gray-800 leading-relaxed mb-6 text-base font-light">
         {content.split('[LOGO]').map((part, i, arr) => (
            <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                        <span className="inline-flex align-middle mx-1">
                        <Logo className="w-4 h-4" />
                        </span>
                )}
            </React.Fragment>
        ))}
      </div>
      
      {/* Engagement */}
      <div className="flex items-center gap-6 text-gray-500 text-sm pt-4 border-t border-gray-50">
        <div className="flex items-center gap-2 hover:text-pink-500 transition-colors cursor-pointer group">
          <Heart size={18} className="group-hover:fill-current" />
          <span>{likes}</span>
        </div>
        <div className="flex items-center gap-2 hover:text-blue-500 transition-colors cursor-pointer group">
          <MessageCircle size={18} className="group-hover:fill-current" />
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
};

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">The Community</p>
        <h2 className="text-4xl sm:text-5xl font-serif mb-6">Voices of Change</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
          Join thousands of people across the world standing against hate and prejudice.
        </p>
      </div>

      {/* Infinite Scroll Row */}
      <div className="relative pause-on-hover py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrolling track */}
        <div className="animate-scroll-left flex w-max">
          {/* Tripled map for smoother loop on larger screens */}
          {[...SOCIAL_POSTS, ...SOCIAL_POSTS, ...SOCIAL_POSTS].map((post, index) => (
            <SocialCard key={`${post.handle}-${index}`} {...post} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-20 px-6">
        <p className="text-gray-400 mb-8 uppercase tracking-[0.2em] text-[10px] font-bold">Add your voice to the movement</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a91da] transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-400/20"
          >
            <Twitter size={20} fill="currentColor" />
            <span className="font-bold tracking-wide">Tweet Support</span>
          </a>
          <a 
            href="#" 
            className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-full hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
          >
            <Instagram size={20} />
            <span className="font-bold tracking-wide">Share Story</span>
          </a>
        </div>
      </div>
    </section>
  );
};
