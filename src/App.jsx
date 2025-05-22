import { useState } from 'react';
import MoodButton from './components/MoodButton';
import MoodStats from './components/MoodStats';
import LeaderFact from './components/LeaderFact';
import facts from './data/facts';
import './App.css';

const moods = [
{ emoji: '😊', mood: 'happy' },
{ emoji: '😴', mood: 'tired' },
{ emoji: '🤩', mood: 'excited' },
{ emoji: '😐', mood: 'meh' },
];

function App() {
// 1. State object holding a vote-count for each mood
const [counts, setCounts] = useState({
  happy: 0,
  tired: 0,
  excited: 0,
  meh: 0,
});

// 2. Update state immutably
function handleVote(mood) {
  setCounts(prev => ({
    ...prev,
    [mood]: prev[mood] + 1
  }));
}

// 3. Compute the current leader (mood with highest vote count)
const maxVotes = Math.max(...Object.values(counts));
const leader = maxVotes > 0
  ? Object.keys(counts).find(mood => counts[mood] === maxVotes)
  : null;

return (
  <div className="dashboard">
    <h1>Emoji Mood Dashboard</h1>

    {/* 4. Render one button per mood */}
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

    {/* 5. Pass state to MoodStats */}
    <MoodStats counts={counts} />

    {/* 6. Display a random fact about the leader mood */}
    {leader && <LeaderFact leader={leader} facts={facts} />}
  </div>
);
}

export default App;
