import React, { useState, useEffect } from 'react';3


import { 
  FileText, 
  Download, 
  Printer, 
  X, 
  ExternalLink, 
  Mail, 
  Copy, 
  Check, 
  ChevronRight, 
  Code2, 
  Database, 
  Layers, 
  Cpu, 
  GraduationCap, 
  Award, 
  Menu, 
  ArrowUpRight,
  Sparkles,
  MapPin,
  Calendar,
  Briefcase,
  TrendingUp,
  Activity,
  Smartphone,
  ShieldCheck,
  Send,
  ArrowDown,
  Sun,
  Moon
} from 'lucide-react';

const Github = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Quick message builder state
  const [senderName, setSenderName] = useState('');
  const [msgSubject, setMsgSubject] = useState('');
  const [msgBody, setMsgBody] = useState('');

  const emailAddress = "pramendrasharma.dev@gmail.com";
  const currentYear = new Date().getFullYear();

  // Load and persist theme from localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme_preference');
      if (savedTheme === 'dark') {
        setDarkMode(true);
      } else if (savedTheme === 'light') {
        setDarkMode(false);
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode(true);
      }
    } catch (e) {
      // Fallback gracefully if localStorage is unavailable
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const next = !prev;
      try {
        localStorage.setItem('theme_preference', next ? 'dark' : 'light');
      } catch (e) {}
      return next;
    });
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setResumeOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Lock background scroll when modal is active
  useEffect(() => {
    if (resumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [resumeOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMailSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(msgSubject || `Portfolio Inquiry from ${senderName || 'Visitor'}`);
    const body = encodeURIComponent(`Hi Pramendra,\n\n${msgBody}\n\nBest regards,\n${senderName || 'Colleague'}`);
    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  const projects = [
    {
      id: "01",
      title: "SM Analyst",
      category: "AI-Based Stock Analytics Web Application",
      status: "Work in Progress",
      isWip: true,
      description: "An equity analysis platform designed to evaluate market trends and financial data feeds, synthesizing market sentiment indicators and presenting actionable asset telemetry through an interactive visual interface.",
      problem: "Retail analysts and students face fragmented, unorganized market data screens that lack unified sentiment synthesis and clear visual context.",
      solution: "Consolidates diverse market streams with responsive sentiment analysis pipelines, interactive asset performance dashboards, and planned machine learning algorithms for predictive market pattern detection.",
      features: [
        "Real-time market trend tracking and financial data ingestion",
        "Algorithmic sentiment analysis pipeline for market commentary",
        "Interactive asset-performance and multi-metric visual telemetry",
        "Planned integration: custom ML models for predictive pattern exploration"
      ],
      tech: ["Python", "FastAPI", "React.js", "Pandas", "NumPy", "Matplotlib"],
      previewType: "stocks",
      demoUrl: "YOUR_SM_ANALYST_DEMO_URL",
      githubUrl: "YOUR_SM_ANALYST_GITHUB_URL"
    },
    {
      id: "02",
      title: "Kanha Dairy Billing System",
      category: "Automated Micro-Business Billing Platform",
      status: "Production Ready",
      isWip: false,
      description: "A specialized commercial ledger and invoicing system engineered to eliminate manual paper logs for daily milk intake, manage customer balance sheets, maintain live inventory, and generate instant WhatsApp billing statements.",
      problem: "Traditional dairy centers rely on error-prone paper ledgers for twice-daily milk entries, resulting in billing disputes, delayed monthly payments, and tedious manual accounting.",
      solution: "Engineered a secure web platform featuring custom OTP authentication, automated pricing by fat and volume metrics, real-time inventory tracking, and automatic monthly statement distribution via WhatsApp.",
      features: [
        "Secure user authentication with custom OTP verification",
        "Daily dairy collection and milk-derivative transactional ledger",
        "Real-time stock fluctuation and inventory recording",
        "Automated monthly statement generation with direct WhatsApp invoice delivery"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL", "Bootstrap"],
      previewType: "dairy",
      demoUrl: "YOUR_KANHA_DAIRY_DEMO_URL",
      githubUrl: "YOUR_KANHA_DAIRY_GITHUB_URL"
    }
  ];

  const skillGroups = [
    {
      name: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "Java", "C / C++"]
    },
    {
      name: "Frontend Development",
      icon: Layers,
      skills: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Responsive UI/UX"]
    },
    {
      name: "Backend & Databases",
      icon: Database,
      skills: ["Node.js", "Express.js", "FastAPI", "MySQL", "MongoDB"]
    },
    {
      name: "Data Analytics & Visuals",
      icon: Cpu,
      skills: ["Power BI", "Microsoft Excel", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      name: "AI & Development Workflows",
      icon: Sparkles,
      skills: ["Scikit-learn", "ChatGPT", "Claude", "GitHub Copilot", "Julius AI", "Git", "GitHub", "WordPress"]
    }
  ];

  const experiences = [
    {
      role: "Junior Developer",
      company: "E-TREE Association",
      location: "Pune, India",
      bullets: [
        "Engineered responsive, accessible user interfaces utilizing modern React.js patterns and connected RESTful FastAPI services.",
        "Authored database stored procedures, automated scheduling routines, and optimized recurring queries for reporting.",
        "Proactively resolved UI defects, debugged client bottlenecks, and elevated overall web usability and performance."
      ]
    },
    {
      role: "Graphic Designer & Front-End Developer",
      company: "Infolead",
      location: "Pune, India",
      bullets: [
        "Translated high-fidelity design mockups into responsive, modular HTML, CSS, and JavaScript pages.",
        "Authored print-ready product catalogues, marketing collateral, and digital banners with typographic precision.",
        "Standardized brand visual assets to ensure consistent aesthetic fidelity across digital and print touchpoints."
      ]
    },
    {
      role: "Business Operations Manager",
      company: "Sai Om Infotech",
      location: "Pune, India",
      bullets: [
        "Spearheaded technical troubleshooting and provided direct customer assistance for 150+ users daily.",
        "Conducted detailed Excel-based financial analyses, transaction auditing, and revenue reconciliation models.",
        "Optimized stock procurement schedules and guided clients through online regulatory and submission portals."
      ]
    }
  ];

  const certifications = [
    "Data Analytics",
    "Python Programming",
    "React & Redux",
    "Data Structures & Algorithms using C/C++",
    "Cybersecurity Internship",
    "Web Technology",
    "Digital Electronics & VLSI Intern"
  ];

  return (
    <div className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
      darkMode 
        ? 'bg-[#0D0D0E] text-[#F4F4F5] selection:bg-neutral-100 selection:text-neutral-900' 
        : 'bg-[#FAFAF8] text-[#111111] selection:bg-neutral-900 selection:text-white'
    }`}>
      {/* Top Hairline Indicator */}
      <div className={`h-0.5 w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${
        darkMode ? 'bg-neutral-100' : 'bg-neutral-900'
      }`}></div>

      {/* ========================================================= */}
      {/* APPLE-INSPIRED MINIMALIST NAVIGATION                      */}
      {/* ========================================================= */}
      <header className={`sticky top-0 z-40 backdrop-blur-md transition-colors duration-300 ${
        darkMode 
          ? 'bg-[#0D0D0E]/85 border-b border-white/[0.08]' 
          : 'bg-[#FAFAF8]/90 border-b border-black/[0.06]'
      }`}>
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <button 
            onClick={() => scrollTo('hero')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-xs tracking-tight transition-transform group-hover:scale-105 ${
              darkMode ? 'bg-white text-neutral-950' : 'bg-neutral-900 text-white'
            }`}>
              PS
            </div>
            <div>
              <p className={`font-semibold text-sm tracking-tight leading-none ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                Pramendra Sharma
              </p>
              <p className={`text-[10px] tracking-wider uppercase font-mono mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-400'}`}>
                Dev & Analyst
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-7 text-xs font-medium tracking-wider uppercase">
            <button 
              onClick={() => scrollTo('work')} 
              className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
            >
              Work
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollTo('skills')} 
              className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollTo('experience')} 
              className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
            >
              Experience
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className={`transition-colors ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-950'}`}
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Light and Dark Theme"
              className={`p-2 rounded-full border transition-all cursor-pointer ${
                darkMode 
                  ? 'border-neutral-800 bg-[#17171A] text-amber-300 hover:border-neutral-600 hover:bg-neutral-800' 
                  : 'border-neutral-200 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-100 shadow-sm'
              }`}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-3.5 h-3.5 transition-transform hover:rotate-45" /> : <Moon className="w-3.5 h-3.5 transition-transform hover:-rotate-12" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={() => setResumeOpen(true)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all cursor-pointer shadow-sm active:translate-y-px ${
                darkMode
                  ? 'border-neutral-700 text-neutral-200 hover:border-white hover:bg-white hover:text-neutral-950'
                  : 'border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 md:hidden focus:outline-none ${darkMode ? 'text-neutral-300 hover:text-white' : 'text-neutral-700 hover:text-neutral-950'}`}
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-4 space-y-3 text-sm font-medium animate-in slide-in-from-top-2 duration-150 ${
            darkMode 
              ? 'bg-[#0D0D0E] border-white/[0.08]' 
              : 'bg-[#FAFAF8] border-black/[0.06]'
          }`}>
            <button onClick={() => scrollTo('work')} className={`block w-full text-left py-1 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}>Work</button>
            <button onClick={() => scrollTo('about')} className={`block w-full text-left py-1 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}>About</button>
            <button onClick={() => scrollTo('skills')} className={`block w-full text-left py-1 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}>Skills</button>
            <button onClick={() => scrollTo('experience')} className={`block w-full text-left py-1 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}>Experience</button>
            <button onClick={() => scrollTo('contact')} className={`block w-full text-left py-1 ${darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'}`}>Contact</button>
            
            <div className="pt-2 border-t border-neutral-200/40 dark:border-neutral-800 flex items-center justify-between">
              <span className={`text-xs ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>Appearance</span>
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-2 px-3 py-1 rounded-md text-xs font-medium border ${
                  darkMode 
                    ? 'border-neutral-700 bg-neutral-900 text-amber-300' 
                    : 'border-neutral-300 bg-white text-neutral-700'
                }`}
              >
                {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                <span>{darkMode ? "Light Mode" : "Dark Mode"}</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* MAIN CONTAINER                                            */}
      {/* ========================================================= */}
      <main className="max-w-5xl mx-auto px-6">
        
        {/* HERO SECTION */}
        <section id="hero" className={`pt-20 md:pt-28 pb-20 border-b ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="max-w-3xl space-y-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono border ${
              darkMode 
                ? 'bg-neutral-900/90 border-neutral-800 text-neutral-300' 
                : 'bg-neutral-100 border-neutral-200/80 text-neutral-700'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Based in Pune, India · Open for technical roles
            </div>

            <p className={`text-xs uppercase font-mono tracking-widest font-semibold ${
              darkMode ? 'text-neutral-400' : 'text-neutral-500'
            }`}>
              Full-Stack Web Developer · Data Analyst · AI-Enabled Problem Solver
            </p>

            <h1 className={`text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] ${
              darkMode ? 'text-white' : 'text-neutral-950'
            }`}>
              Building digital experiences that solve real problems.
            </h1>

            <p className={`text-base sm:text-lg font-normal leading-relaxed pt-1 ${
              darkMode ? 'text-neutral-400' : 'text-neutral-600'
            }`}>
              I'm <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Pramendra Sharma</strong>. I engineer full-stack web applications, automate data pipelines, and design practical business systems by connecting clean interfaces with reliable backends.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollTo('work')}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all shadow-sm active:translate-y-px ${
                  darkMode 
                    ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
                    : 'bg-neutral-950 text-white hover:bg-neutral-800'
                }`}
              >
                <span>Explore Work</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setResumeOpen(true)}
                className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-all shadow-sm cursor-pointer active:translate-y-px ${
                  darkMode 
                    ? 'bg-[#141416] border-neutral-800 text-neutral-200 hover:border-neutral-600 hover:bg-neutral-800' 
                    : 'bg-white border-neutral-300 text-neutral-800 hover:border-neutral-900 hover:bg-neutral-50'
                }`}
              >
                <Download className="w-4 h-4" />
                <span>Download CV / Resume</span>
              </button>
            </div>

            {/* Quick Micro-contacts */}
            <div className={`pt-6 flex flex-wrap items-center gap-6 text-xs font-mono border-t ${
              darkMode ? 'border-white/[0.06] text-neutral-400' : 'border-black/[0.04] text-neutral-500'
            }`}>
              <div className="flex items-center gap-1.5">
                <MapPin className={`w-3.5 h-3.5 ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`} />
                <span>Pune, Maharashtra, India</span>
              </div>
              <button
                onClick={copyEmail}
                className={`flex items-center gap-1.5 transition-colors group cursor-pointer ${
                  darkMode ? 'hover:text-white' : 'hover:text-neutral-950'
                }`}
                title="Click to copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold font-sans">Email copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className={`w-3.5 h-3.5 ${darkMode ? 'text-neutral-500 group-hover:text-neutral-200' : 'text-neutral-400 group-hover:text-neutral-800'}`} />
                    <span>{emailAddress}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SELECTED WORK SECTION                                     */}
        {/* ========================================================= */}
        <section id="work" className={`py-24 border-b scroll-mt-16 ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">Selected Work</p>
              <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                Featured Projects
              </h2>
            </div>
            <p className={`text-sm max-w-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Real projects built to evaluate data feeds and automate business operations. Depth, authenticity, and practical utility.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`border rounded-2xl p-7 sm:p-10 shadow-sm transition-all group ${
                  darkMode 
                    ? 'bg-[#141416] border-white/[0.08] hover:border-white/[0.2]' 
                    : 'bg-white border-black/[0.08] hover:border-black/[0.18]'
                }`}
              >
                <div className={`flex flex-wrap items-center justify-between gap-4 pb-6 border-b ${
                  darkMode ? 'border-white/[0.06]' : 'border-neutral-100'
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-neutral-400">
                      {project.id} /
                    </span>
                    <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                      {project.title}
                    </h3>
                  </div>
                  {project.isWip ? (
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                      darkMode 
                        ? 'bg-amber-950/40 text-amber-300 border-amber-800/60' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {project.status}
                    </span>
                  ) : (
                    <span className={`text-xs px-3 py-1 rounded-full font-medium border ${
                      darkMode 
                        ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/60' 
                        : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                    }`}>
                      {project.status}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-start">
                  {/* Left Column: Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className={`text-xs uppercase font-mono tracking-wider ${darkMode ? 'text-neutral-400' : 'text-neutral-400'}`}>
                      {project.category}
                    </p>
                    <p className={`text-base leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
                      {project.description}
                    </p>

                    <div className={`p-4 rounded-xl border space-y-2 ${
                      darkMode 
                        ? 'bg-[#19191D] border-white/[0.06]' 
                        : 'bg-neutral-50 border-neutral-100'
                    }`}>
                      <span className={`text-xs font-semibold uppercase tracking-wider block ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-600'
                      }`}>
                        Problem Addressed:
                      </span>
                      <p className={`text-xs sm:text-sm leading-relaxed ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {project.problem}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className={`text-xs font-semibold uppercase tracking-wider block ${
                        darkMode ? 'text-neutral-300' : 'text-neutral-700'
                      }`}>
                        Verified Resume Highlights:
                      </span>
                      <ul className={`space-y-2 text-xs sm:text-sm ${
                        darkMode ? 'text-neutral-400' : 'text-neutral-600'
                      }`}>
                        {project.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                              darkMode ? 'bg-neutral-200' : 'bg-neutral-900'
                            }`}></span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {project.tech.map((t, idx) => (
                        <span 
                          key={idx} 
                          className={`px-2.5 py-1 text-xs font-mono rounded border ${
                            darkMode 
                              ? 'bg-neutral-800/80 text-neutral-300 border-neutral-700/60' 
                              : 'bg-neutral-100 text-neutral-700 border-transparent'
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center gap-4 text-xs font-medium">
                      <a
                        href="https://github.com/pramendrasharma"
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-1.5 transition-colors ${
                          darkMode ? 'text-neutral-400 hover:text-white' : 'text-neutral-600 hover:text-neutral-950'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Telemetry Visual Mockup */}
                  <div className={`lg:col-span-5 rounded-xl p-6 font-mono text-xs shadow-inner border ${
                    darkMode 
                      ? 'bg-[#09090A] text-neutral-200 border-white/[0.06]' 
                      : 'bg-neutral-950 text-white border-transparent'
                  }`}>
                    <div className={`flex items-center justify-between pb-3 border-b text-[10px] ${
                      darkMode ? 'border-neutral-800 text-neutral-400' : 'border-neutral-800 text-neutral-400'
                    }`}>
                      <span>Concept Telemetry Preview</span>
                      <span className="text-emerald-400">● Simulated Data</span>
                    </div>

                    {project.previewType === 'stocks' ? (
                      <div className="py-4 space-y-4">
                        <div className="flex justify-between items-baseline">
                          <span className="text-neutral-400 text-[11px]">NIFTY_INDEX // FEED</span>
                          <span className="text-emerald-400 text-sm font-semibold">+1.84%</span>
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between text-[10px] text-neutral-400">
                            <span>Sentiment Index (NLP)</span>
                            <span className="text-sky-300">Bullish 68%</span>
                          </div>
                          <div className="w-full h-1.5 bg-neutral-800 rounded-full overflow-hidden flex">
                            <div className="bg-emerald-500 w-[68%] h-full"></div>
                            <div className="bg-rose-500 w-[32%] h-full"></div>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 pt-2 text-[10px]">
                          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                            <span className="text-neutral-500 block">API LATENCY</span>
                            <span className="text-neutral-200 font-semibold font-sans">~38ms Fast-API</span>
                          </div>
                          <div className="p-2.5 rounded bg-neutral-900 border border-neutral-800">
                            <span className="text-neutral-500 block">MODEL STAGE</span>
                            <span className="text-amber-300 font-semibold font-sans">In Calibration</span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="py-4 space-y-4">
                        <div className="flex justify-between items-baseline">
                          <span className="text-neutral-400 text-[11px]">DAILY COLLECTION LEDGER</span>
                          <span className="text-sky-400 text-xs font-semibold">Morning Shift</span>
                        </div>
                        <div className="space-y-2 text-[11px]">
                          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                            <div>
                              <p className="text-neutral-300 font-sans font-medium">Batch #104 · Cow Milk</p>
                              <p className="text-[10px] text-neutral-500">18.5 Liters · Fat: 4.2%</p>
                            </div>
                            <span className="text-emerald-400 font-bold">₹777.00</span>
                          </div>

                          <div className="p-2 rounded bg-neutral-900 border border-neutral-800 flex justify-between items-center">
                            <div>
                              <p className="text-neutral-300 font-sans font-medium">Batch #105 · Buffalo Milk</p>
                              <p className="text-[10px] text-neutral-500">24.0 Liters · Fat: 6.8%</p>
                            </div>
                            <span className="text-emerald-400 font-bold">₹1,440.00</span>
                          </div>
                        </div>

                        <div className="p-2 bg-emerald-950/40 border border-emerald-800/40 rounded text-[10px] text-emerald-300 flex items-center justify-between">
                          <span>WhatsApp Invoicing Dispatch</span>
                          <span className="font-semibold">Integrated</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* ABOUT ME SECTION                                          */}
        {/* ========================================================= */}
        <section id="about" className={`py-24 border-b scroll-mt-16 ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">02 / Narrative</p>
              <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                About Me
              </h2>
            </div>

            <div className={`lg:col-span-8 space-y-6 leading-relaxed text-base ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              <p className={`text-xl font-normal leading-snug ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                I am a web developer and data analyst who bridges the gap between clean user interfaces, resilient backend logic, and commercial business operations.
              </p>
              <p>
                My educational foundation is grounded in a <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>B.Sc. in Cyber & Digital Science</strong> from Savitribai Phule Pune University, where I earned a <strong className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>9.12/10 CGPA</strong>. This academic training established rigor across algorithms, data structures, and secure software design.
              </p>
              <p>
                In production, I have developed responsive React interfaces and integrated FastAPI backend services at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>E-TREE Association</span>, crafted visual branding and front-end layouts at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Infolead</span>, and managed daily business operations and spreadsheet audits for over <span className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>150+ customers daily</span> at <span className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Sai Om Infotech</span>.
              </p>
              <p>
                I leverage modern AI-assisted engineering workflows (ChatGPT, Claude, GitHub Copilot, Julius AI) to accelerate delivery without compromising architectural discipline or code cleanliness.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* TECHNICAL CAPABILITIES SECTION                            */}
        {/* ========================================================= */}
        <section id="skills" className={`py-24 border-b scroll-mt-16 ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">03 / Toolkit</p>
              <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                Technical Stack
              </h2>
            </div>
            <p className={`text-sm max-w-sm ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Organized by discipline without arbitrary percentage indicators. Every technology reflects verified resume usage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <div 
                  key={idx}
                  className={`border rounded-xl p-6 shadow-sm transition-all space-y-4 ${
                    darkMode 
                      ? 'bg-[#141416] border-white/[0.08] hover:border-white/[0.2]' 
                      : 'bg-white border-black/[0.08] hover:border-black/[0.18]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      darkMode ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-100 text-neutral-800'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                      {group.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className={`px-2.5 py-1 text-xs rounded font-mono border ${
                          darkMode 
                            ? 'bg-neutral-800/60 text-neutral-300 border-neutral-700/50' 
                            : 'bg-neutral-100/80 text-neutral-700 border-transparent'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* PROFESSIONAL EXPERIENCE SECTION                           */}
        {/* ========================================================= */}
        <section id="experience" className={`py-24 border-b scroll-mt-16 ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">04 / Trajectory</p>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
              Work Experience
            </h2>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div 
                key={idx} 
                className={`grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b last:border-b-0 ${
                  darkMode ? 'border-white/[0.06]' : 'border-black/[0.04]'
                }`}
              >
                <div className="md:col-span-4 space-y-1">
                  <h3 className={`font-bold text-lg ${darkMode ? 'text-white' : 'text-neutral-950'}`}>{exp.role}</h3>
                  <p className={`text-sm font-medium ${darkMode ? 'text-neutral-300' : 'text-neutral-600'}`}>{exp.company}</p>
                  <p className="text-xs font-mono text-neutral-400">{exp.location}</p>
                </div>
                <div className="md:col-span-8">
                  <ul className={`space-y-3 text-sm leading-relaxed ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${
                          darkMode ? 'bg-neutral-300' : 'bg-neutral-900'
                        }`}></span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* EDUCATION & CERTIFICATIONS                                */}
        {/* ========================================================= */}
        <section className={`py-24 border-b ${darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Degree Card */}
            <div className={`lg:col-span-5 border rounded-2xl p-8 flex flex-col justify-between shadow-sm ${
              darkMode 
                ? 'bg-[#141416] border-white/[0.08]' 
                : 'bg-white border-black/[0.08]'
            }`}>
              <div className="space-y-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  darkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-900'
                }`}>
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-neutral-400">Undergraduate Degree</span>
                  <h3 className={`text-2xl font-bold mt-1 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                    B.Sc. Cyber & Digital Science
                  </h3>
                </div>
                <div className="space-y-1 text-sm">
                  <p className={`font-medium ${darkMode ? 'text-neutral-200' : 'text-neutral-900'}`}>
                    BSMPL's Jaikranti College of Computer Science & Management Studies
                  </p>
                  <p className="text-xs text-neutral-500">Savitribai Phule Pune University</p>
                  <p className="text-xs font-mono text-neutral-400">2023 – 2026</p>
                </div>
              </div>

              <div className={`mt-8 pt-4 border-t flex items-center justify-between ${
                darkMode ? 'border-neutral-800' : 'border-neutral-100'
              }`}>
                <span className="text-xs font-mono uppercase text-neutral-400">Academic Score</span>
                <span className={`text-lg font-bold font-mono px-3 py-1 rounded ${
                  darkMode ? 'bg-neutral-800 text-white' : 'bg-neutral-100 text-neutral-900'
                }`}>
                  CGPA: 9.12 / 10
                </span>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Award className={`w-4 h-4 ${darkMode ? 'text-white' : 'text-neutral-900'}`} />
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Verified Certifications & Internships
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, idx) => (
                  <div 
                    key={idx}
                    className={`p-3.5 border rounded-xl flex items-center gap-3 text-xs font-medium shadow-sm ${
                      darkMode 
                        ? 'bg-[#141416] border-white/[0.08] text-neutral-200' 
                        : 'bg-white border-black/[0.06] text-neutral-800'
                    }`}
                  >
                    <span className={`w-2 h-2 rounded-full shrink-0 ${
                      darkMode ? 'bg-white' : 'bg-neutral-900'
                    }`}></span>
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* CONTACT SECTION                                           */}
        {/* ========================================================= */}
        <section id="contact" className="py-24 scroll-mt-16">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2">05 / Contact</p>
            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
              Let's Build Something Useful
            </h2>
            <p className={`text-sm mt-2 ${darkMode ? 'text-neutral-400' : 'text-neutral-500'}`}>
              Have a full-time role, project, or data engineering question? Reach out directly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className={`lg:col-span-5 border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm ${
              darkMode 
                ? 'bg-[#141416] border-white/[0.08]' 
                : 'bg-white border-black/[0.08]'
            }`}>
              <div>
                <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-neutral-950'}`}>Direct Contact</h3>
                <p className="text-xs text-neutral-500 mt-0.5">Guaranteed response within 24 hours.</p>
              </div>

              <div className={`p-3 border rounded-lg flex items-center justify-between font-mono text-xs ${
                darkMode 
                  ? 'bg-neutral-900 border-neutral-800 text-neutral-200' 
                  : 'bg-neutral-50 border-neutral-100 text-neutral-700'
              }`}>
                <span className="truncate">{emailAddress}</span>
                <button
                  onClick={copyEmail}
                  className={`p-1 rounded transition-colors ml-2 ${
                    darkMode ? 'hover:bg-neutral-800 text-neutral-200' : 'hover:bg-neutral-200 text-neutral-800'
                  }`}
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              <div className={`space-y-2 pt-2 border-t ${darkMode ? 'border-neutral-800' : 'border-neutral-100'}`}>
                <p className="text-[11px] font-mono uppercase text-neutral-400">Social Profiles</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://github.com/pramendrasharma"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-colors ${
                      darkMode 
                        ? 'border-neutral-800 text-neutral-300 hover:border-neutral-600 bg-neutral-900/50' 
                        : 'border-neutral-200 text-neutral-800 hover:border-neutral-900'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4" /> GitHub
                    </span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>

                  <a
                    href="https://linkedin.com/in/pramendrasharma"
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center justify-between p-2.5 rounded-lg border text-xs font-medium transition-colors ${
                      darkMode 
                        ? 'border-neutral-800 text-neutral-300 hover:border-neutral-600 bg-neutral-900/50' 
                        : 'border-neutral-200 text-neutral-800 hover:border-neutral-900'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-blue-500" /> LinkedIn
                    </span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 border rounded-2xl p-6 sm:p-8 shadow-sm ${
              darkMode 
                ? 'bg-[#141416] border-white/[0.08]' 
                : 'bg-white border-black/[0.08]'
            }`}>
              <h3 className={`font-bold text-base mb-1 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>Draft a Message</h3>
              <p className="text-xs text-neutral-500 mb-6">Launches your default mail client with all fields pre-filled.</p>

              <form onSubmit={handleMailSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="e.g. Acme Corp / Alex Smith"
                    required
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none ${
                      darkMode 
                        ? 'bg-neutral-900 border-neutral-800 text-white focus:border-neutral-500' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Subject Line
                  </label>
                  <input
                    type="text"
                    value={msgSubject}
                    onChange={(e) => setMsgSubject(e.target.value)}
                    placeholder="e.g. Software Developer Opening / Project Inquiry"
                    required
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none ${
                      darkMode 
                        ? 'bg-neutral-900 border-neutral-800 text-white focus:border-neutral-500' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider mb-1.5 ${
                    darkMode ? 'text-neutral-400' : 'text-neutral-600'
                  }`}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={msgBody}
                    onChange={(e) => setMsgBody(e.target.value)}
                    placeholder="Tell me about your team or project requirements..."
                    required
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border transition-colors focus:outline-none ${
                      darkMode 
                        ? 'bg-neutral-900 border-neutral-800 text-white focus:border-neutral-500' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-900 focus:bg-white focus:ring-1 focus:ring-neutral-900'
                    }`}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 font-medium text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                    darkMode 
                      ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
                      : 'bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Direct Email</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================= */}
      {/* FOOTER                                                    */}
      {/* ========================================================= */}
      <footer className={`border-t py-12 text-xs transition-colors duration-300 ${
        darkMode 
          ? 'bg-[#0D0D0E] border-white/[0.08] text-neutral-400' 
          : 'bg-white border-black/[0.06] text-neutral-500'
      }`}>
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-semibold text-[10px] ${
              darkMode ? 'bg-white text-neutral-950' : 'bg-neutral-900 text-white'
            }`}>
              PS
            </span>
            <span className={`font-medium ${darkMode ? 'text-white' : 'text-neutral-900'}`}>Pramendra Sharma</span>
            <span>· Pune, India</span>
          </div>

          <p>© {currentYear} Pramendra Sharma. All rights reserved.</p>
        </div>
      </footer>

      {/* ========================================================= */}
      {/* APPLE-INSPIRED INTERACTIVE RESUME MODAL                   */}
      {/* ========================================================= */}
      {resumeOpen && (
        <div 
          onClick={() => setResumeOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className={`rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border space-y-8 ${
              darkMode 
                ? 'bg-[#141416] text-[#F4F4F5] border-white/[0.12]' 
                : 'bg-white text-neutral-800 border-black/[0.08]'
            }`}
          >
            {/* Modal Header & Actions */}
            <div className={`flex items-start justify-between border-b pb-6 ${
              darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'
            }`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Curriculum Vitae</span>
                <h3 className={`text-2xl font-bold mt-0.5 ${darkMode ? 'text-white' : 'text-neutral-950'}`}>Pramendra Sharma</h3>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">Full-Stack Web Developer · Data Analyst</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className={`p-2 rounded-lg border transition-colors ${
                    darkMode 
                      ? 'border-neutral-700 hover:border-white text-neutral-300' 
                      : 'border-neutral-200 hover:border-neutral-900 text-neutral-700'
                  }`}
                  title="Print / Save as PDF"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <a
                  href={`${import.meta.env.BASE_URL}RESUME-PRAMENDRA_SHARMA.pdf`}
                  download="RESUME-PRAMENDRA_SHARMA.pdf"
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors shadow-sm ${
                    darkMode 
                      ? 'bg-white text-neutral-950 hover:bg-neutral-200' 
                      : 'bg-neutral-950 text-white hover:bg-neutral-800'
                  }`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setResumeOpen(false)}
                  className={`p-2 rounded-lg transition-colors ml-1 ${
                    darkMode ? 'hover:bg-neutral-800 text-neutral-400' : 'hover:bg-neutral-100 text-neutral-500'
                  }`}
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Content Body */}
            <div className={`space-y-6 text-xs leading-relaxed ${darkMode ? 'text-neutral-300' : 'text-neutral-700'}`}>
              {/* Summary */}
              <div>
                <h4 className={`font-mono uppercase font-semibold mb-1 tracking-wider ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  Professional Profile
                </h4>
                <p>
                  Developer and data analyst with foundational grounding in Cyber & Digital Science. Experienced in full-stack web engineering with React.js, FastAPI, Node.js, and relational databases, paired with operational data analysis and business workflow automation.
                </p>
              </div>

              {/* Education */}
              <div>
                <h4 className={`font-mono uppercase font-semibold mb-2 tracking-wider ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  Education
                </h4>
                <div className={`p-3 rounded-lg border flex justify-between items-baseline ${
                  darkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-neutral-100'
                }`}>
                  <div>
                    <p className={`font-semibold ${darkMode ? 'text-white' : 'text-neutral-950'}`}>B.Sc. Cyber & Digital Science</p>
                    <p className="text-neutral-400">BSMPL's Jaikranti College · Savitribai Phule Pune University</p>
                  </div>
                  <div className="text-right font-mono">
                    <p className={`font-bold ${darkMode ? 'text-emerald-400' : 'text-neutral-900'}`}>9.12 / 10 CGPA</p>
                    <p className="text-neutral-400">2023 – 2026</p>
                  </div>
                </div>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className={`font-mono uppercase font-semibold mb-2 tracking-wider ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  Experience Summary
                </h4>
                <div className="space-y-3">
                  <div>
                    <div className={`flex justify-between font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      <span>Junior Developer — E-TREE Association</span>
                      <span className="font-mono text-neutral-400">Pune</span>
                    </div>
                    <p className={`mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      React.js UI development, FastAPI integration, automated stored procedures, recurring database scheduling.
                    </p>
                  </div>

                  <div>
                    <div className={`flex justify-between font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      <span>Graphic Designer & Front-End Dev — Infolead</span>
                      <span className="font-mono text-neutral-400">Pune</span>
                    </div>
                    <p className={`mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Figma to responsive HTML/CSS/JS interfaces, visual asset catalogues, cross-platform brand coherence.
                    </p>
                  </div>

                  <div>
                    <div className={`flex justify-between font-semibold ${darkMode ? 'text-white' : 'text-neutral-900'}`}>
                      <span>Business Operations Manager — Sai Om Infotech</span>
                      <span className="font-mono text-neutral-400">Pune</span>
                    </div>
                    <p className={`mt-0.5 ${darkMode ? 'text-neutral-400' : 'text-neutral-600'}`}>
                      Assisted 150+ daily customers with digital systems, performed Excel revenue analysis and stock optimization.
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Summary */}
              <div>
                <h4 className={`font-mono uppercase font-semibold mb-2 tracking-wider ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  Key Projects
                </h4>
                <div className="space-y-2">
                  <p><strong className={darkMode ? 'text-white' : 'text-neutral-900'}>SM Analyst:</strong> Stock analytics web platform with market sentiment telemetry & FastAPI data feeds [In Progress].</p>
                  <p><strong className={darkMode ? 'text-white' : 'text-neutral-900'}>Kanha Dairy Billing System:</strong> Operations portal with OTP verification, volume ledger, and automated WhatsApp invoice dispatch.</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className={`font-mono uppercase font-semibold mb-2 tracking-wider ${darkMode ? 'text-white' : 'text-neutral-950'}`}>
                  Certifications
                </h4>
                <p className={darkMode ? 'text-neutral-400' : 'text-neutral-600'}>
                  Data Analytics · Python Programming · React & Redux · DSA using C/C++ · Cybersecurity Internship · Web Technology · Digital Electronics & VLSI Intern
                </p>
              </div>
            </div>

            {/* Modal Bottom Close */}
            <div className={`pt-4 border-t flex items-center justify-between ${
              darkMode ? 'border-white/[0.08]' : 'border-black/[0.06]'
            }`}>
              <span className="text-[11px] font-mono text-neutral-400">{emailAddress}</span>
              <button
                onClick={() => setResumeOpen(false)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-colors ${
                  darkMode ? 'bg-neutral-800 hover:bg-neutral-700 text-white' : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800'
                }`}
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}