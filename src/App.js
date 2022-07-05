import './App.css';
import Terms from './components/Terms';
import Dialog from './components/Dialog';
import { Button } from 'semantic-ui-react';
import { useState } from 'react';

function App() {

  const [showTerms, setshowTerms] = useState(false);
  const [showPrivacy, setshowPrivacy] = useState(false);

  const toggleShowTerms = () => {
    setshowTerms(!showTerms);
  }
  const toggleShowPrivacy = () => {
    setshowPrivacy(!showPrivacy);
  }

  return (
    <div className="App">

      <Button onClick={toggleShowTerms}>Show Terms and Conditions</Button>
      <Button onClick={toggleShowPrivacy}>Show Privacy Policy</Button>
      {showTerms &&
        <Terms isTerms={showTerms ? true:false} onClick={toggleShowTerms}/>
      }
    </div>
  );
}

export default App;
