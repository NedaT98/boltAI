import { Zap, Search, BarChart3, ArrowRight, CheckCircle2, MessageSquare, Lightbulb } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Nav />
      <Hero />
      <AuditOffer />
      <Process />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5 text-white font-semibold text-lg tracking-tight">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center">
            <Zap className="w-4.5 h-4.5 text-white" strokeWidth={2.5} />
          </div>
          Automate AI
        </a>
        <a href="#audit" className="cta-button !py-2.5 !px-5 !text-sm">
          Free Automation Audit
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-sky-500/8 rounded-full blur-[120px] glow-orb" />
        <div className="absolute top-40 right-0 w-[400px] h-[400px] bg-teal-500/6 rounded-full blur-[100px] glow-orb" style={{ animationDelay: '3s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_50%,rgba(2,6,23,0.8)_100%)]" />
      </div>

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-sm text-slate-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              AI-Powered Lead Generation
            </div>
          </div>

          <h1 className="animate-fade-in-up animate-delay-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
            Turn Your Lead Pipeline Into an
            <span className="text-sky-400"> Automated Machine</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-200 text-lg lg:text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10">
            We design and deploy AI automation systems that find, qualify, and nurture
            leads so your team can focus on closing deals instead of chasing them.
          </p>

          <div className="animate-fade-in-up animate-delay-300">
            <a href="#audit" className="cta-button text-lg gap-2.5">
              Free Automation Audit
              <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-slate-500">
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
    <section id="audit" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What the Free Audit Includes
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A clear, structured review of your lead generation process with
            actionable recommendations you can implement on your own or with our help.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {auditItems.map((item, i) => (
            <div key={i} className="card group">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-6 group-hover:bg-sky-500/15 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 card max-w-3xl mx-auto">
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
              <li key={i} className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <span className="leading-relaxed">{item}</span>
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
    <section className="py-24 lg:py-32 border-t border-slate-800/50">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What Happens Next
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            A straightforward process with no surprises and no pressure.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="step-card relative">
              <span className="text-5xl font-bold text-slate-800/60 tracking-tighter leading-none block mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-900/60 border border-slate-800 text-slate-400">
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
    <section className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/6 rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Get Your Free Automation Audit
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-10">
            Understand exactly where AI automation can improve your lead generation,
            with a clear plan and real numbers to back it up.
          </p>
          <a href="#audit" className="cta-button text-lg gap-2.5">
            Free Automation Audit
            <ArrowRight className="w-5 h-5" />
          </a>
          <p className="mt-4 text-sm text-slate-500">
            Delivered within 5 business days. No strings attached.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800/50 py-12">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-slate-500 text-sm">
          <div className="w-6 h-6 rounded-md bg-sky-500/20 flex items-center justify-center">
            <Zap className="w-3.5 h-3.5 text-sky-400" />
          </div>
          <span>Automate AI</span>
        </div>
        <p className="text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Automate AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default App;
