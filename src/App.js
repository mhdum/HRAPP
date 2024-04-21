import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import VideoPlayer from './components/VideoPlayer';
import HrTExt from './components/HrTExt';
import UserText from './components/UserText';
import SpeechToText from './components/SpeechToText';
import TextToSpeech from './components/TextToSPeech';

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <VideoPlayer />
      {/* <HrTExt />
      <UserText /> */}
      <SpeechToText />
      {/* <TextToSpeech /> */}
    </div>
  );
}

export default App;
