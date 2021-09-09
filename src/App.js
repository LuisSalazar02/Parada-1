import React, {Component} from "react";
import './App.css';
import audio from "./audios/august.mp3";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import image from "./imagenes/couple1.jpeg";

var flag = false;

 class App extends Component {

  render(){
    return(
      <div className="App">
          <audio id="song" loop>
            <source src={audio} type="audio/mpeg"></source>
          </audio>
          <div class = "head">
            <h1>🎉 Feliz Mesiversario 🎉</h1>
            <p class = "poema">Almost before we knew it, we had left the ground.</p>
            <h2>🎼 Presiona la imagen 🎼</h2>
          </div>
          <div class = "container">
            <img src={image}></img>
            <div class = "heart" id = "icon">
                <FontAwesomeIcon icon="heart" color="red"/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
