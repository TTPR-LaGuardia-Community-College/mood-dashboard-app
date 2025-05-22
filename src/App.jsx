import { useState } from 'react';
import MoodButton from './components/MoodButton';
import MoodStats from './components/MoodStats';

const moods = [
  { emoji: '😊', mood: 'happy' },
  { emoji: '😴', mood: 'tired' },
  { emoji: '🤩', mood: 'excited' },
  { emoji: '😐', mood: 'meh' },
];

function App() {
  const [counts, setCounts] = useState({
    happy: 0,
    tired: 0,
    excited: 0,
    meh: 0,
  });

  function handleVote(mood) {
    setCounts(prev => ({ ...prev, [mood]: prev[mood] + 1 }));
  }

  function handleReset() {
    setCounts({ happy: 0, tired: 0, excited: 0, meh: 0 });
  }

  return (
    <div className="dashboard">
      <h1>Emoji Mood Dashboard</h1>
      <div className="buttons">
        {moods.map(({ emoji, mood }) => (
          <MoodButton
            key={mood}
            emoji={emoji}
            mood={mood}
            onVote={handleVote}
          />
        ))}
      </div>
      <MoodStats counts={counts} />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App