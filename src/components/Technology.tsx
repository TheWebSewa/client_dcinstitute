import { ArrowRight, Award, Calculator, CheckCircle, Clock, Code, Monitor, Palette, Ruler } from "lucide-react"
import { useState } from "react";

const Technology = () => {
  const [hoveredService, setHoveredService] = useState(null);
    const services = [
    {
      name: "Diploma Course",
      icon: Award,
      description: "Complete professional certification program",
      bg: "from-purple-500/20 to-purple-600/30",
      iconColor: "text-purple-400",
      hoverBg: "from-purple-500/30 to-purple-600/40",
      duration: "12 Months",
      level: "Advanced",
      features: [
        "Industry Certification",
        "Job Placement Support",
        "Live Projects",
      ],
    },
    {
      name: "Basic Course",
      icon: Monitor,
      description: "Essential computer skills for beginners",
      bg: "from-emerald-500/20 to-emerald-600/30",
      iconColor: "text-emerald-400",
      hoverBg: "from-emerald-500/30 to-emerald-600/40",
      duration: "3 Months",
      level: "Beginner",
      features: ["Fundamentals", "Practical Training", "Certificate"],
    },
    {
      name: "Graphic Design",
      icon: Palette,
      description: "Creative design with industry-standard tools",
      bg: "from-pink-500/20 to-pink-600/30",
      iconColor: "text-pink-400",
      hoverBg: "from-pink-500/30 to-pink-600/40",
      duration: "6 Months",
      level: "Intermediate",
      features: [
        "Adobe Creative Suite",
        "Portfolio Development",
        "Design Principles",
      ],
    },
    {
      name: "Accounting Package",
      icon: Calculator,
      description: "Excel, Tally, and financial software mastery",
      bg: "from-blue-500/20 to-blue-600/30",
      iconColor: "text-blue-400",
      hoverBg: "from-blue-500/30 to-blue-600/40",
      duration: "4 Months",
      level: "Professional",
      features: ["Excel Advanced", "Tally ERP", "GST Compliance"],
    },
    {
      name: "AutoCAD Training",
      icon: Ruler,
      description: "Professional 2D & 3D design and drafting",
      bg: "from-cyan-500/20 to-cyan-600/30",
      iconColor: "text-cyan-400",
      hoverBg: "from-cyan-500/30 to-cyan-600/40",
      duration: "5 Months",
      level: "Professional",
      features: ["2D Drafting", "3D Modeling", "Technical Drawing"],
    },
    {
      name: "Programming",
      icon: Code,
      description: "Learn modern programming languages",
      bg: "from-orange-500/20 to-orange-600/30",
      iconColor: "text-orange-400",
      hoverBg: "from-orange-500/30 to-orange-600/40",
      duration: "8 Months",
      level: "Advanced",
      features: ["Multiple Languages", "Project-Based", "Industry Ready"],
    },
  ];
  const getLevelColor = (level:any) => {
    switch (level) {
      case "Beginner":
        return "text-red-400 bg-red-400/10";
      case "Intermediate":
        return "text-yellow-400 bg-yellow-400/10";
      case "Advanced":
        return "text-red-400 bg-red-400/10";
      case "Professional":
        return "text-blue-400 bg-blue-400/10";
      default:
        return "text-gray-400 bg-gray-400/10";
    }
  };


  return (
    <div><div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
     

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-400/30 rounded-2xl px-6 py-3 shadow-lg">
              <Monitor className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-blue-400 font-semibold text-sm tracking-wide">
OUR COURSES              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                  Master
                </span>
                <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Technology
                </span>
              </h2>

              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse mx-auto"></div>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-xl leading-relaxed font-light max-w-2xl mx-auto">
              Transform your career with our comprehensive computer training
              programs.
              <span className="text-blue-400 font-semibold">
                {" "}
                Industry-certified courses
              </span>{" "}
              designed for real-world success.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="relative group cursor-pointer transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
                // @ts-ignore
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Card Background */}
                <div
                  className={`
                relative bg-gradient-to-br ${
                  hoveredService === index ? service.hoverBg : service.bg
                }
                backdrop-blur-xl border border-white/10 rounded-3xl p-8 
                shadow-xl hover:shadow-2xl transition-all duration-500
                hover:border-white/20 overflow-hidden h-full
              `}
                >
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Header */}
                  <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <service.icon
                          className={`w-7 h-7 ${service.iconColor}`}
                        />
                      </div>

                      {/* Level Badge */}
                      <div
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(
                          service.level
                        )}`}
                      >
                        {service.level}
                      </div>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-white/90 transition-colors duration-300">
                      {service.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center gap-2 text-slate-300">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">
                        {service.duration}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <div className="relative z-10 mt-auto">
                    <button className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div> */}

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                </div>
              </div>
            ))}
          </div>

         
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div></div>
  )
}

export default Technology