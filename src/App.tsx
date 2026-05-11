import { useEffect, useState } from 'react';
import { Zap, Search, BarChart3, ArrowRight, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Nav />
      <Hero />
      <div className="gradient-divider" />
      <AuditOffer />
      <div className="gradient-divider" />
      <Process />
      <div className="gradient-divider" />
      <FinalCTA />
      <Footer />
    </div>
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

function Hero() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1 + 'px',
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      duration: Math.random() * 10 + 10 + 's',
      delay: Math.random() * 5 + 's',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <header className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[700px] bg-sky-500/10 rounded-full blur-[120px] glow-orb animate-breathing" />
        <div className="absolute top-40 right-[-10%] w-[500px] h-[500px] bg-emerald-500/8 rounded-full blur-[100px] glow-orb" style={{ animationDelay: '3s', animationDuration: '8s' }} />
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/40 border border-white/[0.05] backdrop-blur-md text-sm text-slate-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI-Powered Lead Generation
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-8">
            Turn Your Lead Pipeline Into an
            <span className="text-sky-400 drop-shadow-[0_0_25px_rgba(56,189,248,0.3)]"> Automated Machine</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We design and deploy AI automation systems that find, qualify, and nurture
            leads so your team can focus on closing deals instead of chasing them.
          </p>

          <div className="animate-fade-in-up animate-delay-300 relative inline-block">
            {/* Pulsing ring background */}
            <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-xl animate-pulse-ring scale-150" />
            <a href="#audit" className="cta-button text-lg gap-2.5 relative z-10">
              Free Automation Audit
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
            A clear, structured review of your lead generation process with
            actionable recommendations you can implement on your own or with our help.
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
              'Your sales team spends significant time on manual prospecting and outreach',
              'You have a defined lead generation process but know it could be more efficient',
              'You are curious about AI automation but unsure where to start',
              'You want to scale lead volume without proportionally scaling headcount',
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
      description: 'Tell us about your current lead generation setup, goals, and challenges through a brief questionnaire. Takes about 10 minutes.',
    },
    {
      number: '02',
      title: 'We Build Your Audit',
      description: 'Our team reviews your process and builds a tailored automation plan with specific tool recommendations and projected outcomes.',
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

function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] animate-breathing" />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Get Your Free Automation Audit
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Understand exactly where AI automation can improve your lead generation,
            with a clear plan and real numbers to back it up.
          </p>
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-sky-500/20 rounded-lg blur-xl animate-pulse-ring scale-150" />
            <a href="#audit" className="cta-button text-lg gap-2.5 relative z-10">
              Free Automation Audit
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            Delivered within 5 business days. No strings attached.
          </p>
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
