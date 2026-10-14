'use client';

import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  Sparkles, 
  User, 
  Tag, 
  Award,
  ChevronRight
} from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'How to Crack NEET in the First Attempt: 8-Month High-Yield Roadmap',
    category: 'NEET Strategy',
    readTime: '6 min read',
    date: 'Oct 12, 2026',
    author: 'Senior Biology Mentor',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
    summary: 'A disciplined daily routine, NCERT line-by-line decoding, and systematic test-series analysis are essential to cross the 660+ threshold in NEET-UG.',
    content: [
      'Cracking NEET in your first attempt requires a shift from passive reading to active, exam-oriented practice. Most students spend disproportionate time reading theory while neglecting rigorous mock test analysis.',
      '1. NCERT is Non-Negotiable: Over 90% of Biology and Inorganic/Organic Chemistry questions are directly rooted in NCERT statements. Create your own margin notes and flowcharts rather than relying solely on secondary guides.',
      '2. The 3-Hour Simulation Rule: Begin taking full-syllabus 3-hour tests every Sunday under strict exam conditions. Analyzing errors is where the real score jump happens—maintain an "Error Log" for questions missed due to conceptual gaps versus calculation errors.',
      '3. Physics Formula Retention: Develop a chapter-wise formula sheet. Physics in NEET tests conceptual clarity combined with quick formula application under time pressure. Daily 45-minute timed numerical sprints build both speed and accuracy.'
    ]
  },
  {
    id: 2,
    title: 'Balancing Class 12th HP Board & CBSE with Rigorous JEE Main Prep',
    category: 'JEE Preparation',
    readTime: '5 min read',
    date: 'Oct 05, 2026',
    author: 'Academic Dean, Aadhar',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=80',
    summary: 'Mastering subjective board answer presentations alongside single-correct competitive problem solving without burning out.',
    content: [
      'Students preparing simultaneously for Class 12 Board examinations and JEE Main often face anxiety regarding subjective vs. objective formats. The syllabus, however, is fundamentally identical.',
      '1. Synchronized Study: Align your board syllabus milestones with competitive problem sheets. When studying Electromagnetism or Calculus, master derivations and subjective step-by-step logic first, followed immediately by JEE-level numericals.',
      '2. Subjective Writing Practice: Spend one evening every week writing complete descriptive answers, chemical reaction mechanisms, and labelled diagrams to secure 95%+ in school board assessments.',
      '3. Dedicated Revision Slots: Divide your day into 70% competitive problem-solving and 30% board-oriented presentation practice during the October to December preparation window.'
    ]
  },
  {
    id: 3,
    title: 'Why Residential Discipline & Hostel Environment Create Top Rankers',
    category: 'Campus Life',
    readTime: '4 min read',
    date: 'Sep 28, 2026',
    author: 'Chief Hostel Warden',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    summary: 'How distraction-free hostel ecosystems, scheduled library sessions, and peer group discussions elevate student performance in Hamirpur.',
    content: [
      'Competitive exams are marathons that demand high emotional stability and strict consistency. In a home environment, everyday interruptions, social events, and digital screen distractions frequently derail study schedules.',
      '1. Fixed Self-Study Windows: At Aadhar residential campus, compulsory evening self-study hours inside silent study halls ensure every student logs at least 6 dedicated hours of distraction-free preparation daily.',
      '2. Immediate Doubt Clearance: Living within the campus ecosystem allows students to interact with peer study circles and resident faculty without wasting hours traveling.',
      '3. Wholesome Routine: Balanced nutrition, strictly monitored mobile usage, and timed recreational breaks keep stress levels low and mental endurance high throughout the academic year.'
    ]
  },
  {
    id: 4,
    title: 'ASCET Scholarship Exam: Syllabus Pattern & Up to 90% Tuition Fee Waiver',
    category: 'Scholarship Alerts',
    readTime: '4 min read',
    date: 'Sep 20, 2026',
    author: 'Examination Cell',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=80',
    summary: 'Everything you need to know about Aadhar Institute’s premier scholarship assessment, exam syllabus, test dates, and fee concessions.',
    content: [
      'The Aadhar Scholarship & Competence Evaluation Test (ASCET) is conducted to identify and nurture meritorious students aspiring for medical and engineering excellence across Himachal Pradesh.',
      '1. Exam Structure: The test consists of Multiple Choice Questions (MCQs) covering Physics, Chemistry, Mathematics/Biology, and Mental Aptitude based on the syllabus of the student’s current academic standard.',
      '2. Fee Concessions: Deserving candidates can secure up to a 90% tuition fee waiver, giving them direct entry into our high-performing "संकल्प-30" batches.',
      '3. Test Registration: Examinations are held on selected Sundays at our Gandhi Chowk campus in Hamirpur. Early registration allows students to take advantage of upcoming batch seat reservations.'
    ]
  }
];

const categories = ['All', 'NEET Strategy', 'JEE Preparation', 'Campus Life', 'Scholarship Alerts'];

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredPosts = activeTab === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeTab);

  return (
    <section id="blog" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-300">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>KNOWLEDGE HUB & ARTICLES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Student Guidance & <span className="text-amber-600">Exam Strategies</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Expert insights, high-yield preparation tips, and campus updates directly from senior faculty in Hamirpur.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === cat
                  ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
              onClick={() => setSelectedArticle(post)}
            >
              {/* Image Banner */}
              <div className="h-48 w-full overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-slate-700">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-amber-500" />
                    {post.author}
                  </span>
                  <span className="text-xs font-bold text-amber-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Reading Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative animate-in fade-in zoom-in-95 duration-200">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="space-y-3 mb-6">
              <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {selectedArticle.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pb-4 border-b border-slate-100">
                <span>By {selectedArticle.author}</span>
                <span>•</span>
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            {/* Modal Body */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
              {selectedArticle.content.map((paragraph, idx) => (
                <p key={idx} className="text-slate-700">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer Call to Action */}
            <div className="mt-8 p-4 bg-amber-50 rounded-xl border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-amber-950">Aiming for JEE or NEET 2027/28?</h4>
                <p className="text-xs text-amber-800">Enroll for offline demo classes at Aadhar Hamirpur.</p>
              </div>
              <a 
                href="#courses"
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold rounded-lg shrink-0 transition shadow-sm"
              >
                Explore Batches
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}