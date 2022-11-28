import React from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';
import Context from './context/Context';
import './styles/App.css';

function App() {
  const { rated } = React.useContext(Context);

  return (
    <div className="app">
      { rated ? <ThankYouCard /> : <RatingCard />}
    </div>
  );
}

export default App;
