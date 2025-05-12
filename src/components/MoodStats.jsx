function MoodStats({ counts=0 }) {

  const totalVotes = Object.values(counts).reduce((sum, num) => sum + num, 0);
  const moods = [
    { emoji: '😊', mood: 'happy' },
    { emoji: '😴', mood: 'tired' },
    { emoji: '🤩', mood: 'excited' },
    { emoji: '😐', mood: 'meh' },
  ];

  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  return (
    <section className="stats">
      <h2>Total votes: _</h2>
      <ul>
        {moods.map(({ emoji, mood }) => {
          const count = counts[mood];
          const percent = totalVotes === 0 ? 0 : Math.round((count / totalVotes) * 100);
          return (
            <li key={mood}>
              {emoji} {mood.charAt(0).toUpperCase() + mood.slice(1)}: {percent}%
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default MoodStats