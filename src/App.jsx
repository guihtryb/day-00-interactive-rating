import React from 'react';
import RatingCard from './components/RatingCard';
import ThankYouCard from './components/ThankYouCard';
import './styles/App.css';

function App() {
  const [rated] = React.useState(false);

  return (
    <div className="app">
      { rated ? <ThankYouCard /> : <RatingCard />}
    </div>
  );
}

export default App;
