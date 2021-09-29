import React from 'react';
import withData from './withData';

const Posts = ({ title, data }) => {
  return (
    <div>
      <h2>{title}</h2>
      {data.map((post) => (
        <div key={post.id}>
          <span style={{ backgroundColor: '#e5ea55' }}>Title: </span>
          <div>{post.title}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default withData(Posts, 'https://jsonplaceholder.typicode.com/posts');
