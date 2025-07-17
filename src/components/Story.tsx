import { ChevronLeft, ChevronRight, MessageCircle, Quote, Star } from 'lucide-react'
import { useEffect, useState } from 'react';

const Story = () => {
      const [isAnimating, setIsAnimating] = useState(false);

        const testimonials = [
    {
      id: 1,
      text: "We the viewers have a quick and easy way to discover information about the company we are entering. IT is also simple to keep track of all the qualification",
      name: "Michael Anderson",
      role: "Graphic Designer",
      company: "Creative Studio Inc.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      course: "Graphic Design Diploma",
    },
    {
      id: 2,
      text: "The platform has transformed how we approach learning. The courses are well-structured and the instructors are knowledgeable. Highly recommended!",
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Solutions Ltd.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      course: "Programming Bootcamp",
    },
    {
      id: 3,
      text: "Exceptional quality content and great community support. This platform has helped me advance my career significantly in just a few months.",
      name: "David Chen",
      role: "Product Manager",
      company: "Innovation Corp.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      course: "Business Management",
    },
    {
      id: 4,
      text: "Outstanding learning experience with practical projects. The AutoCAD training was comprehensive and helped me land my dream job in architecture.",
      name: "Emma Martinez",
      role: "Architect",
      company: "Design Architects",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      course: "AutoCAD Training",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  // @ts-ignore

  const goToTestimonial = (index) => {
    if (isAnimating || index === currentTestimonial) return;
    setIsAnimating(true);
    setCurrentTestimonial(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: any) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-slate-600"
        }`}
      />
    ));
  };

  return (
    <div> {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"></div>

      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Quote Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <Quote className="w-8 h-8 text-white animate-pulse" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-20">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 backdrop-blur-xl border border-emerald-400/30 rounded-2xl px-6 py-3 shadow-lg mb-6">
              <MessageCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-semibold text-sm tracking-wide">
                CLIENT TESTIMONIALS
              </span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-4 mb-8">
              <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                  Success
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                  Stories
                </span>
              </h2>

              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 rounded-full animate-pulse mx-auto"></div>
            </div>

            <p className="text-slate-300 text-xl leading-relaxed font-light max-w-2xl mx-auto">
              Join thousands of learners who transformed their careers with our
              <span className="text-emerald-400 font-semibold">
                {" "}
                expert-led courses
              </span>
              .
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-12 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">5000+</div>
                <div className="text-sm text-slate-400">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">4.9</div>
                <div className="text-sm text-slate-400">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Main Testimonial Card */}
          <div className="relative max-w-5xl mx-auto mb-16">
            {/* Background Card */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl hover:shadow-3xl transition-all duration-500">
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300">
                  <Quote className="w-10 h-10 text-slate-900" />
                </div>
              </div>

              {/* Testimonial Content */}
              <div
                className={`text-center transition-all duration-500 ${
                  isAnimating
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex gap-1">
                    {renderStars(testimonials[currentTestimonial].rating)}
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed mb-10 max-w-4xl mx-auto font-light">
                  "{testimonials[currentTestimonial].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-emerald-400/50 shadow-lg">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <h4 className="text-white font-bold text-xl mb-1">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-emerald-400 font-semibold text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                    <div className="inline-block bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full px-3 py-1 mt-2">
                      <span className="text-xs text-purple-400 font-medium">
                        {testimonials[currentTestimonial].course}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-emerald-500/20 hover:to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300 group shadow-lg hover:shadow-emerald-500/25"
            >
              <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
            </button>

            {/* Avatar Navigation */}
            <div className="flex gap-4">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => goToTestimonial(index)}
                  className={`relative transition-all duration-300 ${
                    index === currentTestimonial
                      ? "scale-110"
                      : "hover:scale-105"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                      index === currentTestimonial
                        ? "border-emerald-400 shadow-lg shadow-emerald-400/25"
                        : "border-slate-600 hover:border-slate-500"
                    }`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Active Indicator */}
                  {index === currentTestimonial && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 bg-gradient-to-r from-slate-800/50 to-slate-700/50 hover:from-emerald-500/20 hover:to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-slate-600/50 hover:border-emerald-400/50 transition-all duration-300 group shadow-lg hover:shadow-emerald-500/25"
            >
              <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "w-12 bg-gradient-to-r from-emerald-400 to-cyan-400"
                      : "w-6 bg-slate-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div></div>
  )
}

export default Story