import React from 'react';
import Button from './Button';
import Decoration from './Decoration';
import Paragraph from './Paragraph';
import RateNumber from './RateNumber';
import Title from './Title';

export default function RatingCard() {
  const ratingParagraphContent = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our oferring!';

  const ratingOptionsList = [1, 2, 3, 4, 5];

  return (
    <div className="card-container">
      <Decoration isRatingCard />
      <Title title="How did we go?" />
      <Paragraph content={ratingParagraphContent} />
      <form onSubmit={(e) => e.preventDefault()}>
        {
        ratingOptionsList.map((option) => (<RateNumber value={option} />))
      }
        <Button />
      </form>

    </div>
  );
}
