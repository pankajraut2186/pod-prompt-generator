import React, { useState } from 'react';
import './index.css';

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState('');

  const generatePrompt = () => {
    setPrompt('Generated prompt based on selected options...');
  };

  return (
    <div className="container">
      <h1>POD Prompt Generator</h1>
      <button onClick={generatePrompt}>Generate Prompt</button>
      <div className="preview-panel">
        <h3>Generated Prompt</h3>
        <p>{prompt}</p>
      </div>
    </div>
  );
};

export default PromptGenerator;