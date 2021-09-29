import React from 'react';
import withData from './withData';

const Comments = ({ title, data }) => {
  console.log(title);
  return (
    <div>
      <h2>{title}</h2>
      {data.map((comment) => (
        <div key={comment.id}>
          <span style={{ backgroundColor: '#55ead1' }}>Comment: </span>
          <div>{comment.body.slice(0, 50)}...</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default withData(
  Comments,
  'https://jsonplaceholder.typicode.com/comments'
);
