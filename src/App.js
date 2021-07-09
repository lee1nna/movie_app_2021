import React from 'react';
import PropTypes from "prop-types";

function Food({ name , picture, rating }) {
  // porps.fav 와 {fav} 는 같은 의미
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/ 5</h4>
    <img src={picture} alt={name}/>
  </div>
}

const foodILike = [
{
  id: 1,
  name : "kimchi",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcontents.sixshop.com%2FuploadedFiles%2F72878%2Fproduct%2Fimage_1540176020065.jpg&f=1&nofb=1",
  rating : 5
},
{
  id: 2,
  name : "Bibimbap",
  image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ffoodmoa.co.kr%2Fdata%2Ffile%2Ffood%2F1401%2Ftvmz_BRT0046117_1_Ka73AVA5f5UAc.jpg&f=1&nofb=1",
  rating : 5
},
{
  id:3,
  name : "Doncasu",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpds.joins.com%2Fnews%2Fcomponent%2Fhtmlphoto_mmdata%2F201508%2F05%2Fhtm_20150805071153241.jpg&f=1&nofb=1",
  rating : 5
},
{
  id: 4,
  name : "Kimbap",
  image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frecipe1.ezmember.co.kr%2Fcache%2Frecipe%2F2016%2F09%2F21%2F62559dfc7df35f282cfa9ef8ceb8a2331.jpg&f=1&nofb=1",
  rating : 5
},
{
  id: 5,
  name : "Samgyepsal",
  image : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.news.zumst.com%2Fimages%2F2%2F2017%2F02%2F26%2F2030c76e427f4c278c16ab0eb81bd45d.jpg&f=1&nofb=1",
  rating : 5
}
];

Food.PropTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
  <div>
    {
      foodILike.map((dish => <Food key={dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>))
    }
  </div>
  );
}

export default App;
