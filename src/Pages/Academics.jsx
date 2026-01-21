import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, Users, FileText, Download, 
  Microscope, Palette, Calculator, GraduationCap, 
  Search, ArrowUpRight, Sparkles, ArrowRight 
} from 'lucide-react';

const coursesData = {
  Science: {
    theme: "blue",
    icon: Microscope,
    desc: "Innovation & Research",
    courses: [
      { title: "B.Sc (Physics Honours)", duration: "3 Years", seats: 60, code: "PHY-101", desc: "Explore classical mechanics, quantum physics, and advanced electronics with hands-on lab work." },
      { title: "B.Sc (Mathematics)", duration: "3 Years", seats: 80, code: "MAT-102", desc: "Master calculus, algebra, and statistical methods applicable in data science and research." },
      { title: "B.Sc (Chemistry)", duration: "3 Years", seats: 60, code: "CHE-103", desc: "In-depth study of organic and inorganic chemistry with extensive industrial laboratory training." },
      { title: "BCA (Vocational)", duration: "3 Years", seats: 45, code: "BCA-201", desc: "A professional course in software development, web technologies, and database management." },
    ]
  },
  Arts: {
    theme: "rose",
    icon: Palette,
    desc: "Creativity & Culture",
    courses: [
      { title: "B.A (English Honours)", duration: "3 Years", seats: 120, code: "ENG-101", desc: "Dive into world literature, linguistics, and creative writing to master the global language." },
      { title: "B.A (History)", duration: "3 Years", seats: 100, code: "HIS-102", desc: "Analyze ancient, medieval, and modern history to understand the roots of civilization." },
      { title: "B.A (Political Science)", duration: "3 Years", seats: 100, code: "POL-103", desc: "Understand political theory, international relations, and public administration governance." },
    ]
  },
  Commerce: {
    theme: "amber",
    icon: Calculator,
    desc: "Business & Strategy",
    courses: [
      { title: "B.Com (Accounts)", duration: "3 Years", seats: 150, code: "COM-101", desc: "Comprehensive training in financial accounting, taxation, auditing, and business law." },
      { title: "B.Com (Management)", duration: "3 Years", seats: 60, code: "MGT-102", desc: "Learn the principles of management, marketing strategies, and human resource development." },
    ]
  }
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState('Science');

  const getThemeColor = (type) => {
    const theme = coursesData[activeTab].theme;
    if (type === 'bg') {
      if (theme === 'blue') return 'bg-blue-600';
      if (theme === 'rose') return 'bg-rose-600';
      if (theme === 'amber') return 'bg-amber-600';
    }
    if (type === 'text') {
        if (theme === 'blue') return 'text-blue-600';
        if (theme === 'rose') return 'text-rose-600';
        if (theme === 'amber') return 'text-amber-600';
    }
    if (type === 'light-bg') {
        if (theme === 'blue') return 'bg-blue-50';
        if (theme === 'rose') return 'bg-rose-50';
        if (theme === 'amber') return 'bg-amber-50';
    }
    return 'blue';
  };

  return (
    <div className="font-sans bg-gray-50 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="relative bg-slate-900 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold tracking-wider uppercase mb-4">
                        <span className="w-8 h-[2px] bg-blue-400"></span>
                        Academic Catalog 2026
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Find Your <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                            Intellectual Path
                        </span>
                    </h1>
                    <p className="text-slate-400 text-lg max-w-xl">
                        Explore our NAAC accredited programs designed to foster innovation, critical thinking, and practical skills.
                    </p>
                </div>

                {/* Glass Search Box */}
                <div className="w-full md:w-auto">
                    <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-2 rounded-2xl flex items-center w-full md:w-80 hover:bg-white/10 transition-colors focus-within:ring-2 focus-within:ring-blue-400/50">
                        <Search className="text-white/60 ml-3 w-5 h-5 group-focus-within:text-blue-300" />
                        <input 
                            type="text" 
                            placeholder="Search courses..." 
                            className="bg-transparent border-none text-white placeholder-white/50 focus:outline-none w-full px-3 py-2"
                        />
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-20">
        
        {/* 2. TABS */}
        <div className="bg-white rounded-2xl p-2 shadow-xl border border-gray-100 mb-12 inline-flex flex-wrap md:flex-nowrap gap-2 mx-auto w-full md:w-auto justify-center">
            {Object.keys(coursesData).map((tab) => {
                const isActive = activeTab === tab;
                const data = coursesData[tab];
                const Icon = data.icon;
                
                let activeClass = "";
                if (isActive) {
                    if (data.theme === 'blue') activeClass = "bg-blue-600 text-white shadow-lg shadow-blue-500/30";
                    if (data.theme === 'rose') activeClass = "bg-rose-600 text-white shadow-lg shadow-rose-500/30";
                    if (data.theme === 'amber') activeClass = "bg-amber-600 text-white shadow-lg shadow-amber-500/30";
                } else {
                    activeClass = "text-gray-500 hover:bg-gray-50 hover:text-gray-900";
                }

                return (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex items-center gap-3 px-8 py-4 rounded-xl font-bold transition-all duration-300 ${activeClass} flex-1 md:flex-none justify-center`}
                    >
                        <Icon className={`w-5 h-5 ${!isActive && 'opacity-70'}`} />
                        <div className="text-left">
                            <div className="text-sm leading-none">{tab}</div>
                            {isActive && <div className="text-[10px] font-normal opacity-80 mt-1">{data.desc}</div>}
                        </div>
                    </button>
                );
            })}
        </div>

        {/* 3. COURSE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {coursesData[activeTab].courses.map((course, index) => (
            <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1.5 ${getThemeColor('bg')} transform origin-left scale-x-100 transition-transform duration-500`}></div>
                
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${getThemeColor('light-bg')} ${getThemeColor('text')}`}>
                            {course.code}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                            {course.title}
                        </h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors border border-gray-100">
                        <GraduationCap className="w-6 h-6 text-gray-400 group-hover:text-gray-600" />
                    </div>
                </div>
              
                <p className="text-gray-600 mb-8 leading-relaxed">
                    {course.desc}
                </p>
              
                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                    <div className="flex gap-4 text-sm text-gray-500 font-medium">
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                            <Clock className="h-4 w-4 mr-1.5 text-gray-400" /> {course.duration}
                        </div>
                        <div className="flex items-center bg-gray-50 px-2 py-1 rounded">
                            <Users className="h-4 w-4 mr-1.5 text-gray-400" /> {course.seats} Seats
                        </div>
                    </div>
                    
                    <Link to="/admissions" className={`flex items-center font-bold text-sm ${getThemeColor('text')} group-hover:underline`}>
                        Syllabus <ArrowUpRight className="ml-1 w-4 h-4" />
                    </Link>
                </div>
            </div>
          ))}
        </div>

        {/* 4. INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            <div className="bg-blue-900 rounded-3xl p-8 text-white md:col-span-1 flex flex-col justify-between overflow-hidden relative group">
                <div className="relative z-10">
                    <Sparkles className="w-8 h-8 text-yellow-400 mb-4 animate-pulse" />
                    <h3 className="text-2xl font-bold mb-2">Research Focus</h3>
                    <p className="text-blue-200 text-sm">Our labs are equipped with the latest technology to foster innovation.</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-700 rounded-full blur-2xl group-hover:bg-blue-600 transition-colors duration-500"></div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-lg md:col-span-2 flex items-center relative overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-gray-50 to-transparent"></div>
                <div className="relative z-10 w-full">
                   <div className="flex items-center gap-3 mb-4">
                       <div className="bg-green-100 p-2 rounded-lg group-hover:scale-110 transition-transform">
                           <BookOpen className="w-6 h-6 text-green-600" />
                       </div>
                       <h3 className="text-2xl font-bold text-gray-900">Central Library</h3>
                   </div>
                   <p className="text-gray-600 max-w-lg mb-6">
                       Access over 50,000 physical books and a massive digital repository of journals (JSTOR, IEEE) accessible to all students 24/7.
                   </p>
                   <button className="text-blue-600 font-bold text-sm hover:underline flex items-center">
                       Explore Library Catalog <ArrowRight className="ml-1 w-4 h-4" />
                   </button>
                </div>
            </div>
        </div>

        {/* 5. DOWNLOADS */}
        <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-between mb-8">
                 <h2 className="text-2xl font-bold text-gray-900">Student Resources</h2>
                 <Link to="/downloads" className="text-sm font-semibold text-blue-600 hover:text-blue-800">View All</Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Exam Schedule 2026", size: "2.4 MB", type: "PDF" },
                    { title: "Academic Calendar", size: "1.1 MB", type: "PDF" },
                    { title: "Scholarship Guide", size: "5.0 MB", type: "PDF" }
                ].map((item, i) => (
                    <div key={i} className="group flex items-start gap-4 p-5 bg-white border border-gray-200 rounded-2xl hover:border-blue-400 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer">
                        <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <FileText className="w-6 h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">{item.title}</h4>
                            <p className="text-xs text-gray-500 mt-1">{item.type} • {item.size}</p>
                        </div>
                        <div className="text-gray-300 group-hover:text-blue-600 transition-colors">
                            <Download className="w-5 h-5" />
                        </div>
                    </div>
                ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default Academics;