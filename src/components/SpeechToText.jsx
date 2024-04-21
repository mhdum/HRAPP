import React, { useEffect, useState } from "react";
import { getFirestore, collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { app } from '../firebaseConfig';

const firestore = getFirestore(app);
const SpeechRecognition =
  window.webkitSpeechRecognition || window.SpeechRecognition;
const recognition = new SpeechRecognition();

const SpeechToText = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [realTimeText, setRealTimeText] = useState("");

  // Sample questions array for testing
  const sampleQuestions = [
    "Tell  me about yourself?",
    "What was your percentage in last semester",
    "What projects have you done?",
    "Why should we hire you?",
    "Do you have any experience-intership for the same role?",
  ];

  useEffect(() => {
    const fetchQuestions = async () => {
      const userRef = doc(firestore, 'user', '34UjFUtBdKwOBvzH5LxJ');
      const snapshot = await getDoc(userRef);

      if (snapshot.exists()) {
        const data = snapshot.data();
        if (data && data.questions) {
          setQuestions(data.questions);
        } else {
          console.log("No questions found in data.");
        }
      } else {
        console.log("Document does not exist.");
      }
    };

    fetchQuestions();
  }, [firestore]);

  useEffect(() => {
    // Your speech recognition code goes here
  }, []);

  const handleMicButtonClick = () => {
    // Your handle mic button click code goes here
  };

  const askQuestion = () => {
    // Speak the current question
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(questions[questionIndex]);
    synth.speak(utterance);
  };

  const addData = async (answer) => {
    // Your add data to Firestore code goes here
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Speech to Text</h1>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <p className="text-xl font-semibold mb-2">Question: {questions[questionIndex]}</p>
        <p className="text-lg">Real-time Text: {realTimeText}</p>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleMicButtonClick}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
    </div>
  );
};

export default SpeechToText;
