import { ArrowRight, Star } from "lucide-react"
import { Button } from "./ui/button"

const Home = () => {
  return (
    <div>{/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-16">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-400/10 to-purple-400/10 backdrop-blur-sm border border-red-400/20 rounded-full px-6 py-2 mb-8">
            <Star className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400 font-medium">
              Trusted by 100k+ students nation-wide.
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent animate-scale-in">
            Grow Your Skills to
            <br />
            <span className="bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
              Advance Your Career
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            At DC INSTITUTE LAHAN, we empower students with industry-relevant skills through our certified diploma courses in Graphic Design, Accounting Packages, AutoCAD Training, and Basic Computer Courses. Join us and take the first step toward a brighter future!

          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
            <Button className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-slate-900 font-semibold px-10 py-5 rounded-2xl text-lg shadow-xl hover:shadow-red-400/25 transition-all duration-300 hover:scale-105 group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            
          </div>

         {/* Student avatars */}
<div className="flex items-center justify-center space-x-6 animate-fade-in delay-500">
  <div className="flex -space-x-3">
    {[
      {
        bg: "", // No need for background if you're using images
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnRLrk_ceR4dKs9Mu_2gOJXmoQ8hpIMec1Uw&s",
      },
      {
        bg: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTkS6kpRzRWbZ3LzvBAy3i-WHq_j-ernFBovlBrRYm1tPM_bNsX2b6UwhT6Z0QSSGjWI&usqp=CAU",
      },
      {
        bg: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR69lGgt1-i0BetU8mlDuJFhqpawRTDufRHbtpHN1NnIWw3q7hVo9ie8WwGLOZz-6AkvI&usqp=CAU",
      },
      {
        bg: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-hNSPl3umCc1k3slD8S3Xi29wmn5jqV4Z_VMJFXGDH8kwroDUW_Qw8USRQzNeKrQTQQ&usqp=CAU",
      },
      {
        bg: "",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSQC9Hp9UsL1rWG_eNSnJK-9zpWo4gI26ZoRdf5ElxxqfmIOaah5KIj2zmYchqcAwTaI&usqp=CAU",
      },
      {
        bg: "",
        img: "https://neostuffs.com/wp-content/uploads/2016/05/rastra.jpg",
      },
    ].map((avatar, index) => (
      <div
        key={index}
        className={`w-12 h-12 rounded-2xl border-3 border-slate-800 shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer`}
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <img
          src={avatar.img}
          alt={`Avatar ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}

    {/* +50 more */}
    <div className="w-12 h-12 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl border-3 border-slate-800 flex items-center justify-center text-white font-bold text-xs shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
      50+
    </div>
  </div>
  <div className="text-slate-300 font-medium">
    <span className="text-red-400 font-bold text-xl">100k+</span>{" "}
    enrolled students
  </div>
</div>

        </div>
      </div></div>
  )
}

export default Home