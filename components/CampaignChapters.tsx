
import React, { useState } from 'react';
import { ChevronDown, Landmark, Fingerprint, Sword, Mic2, AlertTriangle, Shield, Scale, Home, Vote, Clapperboard, Medal, Heart, BookOpen } from 'lucide-react';

const CHAPTERS = [
  {
    id: "economics",
    title: "Discredited Wealth",
    subtitle: "The $4 Billion Foundation",
    icon: <Landmark size={24} />,
    image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Slave labor paid for a considerable share of the capital, iron, and manufactured goods that formed the basis of American economic growth. Enslaved people provided the labor for production of cotton, tobacco, and sugar, which enabled the growth of textile factories, the meat processing industry, insurance companies, shippers, and cotton brokers.
        </p>
        <p className="text-lg leading-relaxed font-light">
          The overall economic benefit to America from slave labor has been estimated at <strong className="font-bold">$4 billion in 19th-century dollars</strong>—equivalent to trillions in today's economy.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-gray-900 text-white p-6">
            <div className="text-3xl font-bold mb-2">$4B+</div>
            <div className="text-sm text-gray-400">Value of slave labor in 19th-century dollars</div>
          </div>
          <div className="bg-gray-100 p-6">
            <div className="text-3xl font-bold mb-2">10x</div>
            <div className="text-sm text-gray-600">Median wealth gap between white and Black families today</div>
          </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-l-4 border-black">
          <p className="font-serif italic text-xl">
            "When we talk about American prosperity, we must acknowledge that this wealth was generated through the unpaid, forced labor of millions of African Americans whose descendants were then systematically excluded from sharing in that wealth."
          </p>
        </div>
      </div>
    )
  },
  {
    id: "contributions",
    title: "Success of America",
    subtitle: "Innovators, Leaders & Pioneers",
    icon: <Fingerprint size={24} />,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Despite facing systemic barriers at every turn, African Americans have been central to America's greatest achievements—in science, politics, business, arts, and beyond. Their contributions are not a footnote to American history; they ARE American history.
        </p>
        
        <div className="grid gap-6 mt-8">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 rounded-sm">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3">SCIENCE & INNOVATION</h4>
            <p className="mb-4">
              From inventor <strong>George Washington Carver</strong>, who revolutionized American agriculture, to <strong>Robert Henry Lawrence Jr.</strong>, the first African American selected for astronaut training, Black scientists have pushed the boundaries of human knowledge.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "wars",
    title: "Service & Sacrifice",
    subtitle: "Fighting for a Country That Fought Against Them",
    icon: <Sword size={24} />,
    image: "https://images.unsplash.com/photo-1610173827002-6b4e92e02b0c?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          For much of American history, African American soldiers were placed in segregated units and given separate and unequal treatment—despite serving with extraordinary distinction in every American conflict. They fought for freedoms abroad that were denied to them at home.
        </p>
      </div>
    )
  },
  {
    id: "culture",
    title: "Cultural Appropriation",
    subtitle: "Consuming the Fruit, Poisoning the Root",
    icon: <Mic2 size={24} />,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          Cultural appropriation occurs when a privileged group takes cultural elements from a primarily disadvantaged group—often without credit, compensation, or understanding of the cultural significance.
        </p>
      </div>
    )
  },
  {
    id: "violence",
    title: "Analyzing Abuse",
    subtitle: "The Many Forms of Violence",
    icon: <AlertTriangle size={24} />,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-8">
        <p className="text-lg leading-relaxed font-light">
          From George Floyd to Tyre Nichols to thousands of others, African Americans are regularly victimized by documented cases of violence—from police brutality to hate crimes to the slow violence of systemic neglect.
        </p>
      </div>
    )
  },
  {
    id: "police",
    title: "Police Brutality",
    subtitle: "Protect and Serve—But Not Everyone",
    icon: <Shield size={24} />,
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <div className="bg-gray-900 text-white p-6 rounded-sm">
          <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3">HISTORICAL CONTEXT</h4>
          <p className="text-lg">
            The institution of the sheriff was originally created, in part, to capture enslaved Black people who had escaped. Even after slavery was abolished, anti-Black bias has persisted in police forces to this day.
          </p>
        </div>
      </div>
    )
  },
  {
    id: "judicial",
    title: "Judicial Prejudice",
    subtitle: "A System Designed for Inequality",
    icon: <Scale size={24} />,
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Prejudice against African Americans manifests throughout America's judicial system—from arrest to sentencing to incarceration. At every stage, the scales are tipped against Black Americans.
        </p>
      </div>
    )
  },
  {
    id: "housing",
    title: "Housing Discrimination",
    subtitle: "Redlining's Long Shadow",
    icon: <Home size={24} />,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Housing discrimination has been one of the most powerful tools for maintaining racial inequality in America. From redlining to modern-day steering and predatory lending, African Americans have been systematically denied the opportunity to build wealth through homeownership.
        </p>
      </div>
    )
  },
  {
    id: "voting",
    title: "Voter Suppression",
    subtitle: "Democracy Denied",
    icon: <Vote size={24} />,
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          The right to vote—the foundation of democracy—remains under attack. African Americans continue to face voter suppression through multiple tactics specifically designed to intimidate and discourage participation.
        </p>
      </div>
    )
  },
  {
    id: "entertainment",
    title: "Entertainment & Media",
    subtitle: "Stereotypes, Erasure & Exploitation",
    icon: <Clapperboard size={24} />,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          The entertainment industry has both reflected and reinforced anti-Black bias throughout its history—from minstrel shows to modern-day stereotyping, from erasure to exploitation.
        </p>
      </div>
    )
  },
  {
    id: "competition",
    title: "Manufactured Competition",
    subtitle: "Fighting for Artificial Scarcity",
    icon: <Medal size={24} />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Systemic barriers create artificial scarcity—limited resources and opportunities that force competition among people who should be allies. This is not natural; it's designed.
        </p>
      </div>
    )
  },
  {
    id: "intersectionality",
    title: "Connected Struggles",
    subtitle: "Intersectionality & Solidarity",
    icon: <Heart size={24} />,
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          The systems that perpetuate racial injustice are interconnected with those that target other marginalized communities. True equity requires understanding and addressing how different forms of discrimination overlap and compound.
        </p>
      </div>
    )
  },
  {
    id: "future",
    title: "Paving the Way",
    subtitle: "Resilience, Leadership & Hope",
    icon: <BookOpen size={24} />,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Despite facing unimaginable obstacles, African Americans have not just survived—they have led the way. The fight for Black freedom has always been a fight for everyone's freedom.
        </p>
      </div>
    )
  }
];

