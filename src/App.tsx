import { useEffect, useState, useRef } from 'react';
import { 
  Zap, Search, BarChart3, ArrowRight, CheckCircle2, 
  MessageSquare, Lightbulb, Users, Clock,
  Mail, FileSpreadsheet, AlertCircle, BrainCircuit, Rocket,
  Building, Stethoscope, Truck, Factory, Briefcase,
  Quote, X, Cpu, Layers, Database, ChevronLeft, ChevronRight, RotateCcw,
  Stethoscope as HealthIcon
} from 'lucide-react';

function App() {
  const [showSticky, setShowSticky] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 10 && !localStorage.getItem('modal_dismissed')) {
        setShowModal(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem('modal_dismissed', 'true');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }} />
      <Nav />
      <StickyHeader show={showSticky} />
      {showModal && <ExitIntentModal onClose={closeModal} />}
      <Hero />
      <WhatsAppDemo />
      <div className="gradient-divider" />
      <AuditOffer />
      <div className="gradient-divider" />
      <SystemSchematic />
      <div className="gradient-divider" />
      <WorkflowComparison />
      <div className="gradient-divider" />
      <ImpactSnapshots />
      <div className="gradient-divider" />
      <Process />
      <div className="gradient-divider" />
      <AutomationCalculator />
      <div className="gradient-divider" />
      <FoundersNote />
      <div className="gradient-divider" />
      <DiagnosticForm />
      <Footer />
    </div>
  );
}

