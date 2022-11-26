import React from 'react';
import Decoration from './Decoration';
import Paragraph from './Paragraph';
import Title from './Title';

export default function ThankYouCard() {
  const thankYouParagraphContent = 'We appreciate you taking the time to give a rating. If you ever need more support, don`t hesitate to get in touch!';

  return (
    <div className="card-container">
      <Decoration />
      <Title title="Thank you!" />
      <Paragraph content={thankYouParagraphContent} />
    </div>
  );
}
