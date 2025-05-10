function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  const total = counts.happy + counts.tired + counts.excited + counts.meh;

 
function getPercentage (mood){
    if(total === 0) {return `0.00`;}
    else{
      const origin = (mood / total) * 100;
      return origin.toFixed(2);
    }
  }
     
  return (
    <section className="stats">
      <h2>Total votes: {total}</h2>
      <ul>
        <li>😊 Happy: {getPercentage(counts.happy)}%</li>
        <li>😴 Tired: {getPercentage(counts.tired)}%</li>
        <li>🤩 Excited: {getPercentage(counts.excited)}%</li>
        <li>😐 Meh: {getPercentage(counts.meh)}%</li>
      </ul>
    </section>
  );
}

export default MoodStats