function SystemSchematic() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const path1 = "M250 200 H450";
  const path2 = "M550 200 H750";

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Our Systematic Approach</h2>
          <p className="text-slate-400">Architecture-first deployment for sustainable efficiency.</p>
        </div>

        <div className="relative max-w-5xl mx-auto md:h-[400px]">
          {/* Animated SVG Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block" viewBox="0 0 1000 400" fill="none">
            <path 
              d={path1} 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              strokeDasharray="400" 
              strokeDashoffset="400"
              className={isVisible ? 'animate-draw' : ''}
            />
            <path 
              d={path2} 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              strokeDasharray="400" 
              strokeDashoffset="400"
              className={isVisible ? 'animate-draw' : ''}
              style={{ animationDelay: '1s' }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>

          {/* Data Packets */}
          {isVisible && (
            <div className="hidden md:block">
              <div className="data-packet" style={{ '--path': `path("${path1}")`, animationDelay: '0s' } as any} />
              <div className="data-packet" style={{ '--path': `path("${path1}")`, animationDelay: '1.5s' } as any} />
              <div className="data-packet" style={{ '--path': `path("${path2}")`, animationDelay: '1s' } as any} />
              <div className="data-packet" style={{ '--path': `path("${path2}")`, animationDelay: '2.5s' } as any} />
            </div>
          )}

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative z-10 pt-8 md:pt-40">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/[0.05] flex items-center justify-center mb-6 shadow-xl transition-all duration-500 group-hover:border-sky-500/50 group-hover:shadow-sky-500/10">
                <Database className="w-10 h-10 text-sky-500 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Data Ingestion</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Connects to CRM, Email, and internal databases to consolidate lead signals.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-sky-500/30 flex items-center justify-center mb-6 shadow-xl shadow-sky-500/10 transition-all duration-500 group-hover:border-sky-400 group-hover:shadow-sky-400/20">
                <Cpu className="w-10 h-10 text-sky-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Processing</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Real-time qualification, scoring, and intent analysis via custom LLM layers.
              </p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/10 transition-all duration-500 group-hover:border-emerald-400 group-hover:shadow-emerald-400/20">
                <Layers className="w-10 h-10 text-emerald-400 transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Tool Orchestration</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Automated outreach, CRM updates, and team notifications across your stack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagnosticForm() {
  const [step, setStep] = useState(1);
  const [selections, setSelections] = useState({
    bottleneck: '',
    teamSize: ''
  });

  const bottlenecks = [
    'Slow lead response time',
    'Unqualified leads wasting agent time',
    'Leads not followed up after first contact',
    'No visibility on lead pipeline'
  ];

  const teamSizes = [
    '1-10 Employees',
    '11-50 Employees',
    '51-200 Employees',
    '200+ Employees'
  ];

  const handleSubmit = () => {
    window.location.href = "https://calendly.com/your-booking-link";
  };

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6 border border-sky-500/20">
              Limited to 2 Audits Per Month
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4">
              Get Your Full Audit Roadmap
            </h2>
            <p className="text-slate-400">A clear, structured review of how your brokerage handles inbound leads — and exactly where deals are being lost.</p>
          </div>

          <div className="card p-8 lg:p-12 backdrop-blur-xl border-slate-800 bg-slate-900/60 relative overflow-hidden min-h-[500px] flex flex-col">
            {/* Form Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
              <div 
                className="h-full bg-sky-500 transition-all duration-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]" 
                style={{ width: `${(step / 2) * 100}%` }}
              />
            </div>

            <div className="mb-8">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Step {step} of 2</span>
            </div>

            <div className="flex-grow">
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-6">What is your main workflow bottleneck?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {bottlenecks.map((b) => (
                      <div 
                        key={b}
                        onClick={() => setSelections({...selections, bottleneck: b})}
                        className={`diagnostic-step flex items-center gap-4 ${selections.bottleneck === b ? 'active' : ''}`}
                      >
                        <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${selections.bottleneck === b ? 'border-sky-500 bg-sky-500 scale-110' : 'border-slate-700'}`} />
                        <span className="text-sm font-semibold text-slate-300">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-6">How large is the team involved?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {teamSizes.map((t) => (
                      <div 
                        key={t}
                        onClick={() => setSelections({...selections, teamSize: t})}
                        className={`diagnostic-step flex items-center gap-4 ${selections.teamSize === t ? 'active' : ''}`}
                      >
                        <Users className={`w-5 h-5 transition-all duration-300 ${selections.teamSize === t ? 'text-sky-400 scale-110' : 'text-slate-600'}`} />
                        <span className="text-sm font-semibold text-slate-300">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-12 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button 
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-semibold px-4 py-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back
                </button>
              ) : <div />}

              <button 
                disabled={(step === 1 && !selections.bottleneck) || (step === 2 && !selections.teamSize)}
                onClick={() => step < 2 ? setStep(step + 1) : handleSubmit()}
                className="cta-button !py-3 !px-10 gap-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">{step === 2 ? 'Book Audit Call' : 'Continue'}</span>
                <ChevronRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExitIntentModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6">
          <Rocket className="w-6 h-6 text-emerald-400" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-4">Wait, before you go...</h2>
        <p className="text-slate-400 leading-relaxed mb-8">
          Is your operation ready for automation? Get our brief guide: 
          <span className="text-white font-medium ml-1">5 Red Flags of Manual Friction</span> and see where you're losing time.
        </p>
        <div className="flex flex-col gap-3">
          <button className="cta-button w-full !bg-emerald-500 hover:!bg-emerald-400">
            Send Me the Guide
          </button>
          <button 
            onClick={onClose}
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors py-2"
          >
            I'll just keep browsing
          </button>
        </div>
      </div>
    </div>
  );
}

function AnimatedStat({ value, suffix }: { value: string, suffix: string }) {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, ''));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const duration = 2000;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const currentCount = Math.floor(progress * target);
          setCount(currentCount);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl font-bold text-white mb-1">
      {value.includes('%') ? `${count}%` : count.toLocaleString()}{suffix}
    </div>
  );
}

function ImpactSnapshots() {
  const snapshots = [
    {
      stat: '90',
      suffix: ' Seconds',
      sub: 'Average lead response time with automation',
      detail: 'The difference between winning and losing a deal in Dubai real estate.',
    },
    {
      stat: '78',
      suffix: '%',
      sub: 'Of deals go to the first agent who responds',
      detail: 'Not the best agent. Not the cheapest. The fastest.',
    },
    {
      stat: '24',
      suffix: '/7',
      sub: 'Automated lead coverage',
      detail: 'Your brokerage never misses an inquiry — day or night.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Snapshots of Success</h2>
          <p className="text-slate-400">Real outcomes delivered through system orchestration.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {snapshots.map((item, i) => (
            <div key={i} className="card group hover:border-emerald-500/30 transition-all duration-500 hover:-translate-y-2">
              <AnimatedStat value={item.stat} suffix={item.suffix} />
              <div className="text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-6">{item.sub}</div>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors italic">
                "{item.detail}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoundersNote() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="section-container relative">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 bg-slate-900/40 p-8 lg:p-12 rounded-3xl border border-white/[0.05] backdrop-blur-md">
          <div>
            <Quote className="w-10 h-10 text-sky-500/20 mx-auto mb-6" />
            <div className="space-y-4 text-xl md:text-2xl font-medium text-white leading-relaxed max-w-3xl mx-auto">
              <p>
                "Most brokerages in Dubai aren't losing deals because of bad agents. They're losing them because no one responded fast enough."
              </p>
              <p className="text-slate-400 text-lg mt-6">
                "I built Automate AI because I saw a simple problem with a simple fix — and I wanted to make sure the right people had access to it."
              </p>
            </div>
            <div className="mt-10">
              <div className="text-xl text-white font-bold mb-1">Neda Taleloidi</div>
              <div className="text-sm text-sky-400 font-medium uppercase tracking-wider">Founder, Automate AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyHeader({ show }: { show: boolean }) {
  return (
    <nav className={`sticky-header ${show ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="section-container flex items-center justify-between h-14">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>AI Systems</span>
        </div>
        <a href="#audit" className="text-xs font-bold text-sky-400 hover:text-white transition-colors flex items-center gap-1 group">
          Request Audit
          <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-white/[0.05]">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight group">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
            <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Automate AI</span>
        </a>
        <div className="flex items-center gap-8">
          <a href="#audit" className="hidden sm:block text-sm font-medium text-slate-400 hover:text-sky-400 transition-colors relative group">
            Free Automation Audit
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-400 transition-all group-hover:w-full" />
          </a>
          <a href="#audit" className="cta-button !py-2 !px-4 !text-xs sm:!py-2.5 sm:!px-5 sm:!text-sm">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

function TypewriterHeadline() {
  const words = ["chasing cold leads", "missing inbound inquiries", "slow response times", "losing deals to faster agents"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev: number) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev: number) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span>
      {words[index].substring(0, subIndex)}
      <span className="text-sky-500 cursor-blink ml-1">|</span>
    </span>
  );
}

interface Particle {
  id: number;
  size: string;
  left: string;
  top: string;
  duration: string;
  delay: string;
}

function Hero() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const newParticles: Particle[] = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      duration: Math.random() * 10 + 10 + 's',
      delay: Math.random() * 5 + 's',
    }));
    setParticles(newParticles);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-sky-500/10 rounded-full blur-[120px] glow-orb animate-breathing" 
          style={{ transform: `translate(-50%, ${scrollY * 0.15}px)` }}
        />
        <div 
          className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[100px] glow-orb" 
          style={{ 
            animationDelay: '3s', 
            animationDuration: '8s',
            transform: `translateY(${scrollY * -0.1}px)`
          }} 
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_30%,rgba(2,6,23,0.9)_100%)]" />
        
        {/* Particle Field */}
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              '--size': p.size,
              '--left': p.left,
              '--top': p.top,
              '--duration': p.duration,
              '--delay': p.delay,
            } as any}
          />
        ))}
      </div>

      <div className="section-container relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/40 border border-white/[0.05] backdrop-blur-md text-sm text-slate-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Dubai Real Estate Automation
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-8 min-h-[3.3em] flex flex-col items-center">
            <span>Your team is spending hours on</span>
            <div className="h-20 flex items-center justify-center">
              <TypewriterHeadline />
            </div>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We automate lead response for Dubai real estate brokerages — so every inbound inquiry gets answered in under 90 seconds and lands in the right agent's hands.
          </p>

          <div className="animate-fade-in-up animate-delay-300 relative inline-block">
            {/* Pulsing ring background */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-xl animate-pulse-ring scale-150" />
            <a href="#audit" className="cta-button text-lg gap-2.5 relative z-10">
              Book Your Free Audit Call
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-6 text-sm text-slate-500">
              No commitment. No pressure. Just clarity.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

function WhatsAppDemo() {
  const [phase, setPhase] = useState(0); // 0: hidden, 1: lead message, 2: typing, 3: AI message
  
  useEffect(() => {
    let timeout1: ReturnType<typeof setTimeout>;
    let timeout2: ReturnType<typeof setTimeout>;
    let timeout3: ReturnType<typeof setTimeout>;
    
    timeout1 = setTimeout(() => setPhase(1), 500); // Lead message appears
    timeout2 = setTimeout(() => setPhase(2), 1500); // Typing starts
    timeout3 = setTimeout(() => setPhase(3), 4000); // AI message appears
    
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  const handleReplay = () => {
    setPhase(0);
    setTimeout(() => {
      setPhase(1);
      setTimeout(() => setPhase(2), 1000);
      setTimeout(() => setPhase(3), 3500);
    }, 100);
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900/40 border-y border-white/[0.02]">
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/20">
              <Clock className="w-3.5 h-3.5" />
              WATCH IT HAPPEN · 90S
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
              From inbound lead to qualified buyer.
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              A real reply sequence the system runs every time a lead lands — no agent involved.
            </p>
            <button 
              onClick={handleReplay}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-white transition-colors bg-slate-800/50 hover:bg-slate-800 px-4 py-2 rounded-lg border border-white/5"
            >
              <RotateCcw className={`w-4 h-4 ${phase < 3 ? 'animate-spin-slow' : ''}`} /> 
              Replay Sequence
            </button>
          </div>

          <div className="relative mx-auto w-full max-w-[340px]">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full" />
            
            {/* Phone Frame */}
            <div className="card p-0 bg-slate-950/80 border-slate-700/50 backdrop-blur-xl rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-500/10 relative border-4">
              {/* Header */}
              <div className="bg-slate-900 border-b border-white/[0.05] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-500 overflow-hidden relative">
                  <Users className="w-5 h-5" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-slate-900"></div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Marina Gate · Lead</div>
                  <div className="text-xs text-emerald-400 font-medium">online</div>
                </div>
              </div>

              {/* Chat Area */}
              <div className="p-5 h-[380px] flex flex-col gap-4 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
                
                {/* Lead Message */}
                <div className={`transition-all duration-500 transform ${phase >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} flex`}>
                  <div className="bg-slate-800 text-slate-200 p-3 px-4 rounded-2xl rounded-tl-sm max-w-[85%] text-[13px] leading-relaxed shadow-sm">
                    Hi, interested in the 2BR at Marina Gate. Still available?
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className={`transition-all duration-300 flex justify-end ${phase === 2 ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden m-0'}`}>
                  <div className="bg-emerald-600/20 text-emerald-400 p-3 px-4 rounded-2xl rounded-tr-sm text-[13px] shadow-sm flex items-center gap-1.5 h-10">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
                  </div>
                </div>

                {/* AI Message */}
                <div className={`transition-all duration-500 transform ${phase >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 h-0 overflow-hidden'} flex justify-end`}>
                  <div className="bg-emerald-600 text-white p-3 px-4 rounded-2xl rounded-tr-sm max-w-[85%] text-[13px] leading-relaxed shadow-md">
                    Hi Ahmed — yes it's available. AED 2.4M, 1,180 sqft, vacant Sep 1. Are you cash or mortgage, and when can you view?
                  </div>
                </div>
                
              </div>

              {/* Input Area (Mock) */}
              <div className="bg-slate-900 border-t border-white/[0.05] p-3 flex items-center gap-2">
                <div className="flex-grow bg-slate-950 rounded-full h-9 border border-white/[0.05]"></div>
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Success Badge */}
              <div className={`absolute bottom-[4.5rem] left-1/2 -translate-x-1/2 w-[85%] transition-all duration-500 z-10 ${phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-slate-900/95 border border-emerald-500/30 backdrop-blur-md rounded-full py-2.5 px-4 flex items-center justify-center gap-2 shadow-2xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 uppercase tracking-wider whitespace-nowrap">
                    Replied in 90s · Qualified to Agent
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkflowComparison() {
  const [isAutomated, setIsAutomated] = useState(false);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900/20">
      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Stop Fighting the Chaos
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            See what changes when your brokerage stops relying on manual follow-up.
          </p>
          
          <button 
            onClick={() => setIsAutomated(!isAutomated)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800 border border-slate-700 hover:border-sky-500 transition-all duration-300 group"
          >
            <div className={`w-10 h-5 rounded-full relative transition-colors duration-500 ${isAutomated ? 'bg-sky-500' : 'bg-slate-600'}`}>
              <div className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform duration-500 ${isAutomated ? 'translate-x-5' : 'translate-x-0'}`} />
            </div>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              {isAutomated ? 'Automated Flow' : 'Manual Chaos'}
            </span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`card transition-all duration-700 h-[400px] flex flex-col justify-center relative ${!isAutomated ? 'ring-2 ring-amber-500/50 scale-105' : 'opacity-40 grayscale pointer-events-none'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <AlertCircle className="text-amber-400" />
              The Manual Struggle
            </h3>
            <div className="space-y-6 relative">
              <div className="flex items-center gap-4 text-slate-400 animate-pulse" style={{ animationDelay: '0s' }}>
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-500">
                  <Mail className="w-5 h-5" />
                </div>
                <span>Sorting through 100+ unread emails manually</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 animate-pulse" style={{ animationDelay: '0.2s' }}>
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-500">
                  <FileSpreadsheet className="w-5 h-5" />
                </div>
                <span>Copy-pasting lead data into spreadsheets</span>
              </div>
              <div className="flex items-center gap-4 text-slate-400 animate-pulse" style={{ animationDelay: '0.4s' }}>
                <div className="w-10 h-10 rounded bg-slate-800 flex items-center justify-center text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <span>6+ hour delay in first outreach response</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent pointer-events-none rounded-2xl" />
          </div>

          <div className={`card transition-all duration-700 h-[400px] flex flex-col justify-center relative ${isAutomated ? 'ring-2 ring-sky-500/50 scale-105 shadow-2xl shadow-sky-500/20' : 'opacity-40 grayscale pointer-events-none'}`}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <BrainCircuit className="text-sky-400" />
              The AI Advantage
            </h3>
            <div className="space-y-6 relative">
              <div className="flex items-center gap-4 text-slate-200">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="font-medium">Instant AI lead qualification & scoring</span>
              </div>
              <div className="flex items-center gap-4 text-slate-200">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="font-medium">Personalized outreach sent in &lt; 2 minutes</span>
              </div>
              <div className="flex items-center gap-4 text-slate-200">
                <div className="w-10 h-10 rounded-lg bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Rocket className="w-5 h-5" />
                </div>
                <span className="font-medium">Qualified deals synced directly to CRM</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent pointer-events-none rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AuditOffer() {
  const auditItems = [
    {
      icon: Search,
      title: 'Pipeline Analysis',
      description: 'We map your current lead generation workflow and identify where manual processes create bottlenecks and lost opportunities.',
    },
    {
      icon: BarChart3,
      title: 'Automation Blueprint',
      description: 'You receive a detailed plan showing which AI tools and automations would have the highest impact on your lead volume and quality.',
    },
    {
      icon: Lightbulb,
      title: 'ROI Projection',
      description: 'We estimate the time and cost savings from each recommended automation, so you can prioritize based on real numbers.',
    },
  ];

  return (
    <section id="audit" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What the Free Audit Includes
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A clear, structured review of how your brokerage handles inbound leads — and exactly where deals are being lost.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {auditItems.map((item, i) => (
            <div key={i} className="card group" style={{ animationDelay: `${400 + i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 card max-w-3xl mx-auto backdrop-blur-md bg-white/[0.02]">
          <h3 className="text-xl font-semibold text-white mb-4">Is This for You?</h3>
          <p className="text-slate-400 leading-relaxed mb-6">
            The audit is designed for businesses that meet one or more of these criteria:
          </p>
          <ul className="space-y-3">
            {[
              "Your brokerage receives inbound leads but response time is too slow",
              "You're losing deals to competitors who respond faster",
              "Your agents are overwhelmed and can't follow up with every lead",
              "You want to scale without hiring more staff",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 group">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0 transition-transform group-hover:scale-110" />
                <span className="leading-relaxed group-hover:text-white transition-colors">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      number: '01',
      title: 'You Share Your Context',
      description: 'Tell us about your current lead response setup — how inquiries come in, how agents respond, and where things slow down. Takes about 10 minutes.',
    },
    {
      number: '02',
      title: 'We Build Your Audit',
      description: 'We review your setup and build a tailored automation plan specifically for your brokerage — with clear recommendations and projected outcomes.',
    },
    {
      number: '03',
      title: 'You Decide What Happens Next',
      description: 'Walk away with a clear roadmap you can act on independently, or discuss implementation support if that makes sense for you.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            What Happens Next
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A straightforward process with no surprises and no pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="step-card relative group" style={{ animationDelay: `${i * 150}ms` }}>
              <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-emerald-400 opacity-20 tracking-tighter leading-none block mb-6 transition-opacity group-hover:opacity-40">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-sky-400 transition-colors">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] backdrop-blur-md text-slate-400">
            <MessageSquare className="w-4 h-4 text-sky-400" />
            <span className="text-sm">No sales calls. No follow-up sequences. Just the audit.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomationCalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [leadsPerDay, setLeadsPerDay] = useState(50);

  const extraDealsPerMonth = Math.round(teamSize * leadsPerDay * 30 * 0.005);
  const extraDealsPerYear = extraDealsPerMonth * 12;

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-slate-900/20">
      <div className="section-container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Calculate Your Potential Savings
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Find out how many deals your brokerage could be winning by responding to every lead in under 90 seconds.
            </p>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    Team Size
                  </label>
                  <span className="px-3 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold">
                    {teamSize} Agents
                  </span>
                </div>
                <input 
                  type="range" min="1" max="50" step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="text-white font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    Average leads per day (per agent)
                  </label>
                  <span className="px-3 py-1 rounded bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold">
                    {leadsPerDay} Leads
                  </span>
                </div>
                <input 
                  type="range" min="1" max="100" step="1"
                  value={leadsPerDay}
                  onChange={(e) => setLeadsPerDay(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Background glow for calculator */}
            <div className="absolute inset-0 bg-sky-500/10 rounded-3xl blur-3xl -z-10" />
            <div className="card p-10 backdrop-blur-xl border-slate-700/50 bg-slate-900/80">
              <div className="text-center space-y-12">
                <div>
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Extra Deals Won Per Month</p>
                  <div className="text-6xl sm:text-7xl font-bold text-white tracking-tighter">
                    {extraDealsPerMonth.toLocaleString()}
                    <span className="text-sky-400 text-xl sm:text-2xl ml-2 tracking-normal font-medium">Deals</span>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-800">
                  <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest mb-2">Total Impact Per Year</p>
                  <div className="text-4xl sm:text-5xl font-bold text-emerald-400 tracking-tight">
                    {extraDealsPerYear.toLocaleString()}
                    <span className="text-slate-500 text-xl ml-2 font-medium">Deals</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/10 text-sky-200/80 text-sm leading-relaxed italic">
                  "Based on conservative estimates of increased conversion rates when leads are responded to in under 90 seconds."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="py-12 border-t border-white/[0.05] bg-slate-950/50 backdrop-blur-sm">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 text-slate-500 text-sm">
          <div className="w-6 h-6 rounded-md bg-sky-500/10 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <span className="font-medium text-slate-400">Automate AI</span>
        </div>
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Automate AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default App;
