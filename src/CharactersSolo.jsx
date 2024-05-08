import React from "react";
import "./components/TeamSelection.css";
import cat from './components/cat.jpg';
import dog from './components/dog.jpg';
import fox from './components/fox.jpg';
import panda from './components/panda.jpg';
import bunny from './components/bunny.jpg';
import elephant from './components/elephant.jpg';
import tiger from './components/tiger.jpg';
import parrot from './components/parrot.jpg';
import hamster from './components/hamster.jpg';
import penguin from './components/penguin.jpg';
import frog from './components/frog.jpg';
import turtle from './components/turtle.jpg';
import redPanda from './components/red-panda.jpg';
import snake from './components/snake.jpg';
import octopus from './components/octopus.jpg';
import squirrel from './components/squirrel.jpg';

export const CharactersSolo = ({setCurrentPage, setClickedCharacters, clickedCharacters, setSoloCharacter, 
    backgroundColor}) => {
    const handleSetCharacter = (selectedCharacter) => {
        setClickedCharacters((prevClickedCharacters) => new Set([...prevClickedCharacters, selectedCharacter]));
        setCurrentPage("namesSolo");
    };

    const handleCharacter = (selectedCharacter) => {
        setSoloCharacter(selectedCharacter);
    }

    return (
        <div className="teamsContainer">
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <div style={{marginTop: "2vh", fontSize: "4.8vw", fontWeight: "bold"}}>Choose Your Character</div>
                <div style={{height: "12vh", marginTop: "4vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={cat} alt="Cat" 
                            className={!clickedCharacters.has("cat") ? '' : 'hidden'} onClick={() => {handleCharacter(cat); 
                            handleSetCharacter("cat")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={dog} alt="Dog" 
                            className={!clickedCharacters.has("dog") ? '' : 'hidden'} onClick={() => {handleCharacter(dog); 
                            handleSetCharacter("dog")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={fox} alt="Fox" 
                            className={!clickedCharacters.has("fox") ? '' : 'hidden'} onClick={() => {handleCharacter(fox); 
                                handleSetCharacter("fox")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={panda} alt="Panda" 
                            className={!clickedCharacters.has("panda") ? '' : 'hidden'} onClick={() => {handleCharacter(panda); 
                                handleSetCharacter("panda")}}/></span>
                </div>
                <div style={{height: "12vh", marginTop: "8vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={bunny} alt="Bunny" 
                            className={!clickedCharacters.has("bunny") ? '' : 'hidden'} onClick={() => {handleCharacter(bunny); 
                                handleSetCharacter("bunny")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={tiger} alt="Tiger" 
                            className={!clickedCharacters.has("tiger") ? '' : 'hidden'} onClick={() => {handleCharacter(tiger); 
                                handleSetCharacter("tiger")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={elephant} alt="Elephant" 
                            className={!clickedCharacters.has("elephant") ? '' : 'hidden'} onClick={() => {handleCharacter(elephant); 
                                handleSetCharacter("elephant")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={parrot} alt="Parrot" 
                            className={!clickedCharacters.has("parrot") ? '' : 'hidden'} onClick={() => {handleCharacter(parrot); 
                                handleSetCharacter("parrot")}}/></span>
                </div>
                <div style={{height: "12vh", marginTop: "8vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={penguin} alt="Penguin" 
                            className={!clickedCharacters.has("penguin") ? '' : 'hidden'} onClick={() => {handleCharacter(penguin); 
                                handleSetCharacter("penguin")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={frog} alt="Frog" 
                            className={!clickedCharacters.has("frog") ? '' : 'hidden'} onClick={() => {handleCharacter(frog); 
                                handleSetCharacter("frog")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={hamster} alt="Hamster" 
                            className={!clickedCharacters.has("hamster") ? '' : 'hidden'} onClick={() => {handleCharacter(hamster); 
                                handleSetCharacter("hamster")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={turtle} alt="Turtle" 
                            className={!clickedCharacters.has("turtle") ? '' : 'hidden'} onClick={() => {handleCharacter(turtle); 
                                handleSetCharacter("turtle")}}/></span>
                </div>
                <div style={{height: "12vh", marginTop: "8vh"}}>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={redPanda} alt="Red Panda" 
                            className={!clickedCharacters.has("red-panda") ? '' : 'hidden'} onClick={() => {handleCharacter(redPanda); 
                                handleSetCharacter("red-panda")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={snake} alt="Snake" 
                            className={!clickedCharacters.has("snake") ? '' : 'hidden'} onClick={() => {handleCharacter(snake); 
                                handleSetCharacter("snake")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={octopus} alt="Octopus" 
                            className={!clickedCharacters.has("octopus") ? '' : 'hidden'} onClick={() => {handleCharacter(octopus); 
                                handleSetCharacter("octopus")}}/></span>
                    <span><img style={{marginRight: "4vw", height: "12vh"}} src={squirrel} alt="Squirrel" 
                            className={!clickedCharacters.has("squirrel") ? '' : 'hidden'} onClick={() => {handleCharacter(squirrel); 
                                handleSetCharacter("squirrel")}}/></span>
                </div>
            </div>
        </div>
    );
};