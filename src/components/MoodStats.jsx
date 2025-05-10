import { useState } from "react";

function MoodStats({ counts=0 }) {
 const total = Object.values(counts).reduce((sum,val) => sum + val, 0);

  const getPercentage = (count) => {
    return total === 0 ? 0 : ((count / total) * 100).toFixed(1)
  };
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {(getPercentage(counts.happy))}%</li>
        <li>😴 Tired: {(getPercentage(counts.tired))}%</li>
        <li>🤩 Excited: {(getPercentage(counts.excited))}%</li>
        <li>😐 Meh: {(getPercentage(counts.meh))}%</li>
      </ul>
    </section>
  );
}

export default MoodStats