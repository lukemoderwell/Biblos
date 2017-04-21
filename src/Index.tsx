import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Pokemon } from "./components/Pokemon";

const levelUp = function levelUp(){
    console.log('you leveled up');
}

ReactDOM.render(
    <Pokemon 
        name="Koffing"
        level={5}
        type="Poison"
        src="http://cartoonbros.com/wp-content/uploads/2016/11/Bulbasaur-11.png"
        handleClick={this.levelUp} />,
    document.getElementById("app")
);
