import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Jumbotron />
      <div className='wrapper'>
        <Card
          img='https://i.etsystatic.com/19255708/r/il/0b24d0/3185756781/il_794xN.3185756781_i8fz.jpg'
          title='The Fellowship of the Ring'
          description="This the first book of the series starting the story of the Fellowship's journey to Mount Doom."
         />
         <Card
          img='https://cdn3.whatculture.com/images/2018/04/eec6aca3b4b3ceae-600x338.jpg'
          title='The Two Towers'
          description="This the second book of the series starting the story of the Fellowship's journey to Mount Doom."
         />
         <Card
          img='https://qph.cf2.quoracdn.net/main-qimg-c1f7d71b4349a2d3e645807a2c9da1d5-lq'
          title='The Return of the King'
          description="This the first book of the series starting the story of the Fellowship's journey to Mount Doom."
         />
      </div>
    </div>
  )
}
export default App;
