function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */

        const totalVotes = Object.values(counts).reduce((a, b) => a + b, 0);        
        const happyPercentage = ((counts.happy / totalVotes) * 100);
        const tiredPercentage = ((counts.tired / totalVotes) * 100);
        const excitedPercentage = ((counts.excited / totalVotes) * 100);
        const mehPercentage = ((counts.meh / totalVotes) * 100);



  return (
    <section className="stats">
      <h2>Total votes: {totalVotes}</h2>
      <ul>
        <li>😊 Happy: {happyPercentage}_%</li>
        <li>😴 Tired: {tiredPercentage}_%</li>
        <li>🤩 Excited:{excitedPercentage} _%</li>
        <li>😐 Meh: {mehPercentage}_%</li>
      </ul>
    </section>
  );
}

export default MoodStats