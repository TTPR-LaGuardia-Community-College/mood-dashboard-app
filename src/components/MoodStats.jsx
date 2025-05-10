function MoodStats({ counts=0 }) {
  // Used to calculate mood percentages
  let total = 0;
  Object.values(counts).forEach((value) => total += value);

  // Calculate mood percentages
  const happy = (counts["happy"]/total) * 100;
  const tired = (counts["tired"]/total) * 100;
  const excited = (counts["excited"]/total) * 100;
  const meh = (counts["meh"]/total) * 100;

  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {Number.isNaN(happy) ? 0 : happy.toFixed(0)}%</li>
        <li>😴 Tired: {Number.isNaN(tired) ? 0 : tired.toFixed(0)}%</li>
        <li>🤩 Excited: {Number.isNaN(excited) ? 0 : excited.toFixed(0)}%</li>
        <li>😐 Meh: {Number.isNaN(meh) ? 0 : excited.toFixed(0)}%</li>
      </ul>
    </section>
  );
}

export default MoodStats
