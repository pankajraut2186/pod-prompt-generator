import React, { useState } from 'react';
import './index.css';

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
      textPart = `Include the text: "${quote || 'Your quote here'}".`;
    } else if (textOption === 'Add space for editable name / custom text') {
      textPart = 'Leave space for customizable text or name.';
    } else {
      textPart = 'No text, visual only.';
    }

    const text = `Design a ${finalStyle} artwork for a ${category} themed around ${theme}. Target audience: ${audience}. Use ${colors} colors with a ${mood} mood. ${textPart} ${emoji}`;
    setPrompt(text);
  };

  return (
    <div className="bg-gradient-to-r from-purple-200 via-pink-100 to-yellow-200 min-h-screen p-6 flex flex-col items-center font-sans">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-3xl animate-fade-in">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-4">🎨 POD Prompt Generator</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Product Category</label>
            <select className="w-full p-2 rounded border" value={category} onChange={(e) => setCategory(e.target.value)}>
              {[ 'T-shirt', 'Hoodie', 'Mug', 'Phone Case', 'Tote Bag', 'Poster', 'Canvas Print', 'Wall Art', 'Pillow', 'Notebook / Journal', 'Socks', 'Cap / Hat', 'Stickers', 'Blanket', 'Apron', 'Water Bottle', 'Mouse Pad', 'Baby Onesie', 'Pet Bandana'].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Theme / Niche</label>
            <select className="w-full p-2 rounded border" value={theme} onChange={(e) => setTheme(e.target.value)}>
              {[ 'Funny quote', 'Inspirational message', 'Zodiac signs', 'Anime / Manga', 'Gaming', 'Pets (dogs, cats, birds)', 'National pride (India, USA, etc.)', 'Spiritual / Mindfulness', 'Sarcastic / Dark humor', 'Fitness / Gym', 'Nature & Hiking', 'Teachers / Nurses / Students', 'Trending memes', 'Pop culture references', 'Abstract art', 'Minimalist design' ].map(opt => <option key={opt}>{opt}</option>)}
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
            <label className="block text-sm font-medium text-gray-600">Target Audience</label>
            <select className="w-full p-2 rounded border" value={audience} onChange={(e) => setAudience(e.target.value)}>
              {[ 'Teenagers', 'Moms', 'Dog lovers', 'Cat dads', 'Gamers', 'Yoga enthusiasts', 'Teachers', 'Entrepreneurs', 'Gym rats', 'Couples', 'New parents', 'Students' ].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Color Scheme</label>
            <select className="w-full p-2 rounded border" value={colors} onChange={(e) => setColors(e.target.value)}>
              {[ 'Black & white', 'Bright and colorful', 'Pastel tones', 'Earthy / Nature', 'Neon / Cyber', 'Monochrome', 'Custom palette' ].map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Quote or Text Option</label>
            <select className="w-full p-2 rounded border" value={textOption} onChange={(e) => setTextOption(e.target.value)}>
              {textOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            {textOption === 'Include quote' && (
              <input type="text" placeholder="Enter your quote" className="w-full p-2 mt-2 rounded border" value={quote} onChange={(e) => setQuote(e.target.value)} />
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Mood / Feeling</label>
            <select className="w-full p-2 rounded border" value={mood} onChange={(e) => setMood(e.target.value)}>
              {moodOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
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