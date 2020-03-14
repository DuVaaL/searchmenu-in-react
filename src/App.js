import React, { Component } from 'react';
import './css/style.css';
import Game from './Components/Game';
import dataGames from './Components/data';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      input: '',
    }
  }
  
  handleInput = (event) => {
    this.setState({
      input: event.target.value
    })
      }
      
  render(){ 
    let name = [];   
    let year = [];

        Object.keys(dataGames).forEach(key => {
          name.push(dataGames[key].name);
            year.push(dataGames[key].year);
        })
        // console.log(name);
        // console.log(year);

        let newName = name.filter((game) => {
          return game.toLowerCase().indexOf(this.state.input) !== -1;
        });

        let findGame = newName.map( (game, index) => {
          return <Game key={index} name={game} title={name[index]} year={year[index]} />
        })
        

   

    // let games = dataGames.map( (game, index) => {
    //         return(
    //       <Game key={index} name={game.name} year={game.year}  />
    //       )
    //    
    // } )
    
    return(
      <div className="container">
          <div className="input-container">
              <label htmlFor="game">Rechercher un Jeu :</label>
              <input onKeyUp={this.handleInput} type="text"  />
          </div>

          <div className="games-container">
          {findGame}
          </div>
      </div>
    );
  }
}

export default App;


