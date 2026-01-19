
import React, { useEffect, useRef } from 'react';
import { Instagram, Twitter, Heart, MessageCircle } from 'lucide-react';
import { Logo, StaticLogo } from './Logo';

const SOCIAL_POSTS = [
  {
    platform: 'twitter',
    author: 'Sarah Jenkins',
    handle: '@sarahj_speaks',
    avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80',
    content: "I'm so grateful for everyone who speaks out loudly and proudly against hate. We must protect each other. #JoinTheCircle [LOGO]",
    likes: '24K',
    comments: '842',
    verified: true,
    position: 'top-[10%] left-[5%] md:left-[10%]',
    speed: 0.15,
    rotation: '-rotate-3'
  },
  {
    platform: 'instagram',
    author: 'Marcus Thompson',
    handle: '@marcus.t',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    content: "Silence is not an option. We stand together. [LOGO] #JoinTheCircle",
    likes: '18K',
    comments: '421',
    verified: false,
    position: 'top-[20%] right-[5%] md:right-[10%]',
    speed: -0.2,
    rotation: 'rotate-2'
  },
  {
    platform: 'twitter',
    author: 'Dr. Angela Moore',
    handle: '@drmoore',
    avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?w=100&q=80',
    content: "Education is the first step. Action is the second. Join us. [LOGO]",
    likes: '31K',
    comments: '1.2K',
    verified: true,
    position: 'bottom-[20%] left-[5%] md:left-[15%]',
    speed: -0.15,
    rotation: 'rotate-1'
  },
  {
    platform: 'instagram',
    author: 'Jordan Lee',
    handle: '@jordanlee_art',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    content: "Art can change minds. Communities can change the world. [LOGO]",
    likes: '12K',
    comments: '289',
    verified: false,
    position: 'bottom-[10%] right-[5%] md:right-[12%]',
    speed: 0.25,
    rotation: '-rotate-2'
  },
  {
    platform: 'twitter',
    author: 'Community First',
    handle: '@communityfirst',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
    content: "When we stand together, hate cannot win. This is our moment. [LOGO]",
    likes: '45K',
    comments: '2.1K',
    verified: true,
    position: 'top-[50%] left-[5%] hidden xl:block',
    speed: 0.1,
    rotation: 'rotate-3'
  }
];

interface ParallaxItemProps {
  speed: number;
  className?: string;
  children: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement | null>;
}

const ParallaxItem: React.FC<ParallaxItemProps> = ({ speed, className, children, sectionRef }) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!itemRef.current || !sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      // Check if section is visible
      if (rect.bottom > 0 && rect.top < viewHeight) {
        // Calculate offset relative to the center of the viewport
        const sectionCenter = rect.top + rect.height / 2;
        const viewCenter = viewHeight / 2;
        const distFromCenter = viewCenter - sectionCenter;
        
        // Move element
        const yOffset = distFromCenter * speed;
        itemRef.current.style.transform = `translateY(${yOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed, sectionRef]);

  return (
    <div ref={itemRef} className={`absolute will-change-transform transition-transform duration-75 ease-out ${className}`}>
      {children}
    </div>
  );
};

type SocialPost = typeof SOCIAL_POSTS[number];

const SocialCard: React.FC<{ post: SocialPost }> = ({ post }) => {
    const Icon = post.platform === 'twitter' ? Twitter : Instagram;
    const iconColor = post.platform === 'twitter' ? 'text-[#1DA1F2]' : 'text-[#E1306C]';

    return (
        <div className={`w-[280px] sm:w-[300px] bg-white/95 backdrop-blur-sm text-black p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 ${post.rotation} hover:scale-105 hover:rotate-0 hover:z-50 transition-all duration-300 flex-shrink-0 snap-center`}>
            <div className="flex items-center gap-3 mb-3">
                <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full object-cover border border-gray-200" />
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1">
                        <p className="font-bold text-sm truncate">{post.author}</p>
                        {post.verified && <div className="w-3 h-3 bg-blue-500 rounded-full flex items-center justify-center text-[8px] text-white">✓</div>}
                    </div>
                    <p className="text-xs text-gray-500 truncate">{post.handle}</p>
                </div>
                <Icon size={16} className={iconColor} />
            </div>
            
            <div className="text-sm text-gray-800 leading-relaxed mb-3 font-light">
                {post.content.split('[LOGO]').map((part, i, arr) => (
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

            <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50 pt-3">
                <div className="flex items-center gap-1">
                    <Heart size={14} /> {post.likes}
                </div>
                <div className="flex items-center gap-1">
                    <MessageCircle size={14} /> {post.comments}
                </div>
            </div>
        </div>
    )
}

export const SocialShare: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative min-h-screen md:min-h-[140vh] bg-[#f8f8f8] overflow-hidden flex flex-col items-center justify-center py-20">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Central Content */}
      <div className="z-30 text-center px-4 relative max-w-4xl mx-auto mix-blend-multiply md:pointer-events-none mb-12 md:mb-0">
        <p className="text-xs md:text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-6 animate-pulse-subtle">The Community</p>
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-4 tracking-tighter text-black leading-none">
          Voices of <br/> Change
        </h2>
        <div className="w-24 h-24 md:w-32 md:h-32 mx-auto my-8 relative flex items-center justify-center">
             <StaticLogo className="w-full h-full animate-spin-slow" />
        </div>
        <p className="text-lg md:text-2xl text-gray-500 font-light max-w-xl mx-auto">
          Join the conversation. <br/> Stand with us.
        </p>
      </div>

      {/* Desktop: Parallax Floating Cards */}
      <div className="hidden md:block absolute inset-0 z-20 pointer-events-none w-full h-full overflow-hidden">
        {SOCIAL_POSTS.map((post, idx) => (
            <ParallaxItem key={idx} speed={post.speed} className={`pointer-events-auto ${post.position}`} sectionRef={sectionRef}>
                <SocialCard post={post} />
            </ParallaxItem>
        ))}
      </div>
      
      {/* Mobile: Horizontal Scroll List below content */}
      <div className="md:hidden w-full overflow-x-auto pb-8 pt-4 px-6 snap-x snap-mandatory flex gap-4 no-scrollbar z-40">
           {SOCIAL_POSTS.map((post, idx) => (
               <SocialCard key={idx} post={post} />
           ))}
           {/* Spacer */}
           <div className="w-4 flex-shrink-0"></div>
      </div>

      {/* Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-100 rounded-full blur-3xl opacity-30 -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>

    </section>
  );
};
