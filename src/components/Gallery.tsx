// @ts-nocheck
import {
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Microscope,
  Palette,
  Trophy,
  Users,
  X,
  ZoomIn,
} from "lucide-react";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [columns, setColumns] = useState(4);

  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredImage, setHoveredImage] = useState(null);

  const getCategoryIcon = (category) => {
    const icons = {
      Education: <BookOpen className="w-3 h-3" />,
      Research: <Microscope className="w-3 h-3" />,
      Community: <Users className="w-3 h-3" />,
      Arts: <Palette className="w-3 h-3" />,
      Sports: <Trophy className="w-3 h-3" />,
      Technology: <Camera className="w-3 h-3" />,
      Events: <Coffee className="w-3 h-3" />,
      Environment: <Camera className="w-3 h-3" />,
    };
    return icons[category] || <Camera className="w-3 h-3" />;
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setColumns(1);
      else if (window.innerWidth < 768) setColumns(2);
      else if (window.innerWidth < 1024) setColumns(3);
      else setColumns(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Sample gallery images with varied dimensions for Pinterest effect
  const galleryImages = [
    {
      id: 1,
      url: "4.jpg",

      height: 600,
    },
    {
      id: 2,
      url: "3.jpg",

      height: 300,
    },
    {
      id: 3,
      url: "2.jpg",

      height: 500,
    },
    {
      id: 4,
      url: "1.jpg",

      height: 400,
    },
    {
      id: 5,
      url: "5.jpg",

      height: 550,
    },
    {
      id: 6,
      url: "6.jpg",

      height: 350,
    },
    {
      id: 7,
      url: "7.jpg",

      height: 450,
    },
    {
      id: 8,
      url: "8.jpg",

      height: 320,
    },
    {
      id: 9,
      url: "9.jpg",

      height: 480,
    },
    {
      id: 10,
      url: "10.jpg",

      height: 380,
    },
    {
      id: 11,
      url: "11.jpg",

      height: 520,
    },
    {
      id: 12,
      url: "12.jpg",

      height: 360,
    },
  ];
  const nextImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setSelectedImage(galleryImages[nextIndex]);
  };

  const getCategoryColor = (category) => {
    const colors = {
      Education: "bg-blue-500/20 text-blue-400 border-blue-400/30",
      Research: "bg-purple-500/20 text-purple-400 border-purple-400/30",
      Community: "bg-red-500/20 text-red-400 border-red-400/30",
      Arts: "bg-pink-500/20 text-pink-400 border-pink-400/30",
      Sports: "bg-orange-500/20 text-orange-400 border-orange-400/30",
      Technology: "bg-cyan-500/20 text-cyan-400 border-cyan-400/30",
      Events: "bg-yellow-500/20 text-yellow-400 border-yellow-400/30",
      Environment: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30",
    };
    return (
      colors[category] || "bg-gray-500/20 text-gray-400 border-gray-400/30"
    );
  };

  const prevImage = () => {
    const currentIndex = galleryImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    const prevIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImage(galleryImages[prevIndex]);
  };
  const createColumns = () => {
    const cols = Array.from({ length: columns }, () => []);
    const colHeights = Array(columns).fill(0);

    galleryImages.forEach((image) => {
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestColIndex].push(image);
      colHeights[shortestColIndex] += image.height + 24; // Add gap
    });

    return cols;
  };

  const columnData = createColumns();

  return (
    <div>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Camera Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              <Camera className="w-6 h-6 text-white animate-pulse" />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl border border-purple-400/30 rounded-2xl px-6 py-3 shadow-lg mb-6">
              <Camera className="w-4 h-4 text-purple-400 animate-pulse" />
              <span className="text-purple-400 font-semibold text-sm tracking-wide">
                GALLERY SHOWCASE
              </span>
            </div>

            {/* Enhanced Heading */}
            <div className="space-y-4 mb-8">
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
                <span className="block bg-gradient-to-r from-white via-slate-200 to-slate-300 bg-clip-text text-transparent">
                  Explore Our
                </span>
                <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Learning Environment
                </span>
              </h2>

              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mx-auto"></div>
            </div>

            <small className="text-slate-300 sm:text-xl leading-relaxed font-light max-w-2xl mx-auto">
              Step inside DCINSTITUTELAHAN! Browse our gallery to see students
              mastering Graphic Design, Accounting, AutoCAD, and Computer Skills
              in action. From interactive classes to hands-on training—get a
              glimpse of your future success. .
            </small>
          </div>

          {/* Pinterest-Style Masonry Gallery */}
          <div className="flex gap-6 justify-center">
            {columnData.map((column, columnIndex) => (
              <div
                key={columnIndex}
                className="flex flex-col gap-6"
                style={{ width: `${100 / columns}%` }}
              >
                {column.map((image, imageIndex) => (
                  <div
                    key={image.id}
                    className="group relative cursor-pointer break-inside-avoid"
                    style={{
                      animationDelay: `${
                        (columnIndex * column.length + imageIndex) * 100
                      }ms`,
                    }}
                    onMouseEnter={() => setHoveredImage(image.id)}
                    onMouseLeave={() => setHoveredImage(null)}
                    onClick={() => openLightbox(image)}
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={image.url}
                          alt={image.title}
                          className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          style={{ height: `${image.height * 0.6}px` }}
                        />

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Zoom Icon */}
                        <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                          <ZoomIn className="w-4 h-4 text-white" />
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <div
                            className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(
                              image.category
                            )}`}
                          >
                            {getCategoryIcon(image.category)}
                            <span>{image.category}</span>
                          </div>
                        </div>

                        {/* Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <h3 className="text-white font-semibold text-sm leading-tight">
                            {image.title}
                          </h3>
                        </div>
                      </div>

                      {/* Hover Effect Glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${getCategoryColor(
                      selectedImage.category
                    )}`}
                  >
                    {getCategoryIcon(selectedImage.category)}
                    <span>{selectedImage.category}</span>
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-2">
                  {selectedImage.title}
                </h3>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-white text-sm font-medium">
                {galleryImages.findIndex((img) => img.id === selectedImage.id) +
                  1}{" "}
                / {galleryImages.length}
              </span>
            </div>
          </div>
        )}

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </div>
    </div>
  );
};

export default Gallery;
