
function MoodStats({ counts }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
 function total(counts, vote) {
  const totalVotes = counts.happy + counts.tired + counts.excited + counts.meh;
  if(totalVotes == 0) {
    return 0;
  }
  else {
    return ((vote / totalVotes)*100).toFixed(2);
  }
 }

  return (
    <section className="stats">
      <h2>Total votes: {counts.happy + counts.tired + counts.excited + counts.meh}</h2>
      <ul>
        <li>😊 Happy: {counts.happy} {total(counts, counts.happy)}%</li>
        <li>😴 Tired: {counts.tired} {total(counts, counts.tired)}%</li>
        <li>🤩 Excited: {counts.excited} {total(counts, counts.excited)}%</li>
        <li>😐 Meh: {counts.meh} {total(counts, counts.meh)}%</li>
      </ul>
    </section>
  );
}

export default MoodStats