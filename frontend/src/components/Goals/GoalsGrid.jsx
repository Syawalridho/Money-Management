import React from "react";
import GlassCard from "../ui/GlassCard";
import GoalCard from "./GoalCard";

/** Grid pembungkus seluruh kartu goals (tiap item dibungkus GlassCard) */
export default function GoalsGrid({ goals, onItemAction }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {goals.map((goal) => (
        <GlassCard key={goal.name}>
          <GoalCard goal={goal} onAction={() => onItemAction?.(goal)} />
        </GlassCard>
      ))}
    </div>
  );
}
