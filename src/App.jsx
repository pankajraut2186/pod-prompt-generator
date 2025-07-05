import { useState } from 'react';

export default function App() {
  const [category, setCategory] = useState('T-Shirt');
  const [niche, setNiche] = useState('Fitness');
  const [style, setStyle] = useState('Vintage');
  const [vibe, setVibe] = useState('Bold');
  const [colors, setColors] = useState('Pastel');
  const [quote, setQuote] = useState('');
  const [prompt, setPrompt] = useState('');

  const generatePrompt = () => {
    const text = `Create a ${style} design featuring ${niche}-themed art in a ${vibe} setting, intended for ${category} products. Use a ${colors} color palette. Text: "${quote}".`;
    setPrompt(text);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">🛍️ POD Prompt Generator</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 rounded border">
          {['T-Shirt', 'Mug', 'Hoodie', 'Sticker', 'Phone Case', 'Poster', 'Canvas', 'Notebook', 'Tote Bag'].map(opt => <option key={opt}>{opt}</option>)}
        </select>

        <select value={niche} onChange={(e) => setNiche(e.target.value)} className="p-2 rounded border">
          {['Fitness', 'Cats', 'Motivation', 'Gaming', 'Spiritual', 'Funny Quotes', 'LGBTQ+', 'Anime'].map(opt => <option key={opt}>{opt}</option>)}
        </select>

        <select value={style} onChange={(e) => setStyle(e.target.value)} className="p-2 rounded border">
          {['Vintage', 'Watercolor', 'Cyberpunk', 'Minimalist', 'Cartoon', 'Realistic'].map(opt => <option key={opt}>{opt}</option>)}
        </select>

        <select value={vibe} onChange={(e) => setVibe(e.target.value)} className="p-2 rounded border">
          {['Bold', 'Cute', 'Cool', 'Dark', 'Calm', 'Empowering'].map(opt => <option key={opt}>{opt}</option>)}
        </select>

        <input type="text" value={colors} onChange={(e) => setColors(e.target.value)} placeholder="Color Palette (e.g. Pastel)" className="p-2 rounded border col-span-1 md:col-span-2" />

        <input type="text" value={quote} onChange={(e) => setQuote(e.target.value)} placeholder="Optional Text or Quote" className="p-2 rounded border col-span-1 md:col-span-2" />
      </div>

      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded" onClick={generatePrompt}>🎨 Generate Prompt</button>

      {prompt && (
        <div className="mt-6 w-full max-w-3xl p-4 bg-white rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🎯 Your POD Prompt:</h2>
          <textarea value={prompt} readOnly rows={4} className="w-full p-2 border rounded bg-white" />
          <button
            onClick={() => {
              navigator.clipboard.writeText(prompt);
              alert('Prompt copied to clipboard!');
            }}
            className="mt-2 bg-green-500 text-white px-4 py-1 rounded"
          >📋 Copy Prompt</button>
        </div>
      )}
    </div>
  );
}
