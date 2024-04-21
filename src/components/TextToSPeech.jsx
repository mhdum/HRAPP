import React, { useState } from 'react';
import {Firestore, doc,getDoc} from 'firebase/firestore';
import{getFirestore,collection,addDoc} from 'firebase/firestore';
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);

const getDocument = async () => {  
    const ref  = doc(firestore,'user','34UjFUtBdKwOBvzH5LxJ');
    const snap = await getDoc(ref);
    console.log(snap.data());
}

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const synth = window.speechSynthesis;

      // Get the available voices
      const voices = synth.getVoices();
      const femaleVoice = voices.find((voice) => voice.name.includes('male'));

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = femaleVoice || voices.find((voice) => voice.lang.includes('en'));

      synth.speak(utterance);
    } else {
      alert('Speech synthesis is not supported in this browser.');
    }
    getDocument();
  };

  return (
    <div>
      <textarea value={text} onChange={handleInputChange} />
      <button onClick={speakText}>Speak Text</button>
    </div>
  );
};

export default TextToSpeech;
