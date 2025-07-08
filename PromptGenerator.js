import React, { useState } from 'react';

export default function PromptGenerator() {
  const [category, setCategory] = useState('T-Shirt');
  const [niche, setNiche] = useState('Fitness');
  const [style, setStyle] = useState('Vintage');
  const [vibe, setVibe] = useState('Bold');
  const [colors, setColors] = useState('Pastel');
  const [quote, setQuote] = useState('');
  const [prompt, setPrompt] = useState('');

  const generatePrompt = () => {
    const text = `Create a ${style} design featuring ${niche}-themed art in a ${vibe} setting, intended for ${category} products. Use a ${colors} color palette. Text: \"${quote}\".`;
    setPrompt(text);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🛍️ POD Prompt Generator</h1>
      <div style={{ maxWidth: '600px' }}>
        <label>Category:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {['T-Shirt', 'Mug', 'Hoodie', 'Sticker', 'Phone Case', 'Poster', 'Canvas', 'Notebook', 'Tote Bag'].map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <br /><label>Niche:</label>
        <select value={niche} onChange={(e) => setNiche(e.target.value)}>
          {['Fitness', 'Cats', 'Motivation', 'Gaming', 'Spiritual', 'Funny Quotes', 'LGBTQ+', 'Anime'].map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <br /><label>Style:</label>
        <select value={style} onChange={(e) => setStyle(e.target.value)}>
          {['Vintage', 'Watercolor', 'Cyberpunk', 'Minimalist', 'Cartoon', 'Realistic'].map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <br /><label>Vibe:</label>
        <select value={vibe} onChange={(e) => setVibe(e.target.value)}>
          {['Bold', 'Cute', 'Cool', 'Dark', 'Calm', 'Empowering'].map(opt => <option key={opt}>{opt}</option>)}
        </select>
        <br /><label>Color Palette:</label>
        <input type="text" value={colors} onChange={(e) => setColors(e.target.value)} />
        <br /><label>Optional Quote:</label>
        <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} />
        <br /><button onClick={generatePrompt}>🎨 Generate Prompt</button>
        {prompt && (
          <div style={{ marginTop: '20px' }}>
            <h2>🎯 Your POD Prompt:</h2>
            <textarea value={prompt} readOnly rows={4} style={{ width: '100%' }} />
            <br />
            <button onClick={() => { navigator.clipboard.writeText(prompt); alert('Copied!'); }}>📋 Copy Prompt</button>
          </div>
        )}
      </div>
    </div>
  );
}