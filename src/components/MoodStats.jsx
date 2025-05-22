function MoodStats({ counts }) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0);

  function getPercent(n) {
    return total === 0 ? 0 : Math.round((n / total) * 100);
  }

  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {getPercent(counts.happy)}%</li>
        <li>😴 Tired: {getPercent(counts.tired)}%</li>
        <li>🤩 Excited: {getPercent(counts.excited)}%</li>
        <li>😐 Meh: {getPercent(counts.meh)}%</li>
      </ul>
    </section>
  );
}

export default MoodStats