import React from 'react';
import { Map, PlayCircle, Camera } from 'lucide-react';

const VirtualTour = () => {
  const campusSpots = [
    { title: "Main Administrative Block", img: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80" },
    { title: "Central Library", img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80" },
    { title: "Chemistry Laboratory", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80" },
    { title: "Sports Complex", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
    { title: "Auditorium", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=600&q=80" },
    { title: "Student Cafeteria", img: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-slate-900 text-white pb-16">
      
      {/* 1. Video Header */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16 pt-10">
        <h1 className="text-4xl font-bold mb-4 flex justify-center items-center">
          <Camera className="mr-3 text-blue-500" /> Virtual Campus Tour
        </h1>
        <p className="text-gray-400 mb-8">Experience life at Anugrah Memorial College from anywhere in the world.</p>
        
        {/* Responsive Video Container */}
        <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-800 flex items-center justify-center group">
          {/* Note: In a real app, replace the src below with a valid YouTube embed link or local file path */}
          <div className="text-center p-10">
            <PlayCircle className="w-20 h-20 text-blue-500 mx-auto mb-4 opacity-50 group-hover:opacity-100 transition-opacity" />
            <p className="text-gray-400">Campus Video Tour</p>
            <p className="text-xs text-gray-500 mt-2">(Upload 'campus-tour.mp4' to public folder to view)</p>
          </div>
        </div>
      </div>

      {/* 2. Photo Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 flex items-center">
          <Map className="mr-2 text-blue-500" /> Key Locations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campusSpots.map((spot, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              <img 
                src={spot.img} 
                alt={spot.title} 
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{spot.title}</h3>
                  <span className="text-sm text-blue-400 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <PlayCircle className="w-4 h-4 mr-1" /> View 360°
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualTour;