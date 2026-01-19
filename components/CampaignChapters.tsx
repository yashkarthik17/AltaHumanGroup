
import React, { useState } from 'react';
import { ChevronDown, BookOpen, Scale, Landmark, Users, Mic2, AlertTriangle, Fingerprint, Clapperboard, Medal, Sword } from 'lucide-react';

const CHAPTERS = [
  {
    id: "economics",
    title: "Discredited Wealth",
    subtitle: "The $4 Billion Foundation",
    icon: <Landmark size={24} />,
    image: "https://images.unsplash.com/photo-1526304640152-d4619684e484?q=80&w=800&auto=format&fit=crop", // Financial/Economic Abstract
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          Slave labor paid for a considerable share of the capital, iron, and manufactured goods that formed the basis of American economic growth. Enslaved people provided the labor for production of cotton, tobacco, and sugar, which enabled the growth of textile factories, the meat processing industry, insurance companies, shippers, and cotton brokers.
        </p>
        <p className="text-lg leading-relaxed font-light">
          The overall economic benefit to America from slave labor has been estimated at <strong className="font-bold">$4 billion in 19th-century dollars</strong>—trillions in today's economy.
        </p>
        <div className="p-6 bg-gray-50 border-l-4 border-black">
           <p className="font-serif italic text-xl">
             African-Americans continue to run small businesses and create jobs, and yet their economic contributions are regularly downplayed or ignored.
           </p>
        </div>
      </div>
    )
  },
  {
    id: "contributions",
    title: "Success of America",
    subtitle: "Innovators & Leaders",
    icon: <Fingerprint size={24} />,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop", // Science/Technology/Lab
    content: (
      <div className="space-y-6">
         <p className="text-lg leading-relaxed font-light">
            African Americans have made important contributions to science and technology, from inventor George Washington Carver to astronaut Robert Henry Lawrence Jr. They have been integrally involved in America’s political process, from Hiram Revels (the first African American in Congress) to Barack Obama.
         </p>
         <p className="text-lg leading-relaxed font-light">
            African Americans have been successful entrepreneurs—from the first Black female millionaire Madam C.J. Walker, who built a hair care empire, to real estate developer Robert Church Sr., to media mogul Robert L. Johnson.
         </p>
      </div>
    )
  },
  {
    id: "wars",
    title: "Service & Sacrifice",
    subtitle: "Fighting for a Country That Fought Them",
    icon: <Sword size={24} />,
    image: "https://images.unsplash.com/photo-1610173827002-6b4e92e02b0c?q=80&w=800&auto=format&fit=crop", // American Flag Abstract/Honor
    content: (
      <div className="space-y-6">
         <p className="text-lg leading-relaxed font-light">
            For much of American history, African American soldiers were placed in segregated units and given separate and unequal treatment, despite serving with distinction. They are underrepresented or unrecognized in official military records, monuments, and ceremonies.
         </p>
         <ul className="space-y-4 mt-4">
             <li className="flex gap-4">
                 <div className="min-w-[4px] bg-black"></div>
                 <p className="text-sm text-gray-600"><strong>WWI:</strong> Within a week of the outbreak, the War Department had to stop accepting Black volunteers because quotas were filled, yet they faced segregation.</p>
             </li>
             <li className="flex gap-4">
                 <div className="min-w-[4px] bg-black"></div>
                 <p className="text-sm text-gray-600"><strong>Vietnam:</strong> African Americans were disproportionately sent to the front lines, jailed or disciplined at a higher rate, and promoted less often.</p>
             </li>
         </ul>
      </div>
    )
  },
  {
    id: "culture",
    title: "Cultural Appropriation",
    subtitle: "Consuming the Fruit, Poisoning the Root",
    icon: <Mic2 size={24} />,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop", // Microphone/Music
    content: (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed">
                Cultural appropriation occurs when a privileged group takes cultural elements from a primarily disadvantaged group. African American music—blues, jazz, hip-hop, R&B—and style have been appropriated, often without credit, by others for profit.
            </p>
            <div className="bg-black text-white p-6 rounded-sm">
                <p className="font-serif italic text-lg">
                    "Imitators are rewarded while the true generators are forgotten."
                </p>
            </div>
        </div>
    )
  },
  {
    id: "violence",
    title: "Analyzing Abuse",
    subtitle: "From Policing to Physical Assault",
    icon: <AlertTriangle size={24} />,
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop", // Hands joined/Unity/Solidarity (Replacing sensitive imagery)
    content: (
        <div className="space-y-8">
            <p className="text-lg leading-relaxed font-light">
                From George Floyd to Tyre Nichols, African Americans are regularly victimized. The Sheriff was originally created to capture escaped slaves; even after abolition, Anti-Black sentiment persists in police forces. A group meant to serve and protect is often terrorizing.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-6 rounded-lg border border-red-100">
                    <h4 className="font-bold text-red-900 mb-2 uppercase tracking-widest text-xs">The Frequency</h4>
                    <p className="text-sm text-red-800">
                        An African American is killed by a police officer, security guard, or vigilante approximately <strong>every 28 hours</strong> (Malcolm X Grassroots Movement).
                    </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                     <h4 className="font-bold text-gray-900 mb-2 uppercase tracking-widest text-xs">Assault Statistics</h4>
                     <p className="text-sm text-gray-800">
                        According to the Bureau of Justice Statistics, African Americans account for <strong>44% of all victims of assault</strong> in the United States.
                     </p>
                </div>
            </div>

            <div>
                <h4 className="font-bold mb-2">Lynching: Not The Past</h4>
                <p className="text-gray-600 text-sm">
                    Since 2000, there have been at least eight suspected lynchings of Black men and teenagers in Mississippi alone.
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
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=800&auto=format&fit=crop", // Architecture/Pillars of Justice
    content: (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed font-light">
                Prejudice against African Americans manifests in the judicial system through longer sentences, higher likelihood of the death penalty, and exclusion from juries. 
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
                <li>African Americans are often encouraged to enter into plea bargains that are less favorable than those offered to white defendants.</li>
                <li><strong>Mass Incarceration:</strong> African Americans are incarcerated at a rate of 5.7 times that of white Americans.</li>
                <li><strong>The Cycle:</strong> Unjust incarceration separates parents from children, creating emotional trauma and economic instability that fuels a cycle of reoffending.</li>
            </ul>
        </div>
    )
  },
  {
    id: "entertainment",
    title: "Representation",
    subtitle: "Stereotypes & Erasure",
    icon: <Clapperboard size={24} />,
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop", // Cinema/Theater
    content: (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed font-light">
                Historically, African Americans have been portrayed in stereotypical ways. <strong>Blackface</strong> was a popular form of entertainment where white performers painted their faces to portray offensive caricatures.
            </p>
            <div className="p-4 border border-gray-200 bg-gray-50">
                <h4 className="font-bold text-sm mb-2">White Washing</h4>
                <p className="text-sm text-gray-600">
                    A subtle yet powerful form of Anti-Black bias where a predominantly white person plays the role of a Black character, erasing Black presence from their own stories.
                </p>
            </div>
            <p className="text-gray-600 text-sm">
                <strong>Pay Disparities:</strong> Black actors and writers often earn less than white counterparts with similar experience, and face systemic barriers to financing and lead roles.
            </p>
        </div>
    )
  },
  {
    id: "oppression",
    title: "Tools of Oppression",
    subtitle: "Intimidation & Suppression",
    icon: <Users size={24} />,
    image: "https://images.unsplash.com/photo-1540910419868-474947cebacb?q=80&w=800&auto=format&fit=crop", // Vote/Polls/Democracy
    content: (
        <div className="space-y-6">
            <div className="mb-6">
                <h4 className="text-xl font-serif font-bold mb-2">Voter Suppression</h4>
                <p className="text-gray-600 mb-4">
                    Tactics designed to intimidate and discourage participation:
                </p>
                <ul className="list-none space-y-2">
                   <li className="flex items-start gap-2">
                       <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                       <span className="text-gray-600"><strong>Voter ID Laws:</strong> Disproportionately affect communities with less documentation.</span>
                   </li>
                   <li className="flex items-start gap-2">
                       <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                       <span className="text-gray-600"><strong>Gerrymandering:</strong> Redrawing lines to dilute Black voting power.</span>
                   </li>
                   <li className="flex items-start gap-2">
                       <span className="w-1.5 h-1.5 bg-black rounded-full mt-2"></span>
                       <span className="text-gray-600"><strong>Racial Profiling:</strong> Being stopped and searched without reasonable suspicion.</span>
                   </li>
                </ul>
            </div>
        </div>
    )
  },
   {
    id: "competition",
    title: "Competition",
    subtitle: "Fighting for Scarcity",
    icon: <Medal size={24} />,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop", // Team/Work/Collaboration
    content: (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed font-light">
                Systemic barriers create artificial scarcity. African Americans face significant hurdles to economic opportunity, leading to intense competition for jobs and housing in communities with high levels of poverty.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 <div className="p-4 border border-gray-100 bg-gray-50">
                     <div className="font-bold text-sm mb-1">Cultural Representation</div>
                     <div className="text-xs text-gray-500">Limited spots in mainstream media lead to intense competition for recognition.</div>
                 </div>
                 <div className="p-4 border border-gray-100 bg-gray-50">
                     <div className="font-bold text-sm mb-1">Political Power</div>
                     <div className="text-xs text-gray-500">Struggle for leadership positions in political arenas due to systemic exclusion.</div>
                 </div>
            </div>
        </div>
    )
  },
  {
    id: "future",
    title: "Paving the Way",
    subtitle: "Resilience & Connected Struggles",
    icon: <BookOpen size={24} />,
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop", // Handshake/Unity/Connection
    content: (
        <div className="space-y-6">
            <p className="text-lg leading-relaxed font-light">
                African Americans were at the forefront of the Civil Rights Movement, utilizing civil disobedience (sit-ins, freedom rides) to secure the Civil Rights Act of 1964.
            </p>
            <p className="text-gray-600">
                This resilience paves the way for others. African Americans have been strong advocates for <strong>Immigrant Rights</strong> and fostering <strong>Cross-cultural Understanding</strong>, promoting the idea that all people are entitled to equal rights.
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
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic mb-6">The Anatomy of Anti-Black</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                Explore the specific mechanisms of Anti-Black oppression and the history of resilience.
            </p>
         </div>

         <div className="space-y-4">
             {CHAPTERS.map((chapter) => {
                 const isOpen = openChapter === chapter.id;
                 return (
                     <div key={chapter.id} className={`border border-gray-200 transition-all duration-500 ${isOpen ? 'bg-white shadow-xl scale-[1.01] my-8' : 'bg-gray-50 hover:bg-white'}`}>
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
                         
                         <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                             <div className="p-8 pt-0 md:p-10 md:pt-0 pl-[5.5rem] md:pl-[6.5rem]">
                                 <div className="flex flex-col md:flex-row gap-8">
                                     <div className="flex-1">
                                        <div className="w-12 h-1 bg-black mb-6"></div>
                                        {chapter.content}
                                     </div>
                                     <div className="w-full md:w-1/3">
                                        <div className="aspect-[3/4] overflow-hidden rounded-sm bg-gray-100 relative">
                                            <div className="absolute inset-0 bg-black/10"></div>
                                            <img src={chapter.image} alt={chapter.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                        </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 );
             })}
         </div>
      </div>
    </section>
  );
};
