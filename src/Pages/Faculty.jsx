import React, { useState } from 'react';
import { Mail, Phone, Search, Linkedin, Users } from 'lucide-react';

// 1. MOCK DATA - Fixed emails to match names
const facultyMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Md. Nazir Akhtar",
    designation: "Principal",
    department: "Administration",
    email: "principal@amcollege.ac.in",
    image: "principal.png",
  },
  {
    id: 2,
    name: "Malay Kumar",
    designation: "Assistant Professor",
    department: "Science",
    email: "malay.k@amcollege.ac.in", // Fixed email
    image: "malay.jpeg",
  },
  {
    id: 3,
    name: "Gautam Kumar",
    designation: "Associate Professor",
    department: "Commerce",
    email: "gautam.k@amcollege.ac.in", // Fixed email
    image: "gautam.jpeg",
  },
  {
    id: 4,
    name: "Prince Kumar",
    designation: "Professor, English",
    department: "Arts",
    email: "prince.k@amcollege.ac.in", // Fixed email
    image: "image.png",
  },
  {
    id: 5,
    name: "Nidhi Kanchan",
    designation: "Lab Instructor",
    department: "Science",
    email: "nidhi.k@amcollege.ac.in", // Fixed email
    image: "mam.jpeg",
  },
];

const Faculty = () => {
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = facultyMembers.filter(member => {
    const matchesDept = filter === 'All' || member.department === filter;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          member.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    // Changed pt-20 to pt-4 if there is no fixed navbar blocking it, otherwise keep pt-20
    <div className="min-h-screen bg-gray-50 pb-16">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 mb-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
             <div className="p-3 bg-white/10 rounded-full">
                <Users className="h-10 w-10 text-blue-100" />
             </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Faculty</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Dedicated educators and mentors shaping the future of our students with excellence and passion.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Controls Section */}
        <div className="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-6 mb-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="relative w-full lg:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by name or role..." 
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white transition-all"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-2">
            {['All', 'Science', 'Arts', 'Commerce', 'Administration'].map((dept) => (
                <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    filter === dept 
                    ? 'bg-blue-600 text-white shadow-md scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300'
                }`}
                >
                {dept}
                </button>
            ))}
            </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredFaculty.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              <div className="flex flex-col items-center p-8 text-center flex-grow">
                <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-2 border-2 border-white shadow-sm">
                        <Linkedin className="h-4 w-4 text-white" />
                    </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.designation}</p>
                
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6">
                  {member.department}
                </span>
                
                {/* Social Actions */}
                <div className="w-full flex justify-center gap-4 pt-6 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 text-gray-400 hover:text-white hover:bg-red-500 rounded-full transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <button 
                    className="p-2 text-gray-400 hover:text-white hover:bg-green-500 rounded-full transition-all duration-300"
                    title="Phone"
                  >
                    <Phone className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
            <div className="inline-block p-4 rounded-full bg-blue-50 mb-4">
                <Search className="h-8 w-8 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No faculty found</h3>
            <p className="text-gray-500 mb-6">We couldn't find any matches for "{searchTerm}"</p>
            <button 
                onClick={() => {setFilter('All'); setSearchTerm('')}}
                className="text-blue-600 font-medium hover:text-blue-800 underline"
            >
                Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Faculty;