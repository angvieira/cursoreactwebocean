import React from 'react';
import ReactDOM from 'react-dom';

/*
function Game(props){
    return <div>Olá, mundo!</div>
}*/

class Game extends React.Component{

     render(){
        return <div>Olá, mundo!</div>;
    } 
}

ReactDOM.render(

    //componente
    <Game/>,
    //elemento
    document.getElementById('root')
);