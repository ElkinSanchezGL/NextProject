import React from 'react';

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => (console.log('Status:', res.status), res.json()))
  .then(data => console.log('Data:', data))
  .catch(err => console.error('Error:', err));

export default function Index() {
  return <div>index</div>;
}
