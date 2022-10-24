import React from 'react';
import RatingCard from './cards/RatingCard';
import ThankYouCard from './cards/ThankYouCard';
import './styles/App.css';

function App() {
  const [rated] = React.useState(false);

  return (
    <div className="app">
      { !rated ? <RatingCard /> : <ThankYouCard />}
    </div>
  );
}

export default App;
