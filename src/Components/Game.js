import React from 'react';
import Anthem from '../assets/anthem.jpg';
import Away from '../assets/a-way-out-key.jpg';
import ApexLegends from '../assets/apex-legends.jpg';
import Battlefront from '../assets/battle-front.jpg';
import Battlefield from '../assets/battlefield-hardline.jpg';
import CommandConquer from '../assets/command-and-conquer.jpg';
import Fifa19 from '../assets/fifa-19.jpg';
import Fifa20 from '../assets/fifa20.jpg';
import Inquisition from '../assets/inquisition.jpg';
import Mea from '../assets/mea-deluxe.jpg';
import NBA from '../assets/NBA-2018.jpg';
import NFSP from '../assets/need-for-speed-payback.jpg';
import NFSH from '../assets/nsfh-keyart.jpg';
import Plants from '../assets/plants-vs-zombies.jpg';
import SOS from '../assets/sos-section.jpg';
import StarsBattlefront from '../assets/star-wars-battlefront.jpg';
import StarsJedi from '../assets/star-wars-jedi.jpg';
import Sims from '../assets/the-sims-mobile.jpg';
import Titan from '../assets/titanfall-2.jpg';
import Unreval from '../assets/unravel-2.jpg';

// function buildImgage(parameter){
//     let image="";
//         switch(parameter.name){
//             case 'tab[i]': image=
//         }

//         return image ;
// }


const Game = (param) => {
    let image= "";

        switch(param.name){
            case 'Anthem': image=Anthem ;
            break;
            case 'Apex Legends': image=ApexLegends ;
            break;
            case 'A way Out': image=Away ;
            break;
            case 'Battlefield Hardline': image=Battlefield;
            break;
            case 'Battlefront': image=Battlefront ;
            break;
            case 'Command and conquer': image=CommandConquer ;
            break;
            case 'FIFA 2019': image=Fifa19 ;
            break;
            case 'FIFA 2020': image=Fifa20;
            break;
            case 'Inquisition': image=Inquisition ;
            break;
            case 'Mass Effect Andromeda': image=Mea ;
            break;
            case 'NBA 2018': image=NBA ;
            break;
            case 'Need For Speed Payback': image=NFSP;
            break;
            case 'Need For Speed Heat': image=NFSH ;
            break;
            case 'Plants vs zombies': image=Plants ;
            break;
            case 'Sea Of Solitude': image=SOS;
            break;
            case 'Stars wars Battlefront': image=StarsBattlefront ;
            break;
            case 'Stars Wars JEDI': image=StarsJedi ;
            break;
            case 'Sims 4': image=Sims;
            break;
            case 'Titanfall 2': image=Titan ;
            break;
            case 'Unreval': image=Unreval ;
            break;
            default: image="";
        }

    return(
            <div className="game-container">
              <div className="game-image" style ={{ backgroundImage: 'url('+ image +')' }}></div>
                <p className="game-title"> {param.name}  </p>
                <p className="game-year"> {param.year} </p>
            </div>

    );
}

export default Game ;

