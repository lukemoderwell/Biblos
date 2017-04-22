import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Pokemon } from "./components/Pokemon";

ReactDOM.render(
    <Pokemon 
        name="Bulbasaur"
        type="Grass"
        src="http://cartoonbros.com/wp-content/uploads/2016/11/Bulbasaur-11.png" />,
    document.getElementById("app")
);
