function MoodStats({ counts=0 }) {
  // TODO #5
  // Calculate total votes
  const totalVotes = Object.values(counts).reduce((sum, val) => sum + val, 0);
  // Determine percentages
   const getPercent = (mood) => {
    if (totalVotes === 0) return 0;
    return ((counts[mood] / totalVotes) * 100).toFixed(1);
  };
  // Render a simple table or list
  return (
    <section className="stats">
      <h2>Total votes: {totalVotes}</h2>
      <ul>
        <li>😊 Happy: {counts.happy} ({getPercent('happy')}%)</li>
        <li>😴 Tired: {counts.tired} ({getPercent('tired')}%)</li>
        <li>🤩 Excited: {counts.excited} ({getPercent('excited')}%)</li>
        <li>😐 Meh: {counts.meh} ({getPercent('meh')}%)</li>
      </ul>
    </section>
  );
}
export default MoodStats