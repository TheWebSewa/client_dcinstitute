import { ArrowRight, Sparkles } from 'lucide-react'

const About = () => {
  return (
    <div> <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 px-8 overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(239,68,68,0.1),transparent)] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(248,113,113,0.08),transparent)] opacity-40"></div>
      
    
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/60 backdrop-blur-md border border-slate-700/50 rounded-full px-4 py-2 text-sm">
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="text-slate-300">Transform Your Future</span>
            </div>

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                About Us
              </span>
            </h2>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              Kickstart your career with <span className="text-red-400 font-semibold">DC INSTITUTE LAHAN</span>! Enroll today in our industry-leading Graphic Design, Accounting, AutoCAD, or Basic Computer courses in Lahan. Gain practical skills, earn certifications, and unlock new opportunities.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 py-4">
              {[
                "Expert-Led Training",
                "Industry Certifications", 
                "Hands-On Projects",
                "Career Support"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-2"> <a href="#contact" className='cursor-pointer'>
              <button className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold px-10 py-5 rounded-2xl transition-all duration-300 flex items-center space-x-3 hover:scale-105 shadow-lg hover:shadow-red-500/25">
              <span className="text-lg">Start Learning Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
              </button></a> 
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Image Frame */}
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-2 hover:border-slate-600/50 transition-all duration-300">
                <img
                  src="/1.jpg"
                  alt="D.C. Institute Lahan - Modern Learning Environment"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Overlay Elements */}
                <div className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl px-4 py-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">500+</div>
                <div className="text-xs text-slate-400">Students Trained</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                <div className="text-xl font-bold text-red-400 mb-1">4</div>
                <div className="text-xs text-slate-400">Core Courses</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section></div>
  )
}

export default About