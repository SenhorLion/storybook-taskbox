import React from 'react';

export const StoryContainer = ({ title, children }) => {
  return (
    <div style={{ padding: '3rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
      {children}
    </div>
  );
};
