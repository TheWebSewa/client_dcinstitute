
const StudentImage = () => {
  return (
    <div> {/* Student Images Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pb-32">
        <div className="flex justify-center items-end space-x-12 relative">
          {/* Left student */}
          <div className="relative group animate-slide-in-left">
            <div className="w-80 h-96 bg-gradient-to-b from-purple-300 to-purple-400 rounded-t-[3rem] overflow-hidden border-4 border-slate-700/50 shadow-2xl group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <img
                src="14.jpg"
                alt="Student 1"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full animate-bounce"></div>
          </div>

          {/* Center student */}
          <div className="relative -mt-8 group animate-scale-in delay-300">
            <div className="w-96 h-[28rem] bg-gradient-to-b from-red-200 to-red-300 rounded-t-[3rem] overflow-hidden border-4 border-slate-700/50 shadow-2xl group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <img
                src="4.jpg"
                alt="Student 2"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full animate-ping"></div>
          </div>

          {/* Right student */}
          <div className="relative group animate-slide-in-right">
            <div className="w-80 h-96 bg-gradient-to-b from-pink-300 to-pink-400 rounded-t-[3rem] overflow-hidden border-4 border-slate-700/50 shadow-2xl group-hover:scale-105 transition-all duration-500 backdrop-blur-sm">
              <img
                src="13.jpg"
                alt="Student 3"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
          </div>
        </div>
      </div></div>
  )
}

export default StudentImage