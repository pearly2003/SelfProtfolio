import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ExternalLink, Github, Mail, Linkedin, Code, Palette, Smartphone, Rocket, Wrench, TestTube, ShoppingCart, CheckSquare, Music } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    const resumeContent = `
MUTHUKUMAR
Frontend Developer
Email: muthukumar@email.com
LinkedIn: linkedin.com/in/muthukumar
GitHub: github.com/muthukumar

SUMMARY
Passionate frontend developer with 4+ years of experience creating engaging web experiences. 
Specialized in React, Vue.js, and modern JavaScript frameworks.

EXPERIENCE
Senior Frontend Developer | TechCorp Inc. | 2022 - Present
- Led development of responsive web applications using React and TypeScript
- Improved application performance by 40% through optimization techniques
- Collaborated with UX/UI designers to implement pixel-perfect interfaces

Frontend Developer | WebSolutions Ltd. | 2020 - 2022
- Developed and maintained multiple client websites using Vue.js
- Implemented responsive design principles and mobile-first approach
- Reduced page load times by 30% through code optimization

EDUCATION
Bachelor of Computer Science | University of Technology | 2016 - 2020

SKILLS
- Frontend: React, Vue.js, Angular, JavaScript, TypeScript, HTML5, CSS3
- Styling: Sass, Tailwind CSS, Styled Components
- Tools: Git, Webpack, Vite, ESLint, Prettier
- Testing: Jest, React Testing Library, Cypress
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Alex_Johnson_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const skills = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Frameworks",
      description: "React, Vue.js, Angular, Next.js, Nuxt.js"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Styling & Design",
      description: "CSS3, Sass, Tailwind CSS, Styled Components"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Build Tools",
      description: "Webpack, Vite, Parcel, ESLint, Prettier"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Workflow",
      description: "Git, GitHub, Figma, Adobe XD, Jira"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Testing",
      description: "Jest, React Testing Library, Cypress"
    }
  ];

  const projects = [
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js, featuring user authentication, payment integration, and admin dashboard.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      icon: <CheckSquare className="w-12 h-12" />,
      title: "Task Management App",
      description: "A responsive task management application with real-time collaboration features, built using Vue.js and Firebase.",
      liveLink: "#",
      githubLink: "#"
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Music Streaming App",
      description: "A Spotify-like music streaming interface with playlist management and audio visualization, built with React and Web Audio API.",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Muthukumar
            </div>
            
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 transition-colors duration-200 ${
                      activeSection === item.id 
                        ? 'text-cyan-400' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {activeSection === item.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 animate-pulse"></div>
        <div className="text-center max-w-4xl mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            Frontend Developer
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            Creating Digital Experiences
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications using modern technologies like React, Vue, and Angular. 
            Passionate about clean code, user experience, and bringing creative ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button
              onClick={downloadResume}
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Alex, a passionate frontend developer with 4+ years of experience creating engaging web experiences. 
                I specialize in building responsive, accessible, and performant applications that users love.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started with a curiosity about how websites work, and has evolved into a career 
                focused on creating intuitive user interfaces and seamless user experiences. I enjoy collaborating with designers 
                and backend developers to bring ideas to life.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                or sharing knowledge with the developer community.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                <Code className="w-32 h-32 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="text-cyan-400 mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="bg-gradient-to-br from-cyan-400 to-blue-500 h-48 flex items-center justify-center">
                  <div className="text-white">
                    {project.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new opportunities and interesting projects. Let's connect!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span>alex.johnson@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Linkedin className="w-6 h-6 text-cyan-400" />
              <span>linkedin.com/in/alexjohnson</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Github className="w-6 h-6 text-cyan-400" />
              <span>github.com/alexjohnson</span>
            </div>
          </div>
          
          <button
            onClick={downloadResume}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 mx-auto"
          >
            <Download className="w-5 h-5" />
            Download Full Resume
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8 text-center text-gray-400">
        <p>&copy; 2025 Muthukumar. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;