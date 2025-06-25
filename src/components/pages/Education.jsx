import { useState, useEffect } from 'react';
import { ExternalLink, Calendar, MapPin, Award, Trophy, CheckCircle, GraduationCap, BookOpen, Star, Zap } from 'lucide-react';

const educationData = [
  {
    institution: "Pt. J. L. N. Govt. College, Faridabad",
    duration: "2021 - 2024",
    course: "Bachelor of Computer Applications (BCA)",
    field: "Information Technology",
    icon: "🎓",
    website: "https://www.jlngcfaridabad.ac.in/",
    type: "Degree",
    grade: "8.0 CGPA"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2019 - 2021", 
    course: "Senior Secondary Education",
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    icon: "📚",
    website: "http://www.bseh.org.in/",
    type: "12th Grade"
  },
  {
    institution: "Govt. Senior Secondary School, Sehatpur",
    duration: "2017 - 2019",
    course: "High School Education", 
    field: "Issued by Haryana Board of Secondary Education (HBSE)",
    icon: "🏫",
    website: "http://www.bseh.org.in/",
    type: "10th Grade"
  }
];

const certifications = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    icon: "🛡️",
    date: "2022",
    type: "certification"
  },
  {
    title: "2nd Place, District Level Science & Math Promotion",
    issuer: "Govt. Senior Secondary School",
    icon: "🏅", 
    date: "2021",
    type: "achievement"
  }
];

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="education" className="py-16 lg:py-24 bg-gradient-to-br from-base-100 to-base-200 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div className="absolute w-64 h-64 border border-slate-200/40 rounded-full opacity-20 top-10 right-10 animate-pulse"></div>
        <div className="absolute w-32 h-32 border border-slate-300/30 rounded-full opacity-15 bottom-20 left-10 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className={`text-center mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm border-l-4 border-amber-500 shadow-lg rounded-r-full mb-6">
            <GraduationCap className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-bold">Academic Journey</span>
            <Star className="w-4 h-4 text-amber-600 animate-pulse" />
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-black text-slate-300 mb-4">
            Education & Achievements
          </h2>
          
          <p className="text-lg text-amber-400 max-w-2xl mx-auto leading-relaxed">
            My academic foundation and continuous learning journey in technology and computer applications
          </p>
        </div>

        <div className={`flex justify-center mb-8 lg:mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'certifications'
                  ? 'bg-slate-900 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Award className="w-4 h-4" />
              Certifications
            </button>
          </div>
        </div>

        {activeTab === 'education' && (
          <div className={`max-w-4xl mx-auto transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="space-y-6 lg:space-y-8">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 overflow-hidden ${
                    index === 0 ? 'border-l-4 border-l-amber-500' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {index === 0 && (
                    <div className="absolute -top-3 left-6">
                      <div className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg">
                        <Zap className="w-4 h-4" />
                        Latest Degree
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="text-4xl lg:text-5xl">{edu.icon}</div>
                        <div className="flex-1">
                          <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-lg font-semibold text-amber-600 mb-1">{edu.course}</p>
                          <p className="text-slate-600 text-sm leading-relaxed">{edu.field}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                          <Calendar className="w-4 h-4 text-slate-600" />
                          <div>
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Duration</div>
                            <div className="text-slate-900 font-bold">{edu.duration}</div>
                          </div>
                        </div>

                        {edu.grade && (
                          <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-xl">
                            <Star className="w-4 h-4 text-emerald-600" />
                            <div>
                              <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Grade</div>
                              <div className="text-emerald-700 font-bold">{edu.grade}</div>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl sm:col-span-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <div>
                            <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Type</div>
                            <div className="text-blue-700 font-bold">{edu.type}</div>
                          </div>
                        </div>
                      </div>

                      {edu.website && (
                        <a
                          href={edu.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-all duration-300 hover:scale-105 text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit Institution
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'certifications' && (
          <div className={`max-w-4xl mx-auto transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:scale-[1.02] transition-all duration-500 overflow-hidden"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="absolute -top-3 left-6">
                    <div className={`px-3 py-1 ${cert.type === 'certification' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-yellow-500 to-yellow-600'} text-white font-bold text-sm rounded-full flex items-center gap-2 shadow-lg`}>
                      {cert.type === 'certification' ? <Award className="w-3 h-3" /> : <Trophy className="w-3 h-3" />}
                      {cert.type === 'certification' ? 'Certificate' : 'Achievement'}
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg lg:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                          {cert.title}
                        </h3>
                        <p className="text-slate-600 font-medium">{cert.issuer}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl">
                      <Calendar className="w-4 h-4 text-slate-600" />
                      <div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide">Earned</div>
                        <div className="text-slate-900 font-bold">{cert.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 lg:mt-12 p-6 bg-gradient-to-r from-slate-600 to-slate-800 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full translate-y-10 -translate-x-10"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-slate-300" />
                  <span className="text-slate-200 font-bold text-sm uppercase tracking-wide">Academic Excellence</span>
                </div>
                <p className="text-lg leading-relaxed">
                  Maintained <strong>consistent academic performance</strong> throughout my educational journey, 
                  earning <strong>8.0 CGPA in BCA</strong> and achieving <strong>district-level recognition</strong> 
                  in Science & Mathematics. Committed to <strong>continuous learning</strong> in cybersecurity and technology.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Education;