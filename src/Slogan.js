import React from 'react';

export default function Slogan({ slogans }) {
  return (
    <div className='slogan'>
      {/* this component takes in a slogan as a prop. Render it out here however you like */}
      <li>
        {slogans}
      </li>
    </div>
  );
}
