"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CardData, categoryLabels } from "@/data/projects";
import { TechPill } from "./TechPill";

interface ProjectCardProps {
  data: CardData;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({ data, isExpanded, onToggle }: ProjectCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`w-full text-left rounded-xl p-5 transition-colors border cursor-pointer ${
        isExpanded
          ? "bg-white/[0.08] border-indigo-400/30"
          : "bg-white/[0.05] border-white/10 hover:bg-white/[0.07]"
      }`}
    >
      {data.category && (
        <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-400 mb-1.5">
          {categoryLabels[data.category]}
        </p>
      )}

      <h3 className="text-base font-semibold text-white mb-1">
        {data.title}
      </h3>

      <p className="text-sm text-slate-400 leading-relaxed">{data.summary}</p>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-slate-300 leading-relaxed mt-3">
              {data.description}
            </p>

            {data.outcome && (
              <p className="text-xs text-slate-500 mt-3 border-t border-white/[0.06] pt-3">
                <span className="text-indigo-400 font-medium">Outcome: </span>
                {data.outcome}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-1.5 mt-3">
        {data.techStack.map((tech) => (
          <TechPill key={tech} label={tech} />
        ))}
      </div>
    </button>
  );
}
