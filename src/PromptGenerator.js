import React, { useState } from 'react';
import './index.css';

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
};


export default PromptGenerator;
