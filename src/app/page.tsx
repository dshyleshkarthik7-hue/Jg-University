"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Bot, X, Layers, Terminal, User, Key, ArrowUpRight, Building2, Network, Sparkles, GraduationCap, Globe, ShieldCheck, Milestone, Compass } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function IndianUniversityDashboard() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  // AI Assistant States
  const [isBotOpen, setIsBotOpen] = useState(false);
  const [chatLog, setChatLog] = useState<{ role: "user" | "bot"; msg: string }[]>([
    { role: "bot", msg: "JG FutureVerse AI Assistant synchronized with Indian Campus Cluster Core. Query institutional matrices now." }
  ]);
  const [botInput, setBotInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);

  const handleLoginSubmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginStatus("Authenticating credentials against secure university records...");
    
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('email', loginEmail)
      .eq('password', loginPassword)
      .single();
    
    if (error || !data) {
      setLoginStatus("Authentication Failed: Invalid Email or Password.");
    } else {
      setLoginStatus(`Access Granted. Welcome, ${data.name} [${data.role} MODULE LOGGED IN].`);
    }
  };

  const fireAgentQuery = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!botInput.trim()) return;
    const userMessage = botInput;
    setChatLog((prev) => [...prev, { role: "user", msg: userMessage }]);
    setBotInput("");
    setBotTyping(true);

    setTimeout(() => {
      let output = "Querying academic directory. For administrative support, contact vikas@codingjr.online.";
      const input = userMessage.toLowerCase();
      if (input.includes("admission")) output = "Admissions for the 2026 academic year are active. Access the student mainframe through the Secure Log Panel.";
      else if (input.includes("fee") || input.includes("cost")) output = "B.Tech AI Engineering tuition fee is set at ₹1,20,000 per semester. Advanced Data Sciences is ₹90,000 per semester.";
      else if (input.includes("placement")) output = "Ecosystem placement tracking registers a 98% capture matrix, with a highest national package tier up to ₹32.0 LPA.";
      setChatLog((prev) => [...prev, { role: "bot", msg: output }]);
      setBotTyping(false);
    }, 500);
  };

  return (
    <main className="min-h-screen relative text-slate-200 bg-[#02040a] overflow-x-hidden font-sans selection:bg-cyan-500 selection:text-black">
      
      {/* BACKGROUND VECTOR MATRIX ENGINE */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15]" 
           style={{
             backgroundImage: `radial-gradient(rgba(0, 243, 255, 0.15) 1px, transparent 0)`,
             backgroundSize: '30px 30px'
           }} 
      />

      {/* HEADER NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-[#02040a]/80 backdrop-blur-xl border-b border-white/10 px-6 md:px-12 py-4 flex justify-between items-center shadow-[0_4px_30px_rgba(0,243,255,0.03)]">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-sm rotate-45 border border-black/40 shadow-[0_0_15px_rgba(0,243,255,0.5)]" />
          <span className="text-xl font-black uppercase tracking-widest font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            JG FutureVerse
          </span>
        </div>
        <div className="hidden lg:flex gap-8 font-mono text-xs tracking-widest text-slate-400">
          <a href="#hero" className="text-cyan-400 border-b border-cyan-400 pb-0.5">HOME</a>
          <a href="#about" className="hover:text-cyan-400 transition-colors">ABOUT UT</a>
          <a href="#programs" className="hover:text-cyan-400 transition-colors">ACADEMICS</a>
          <Link href="/evaluation" className="hover:text-amber-400 transition-colors">EVALUATION DESK</Link>
          <Link href="/assignment" className="hover:text-emerald-400 transition-colors">ASSIGNMENT VAULT</Link>
          <a href="#placements" className="hover:text-cyan-400 transition-colors">PLACEMENTS</a>
        </div>
        <button onClick={() => setIsLoginOpen(true)} className="border border-cyan-400/40 bg-cyan-950/20 px-4 py-2 rounded font-mono font-black text-[11px] text-cyan-400 tracking-widest hover:bg-cyan-400 hover:text-black transition-all shadow-[0_0_20px_rgba(0,243,255,0.1)]">
          SECURE LOG PANEL
        </button>
      </nav>

      {/* FLASHY CYBERPUNK HERO HERO COMPONENT */}
      <section id="hero" className="min-h-screen pt-32 flex items-center justify-start px-6 md:px-12 relative overflow-hidden">
        {/* AMBIENT GLOW BACKDROPS */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/3 left-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[130px] pointer-events-none z-0 animate-pulse" style={{ animationDuration: '9s' }} />

        {/* FLOATING VECTOR BACKDROP NETWORK MAP */}
        <div className="absolute right-10 top-1/4 opacity-10 hidden lg:block z-0 animate-bounce" style={{ animationDuration: '15s' }}>
          <Network size={400} className="text-cyan-400 stroke-[0.5]" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8">
          <div className="space-y-6 max-w-4xl">
            
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-full backdrop-blur-md">
              <Sparkles size={12} className="text-cyan-400 animate-spin" style={{ animationDuration: '4s' }} />
              <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-cyan-300">Next-Gen Digital Infrastructure</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight leading-none text-white select-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.6)]">
              INDIA'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-purple-400">FUTURE-READY</span> <br />DIGITAL CAMPUS.
            </h1>
            
            <div className="border border-white/10 bg-slate-900/40 backdrop-blur-md p-6 rounded-xl max-w-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
              <div className="text-xl md:text-3xl font-bold text-cyan-300 font-mono tracking-tight min-h-[3rem] flex items-center">
                <TypeAnimation
                  sequence={['AI Enabled Education', 1500, 'Innovation Driven Learning', 1500, 'Next Generation Placements', 1500]}
                  repeat={Infinity}
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/evaluation" className="bg-gradient-to-r from-amber-500 to-amber-400 text-black px-6 py-3 rounded font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-102 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                Enter Evaluation Portal <ArrowUpRight size={14} />
              </Link>
              <Link href="/assignment" className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-black px-6 py-3 rounded font-mono font-black text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-102 transition-transform shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Open Assignment Vault <ArrowUpRight size={14} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT THE UNIVERSITY (WITH CODE-GENERATED VISUAL ART) */}
      <section id="about" className="py-24 px-6 relative border-t border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-bold tracking-widest uppercase">
              <GraduationCap size={16} /> Foundations of Excellence
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white">Engineering The Leaders of the Digital Age</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              JG FutureVerse functions as a premium technological hub dedicated to bridging traditional Indian educational values with high-speed software development environments. Designed in alignment with national modernization guidelines, our frameworks train students to handle scalable network architectures, cloud relational systems, and decentralized machine analytics models.
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              By maintaining deep strategic alliances with global technological leaders and national corporate consortia, our pedagogy shifts away from static classroom memorization and emphasizes live structural validation matrices directly on distributed networks.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 font-mono">
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/40">
                <Globe className="text-cyan-400 mb-1" size={18} />
                <p className="text-white text-xs font-bold uppercase">UGC Compliant</p>
                <p className="text-[11px] text-slate-500">Fully aligned standard</p>
              </div>
              <div className="border border-white/5 p-4 rounded-xl bg-slate-950/40">
                <ShieldCheck className="text-purple-400 mb-1" size={18} />
                <p className="text-white text-xs font-bold uppercase">AICTE Approved</p>
                <p className="text-[11px] text-slate-500">Curriculums standard matrix</p>
              </div>
            </div>
          </div>
          
          {/* HIGH-TECH EMBEDDED CSS ABSTRACT MEDIA CANVAS */}
          <div className="lg:col-span-5 relative">
            <div className="w-full h-[320px] rounded-2xl bg-gradient-to-br from-slate-900 via-[#050914] to-slate-950 border border-white/10 relative overflow-hidden flex flex-col justify-between p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,243,255,0.08),transparent_70%)]" />
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-[10px] font-mono text-cyan-400 tracking-wider">CORE CLUSTER NODE // ACTIVE</p>
                  <p className="text-sm font-bold font-mono text-white mt-0.5">INSTITUTIONAL QUANTUM MATRIX</p>
                </div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              </div>
              {/* CYBER GEOMETRIC DRAWING LINES */}
              <div className="space-y-2 relative z-10 w-full">
                <div className="h-[2px] bg-gradient-to-r from-cyan-500 to-transparent w-3/4 rounded" />
                <div className="h-[2px] bg-gradient-to-r from-purple-500 to-transparent w-1/2 rounded" />
                <div className="h-[2px] bg-gradient-to-r from-yellow-500 to-transparent w-5/6 rounded" />
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 relative z-10 border-t border-white/5 pt-4">
                <span>SYSTEM STATUS: STABLE</span>
                <span>DATA RATE: 48.2 GB/S</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: ACADEMICS PORTFOLIOS */}
      <section id="programs" className="py-24 px-6 relative border-t border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-black uppercase text-white tracking-tight">University Academic Curriculums</h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Approved engineering syllabi structured for modern technology sectors. Every program pipeline incorporates strict computational labs and cloud architecture assignments to satisfy institutional credit regulations.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900/40 border border-white/10 rounded-2xl space-y-4 hover:border-cyan-500/30 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Brain className="text-cyan-400" size={28} />
              <h3 className="text-xl font-bold uppercase font-mono tracking-wide text-white">AI Engineering (B.Tech)</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                An advanced 4-year undergraduate syllabus mapping neural architecture layouts, deep mathematical processing, and pipeline optimization. Curriculums emphasize real-world telemetry tracking within distributed database servers.
              </p>
              <div className="border-t border-white/5 pt-3 space-y-1 font-mono text-[11px] text-cyan-300">
                <p>⚡ Semester Fee: ₹1,20,000</p>
                <p>⚡ Structure: AICTE Approved Core</p>
              </div>
            </div>

            <div className="p-8 bg-slate-900/40 border border-white/10 rounded-2xl space-y-4 hover:border-purple-500/30 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Terminal className="text-purple-400" size={28} />
              <h3 className="text-xl font-bold uppercase font-mono tracking-wide text-white">Fintech Management</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Integrating institutional business finance with modern software frameworks. Curriculum structures track algorithmic commerce mechanics, secure digital ledger protocols, and automated financial transaction systems.
              </p>
              <div className="border-t border-white/5 pt-3 space-y-1 font-mono text-[11px] text-purple-300">
                <p>⚡ Semester Fee: ₹1,25,000</p>
                <p>⚡ Structure: Professional Tier Registry</p>
              </div>
            </div>

            <div className="p-8 bg-slate-900/40 border border-white/10 rounded-2xl space-y-4 hover:border-yellow-500/30 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <Layers className="text-yellow-400" size={28} />
              <h3 className="text-xl font-bold uppercase font-mono tracking-wide text-white">Advanced Data Sciences</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Focused on statistical analysis and processing of high-volume dataset arrays. Students construct indexing models, compute query performance factors, and configure relational database configurations.
              </p>
              <div className="border-t border-white/5 pt-3 space-y-1 font-mono text-[11px] text-yellow-300">
                <p>⚡ Semester Fee: ₹90,000</p>
                <p>⚡ Structure: UGC Compliant Specification</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC RESEARCH INITIATIVES */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-slate-900/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-yellow-400 font-mono text-xs font-bold tracking-widest uppercase mb-1">
              <Milestone size={16} /> Advanced Lab Nodes
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">Strategic Research Centers</h2>
            <p className="text-xs text-slate-400 mt-1">Our labs house specialized institutional clusters focused on expanding computing bounds.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 font-mono">
            <div className="p-6 border border-white/10 bg-slate-950/40 rounded-xl space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wide">01 // High Performance Computing Center</p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Equipped with custom high-throughput nodes running localized telemetry algorithms. Research groups validate parallel data arrays, analyze algorithmic constraints, and compile customized machine intelligence modules.
              </p>
            </div>
            <div className="p-6 border border-white/10 bg-slate-950/40 rounded-xl space-y-2">
              <p className="text-sm font-bold text-white uppercase tracking-wide">02 // Cyber Physical Security Sandbox</p>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                An isolated network environment built to analyze protocol packet streams, trace structural routing loops, and establish security configuration standards across industrial software frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: CAMPUS LIFE & INTEGRATED DIGITAL HUBS */}
      <section className="py-24 px-6 relative border-t border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          {/* DIGITAL ENVIRONMENT CODE-DRIVEN INFRASTRUCTURE CHART */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="w-full h-[320px] rounded-2xl bg-gradient-to-bl from-slate-950 via-[#030611] to-slate-900 border border-white/10 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="flex items-center gap-2 text-purple-400 font-mono text-[10px] tracking-widest uppercase">
                <Network size={14} /> LIVE REPOSITORY MATRIX STATUS
              </div>
              
              {/* DYNAMIC SPECTRUM WAVE EMULATION */}
              <div className="flex items-end justify-between h-36 px-4">
                <div className="w-3 bg-cyan-500/30 h-16 rounded-t" />
                <div className="w-3 bg-purple-500/40 h-28 rounded-t" />
                <div className="w-3 bg-cyan-400 h-20 rounded-t shadow-[0_0_10px_rgba(0,243,255,0.3)]" />
                <div className="w-3 bg-purple-500 h-32 rounded-t shadow-[0_0_10px_rgba(168,85,247,0.3)]" />
                <div className="w-3 bg-yellow-500/50 h-24 rounded-t" />
                <div className="w-3 bg-cyan-500/20 h-12 rounded-t" />
              </div>

              <div className="text-[11px] font-mono text-slate-400 flex justify-between border-t border-white/5 pt-4">
                <span>INCUBATION ALLOCATION: 92.4%</span>
                <span className="text-green-400 font-bold">ONLINE</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-bold tracking-widest uppercase">
              <Compass size={16} /> Campus Ecosystem
            </div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white">An Integrated Digital Ecosystem</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              Campus spaces utilize connected computing systems to streamline library reference queues, laboratory time allocations, and project compilation records. Our automated smart facilities ensure uninterrupted execution loops for all academic workloads.
            </p>
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <p className="flex items-start gap-2"><span className="text-cyan-400 font-bold">»</span> Advanced smart repository providing 24/7 digital ledger access.</p>
              <p className="flex items-start gap-2"><span className="text-cyan-400 font-bold">»</span> Symmetrical gigabit optical lines spanning all computing clusters.</p>
              <p className="flex items-start gap-2"><span className="text-cyan-400 font-bold">»</span> Creative incubation chambers configured for startup workspace modeling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PLACEMENTS LEDGER */}
      <section id="placements" className="py-24 px-6 bg-slate-950/60 border-t border-white/5 z-10 relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs text-purple-400 font-bold uppercase tracking-widest">National Hiring Matrix</span>
            <h2 className="text-4xl font-black uppercase tracking-tight text-white">Ecosystem Placements Ledger</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <PlacementPartner name="Google India" tier="Premium Core Development" package="₹32.0 LPA" />
            <PlacementPartner name="Amazon Dev Centre" tier="Cloud Infrastructure Operations" package="₹28.5 LPA" />
            <PlacementPartner name="Microsoft India" tier="Enterprise Product Engineering" package="₹26.0 LPA" />
            <PlacementPartner name="TCS Digital" tier="Advanced Systems Architecture" package="₹12.4 LPA" />
            <PlacementPartner name="Infosys Power Programmer" tier="Cloud Architecture Services" package="₹11.8 LPA" />
            <PlacementPartner name="Wipro Turbo" tier="Digital Transformation Layer" package="₹10.5 LPA" />
            <PlacementPartner name="Cognizant Digital" tier="Enterprise Analytics Nodes" package="₹14.2 LPA" />
            <PlacementPartner name="HCLTech Engineering" tier="Next-Gen Infrastructure Stacks" package="₹13.9 LPA" />
          </div>
        </div>
      </section>

      {/* SECURE POP-UP LOGIN MODAL */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="w-full max-w-md bg-slate-900 border border-cyan-500/30 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,243,255,0.15)] relative space-y-6">
              <button onClick={() => { setIsLoginOpen(false); setLoginStatus(""); }} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={18} /></button>
              
              <div className="text-center space-y-1">
                <h3 className="text-xl font-black font-mono tracking-widest text-cyan-400 uppercase">MAINFRAME PORTAL LOG</h3>
                <p className="text-[10px] font-mono text-slate-400 uppercase">Secure Academic Access Verification</p>
              </div>

              <form onSubmit={handleLoginSubmission} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 text-slate-500" size={14} />
                  <input type="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder="University Email Address" className="w-full bg-black/50 border border-white/10 rounded-md py-3 pl-10 pr-4 text-xs font-bold text-white focus:border-cyan-400 focus:outline-none" required />
                </div>
                <div className="relative">
                  <Key className="absolute left-3 top-3.5 text-slate-500" size={14} />
                  <input type="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder="Password" className="w-full bg-black/50 border border-white/10 rounded-md py-3 pl-10 pr-4 text-xs font-bold text-white focus:border-cyan-400 focus:outline-none" required />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-md text-white p-3 font-mono font-black text-xs uppercase tracking-widest">VERIFY IDENTIFICATION</button>
              </form>
              
              {loginStatus && <p className="p-3 bg-black/40 border border-white/5 rounded-md font-mono text-[10px] text-center text-cyan-300">{loginStatus}</p>}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* AI COMPANION */}
      <div className="fixed bottom-6 right-6 z-[100]">
        {!isBotOpen && (
          <button onClick={() => setIsBotOpen(true)} className="bg-cyan-500 text-black font-mono font-black text-xs px-5 py-4 rounded-full shadow-[0_4px_25px_rgba(0,243,255,0.3)] hover:scale-105 transition-transform flex items-center gap-2">
            <Bot size={16} /> ASYNC COMPANION WIDGET
          </button>
        )}
        <AnimatePresence>
          {isBotOpen && (
            <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="w-80 md:w-96 h-[400px] bg-[#050816] border border-white/10 rounded-2xl flex flex-col shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
              <div className="bg-slate-900 p-3.5 rounded-t-2xl flex justify-between items-center border-b border-white/10">
                <span className="text-cyan-400 font-mono text-xs font-black tracking-widest">JG-AI SYSTEM</span>
                <button onClick={() => setIsBotOpen(false)} className="text-slate-400 hover:text-white"><X size={16} /></button>
              </div>
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs">
                {chatLog.map((chat, i) => (
                  <div key={i} className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`p-3 rounded-xl max-w-[85%] ${chat.role === "user" ? "bg-purple-900/40 border border-purple-500/20 text-white" : "bg-slate-900 border border-white/5 text-cyan-300"}`}>{chat.msg}</div>
                  </div>
                ))}
                {botTyping && <p className="text-slate-500 animate-pulse px-3">Syncing matrix data streams...</p>}
              </div>
              <form onSubmit={fireAgentQuery} className="p-3 bg-slate-950 border-t border-white/10 flex gap-2">
                <input type="text" value={botInput} onChange={(e) => setBotInput(e.target.value)} placeholder="Type parameters..." className="flex-1 bg-transparent text-xs text-white focus:outline-none" />
                <button type="submit" className="text-cyan-400 font-black text-xs uppercase font-mono tracking-widest">Send</button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </main>
  );
}

function PlacementPartner({ name, tier, package: pkg }: any) {
  return (
    <div className="p-5 bg-slate-900/30 border border-white/10 rounded-xl space-y-1 hover:border-purple-500/40 transition-colors shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]">
      <Building2 className="text-purple-400 mb-1" size={18} />
      <h4 className="text-sm font-bold font-mono text-white tracking-wide">{name}</h4>
      <p className="text-[10px] text-slate-400 font-mono uppercase">{tier}</p>
      <p className="text-lg font-black text-cyan-400 mt-2 font-mono">{pkg}</p>
    </div>
  );
}