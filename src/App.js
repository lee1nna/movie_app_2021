import React from 'react';

function Food({ fav }) {
  // porps.fav 와 {fav} 는 같은 의미
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
  <div>
    <h1>Hello!</h1>
    <Food fav="kimchi" />
    <Food fav="ramen" />
    <Food fav="samgiopsal" />
    <Food fav="chukumi" />
  </div>
  );
}

export default App;
