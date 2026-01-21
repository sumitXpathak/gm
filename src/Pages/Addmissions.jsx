import React, { useState } from 'react';
import { 
  CheckCircle, Calendar, FileText, AlertCircle, 
  User, Mail, Phone, BookOpen, Percent, Send, 
  ArrowRight, ShieldCheck
} from 'lucide-react';

const Admissions = () => {
  // State to handle form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    percentage: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Simulate form submission with loading state
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate network request
    setTimeout(() => {
        alert(`Application Submitted for ${formData.fullName}!\nWe will contact you at ${formData.email}.`);
        setFormData({ fullName: '', email: '', phone: '', course: '', percentage: '' });
        setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800 selection:bg-blue-200">
      
      {/* 1. PAGE HEADER WITH BACKGROUND PATTERN */}
      <div className="relative bg-blue-900 text-white py-20 overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-800/50 border border-blue-700 text-blue-200 text-sm mb-4 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Applications Open for 2026-27
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Begin Your Journey</h1>
          <image alt=""/>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-light">
            Join a legacy of excellence. Complete the form below to take the first step towards your future at Anugrah Memorial College.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10 pb-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDE: INFO & TIMELINE (Span 5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Card 1: The Process Timeline */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="mr-2 text-blue-600 w-5 h-5" /> Admission Process
              </h2>
              
              <div className="space-y-6 relative pl-2">
                {/* Vertical Line */}
                <div className="absolute left-[19px] top-2 bottom-4 w-0.5 bg-gray-200"></div>

                {[
                  { step: "01", title: "Submit Application", desc: "Fill out the online form with accurate details." },
                  { step: "02", title: "Document Verification", desc: "Upload necessary documents for review." },
                  { step: "03", title: "Entrance Exam", desc: "Appear for the college entrance test (if applicable)." },
                  { step: "04", title: "Enrollment", desc: "Pay the fee and secure your admission." }
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 border-2 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold text-sm z-10">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2: Important Dates (Styled differently) */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-2xl shadow-lg">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Calendar className="mr-2 w-5 h-5" /> Key Dates
              </h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="opacity-90">Applications Start</span>
                  <span className="font-bold bg-white text-blue-900 px-2 py-1 rounded text-xs">May 15</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="opacity-90">Submission Deadline</span>
                  <span className="font-bold bg-red-500 text-white px-2 py-1 rounded text-xs">June 30</span>
                </div>
                <div className="flex items-center justify-between bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                  <span className="opacity-90">Entrance Exam</span>
                  <span className="font-bold bg-white text-blue-900 px-2 py-1 rounded text-xs">July 10</span>
                </div>
              </div>
            </div>

            {/* Card 3: Eligibility Checklist */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
               <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Documents Required</h3>
               <ul className="space-y-3">
                 {["10+2 Marksheet (50% Min)", "Valid ID Proof (Aadhar/Voter ID)", "Passport Size Photos", "Migration Certificate"].map((req, i) => (
                   <li key={i} className="flex items-center text-sm text-gray-600">
                     <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                     {req}
                   </li>
                 ))}
               </ul>
            </div>

          </div>

          {/* RIGHT SIDE: APPLICATION FORM (Span 7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-bold text-gray-800">Application Form</h2>
                <div className="flex items-center text-green-600 text-xs font-semibold bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  <ShieldCheck className="w-3 h-3 mr-1" /> Secure & Encrypted
                </div>
              </div>

              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Details Section */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Personal Details</h4>
                    <div className="space-y-4">
                      {/* Full Name */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input 
                          type="text" name="fullName" required
                          placeholder="Full Legal Name"
                          value={formData.fullName} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Email */}
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                          </div>
                          <input 
                            type="email" name="email" required
                            placeholder="Email Address"
                            value={formData.email} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none"
                          />
                        </div>
                        {/* Phone */}
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                          </div>
                          <input 
                            type="tel" name="phone" required
                            placeholder="Phone Number"
                            value={formData.phone} onChange={handleChange}
                            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 my-4"></div>

                  {/* Academic Details Section */}
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Academic Interest</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Course Select */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <BookOpen className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <select 
                          name="course" required
                          value={formData.course} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none appearance-none"
                        >
                          <option value="">Select Program</option>
                          <option value="B.Sc Physics">B.Sc Physics (Honours)</option>
                          <option value="B.Sc Math">B.Sc Mathematics</option>
                          <option value="B.Com">B.Com Accounts</option>
                          <option value="B.A English">B.A English</option>
                          <option value="BCA">BCA (Vocational)</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                           <ArrowRight className="h-4 w-4 text-gray-400 rotate-90" />
                        </div>
                      </div>

                      {/* Percentage */}
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Percent className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                        </div>
                        <input 
                          type="number" name="percentage" min="0" max="100" required
                          placeholder="12th Percentage"
                          value={formData.percentage} onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:border-transparent transition-all outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms & Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className={`w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>Submit Application <Send className="w-5 h-5" /></>
                      )}
                    </button>
                    
                    <p className="text-xs text-gray-400 text-center mt-6 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      We respect your privacy. Your data is processed securely.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Admissions;