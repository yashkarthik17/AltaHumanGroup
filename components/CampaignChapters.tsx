
import React, { useState } from 'react';
import { ChevronDown, Landmark, Fingerprint, Sword, Mic2, AlertTriangle, Shield, Scale, Home, Vote, Clapperboard, Medal, Heart, BookOpen, Briefcase, GraduationCap, Megaphone } from 'lucide-react';

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
        
        <div className="mt-8">
          <h4 className="font-bold text-lg mb-4">The Ongoing Economic Gap</h4>
          <p className="text-gray-600 mb-4">
            African Americans' economic contributions continue to be downplayed or overlooked. Despite facing systemic barriers at every turn, Black entrepreneurs and professionals have built empires and driven innovation across every sector of the economy.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Real estate developer Robert Church Sr.</strong> was one of the first African American millionaires in the United States.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>George Washington Carver</strong> revolutionized agriculture with innovations in crop rotation and developed hundreds of products from peanuts and sweet potatoes.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></span>
              <span>African Americans continue to run small businesses, create jobs, and drive economic growth—yet their accomplishments are regularly ignored.</span>
            </li>
          </ul>
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
            <p className="text-gray-400 text-sm">
              Hidden Figures like Katherine Johnson, Dorothy Vaughan, and Mary Jackson made the space race possible—their contributions hidden for decades.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-3">POLITICAL LEADERSHIP</h4>
            <p className="text-gray-700 mb-4">
              African Americans have been integral to America's political process and democratic institutions:
            </p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex gap-2">
                <span className="font-bold">1870:</span>
                <span><strong>Hiram Revels</strong> becomes the first African American to serve in Congress</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">1968:</span>
                <span><strong>Shirley Chisholm</strong> becomes the first Black woman elected to Congress</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2008:</span>
                <span><strong>Barack Obama</strong> becomes the first African American President</span>
              </li>
              <li className="flex gap-2">
                <span className="font-bold">2021:</span>
                <span><strong>Kamala Harris</strong> becomes the first Black and South Asian Vice President</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-sm border border-gray-200">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-3">ENTREPRENEURSHIP</h4>
            <p className="text-gray-700 mb-4">
              African American entrepreneurs have built empires against all odds:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border-l-2 border-black pl-4">
                <div className="font-bold">Madam C.J. Walker</div>
                <div className="text-sm text-gray-500">First Black female millionaire—built a hair care empire from nothing</div>
              </div>
              <div className="border-l-2 border-black pl-4">
                <div className="font-bold">Robert L. Johnson</div>
                <div className="text-sm text-gray-500">Founded BET, became the first Black American billionaire</div>
              </div>
              <div className="border-l-2 border-black pl-4">
                <div className="font-bold">Robert Church Sr.</div>
                <div className="text-sm text-gray-500">Real estate developer, one of the first African American millionaires</div>
              </div>
              <div className="border-l-2 border-black pl-4">
                <div className="font-bold">Oprah Winfrey</div>
                <div className="text-sm text-gray-500">Media mogul, philanthropist, cultural icon</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-black text-white mt-6">
          <p className="font-serif italic text-lg">
            "African Americans continue to run small businesses, create jobs, and drive innovation across every sector—yet their accomplishments are regularly overlooked or minimized."
          </p>
        </div>
      </div>
    )
  },
  {
    id: "wars",
    title: "Service & Sacrifice",
    subtitle: "Fighting for a Country That Fought Against Them",
    icon: <Sword size={24} />,
    image: "/attached_assets/Generated_Image_January_18,_2026_-_5_21PM_(1)_1768785712332.jpeg",
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-relaxed font-light">
          For much of American history, African American soldiers were placed in segregated units and given separate and unequal treatment—despite serving with extraordinary distinction in every American conflict. They fought for freedoms abroad that were denied to them at home.
        </p>
        
        <div className="bg-red-50 border border-red-100 p-6 rounded-sm">
          <h4 className="font-bold text-red-900 mb-2">The Erasure</h4>
          <p className="text-red-800 text-sm">
            African American soldiers are underrepresented or unrecognized in official military records, monuments, and ceremonies. This erasure has contributed to the false perception that their service was less significant—when in fact, they often served in the most dangerous conditions.
          </p>
        </div>
        
        <div className="space-y-4 mt-8">
          <div className="flex gap-4 p-4 bg-gray-50">
            <div className="min-w-[80px] text-right">
              <div className="font-bold">WWI</div>
              <div className="text-xs text-gray-500">1914-1918</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-gray-600 text-sm">
                Within a week of the outbreak of World War I, the War Department had to stop accepting Black volunteers because the quotas for African Americans were already filled. Over 380,000 Black soldiers served—yet they returned home to face the same discrimination, and the "Red Summer" of 1919 saw race riots across America.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-gray-50">
            <div className="min-w-[80px] text-right">
              <div className="font-bold">WWII</div>
              <div className="text-xs text-gray-500">1939-1945</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-gray-600 text-sm">
                Over 1 million African Americans served in WWII. The Tuskegee Airmen flew over 15,000 sorties and never lost a bomber they escorted. The 761st Tank Battalion, known as the "Black Panthers," spent 183 days in continuous combat. Yet they served in segregated units and faced discrimination both overseas and at home.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 bg-gray-50">
            <div className="min-w-[80px] text-right">
              <div className="font-bold">Vietnam</div>
              <div className="text-xs text-gray-500">1955-1975</div>
            </div>
            <div className="border-l-4 border-black pl-4">
              <p className="text-gray-600 text-sm">
                African Americans were disproportionately sent to the front lines, jailed or disciplined at higher rates, and promoted less often than white soldiers. They made up 11% of the U.S. population but 12.6% of soldiers in Vietnam—and in the early years, nearly 25% of combat deaths.
              </p>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-black text-white mt-6">
          <p className="font-serif italic text-lg">
            "African Americans have fought and died for this country in every conflict—often returning home to face the same discrimination they fought against abroad."
          </p>
        </div>
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
        
        <div className="bg-black text-white p-8 rounded-sm my-8">
          <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-4">THE PARADOX</h4>
          <p className="font-serif italic text-2xl leading-relaxed">
            "To celebrate the creation while ignoring the creator's struggle is not appreciation—it's extraction."
          </p>
        </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="font-bold text-lg mb-3">Music</h4>
            <p className="text-gray-600 mb-3">
              African American music—blues, jazz, rock and roll, hip-hop, R&B—has shaped global culture. Yet Black artists have systematically been denied credit, compensation, and recognition while white imitators were celebrated and enriched.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Rock and roll was built on Black musical traditions—then marketed as white music</li>
              <li>• Elvis Presley was called the "King of Rock and Roll" while Black originators were forgotten</li>
              <li>• Hip-hop, born in Black communities, is now a billion-dollar industry often controlled by others</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3">Fashion & Style</h4>
            <p className="text-gray-600 mb-3">
              Hairstyles, clothing, and aesthetics that originated in Black communities are often criticized when worn by Black people—then celebrated when adopted by white celebrities and fashion houses.
            </p>
            <ul className="text-sm text-gray-500 space-y-1">
              <li>• Cornrows and braids called "urban" on Black women, "edgy" or "trendy" on white celebrities</li>
              <li>• AAVE (African American Vernacular English) mocked in Black communities, adopted as "cool" slang</li>
              <li>• Fashion houses profit from "streetwear" aesthetics born in Black neighborhoods</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-3">Literature & Art</h4>
            <p className="text-gray-600">
              Black literary and artistic traditions have influenced American culture at every level—yet Black artists often struggle to receive the same recognition, funding, and platforms as their white counterparts who draw on Black traditions.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 border-l-4 border-black mt-8">
          <h4 className="font-bold mb-2">The Question to Ask Yourself</h4>
          <p className="text-gray-600">
            When you engage with Black art and culture, ask yourself: Am I also showing up for Black communities? Am I speaking out? Am I supporting Black-owned businesses? Am I voting for equity? Am I contributing to organizations doing this work?
          </p>
        </div>
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
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-900 text-white p-6 rounded-sm">
            <div className="text-3xl font-bold mb-2">Every 28 hrs</div>
            <div className="text-sm text-red-200">An African American is killed by police, security guard, or vigilante</div>
            <div className="text-xs text-red-300 mt-2">— Malcolm X Grassroots Movement</div>
          </div>
          <div className="bg-gray-900 text-white p-6 rounded-sm">
            <div className="text-3xl font-bold mb-2">44%</div>
            <div className="text-sm text-gray-300">Of all assault victims in the U.S. are African American</div>
            <div className="text-xs text-gray-400 mt-2">— Bureau of Justice Statistics</div>
          </div>
          <div className="bg-gray-100 p-6 rounded-sm">
            <div className="text-3xl font-bold mb-2">6x</div>
            <div className="text-sm text-gray-600">Higher homicide rate for African Americans than white Americans</div>
          </div>
        </div>
        
        <div className="space-y-6 mt-8">
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold text-lg mb-3">Verbal Abuse</h4>
            <p className="text-gray-600 text-sm mb-3">
              African Americans experience verbal abuse in many forms: racial slurs, name-calling, and bullying; microaggressions—subtle, often unconscious comments that demean based on race; and direct verbal abuse including shouting, swearing, and threatening statements designed to cause fear and intimidation.
            </p>
            <p className="text-gray-500 text-xs">
              Microaggressions may seem "small" but their cumulative effect is devastating—contributing to chronic stress, anxiety, and the "weathering" effect that shortens lives.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold text-lg mb-3">Physical Assault</h4>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>African American women experience intimate partner violence at a rate <strong>35% higher</strong> than white women (National Coalition Against Domestic Violence)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>A significant portion of all hate crimes in the United States are directed at African Americans (FBI)</span>
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>The homicide rate for African Americans is nearly <strong>six times higher</strong> than for white Americans</span>
              </li>
            </ul>
          </div>
          
          <div className="border border-red-200 bg-red-50 p-6">
            <h4 className="font-bold text-lg mb-3 text-red-900">Lynching: Not Just History</h4>
            <p className="text-red-800 text-sm mb-3">
              Lynching was a widely used form of violence and terrorism against African Americans. It is dangerous to think of this as purely historical.
            </p>
            <p className="text-red-700 text-sm font-bold">
              Since 2000, there have been at least eight suspected lynchings of Black men and teenagers in Mississippi alone.
            </p>
            <p className="text-red-600 text-xs mt-3">
              The legacy of these atrocities continues to impact African American communities and serves as a reminder of the ongoing struggle for justice and equality.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold text-lg mb-3">Community Violence</h4>
            <p className="text-gray-600 text-sm">
              Black-on-Black violence is tragically common—but its roots lie in systemic causes: poverty and economic disadvantage; the historical legacy of trauma from slavery, segregation, and family separation; lack of resources including quality education, healthcare, and employment; and the deliberate disinvestment in Black communities over generations.
            </p>
          </div>
        </div>
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
            The institution of the sheriff was originally created, in part, to capture enslaved Black people who had escaped. Even after slavery was abolished, anti-Black bias has persisted in police forces to this day. Institutions meant to serve and protect all people continue to terrorize and harm Black communities.
          </p>
        </div>
        
        <p className="text-lg leading-relaxed font-light">
          Anti-Black sentiment manifests in America's police forces in multiple, documented ways—from individual bias to systemic policies that target Black communities.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold mb-3">Excessive Force</h4>
            <p className="text-gray-600 text-sm mb-3">
              African Americans are more likely to be subjected to excessive force by police, including pepper spray, tasers, and deadly force. This results in injury and death, and has led to widespread protests and calls for reform.
            </p>
            <div className="bg-red-50 p-3 rounded text-xs text-red-800">
              An African American is killed by a police officer, security guard, or vigilante approximately <strong>every 28 hours</strong>.
            </div>
          </div>
          
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold mb-3">Discriminatory Practices</h4>
            <p className="text-gray-600 text-sm">
              Some police departments engage in discriminatory practices including selective enforcement of minor offenses and drug laws, leading to higher rates of arrest and incarceration for African Americans—even when usage rates are similar across races.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold mb-3">Implicit Bias</h4>
            <p className="text-gray-600 text-sm">
              Many police officers hold implicit biases against African Americans, which influence their split-second decision-making and actions. This leads to discriminatory treatment—seeing threat where there is none, escalating when de-escalation is possible.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <h4 className="font-bold mb-3">Lack of Diversity</h4>
            <p className="text-gray-600 text-sm">
              Many police departments do not reflect the racial diversity of the communities they serve, contributing to a lack of understanding, cultural competence, and accountability.
            </p>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 border-l-4 border-black mt-8">
          <h4 className="font-bold mb-3">The Path Forward</h4>
          <p className="text-gray-600">
            These forms of discrimination have devastating consequences and undermine public trust in the entire criminal justice system. Addressing these issues requires ongoing efforts to promote diversity, accountability, and transparency within police departments, as well as fundamental reforms to policing practices and the criminal justice system as a whole.
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
        
        <div className="grid md:grid-cols-2 gap-4 my-8">
          <div className="bg-black text-white p-6">
            <div className="text-4xl font-bold mb-2">5.7x</div>
            <div className="text-sm text-gray-300">African Americans are incarcerated at nearly six times the rate of white Americans</div>
          </div>
          <div className="bg-gray-100 p-6">
            <div className="text-4xl font-bold mb-2">1,304</div>
            <div className="text-sm text-gray-600">Per 100,000 — Black incarceration rate (vs. 223 for white Americans)</div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-bold text-lg">Systemic Prejudice at Every Stage</h4>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <div className="font-bold">Sentencing Disparities</div>
            <p className="text-gray-600 text-sm">African Americans are often given longer sentences and are more likely to receive the death penalty than white Americans who commit similar crimes.</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <div className="font-bold">Jury Exclusion</div>
            <p className="text-gray-600 text-sm">African Americans are frequently excluded from juries through peremptory challenges—denying defendants a jury of their peers.</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <div className="font-bold">Coerced Plea Bargains</div>
            <p className="text-gray-600 text-sm">African Americans are more likely to be pressured into plea bargains, often accepting deals less favorable than those offered to white defendants, resulting in longer sentences and fewer opportunities for appeal.</p>
          </div>
          
          <div className="border-l-4 border-red-500 pl-4 py-2">
            <div className="font-bold">Bail Disparities</div>
            <p className="text-gray-600 text-sm">Black defendants are more likely to be held on bail and face higher bail amounts than white defendants for similar offenses.</p>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 mt-8">
          <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3">COMMUNITY IMPACT</h4>
          <p className="mb-4">
            The impact of mass incarceration extends far beyond the incarcerated individual:
          </p>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Family Separation:</strong> Incarceration separates parents from children, causing emotional trauma, reduced economic stability, and higher risk of children's own involvement in the justice system.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Economic Devastation:</strong> Mass incarceration makes it difficult for individuals to secure employment after release, leading to higher unemployment and poverty.</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></span>
              <span><strong>Cycle of Reoffending:</strong> Barriers facing formerly incarcerated people perpetuate cycles of reoffending and community harm.</span>
            </li>
          </ul>
        </div>
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
        
        <div className="bg-red-50 border border-red-200 p-6 rounded-sm">
          <h4 className="font-bold text-red-900 mb-2">Redlining: The Foundation</h4>
          <p className="text-red-800 text-sm">
            In the 1930s, the federal government created maps that literally outlined Black neighborhoods in red as "hazardous" for investment. Banks refused to lend in these areas, and the FHA refused to insure mortgages. This wasn't just discrimination—it was federal policy.
          </p>
        </div>
        
        <div className="space-y-4 mt-8">
          <h4 className="font-bold text-lg">Ongoing Forms of Housing Discrimination</h4>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-2">Steering</div>
              <p className="text-gray-600 text-sm">Real estate agents directing Black families away from white neighborhoods—still documented today.</p>
            </div>
            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-2">Predatory Lending</div>
              <p className="text-gray-600 text-sm">Black homebuyers are more likely to receive subprime loans even when they qualify for better terms.</p>
            </div>
            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-2">Appraisal Bias</div>
              <p className="text-gray-600 text-sm">Homes in Black neighborhoods are consistently undervalued compared to identical homes in white neighborhoods.</p>
            </div>
            <div className="border border-gray-200 p-4">
              <div className="font-bold mb-2">Rental Discrimination</div>
              <p className="text-gray-600 text-sm">Black renters face higher rejection rates and are shown fewer units than equally qualified white applicants.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-6 mt-6">
          <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3">THE WEALTH GAP</h4>
          <p className="text-lg">
            Home equity is the primary source of wealth for most American families. By systematically blocking Black homeownership for generations, housing discrimination has created a wealth gap that persists today: <strong>the median white family holds approximately 10x the wealth of the median Black family.</strong>
          </p>
        </div>
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
        
        <div className="bg-black text-white p-6 rounded-sm my-8">
          <p className="font-serif italic text-xl">
            "These tactics target the same communities that previous generations fought and died to give the right to vote."
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Voter ID Laws</div>
            <p className="text-gray-600 text-sm">Strict identification requirements that disproportionately affect communities with less access to documentation—and often exclude the types of ID more commonly held by Black voters.</p>
          </div>
          
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Gerrymandering</div>
            <p className="text-gray-600 text-sm">Redrawing district lines to dilute Black voting power—either by packing Black voters into few districts or "cracking" communities across multiple districts.</p>
          </div>
          
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Voter Roll Purges</div>
            <p className="text-gray-600 text-sm">Removing eligible voters from registration lists, often without notice, using criteria that disproportionately affect Black voters.</p>
          </div>
          
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Polling Place Closures</div>
            <p className="text-gray-600 text-sm">Shutting down voting locations in predominantly Black neighborhoods, forcing longer travel and longer lines.</p>
          </div>
          
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Restricted Early Voting</div>
            <p className="text-gray-600 text-sm">Limiting voting options—including Sunday voting traditionally used by Black churches' "Souls to the Polls" efforts.</p>
          </div>
          
          <div className="flex gap-4 items-start p-4 bg-gray-50 border-l-4 border-black">
            <div className="min-w-[140px] font-bold">Felony Disenfranchisement</div>
            <p className="text-gray-600 text-sm">Stripping voting rights from people with felony convictions—which, combined with mass incarceration, removes millions of Black Americans from the electorate.</p>
          </div>
        </div>
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
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gray-900 text-white p-6">
            <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-3">HISTORICAL HARM</h4>
            <div className="font-bold text-lg mb-2">Blackface</div>
            <p className="text-gray-300 text-sm">
              A popular form of entertainment where white performers painted their faces black and portrayed offensive caricatures of African Americans—dehumanizing stereotypes that shaped perceptions for generations.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6">
            <h4 className="text-xs font-bold tracking-widest text-gray-500 mb-3">MODERN ERASURE</h4>
            <div className="font-bold text-lg mb-2">Whitewashing</div>
            <p className="text-gray-600 text-sm">
              A subtle yet powerful form of anti-Black bias where white actors play Black characters or characters of color—erasing Black presence from their own stories and history.
            </p>
          </div>
        </div>
        
        <div className="space-y-4 mt-8">
          <h4 className="font-bold text-lg">Ongoing Industry Problems</h4>
          
          <div className="border border-gray-200 p-4">
            <div className="font-bold mb-2">Lack of Opportunities</div>
            <p className="text-gray-600 text-sm">African Americans face barriers to employment and advancement including limited opportunities for lead roles, writing and directing positions, and behind-the-scenes jobs.</p>
          </div>
          
          <div className="border border-gray-200 p-4">
            <div className="font-bold mb-2">Stereotyping & Tokenism</div>
            <p className="text-gray-600 text-sm">When Black actors do appear, they're often limited to stereotypical roles or included as tokens rather than fully developed characters with their own agency and stories.</p>
          </div>
          
          <div className="border border-gray-200 p-4">
            <div className="font-bold mb-2">Pay Disparities</div>
            <p className="text-gray-600 text-sm">African American actors, writers, and industry professionals often earn less than white counterparts with similar experience and success—even at the highest levels.</p>
          </div>
          
          <div className="border border-gray-200 p-4">
            <div className="font-bold mb-2">Systemic Barriers</div>
            <p className="text-gray-600 text-sm">From unconscious bias in casting to difficulty securing financing for Black-led projects, systemic discrimination limits visibility and recognition of African American talent.</p>
          </div>
        </div>
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
        
        <div className="bg-gray-50 p-6 border-l-4 border-black my-8">
          <p className="font-serif italic text-xl">
            "When systems work fairly, there's enough for everyone. Competition for scraps is a feature of oppression, not a fact of life."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Briefcase size={20} />
              <div className="font-bold">Economic Competition</div>
            </div>
            <p className="text-gray-600 text-sm">
              Significant barriers to economic opportunity lead to intense competition for jobs and housing in communities facing high poverty and unemployment. This isn't about individual failure—it's about artificially limited opportunity.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mic2 size={20} />
              <div className="font-bold">Cultural Representation</div>
            </div>
            <p className="text-gray-600 text-sm">
              Limited spots in mainstream media and entertainment create fierce competition for recognition. When only a few roles exist for Black actors, it pits talented people against each other for scraps.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <Megaphone size={20} />
              <div className="font-bold">Political Power</div>
            </div>
            <p className="text-gray-600 text-sm">
              The struggle for political representation—in a system designed to dilute Black voting power—can create competition for limited leadership positions rather than expanding the table.
            </p>
          </div>
          
          <div className="border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap size={20} />
              <div className="font-bold">Educational Opportunities</div>
            </div>
            <p className="text-gray-600 text-sm">
              Lack of access to quality education creates competition for limited spots in good schools, scholarships, and advancement programs—when every child deserves access to excellent education.
            </p>
          </div>
        </div>
        
        <div className="bg-black text-white p-6 mt-6">
          <h4 className="font-bold mb-2">The Solution</h4>
          <p className="text-gray-300">
            The answer isn't to compete harder—it's to expand opportunity. Systemic change means creating a world where success isn't zero-sum, where one person's advancement doesn't require another's exclusion.
          </p>
        </div>
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
        
        <div className="bg-gradient-to-r from-purple-900 to-purple-800 text-white p-6 rounded-sm my-8">
          <h4 className="text-xs font-bold tracking-widest text-purple-300 mb-3">INTERSECTIONALITY</h4>
          <p className="text-lg">
            A term coined by legal scholar Kimberlé Crenshaw to describe how different forms of discrimination—racism, sexism, homophobia, classism—don't just add up, they <em>multiply</em>. A Black woman doesn't experience racism and sexism separately; she experiences a unique form of discrimination at their intersection.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-pink-500"></div>
            <div>
              <div className="font-bold mb-1">LGBTQ+ Rights</div>
              <p className="text-gray-600 text-sm">LGBTQ+ individuals—particularly those who are also Black, Indigenous, or people of color—face compounding discrimination. LGBTQ+ people of color are <strong>twice as likely</strong> to experience hate violence compared to white LGBTQ+ people.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-blue-500"></div>
            <div>
              <div className="font-bold mb-1">Immigrant & Refugee Rights</div>
              <p className="text-gray-600 text-sm">Immigrants and refugees face systemic barriers that often mirror and intersect with racial injustice. Black immigrants face both anti-Black racism and anti-immigrant discrimination.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-green-500"></div>
            <div>
              <div className="font-bold mb-1">Disability Justice</div>
              <p className="text-gray-600 text-sm">People with disabilities face barriers to full participation in society—barriers that are amplified for disabled people of color, who face both ableism and racism.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-yellow-500"></div>
            <div>
              <div className="font-bold mb-1">Economic Justice</div>
              <p className="text-gray-600 text-sm">Poverty and economic exploitation intersect with race, gender, and other identities. Black women, for example, face both the racial wealth gap and the gender pay gap.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-orange-500"></div>
            <div>
              <div className="font-bold mb-1">Indigenous Rights</div>
              <p className="text-gray-600 text-sm">Indigenous peoples continue to fight for sovereignty, land rights, and cultural preservation. The struggle against colonialism connects directly to the struggle against anti-Black racism.</p>
            </div>
          </div>
          
          <div className="flex gap-4 p-4 border border-gray-200">
            <div className="min-w-[4px] bg-red-500"></div>
            <div>
              <div className="font-bold mb-1">Gender Equity</div>
              <p className="text-gray-600 text-sm">Women and gender-diverse people face systemic barriers that compound with racial discrimination. Black women face maternal mortality rates <strong>3x higher</strong> than white women.</p>
            </div>
          </div>
        </div>
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
        
        <div className="bg-black text-white p-8 rounded-sm my-8">
          <h4 className="text-xs font-bold tracking-widest text-gray-400 mb-4">THE CIVIL RIGHTS MOVEMENT</h4>
          <p className="text-lg mb-4">
            African Americans were at the forefront of the Civil Rights Movement, utilizing civil disobedience—sit-ins, freedom rides, marches—as well as legal challenges and political advocacy to secure landmark legislation:
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="border border-gray-700 p-4">
              <div className="font-bold text-white">Civil Rights Act of 1964</div>
              <div className="text-gray-400">Outlawed discrimination based on race, color, religion, sex, or national origin</div>
            </div>
            <div className="border border-gray-700 p-4">
              <div className="font-bold text-white">Voting Rights Act of 1965</div>
              <div className="text-gray-400">Prohibited racial discrimination in voting</div>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border-l-4 border-black pl-6">
            <h4 className="font-bold text-lg mb-2">Advocating for Immigrant Rights</h4>
            <p className="text-gray-600">
              African Americans have been strong advocates for immigrant rights, working to ensure all groups are treated fairly. African American leaders and organizations continue to support immigration reform, defend immigrant workers' rights, and speak out against anti-immigrant sentiment.
            </p>
          </div>
          
          <div className="border-l-4 border-black pl-6">
            <h4 className="font-bold text-lg mb-2">Fostering Cross-Cultural Understanding</h4>
            <p className="text-gray-600">
              African Americans play an important role in fostering cross-cultural understanding and promoting acceptance of diversity—promoting the idea that all people, regardless of race, ethnicity, or national origin, are entitled to equal rights and opportunities.
            </p>
          </div>
          
          <div className="border-l-4 border-black pl-6">
            <h4 className="font-bold text-lg mb-2">Modeling Resilience</h4>
            <p className="text-gray-600">
              The long history of oppression and discrimination that African Americans have faced has served as a powerful example of resilience and determination. By overcoming obstacles and pushing for progress, African Americans have inspired and paved the way for other groups facing discrimination.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 mt-8 rounded-sm">
          <p className="font-serif italic text-xl">
            "The arc of the moral universe is long, but it bends toward justice."
          </p>
          <p className="text-gray-400 text-sm mt-2">— Dr. Martin Luther King Jr.</p>
        </div>
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
