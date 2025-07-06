
import React, { useState } from 'react';
import './App.css';

export default function PromptGenerator() {
  const [category, setCategory] = useState('T-shirt');
  const [theme, setTheme] = useState('Funny quote');
  const [style, setStyle] = useState('Vintage');
  const [customStyle, setCustomStyle] = useState('');
  const [audience, setAudience] = useState('Teenagers');
  const [colors, setColors] = useState('Black & white');
  const [quote, setQuote] = useState('');
  const [textOption, setTextOption] = useState('Include quote');
  const [mood, setMood] = useState('Funny');
  const [prompt, setPrompt] = useState('');
  const [preview, setPreview] = useState('');

  const emojis = ['🎨', '🔥', '🌈', '✨', '🧠', '🛍️', '💥', '💡'];
  const artStyles = [
    'Vintage', 'Retro', 'Hand-drawn', 'Typography', 'Minimalist', 'Watercolor', 'Grunge', 'Cute / Kawaii',
    'Gothic', 'Comic book', 'Cyberpunk', 'Flat Illustration', 'Realistic', 'Line art'
  ];
  const textOptions = [
    'Include quote',
    'No text, visual only',
    'Add space for editable name / custom text'
  ];
  const moodOptions = [
    'Funny', 'Bold & Empowering', 'Calm & Peaceful', 'Dark & Edgy', 'Elegant', 'Playful', 'Mysterious', 'Energetic', 'Romantic'
  ];

  const generatePrompt = () => {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const finalStyle = customStyle || style;

    let textPart = '';
    if (textOption === 'Include quote') {
      textPart = \`Include the text: "\${quote || 'Your quote here'}".\`;
    } else if (textOption === 'Add space for editable name / custom text') {
      textPart = 'Leave space for customizable text or name.';
    } else {
      textPart = 'No text, visual only.';
    }

    const text = \`Design a \${finalStyle} artwork for a \${category} themed around \${theme}. Target audience: \${audience}. Use \${colors} colors with a \${mood} mood. \${textPart} \${emoji}\`;
    setPrompt(text);
    setPreview(text);
  };

  return (
    <div className="app">
      <h1>POD Prompt Generator</h1>
      <button onClick={generatePrompt}>Generate Prompt</button>
      {prompt && <div><h2>Prompt:</h2><p>{prompt}</p></div>}
    </div>
  );
}
