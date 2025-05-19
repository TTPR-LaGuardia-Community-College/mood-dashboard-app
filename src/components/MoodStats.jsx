function MoodStats({ counts }) {
  //calculate total votes
  const totalVotes = Object.values(counts).reduce((sum, count) => sum + count, 0);

  return (
    <div>
      <h2>Mood Stats</h2>
      <table>
        <thead>
          <tr>
            <th>Mood</th>
            <th>Votes</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(counts).map(([mood, count]) => (
            <tr key={mood}>
              <td>{mood}</td>
              <td>{count}</td>
              <td>{totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(2) + '%' : '0%'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MoodStats;






