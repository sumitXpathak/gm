import React, { useState } from 'react';
import { Mail, Phone, Search, Linkedin } from 'lucide-react';

// 1. MOCK DATA - Using data URLs (completely offline, no internet needed)
const facultyMembers = [
  {
    id: 1,
    name: "Prof. (Dr.) Md. Nazir Akhtar",
    designation: "Principal",
    department: "Administration",
    email: "principal@amcollege.ac.in",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%231e40af' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='60' fill='white' font-weight='bold'%3ENA%3C/text%3E%3C/svg%3E",
  },
  {
    id: 2,
    name: "Malay Kumar",
    designation: "Assistant Professor",
    department: "Science",
    email: "anjali.v@amcollege.ac.in",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23059669' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='60' fill='white' font-weight='bold'%3EMK%3C/text%3E%3C/svg%3E",
  },
  {
    id: 3,
    name: "Gautam Kumar",
    designation: "Associate Professor",
    department: "Commerce",
    email: "vikram.s@amcollege.ac.in",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23dc2626' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='60' fill='white' font-weight='bold'%3EGK%3C/text%3E%3C/svg%3E",
  },
  {
    id: 4,
    name: "Prince Kumar",
    designation: "Professor, English",
    department: "Arts",
    email: "kavita.d@amcollege.ac.in",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%237c3aed' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='60' fill='white' font-weight='bold'%3EPK%3C/text%3E%3C/svg%3E",
  },
  {
    id: 5,
    name: "Nidhi Kanchan",
    designation: "Lab Instructor",
    department: "Science",
    email: "amit.k@amcollege.ac.in",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ea580c' width='200' height='200'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='60' fill='white' font-weight='bold'%3ENK%3C/text%3E%3C/svg%3E",
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
    <div className="pt-20 min-h-screen bg-gray-50 pb-16">
      
      {/* Header */}
      <div className="bg-blue-900 text-white py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-2">Meet Our Faculty</h1>
          <p className="text-blue-200">The mentors shaping the future of our students.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        
        {/* Controls Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            <div className="relative w-full md:w-96">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                    type="text" 
                    placeholder="Search by name or role..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex flex-wrap justify-center gap-2">
            {['All', 'Science', 'Arts', 'Commerce', 'Administration'].map((dept) => (
                <button
                key={dept}
                onClick={() => setFilter(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                    filter === dept 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
                >
                {dept}
                </button>
            ))}
            </div>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFaculty.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-300 overflow-hidden relative"
            >
              {/* Decorative Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

              <div className="flex flex-col items-center p-8 text-center">
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <img 
                      src={member.image} 
                      alt={member.name}
                      onError={(e) => {e.target.src='https://via.placeholder.com/150'}} 
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-gray-50 group-hover:border-blue-100 group-hover:scale-105 transition-all duration-500 shadow-md"
                    />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.designation}</p>
                
                <span className="inline-block bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full mb-6 border border-gray-100">
                  {member.department}
                </span>
                
                {/* Social Actions */}
                <div className="w-full flex justify-center gap-3 pt-6 border-t border-gray-100">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                    title="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <button 
                    className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-full transition-colors"
                    title="Phone"
                  >
                    <Phone className="h-5 w-5" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-full transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFaculty.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-block p-4 rounded-full bg-gray-100 mb-4 animate-bounce">
                <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg">No faculty members found matching your search.</p>
            <button 
                onClick={() => {setFilter('All'); setSearchTerm('')}}
                className="mt-4 text-blue-600 font-medium hover:underline"
            >
                Clear Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Faculty;
