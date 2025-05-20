function MoodStats({ counts }) {
  const total = counts.happy + counts.tired + counts.excited + counts.meh;

  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {total === 0 ? '0%' : ((counts.happy / total) * 100).toFixed(1) + '%'}</li>
        <li>😴 Tired: {total === 0 ? '0%' : ((counts.tired / total) * 100).toFixed(1) + '%'}</li>
        <li>🤩 Excited: {total === 0 ? '0%' : ((counts.excited / total) * 100).toFixed(1) + '%'}</li>
        <li>😐 Meh: {total === 0 ? '0%' : ((counts.meh / total) * 100).toFixed(1) + '%'}</li>
      </ul>
    </section>
  );
}

export default MoodStats