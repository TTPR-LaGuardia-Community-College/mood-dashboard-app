function MoodButton({ emoji, mood, onVote }) {
  return (
    <button
      className="mood-btn"
      onClick={() => onVote(mood)}
      aria-label={`Vote ${mood}`}
    >
      <span role="img" aria-hidden="true">
        {emoji}
      </span>
    </button>
  );
}

export default MoodButton
