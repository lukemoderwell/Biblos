import * as React from 'react';

export interface PokemonProps { 
    name: string; 
    type: string;
    level: number;
    src?: string;
    handleClick: () => void;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class Pokemon extends React.Component<PokemonProps, undefined> {
    render(): JSX.Element {
        const {name, type, level, src} = this.props;
        return (
            <div className={name}>
                {src && <img src={src} />}
                <h2>{name}</h2>
                <h3>{type}-type Pokemon</h3>
                <span>Level {level}</span>
                <button onClick={this.props.handleClick}>See More</button>
            </div>
        );
    }
}
