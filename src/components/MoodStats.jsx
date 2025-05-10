function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  let total = 0;
  Object.values(counts).forEach((value) => total += value);
  
  let happy = 0, tired = 0, excited = 0, meh = 0;

  if(total !== 0) {
    happy = ((counts["happy"]/total) * 100).toFixed(2);
    tired = ((counts["tired"]/total) * 100).toFixed(2);
    excited = ((counts["excited"]/total) * 100).toFixed(2);
    meh = ((counts["meh"]/total) * 100).toFixed(2);
  }

  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {happy}%</li>
        <li>😴 Tired: {tired}%</li>
        <li>🤩 Excited: {excited}%</li>
        <li>😐 Meh: {meh}%</li>
      </ul>
    </section>
  );
}

export default MoodStats
