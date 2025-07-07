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
  const [imagePreviewUrl, setImagePreviewUrl] = useState('');

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
    setPreview(text);

    const placeholderImage = `https://via.placeholder.com/400x300?text=${encodeURIComponent(category)}`;
    setImagePreviewUrl(placeholderImage);
  };

  return (
    <div className="bg-gradient-to-br from-pink-100 via-white to-purple-100 min-h-screen py-10 px-5 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl max-w-5xl mx-auto p-10 border border-purple-200">
        <h1 className="text-5xl font-extrabold text-center text-purple-700 mb-12">🎨 POD Prompt Generator</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Dropdown label="Product Category" value={category} onChange={setCategory} options={[ 'T-shirt', 'Hoodie', 'Mug', 'Phone Case', 'Tote Bag', 'Poster', 'Canvas Print', 'Wall Art', 'Pillow', 'Notebook / Journal', 'Socks', 'Cap / Hat', 'Stickers', 'Blanket', 'Apron', 'Water Bottle', 'Mouse Pad', 'Baby Onesie', 'Pet Bandana']} />

          <Dropdown label="Theme / Niche" value={theme} onChange={setTheme} options={[ 'Funny quote', 'Inspirational message', 'Zodiac signs', 'Anime / Manga', 'Gaming', 'Pets (dogs, cats, birds)', 'National pride (India, USA, etc.)', 'Spiritual / Mindfulness', 'Sarcastic / Dark humor', 'Fitness / Gym', 'Nature & Hiking', 'Teachers / Nurses / Students', 'Trending memes', 'Pop culture references', 'Abstract art', 'Minimalist design' ]} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Style</label>
            <select className="w-full p-2 border rounded-md" value={style} onChange={(e) => setStyle(e.target.value)}>
              {artStyles.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            <input type="text" placeholder="Or enter custom style" className="w-full p-2 mt-2 border rounded-md" value={customStyle} onChange={(e) => setCustomStyle(e.target.value)} />
          </div>

          <Dropdown label="Target Audience" value={audience} onChange={setAudience} options={[ 'Teenagers', 'Moms', 'Dog lovers', 'Cat dads', 'Gamers', 'Yoga enthusiasts', 'Teachers', 'Entrepreneurs', 'Gym rats', 'Couples', 'New parents', 'Students' ]} />

          <Dropdown label="Color Scheme" value={colors} onChange={setColors} options={[ 'Black & white', 'Bright and colorful', 'Pastel tones', 'Earthy / Nature', 'Neon / Cyber', 'Monochrome', 'Custom palette' ]} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Quote or Text Option</label>
            <select className="w-full p-2 border rounded-md" value={textOption} onChange={(e) => setTextOption(e.target.value)}>
              {textOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
            {textOption === 'Include quote' && (
              <input type="text" placeholder="Enter your quote" className="w-full p-2 mt-2 border rounded-md" value={quote} onChange={(e) => setQuote(e.target.value)} />
            )}
          </div>

          <Dropdown label="Mood / Feeling" value={mood} onChange={setMood} options={moodOptions} />
        </div>

        <div className="text-center mt-10">
          <button onClick={generatePrompt} className="bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105">
            ✨ Generate Prompt
          </button>
        </div>

        {prompt && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-3">Your Generated Prompt</h2>
            <textarea readOnly value={prompt} rows={4} className="w-full p-4 text-base bg-purple-50 border border-purple-300 rounded-md resize-none" />
            <button
              onClick={() => { navigator.clipboard.writeText(prompt); alert('Copied!'); }}
              className="mt-2 text-sm text-purple-600 underline hover:text-purple-800"
            >
              📋 Copy Prompt
            </button>
          </div>
        )}

        {preview && (
          <div className="mt-10 bg-white border border-gray-300 rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">🔍 Prompt Preview</h3>
            <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{preview}</p>
          </div>
        )}

        {imagePreviewUrl && (
          <div className="mt-10 flex justify-center">
            <div className="border border-dashed border-purple-400 p-4 rounded-lg bg-purple-50">
              <h4 className="text-center font-semibold text-purple-700 mb-2">🖼️ Product Preview</h4>
              <img src={imagePreviewUrl} alt="Preview" className="rounded-lg max-w-full h-auto shadow-lg" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Dropdown({ label, value, onChange, options }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">{label}</label>
      <select className="w-full p-2 border rounded-md" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map(opt => <option key={opt}>{opt}</option>)}
      </select>
    </div>
  );
}
