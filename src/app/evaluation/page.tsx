"use client";

import React, { useState, useEffect } from "react";
import { HelpCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function EvaluationPage() {
  const [assessmentState, setAssessmentState] = useState<"READY" | "RUNNING" | "FINISHED">("READY");
  const [timer, setTimer] = useState(600);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  useEffect(() => {
    let ticker: any;
    if (assessmentState === "RUNNING" && timer > 0) {
      ticker = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && assessmentState === "RUNNING") {
      triggerAutoCommit();
    }
    return () => clearInterval(ticker);
  }, [assessmentState, timer]);

  const triggerAutoCommit = async () => {
    setAssessmentState("FINISHED");
    const { error } = await supabase.from('assessment_results').insert([{ user_email: "active-student@jgu.edu", test_name: "Indian Universities Mid-Term Evaluation", score: 95, remarks: currentAnswer }]);
    setStatusMsg(error ? `Fault: ${error.message}` : "Evaluation payload committed successfully to campus internal data cloud tables.");
  };

  return (
    <main className="min-h-screen bg-[#050816] text-slate-200 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-3xl bg-slate-900/50 border border-amber-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.08)]">
        <div className="flex justify-between items-center border-b border-amber-500/20 pb-4">
          <span className="font-mono text-xs font-black tracking-widest text-amber-400 uppercase flex items-center gap-2">
            <ShieldAlert size={14} /> INTERNAL EVALUATION DESK // COMPLIANT RUNTIME
          </span>
          {assessmentState === "RUNNING" && (
            <div className="font-mono font-bold text-xs bg-amber-950/40 text-amber-400 px-3 py-1 border border-amber-500/30 rounded animate-pulse">
              TIME REMAINING: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
            </div>
          )}
        </div>

        {assessmentState === "READY" && (
          <div className="text-center py-12 space-y-4">
            <HelpCircle size={48} className="mx-auto text-amber-400" />
            <h3 className="text-xl font-black uppercase text-white tracking-wide">Initialize Examination Stream</h3>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">The internal verification desk operates on a rigid 10-minute countdown loop. Exceeding processing limits triggers automatic transmission logic to the mainframe infrastructure.</p>
            <button onClick={() => { setAssessmentState("RUNNING"); setTimer(600); }} className="bg-amber-500 text-black font-mono font-black text-xs px-6 py-3 rounded hover:bg-amber-400 transition-colors shadow-[0_4px_20px_rgba(245,158,11,0.2)]">Start Examination Timer</button>
          </div>
        )}

        {assessmentState === "RUNNING" && (
          <div className="space-y-4">
            <textarea value={currentAnswer} onChange={(e) => setCurrentAnswer(e.target.value)} placeholder="Type internal engineering curriculum description inputs cleanly here..." className="w-full h-52 bg-black/60 border border-amber-500/20 rounded-xl p-4 font-mono text-xs text-white focus:border-amber-400 focus:outline-none" />
            <button onClick={triggerAutoCommit} className="bg-amber-500 text-black font-mono font-black text-xs px-6 py-3 rounded hover:scale-101 transition-transform font-bold">Commit Data Target to Mainframe</button>
          </div>
        )}

        {assessmentState === "FINISHED" && (
          <div className="text-center py-12 space-y-4">
            <CheckCircle2 size={48} className="mx-auto text-green-400" />
            <h3 className="text-xl font-black uppercase text-green-400">Examination Stream Concluded</h3>
            <p className="text-xs font-mono text-slate-400">{statusMsg}</p>
            <div className="pt-4"><Link href="/" className="text-xs font-mono text-amber-400 underline hover:text-amber-300">Return to Campus Mainframe</Link></div>
          </div>
        )}
      </div>
    </main>
  );
}