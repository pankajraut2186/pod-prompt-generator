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
  const adjectives = ['whimsical', 'gritty', 'elegant', 'dynamic', 'abstract', 'photorealistic', 'grunge', 'playful'];
  const settings = ['urban backdrop', 'forest scene', 'sunset beach', 'space galaxy', 'neon cityscape', 'dreamy clouds'];
  const directives = ['use fine lines', 'emphasize symmetry', 'add subtle texture', 'focus on central composition', 'enhance shadows', 'highlight bold shapes'];
  const emojis = ['🎨', '🔥', '🌈', '✨', '🧠', '🛍️', '💥', '💡'];

  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const setting = settings[Math.floor(Math.random() * settings.length)];
  const directive = directives[Math.floor(Math.random() * directives.length)];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const text = `Design a ${style} and ${adj} artwork in a ${setting}, inspired by ${niche} for a ${category} product. Use ${colors} colors with a ${vibe} tone. ${directive}. Include the text: "${quote || 'No text'}" ${emoji}`;
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
