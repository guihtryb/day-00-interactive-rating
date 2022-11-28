/* eslint-disable no-alert */
import React from 'react';
import Context from '../context/Context';
import Decoration from './Decoration';
import Form from './Form';
import Loading from './Loading';
import Paragraph from './Paragraph';
import Title from './Title';

export default function RatingCard() {
  const [loading, setLoading] = React.useState(false);

  const { setRated } = React.useContext(Context);

  const ratingParagraphContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our oferring!';

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      try {
        setRated(true);
      } catch (error) {
        alert('Something went wrong! Try again in a few minutes.');
        setRated(false);
      } finally {
        setLoading(false);
      }
    }, 200);
  };

  if (loading) return (<Loading />);

  return (
    <div className="card-container">
      <Decoration isRatingCard />
      <Title title="How did we do?" isRatingCard />
      <Paragraph content={ratingParagraphContent} isRatingCard />
      <Form handleSubmit={handleSubmit} />
    </div>
  );
}
