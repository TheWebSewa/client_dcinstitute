// @ts-nocheck

import { Clock, ExternalLink, Facebook, Heart, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
      const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Lahan, Gramin Chowk -06",
      action: () => window.open("https://maps.google.com?q=Lahan,Gramin+Chowk-06", "_blank")
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "dcinstitutelahan@gmail.com",
      action: () => window.open("mailto:dcinstitutelahan@gmail.com", "_blank")
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      content: ["+977-9818826593", "+977-9864995484"],
      action: () => window.open("tel:+9779818826593", "_blank")
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Office Hours",
      content: ["Sun–Fri: 10:00AM – 5:00PM", "Sat: Closed"],
      action: null
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      url: "https://www.facebook.com/dc.ch.750?mibextid=wwXIfr",
      color: "hover:bg-blue-600"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/@d.c.institute?si=V-JsU9DP3sDTl3V6",
      color: "hover:bg-red-600"
    },
    {
      name: "TikTok",
      icon: <span className="text-lg font-bold">🎵</span>,
      url: "https://www.tiktok.com/@d.c._institute_lahan",
      color: "hover:bg-pink-600"
    },
    {
      name: "WhatsApp",
      icon: <span className="text-lg">💬</span>,
      url: "https://wa.me/9779818826593",
      color: "hover:bg-green-600"
    }
  ];
  return (
     <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,119,198,0.1),transparent)] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,119,120,0.1),transparent)] opacity-40"></div>
      
      {/* Contact Section */}
      <section className="relative z-10 border-t border-slate-700/50 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Ready to start your learning journey? We're here to help you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Contact Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-slate-600/50 transition-all duration-300">
                <img
                  src="/contact.png"
                  alt="Contact D.C. Institute"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300 ${
                    item.action ? 'cursor-pointer hover:bg-slate-800/50' : ''
                  }`}
                  onClick={item.action}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      {Array.isArray(item.content) ? (
                        <div className="space-y-1">
                          {item.content.map((line, i) => (
                            <p key={i} className="text-slate-300 group-hover:text-white transition-colors">
                              {line}
                            </p>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-300 group-hover:text-white transition-colors">
                          {item.content}
                        </p>
                      )}
                    </div>
                    {item.action && (
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-3 text-slate-300 hover:text-white hover:border-slate-600/50 transition-all duration-300 ${social.color}`}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <img src="/logo.png" alt="D.C. Institute" className="w-12 h-12 object-contain" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">D.C. Institute</h3>
                  <p className="text-slate-400 text-sm">Lahan</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Empowering futures in Lahan through expert-led courses in Graphic Design, Accounting, AutoCAD, and Computer Skills. Your success starts here!
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              
            </div>

            {/* Office Hours & Social */}
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Office Hours</h3>
                <div className="space-y-2 text-slate-400 text-sm">
                  <p className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Sun-Fri: 10:00AM - 5:00PM</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Sat: Closed</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-600/50 transition-all duration-300 group ${social.color}`}
                    >
                      <span className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-400">
              <p>© 2024 D.C. Institute Lahan | All Rights Reserved</p>
              <p className="flex items-center space-x-2">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>by</span>
                <a
                  href="https://thewebsewa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 font-semibold hover:text-red-300 transition-colors duration-300"
                >
                  The Web Sewa
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
