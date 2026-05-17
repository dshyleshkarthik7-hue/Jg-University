"use client";

import React, { useState } from "react";
import { Database } from "lucide-react";
import { supabase } from "../../lib/supabase";
import Link from "next/link";

export default function AssignmentPage() {
  const [fileInput, setFileInput] = useState("");
  const [courseSelection, setCourseSelection] = useState("B.Tech AI & Data Science");
  const [feedback, setFeedback] = useState("");

  const handleAssignmentTransmission = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback("");
    const { error } = await supabase.from('assignment_vault').insert([{ course_name: courseSelection, file_url: fileInput }]);
    setFeedback(error ? `Pipeline Blocked: ${error.message}` : "Portfolio project reference link successfully written to the secure institutional data cloud queue.");
    if (!error) setFileInput("");
  };

  return (
    <main className="min-h-screen bg-[#050816] text-slate-200 flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl bg-slate-900/50 border border-emerald-500/30 rounded-2xl p-8 space-y-6 shadow-[0_0_50px_rgba(16,185,129,0.08)]">
        <div className="border-b border-emerald-500/20 pb-3 flex items-center gap-2">
          <Database className="text-emerald-400" size={16} />
          <span className="font-mono text-xs font-black text-emerald-400 uppercase tracking-widest">ASSIGNMENT SUBMISSION MODULE // SECURE CHANNEL</span>
        </div>

        <form onSubmit={handleAssignmentTransmission} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Select Academic Department</label>
            <select value={courseSelection} onChange={(e) => setCourseSelection(e.target.value)} className="w-full bg-black/60 border border-white/10 rounded-md p-3 text-xs font-bold text-white focus:border-emerald-400 focus:outline-none">
              <option value="B.Tech AI & Data Science">B.Tech AI & Data Science</option>
              <option value="Fintech Management">Fintech Management Systems</option>
              <option value="Advanced Computational Logic">Advanced Computational Logic</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Repository Portfolio URL Link</label>
            <input type="text" value={fileInput} onChange={(e) => setFileInput(e.target.value)} placeholder="https://github.com/your-username/project-name" className="w-full bg-black/60 border border-white/10 rounded-md p-3 text-xs font-mono text-white focus:border-emerald-400 focus:outline-none" required />
          </div>

          <button type="submit" className="w-full bg-emerald-600 text-white font-mono font-black text-xs uppercase p-3 rounded-md hover:bg-emerald-500 transition-colors shadow-[0_4px_20px_rgba(16,185,129,0.2)]">Transmit Project Reference</button>
        </form>

        {feedback && (
          <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-md text-center font-mono text-[10px] text-emerald-300 tracking-wide">
            {feedback}
          </div>
        )}
        <div className="text-center pt-2"><Link href="/" className="text-xs font-mono text-slate-400 hover:text-white underline">← Return to Mainframe Showcase</Link></div>
      </div>
    </main>
  );
}