import React, { useState } from 'react';
import './index.css';

export default function PromptGenerator() {
  const [category, setCategory] = useState('T-Shirt');
  const [niche, setNiche] = useState('Fitness');
  const [style, setStyle] = useState('Vintage');
  const [customStyle, setCustomStyle] = useState('');
  const [vibe, setVibe] = useState('Bold');
  const [colors, setColors] = useState('Pastel');
  const [quote, setQuote] = useState('');
  const [prompt, setPrompt] = useState('');

  const adjectives = ['whimsical', 'gritty', 'elegant', 'dynamic', 'abstract', 'photorealistic', 'grunge', 'playful'];
  const settings = ['urban backdrop', 'forest scene', 'sunset beach', 'space galaxy', 'neon cityscape', 'dreamy clouds'];
  const directives = ['use fine lines', 'emphasize symmetry', 'add subtle texture', 'focus on central composition', 'enhance shadows', 'highlight bold shapes'];
  const emojis = ['🎨', '🔥', '🌈', '✨', '🧠', '🛍️', '💥', '💡'];

  const artStyles = [
    'Vintage', 'Watercolor', 'Cyberpunk', 'Minimalist', 'Cartoon', 'Realistic', 'Anime', 'Retro 90s',
    'Pop Art', 'Psychedelic', 'Steampunk', 'Gothic', 'Line Art', 'Doodle Art', 'Geometric', 'Kawaii',
    'Surrealism', 'Typography Art', 'Stencil', 'Ink Sketch', '3D Render', 'Boho Style', 'Y2K Aesthetic'
  ];

  const generatePrompt = () => {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    const directive = directives[Math.floor(Math.random() * directives.length)];
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const finalStyle = customStyle || style;

    const text = `Design a ${finalStyle} and ${adj} artwork in a ${setting}, inspired by ${niche} for a ${category} product. Use ${colors} colors with a ${vibe} tone. ${directive}. Include the text: "${quote || 'No text'}" ${emoji}`;
    setPrompt(text);
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 min-h-screen p-6 flex flex-col items-center font-sans">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">🎨 POD Prompt Generator</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <select className="w-full p-2 rounded border" value={category} onChange={(e) => setCategory(e.target.value)}>
              {['T-Shirt', 'Mug', 'Hoodie', 'Sticker', 'Phone Case', 'Poster', 'Canvas', 'Notebook', 'Tote Bag'].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Niche</label>
            <select className="w-full p-2 rounded border" value={niche} onChange={(e) => setNiche(e.target.value)}>
              {['Fitness', 'Cats', 'Motivation', 'Gaming', 'Spiritual', 'Funny Quotes', 'LGBTQ+', 'Anime'].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Style</label>
            <select className="w-full p-2 rounded border" value={style} onChange={(e) => setStyle(e.target.value)}>
              {artStyles.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            <input type="text" placeholder="Or enter custom style" className="w-full p-2 mt-2 rounded border" value={customStyle} onChange={(e) => setCustomStyle(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Vibe</label>
            <select className="w-full p-2 rounded border" value={vibe} onChange={(e) => setVibe(e.target.value)}>
              {['Bold', 'Cute', 'Cool', 'Dark', 'Calm', 'Empowering'].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Color Palette</label>
            <input type="text" className="w-full p-2 rounded border" value={colors} onChange={(e) => setColors(e.target.value)} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Optional Quote</label>
            <input type="text" className="w-full p-2 rounded border" value={quote} onChange={(e) => setQuote(e.target.value)} />
          </div>
        </div>
        <div className="text-center mt-6">
          <button onClick={generatePrompt} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-xl shadow-lg transition-all">
            ✨ Generate Prompt
          </button>
        </div>
        {prompt && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-purple-800">Your Generated Prompt</h2>
            <textarea readOnly value={prompt} rows={4} className="w-full p-3 mt-2 rounded border resize-none bg-purple-50" />
            <button
              onClick={() => { navigator.clipboard.writeText(prompt); alert('Copied!'); }}
              className="mt-2 text-sm text-purple-700 underline hover:text-purple-900"
            >
              📋 Copy Prompt
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
