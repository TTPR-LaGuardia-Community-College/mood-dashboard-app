function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
  const totalVotes = counts.happy + counts.tired + counts.excited + counts.meh;

     
  return (
    <section className="stats">
      <h2>Total votes: {(totalVotes)}</h2>
      <ul>
        <li>😊 Happy: {((counts.happy/totalVotes)*100).toPrecision(2)}%</li>
        <li>😴 Tired: {((counts.tired/totalVotes)*100).toPrecision(2)}%</li>
        <li>🤩 Excited: {((counts.excited/totalVotes)*100).toPrecision(2)}%</li>
        <li>😐 Meh: {((counts.meh/totalVotes)*100).toPrecision(2)}%</li>
      </ul>  
    


      

    </section>
  );
}

export default MoodStats