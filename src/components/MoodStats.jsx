 function MoodStats({ counts = {} }) {
  const { happy = 0, tired = 0, excited = 0, meh = 0 } = counts;

  const total = happy + tired + excited + meh;

  const toPercent = (count) =>
    total === 0 ? "0%" : `${((count / total) * 100).toFixed(1)}%`;

  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {toPercent(happy)}</li>
        <li>😴 Tired: {toPercent(tired)}</li>
        <li>🤩 Excited: {toPercent(excited)}</li>
        <li>😐 Meh: {toPercent(meh)}</li>
      </ul>
    </section>
  );
}

export default MoodStats;
