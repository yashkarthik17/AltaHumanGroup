import React, { useState } from 'react';
import { Search, BookOpen, Loader2, ArrowRight } from 'lucide-react';
import { getAllyshipAdvice } from '../services/gemini';

const SUGGESTIONS = [
  "How to be an ally in the workplace",
  "History of Juneteenth",
  "Explaining systemic racism to kids",
  "Books by Black authors to read",
];

export const EducationAI: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchTerm: string = query) => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setQuery(searchTerm); // Ensure input reflects clicked suggestion
    const result = await getAllyshipAdvice(searchTerm);
    setResponse(result);
    setLoading(false);
  };

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Education & Resources</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-medium mb-6">Find the Words</h3>
          <p className="text-gray-600 text-lg">
            Unsure how to help? Use our AI-powered resource tool to find historical context, 
            supportive language, and actionable steps to combat hate.
          </p>
        </div>

        <div className="bg-gray-50 p-8 md:p-12 rounded-none border border-gray-200 shadow-sm">
          <div className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about history, allyship, or current events..."
              className="w-full p-4 pl-12 bg-white border border-gray-300 focus:border-black focus:ring-1 focus:ring-black outline-none transition-all placeholder:text-gray-400 font-light text-lg"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <button 
              onClick={() => handleSearch()}
              disabled={loading || !query}
              className="absolute right-2 top-2 bottom-2 bg-black text-white px-6 text-sm tracking-wider uppercase hover:bg-gray-800 disabled:opacity-50 transition-colors"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : "Ask"}
            </button>
          </div>

          {!response && (
            <div className="space-y-4">
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Suggested Topics:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleSearch(s)}
                    className="text-left p-4 bg-white border border-gray-200 hover:border-gray-400 hover:shadow-sm transition-all flex items-center justify-between group"
                  >
                    <span className="text-gray-700">{s}</span>
                    <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {response && (
            <div className="animate-fade-in">
              <div className="flex items-start space-x-4 mb-6">
                <div className="p-2 bg-black rounded-full text-white">
                    <BookOpen size={20} />
                </div>
                <div className="flex-1">
                    <h4 className="font-serif text-xl mb-2">Insight</h4>
                    <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                        {response}
                    </div>
                </div>
              </div>
              <button 
                onClick={() => setResponse(null)}
                className="text-sm text-gray-500 hover:text-black underline underline-offset-4"
              >
                Ask another question
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};