import React from 'react';

export const StoryLayoutContainer = ({ children }) => {
  return <div style={{ padding: '3rem' }}>{children}</div>;
};

export const StoryContainer = ({ title, children }) => {
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
      {children}
    </div>
  );
};
