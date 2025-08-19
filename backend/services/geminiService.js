const axios = require('axios');

const generatePoem = async (title) => {
  const response = await axios.post(
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
    {
      contents: [
        {
          parts: [{ text: `Escribe un poema original titulado: "${title}"` }]
        }
      ]
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-goog-api-key': process.env.GEMINI_API_KEY
      }
    }
  );

  return response.data.candidates[0]?.content?.parts[0]?.text || 'No se generó poema';
};

module.exports = { generatePoem };
