// @ts-nocheck

import {
  ArrowRight,
  Award,
  BookOpen,
  Calculator,
  Camera,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Code,
  Coffee,
  ExternalLink,
  Facebook,
  FileText,
  GitBranch,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Megaphone,
  Menu,
  MessageCircle,
  Microscope,
  Monitor,
  Palette,
  Phone,
  Play,
  Quote,
  Ruler,
  Sparkles,
  Star,
  TrendingUp,
  Trophy,
  Twitter,
  Users,
  X,
  Youtube,
  ZoomIn,
} from "lucide-react";
import "./App.css";
import { Button } from "./components/ui/button";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import StudentImage from "./components/StudentImage";
import Technology from "./components/Technology";
import Category from "./components/Category";
import Story from "./components/Story";
import Gallery from "./components/Gallery";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  // Responsive columns based on screen size

  // Create columns for masonry layout

  // @ts-ignore

  const companies = [
    { name: "Lightbox", logo: "📦" },
    { name: "FeatherDev", logo: "🪶" },
    { name: "Spherule", logo: "⚪" },
    { name: "GlobalBank", logo: "🏦" },
    { name: "Boltshift", logo: "⚡" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Updated navigation items with section IDs
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Courses", href: "#courses" },
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 88; // Approximate navbar height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-red-400/20 rotate-45 rounded-2xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-purple-400/20 rotate-12 rounded-2xl animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-blue-400/20 -rotate-12 rounded-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 right-40 w-28 h-28 border border-pink-400/20 rotate-45 rounded-2xl animate-bounce delay-500"></div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700 opacity-75"></div>
        <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-blue-400 rounded-full animate-ping delay-1000 opacity-75"></div>
      </div>

      {/* Navigation - Enhanced sticky positioning */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card backdrop-blur-md bg-slate-900/80 border-b border-slate-800/50">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="D.C. Institute"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  D.C. Institute
                </h3>
                <p className="text-slate-400 text-sm">Lahan</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(0, -1).map((item) => (
              <div
                key={item.name}
                className="flex items-center space-x-1 group cursor-pointer"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-muted-foreground hover:text-white transition-smooth group-hover:scale-105"
                >
                  {item.name}
                </a>
                <span className="text-muted-foreground group-hover:text-primary transition-smooth">
                  +
                </span>
              </div>
            ))}
          
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground bg-white"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Desktop Sign Up Button */}
          <div className="hidden md:block">
            <Button
  className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-slate-900 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-red-400/25 transition-all duration-300 hover:scale-105"
  onClick={(e) => handleNavClick(e, '#contact')}
>
  Contact Us
</Button>

          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden glass-card border-t border-border/20">
            <div className="px-8 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block text-muted-foreground hover:text-foreground transition-smooth py-2"
                >
                  {item.name}
                </a>
              ))}

 

            </div>
          </div>
        )}
      </nav>

      {/* Add padding to account for fixed navbar */}
      <div className="pt-24">
        <div id="home">
          <Home />
        </div>
        <div id="students">
          <StudentImage />
        </div>
        <div id="courses">
          <Technology />
        </div>
        {/* <Category /> */}
        <div id="story">
          <Story />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;