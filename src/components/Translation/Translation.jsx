import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const DeeplTranslationComponent = () => {
  // State to store input and translated text
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // DeepL API Key and base URL
  const apiKey = "6f2177e6-8c5a-4294-97ec-eac6481985bf:fx";
  const deeplApiUrl = "https://api-free.deepl.com/v2/translate"; // Use api-free for free account, api.deepl.com for Pro account

  // Function to handle translation request
  const handleTranslate = async () => {
    setLoading(true);
    setError(null);
    setTranslatedText("");

    try {
      const response = await axios.post(
        deeplApiUrl,
        new URLSearchParams({
          auth_key: apiKey,
          text: inputText,
          source_lang: "EN", // 'EN' for English as the source language
          target_lang: "UK", // 'UK' for Ukrainian as the target language
        })
      );

      const translation = response.data.translations[0].text;
      setTranslatedText(translation);
    } catch (error) {
      setError("Translation failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="translateContainer">
      <h3>DeepL Translator</h3>
      <textarea
        placeholder="Enter text to translate"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="textArea"
      />
      <button onClick={handleTranslate} disabled={loading}>
        {loading ? "Translating..." : "Translate"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {translatedText && (
        <div>
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default DeeplTranslationComponent;
