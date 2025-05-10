function MoodStats({ counts={} }) {
 const totalVotes = Object.values(counts).reduce((sum, count) => sum + count, 0);
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  const getPercentage = (mood) => {
    if (totalVotes === 0) return 0;
    return ((counts[mood] / totalVotes) * 100).toFixed(1);
  };

  return (
    <section className="stats">
      <h2>Total votes: {totalVotes}</h2>
      <ul>
        <li>😊 Happy: {getPercentage('happy')}%</li>
        <li>😴 Tired: {getPercentage('tired')}%</li>
        <li>🤩 Excited: {getPercentage('excited')}%</li>
        <li>😐 Meh: {getPercentage('meh')}%</li>
      </ul>
    </section>
  );
}

export default MoodStats