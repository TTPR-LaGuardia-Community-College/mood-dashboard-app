export default function MoodStats({ counts }) {
  const total = Object.values(counts).reduce((acc, val) => acc + val, 0);

  return (
    <section>
      <h2>Mood Stats</h2>
      {total === 0 ? (
        <p>No moods yet!</p>
      ) : (
        <ul>
          {Object.entries(counts).map(([mood, count]) => (
            <li key={mood}>
              {mood}: {count} ({((count / total) * 100).toFixed(1)}%)
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