export const CampaignChapters: React.FC = () => {
  const [openChapter, setOpenChapter] = useState<string | null>("economics");

  const toggleChapter = (id: string) => {
    setOpenChapter(openChapter === id ? null : id);
  };

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-6 block">Deep Dive</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6">The Anatomy of Anti-Blackness</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Explore the specific mechanisms of systemic oppression, the history of resilience, and the path toward justice.
          </p>
        </div>

        <div className="space-y-4">
          {CHAPTERS.map((chapter) => {
            const isOpen = openChapter === chapter.id;
            return (
              <div key={chapter.id} className={`border border-gray-200 transition-colors duration-300 ${isOpen ? 'bg-white shadow-xl my-8 scale-[1.01]' : 'bg-gray-50 hover:bg-white'}`}>
                <button 
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                >
                  <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-full transition-colors duration-300 ${isOpen ? 'bg-black text-white' : 'bg-white text-gray-400 border border-gray-200'}`}>
                      {chapter.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl md:text-2xl font-serif font-bold transition-colors ${isOpen ? 'text-black' : 'text-gray-700'}`}>{chapter.title}</h3>
                      <p className={`text-sm uppercase tracking-widest mt-1 transition-colors ${isOpen ? 'text-gray-500' : 'text-gray-400'}`}>{chapter.subtitle}</p>
                    </div>
                  </div>
                  <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={24} className="text-gray-400" />
                  </div>
                </button>
                
                <div 
                    className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-8 pt-0 md:p-10 md:pt-0 pl-[5.5rem] md:pl-[6.5rem]">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="w-12 h-1 bg-black mb-6"></div>
                        {chapter.content}
                      </div>
                      <div className="w-full md:w-1/3">
                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 relative">
                          <div className="absolute inset-0 bg-black/10"></div>
                          <img src={chapter.image} alt={chapter.title} loading="lazy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-black text-white px-8 py-6">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">Take Action</p>
            <p className="text-xl font-serif italic mb-4">Knowledge becomes power when it leads to action.</p>
            <button className="bg-white text-black px-6 py-3 font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-colors">
              Join The Circle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
