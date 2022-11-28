import React from 'react';
import Context from '../context/Context';
import Button from './Button';
import Decoration from './Decoration';
import Paragraph from './Paragraph';
import RateValueInput from './RateValueInput';
import Title from './Title';

export default function RatingCard() {
  const [loading, setLoading] = React.useState(false);

  const { setRated } = React.useContext(Context);

  const ratingParagraphContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our oferring!';

  const ratingValuesList = [1, 2, 3, 4, 5];

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    setTimeout(() => {
      try {
        setRated(true);
      } catch (error) {
        alert('Something went wrong! Try again in a few minutes.');
        setRated(false);
      } finally {
        setLoading(false);
      }
    }, 400);
  };

  if (loading) {
    return (
      <div className="card-container">
        <div className="spin" />
      </div>
    );
  }

  return (
    <div className="card-container">
      <Decoration isRatingCard />
      <Title title="How did we do?" isRatingCard />
      <Paragraph content={ratingParagraphContent} />
      <form onSubmit={handleSubmit}>
        <div className="rating-container">
          {
            ratingValuesList.map((option) => (<RateValueInput key={option} value={option} />))
          }
        </div>
        <Button />
      </form>

    </div>
  );
}
