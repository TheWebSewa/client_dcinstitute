import { Button } from './ui/button'

const Cta = () => {
  return (
    <div>     <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">
        <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Get free Pro memberships for
            <br />
            your high school class
          </h2>
          <Button className="bg-red-400 hover:bg-red-500 text-slate-900 font-semibold px-10 py-4 rounded-2xl text-lg shadow-lg hover:shadow-red-400/25 transition-all duration-300 hover:scale-105">
            Join With Us
          </Button>
        </div>
      </div></div>
  )
}

export default Cta