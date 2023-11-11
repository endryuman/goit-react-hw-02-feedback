import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        justifyContent: 'center',
      }}
    >
      {options.map(option => (
        <button
          style={{
            height: '60px',
            fontSize: 40,
            color: '#ffffff',
            backgroundColor: '#7a48e6',
          }}
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
