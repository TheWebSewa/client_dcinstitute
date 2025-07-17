import { ArrowRight, BookOpen, Code, FileText, GitBranch, Megaphone, Sparkles, TrendingUp } from "lucide-react"
import { useState } from "react";

const Category = () => {
      const [hoveredCategory, setHoveredCategory] = useState(null);
    
      const categories = [
        {
          name: "Data Science",
          icon: GitBranch,
          bg: "from-purple-500/20 to-purple-600/30",
          iconColor: "text-purple-400",
          hoverBg: "from-purple-500/30 to-purple-600/40",
          courses: "120+ Courses",
          trend: "+15%",
        },
        {
          name: "English",
          icon: BookOpen,
          bg: "from-emerald-500/20 to-emerald-600/30",
          iconColor: "text-emerald-400",
          hoverBg: "from-emerald-500/30 to-emerald-600/40",
          courses: "85+ Courses",
          trend: "+8%",
        },
        {
          name: "Finance",
          icon: TrendingUp,
          bg: "from-pink-500/20 to-pink-600/30",
          iconColor: "text-pink-400",
          hoverBg: "from-pink-500/30 to-pink-600/40",
          courses: "95+ Courses",
          trend: "+22%",
        },
        {
          name: "Content Writing",
          icon: FileText,
          bg: "from-blue-500/20 to-blue-600/30",
          iconColor: "text-blue-400",
          hoverBg: "from-blue-500/30 to-blue-600/40",
          courses: "65+ Courses",
          trend: "+12%",
        },
        {
          name: "Development",
          icon: Code,
          bg: "from-cyan-500/20 to-cyan-600/30",
          iconColor: "text-cyan-400",
          hoverBg: "from-cyan-500/30 to-cyan-600/40",
          courses: "200+ Courses",
          trend: "+18%",
        },
        {
          name: "Art & Design",
          icon: Megaphone,
          bg: "from-orange-500/20 to-orange-600/30",
          iconColor: "text-orange-400",
          hoverBg: "from-orange-500/30 to-orange-600/40",
          courses: "75+ Courses",
          trend: "+9%",
        },
      ];
    
  return (
    <div><div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          <div className="flex flex-col lg:flex-row items-start gap-20">
            {/* Left side - Enhanced */}
            <div className="lg:w-1/2 space-y-8">
              {/* Badge with glow effect */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl px-6 py-3 shadow-lg">
                <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm tracking-wide">
                  TRENDING CATEGORIES
                </span>
              </div>

              {/* Enhanced heading */}
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                    Discover
                  </span>
                  <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                    Your Path
                  </span>
                </h2>

                {/* Animated underline */}
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full animate-pulse"></div>
              </div>

              {/* Enhanced description */}
              <div className="space-y-6">
                <p className="text-slate-300 text-xl leading-relaxed font-light">
                  Transform your potential into expertise with our
                  <span className="text-emerald-400 font-semibold">
                    {" "}
                    cutting-edge courses
                  </span>
                  . Join thousands of learners already advancing their careers.
                </p>

                {/* Stats */}
                <div className="flex gap-6 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">1000+</div>
                    <div className="text-sm text-slate-400">Courses</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">50K+</div>
                    <div className="text-sm text-slate-400">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-slate-400">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <button className="group relative bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-500 hover:to-cyan-500 text-white font-bold px-12 py-5 rounded-2xl text-lg shadow-2xl hover:shadow-emerald-500/25 transition-all duration-500 hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Right side - Modern Category Grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                {categories.map((category, index) => (
                  <div
                    key={category.name}
                    className={`relative group cursor-pointer transition-all duration-500 hover:scale-105`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    // @ts-ignore

                    onMouseEnter={() => setHoveredCategory(index)}
                    onMouseLeave={() => setHoveredCategory(null)}
                  >
                    {/* Card Background */}
                    <div
                      className={`
                    relative bg-gradient-to-br ${
                      hoveredCategory === index ? category.hoverBg : category.bg
                    }
                    backdrop-blur-xl border border-white/10 rounded-3xl p-6 
                    shadow-xl hover:shadow-2xl transition-all duration-500
                    hover:border-white/20 overflow-hidden
                  `}
                    >
                      {/* Animated glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Icon container */}
                      <div className="relative z-10 mb-4">
                        <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <category.icon
                            className={`w-8 h-8 ${category.iconColor}`}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 text-center space-y-2">
                        <h3 className="text-white font-bold text-lg group-hover:text-white/90 transition-colors duration-300">
                          {category.name}
                        </h3>

                        {/* Course count */}
                        <p className="text-slate-400 text-sm font-medium">
                          {category.courses}
                        </p>

                        {/* Trend indicator */}
                        <div className="flex items-center justify-center gap-1 pt-2">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-emerald-400 text-xs font-semibold">
                            {category.trend} this month
                          </span>
                        </div>
                      </div>

                      {/* Hover effect overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div></div>
  )
}

export default Category