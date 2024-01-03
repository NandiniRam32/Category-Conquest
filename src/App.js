import React, { useState } from 'react';
import { MainMenu } from './MainMenu';
import { TeamSelection } from './TeamSelection';
import { Rules } from './Rules';
import { Levels } from './Levels';
import { Categories } from './Categories';
import { Question } from './Question';
import { Points } from './Points';
import { Winner } from './Winner';
import { Characters } from './Characters';
import { Names } from './Names';
import cat from './components/cat.jpg';
import dog from './components/dog.jpg';
import fox from './components/fox.jpg';
import panda from './components/panda.jpg';
import bunny from './components/bunny.jpg';

/**const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};*/

const App = () => {
  const [currentPage, setCurrentPage] = useState('main');
  const [category, setCategory] = useState('science');
  const [level, setCurrentLevel] = useState('easy');
  const [teams, setCurrentTeams] = useState(5);
  const [points, setPoints] = useState([-1, -1, -1, -1, -1]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [status, setStatus] = useState("Correct!");
  const [clickedCategories, setClickedCategories] = useState(new Set());
  const [clickedCharacters, setClickedCharacters] = useState(new Set());
  const [curTeam, setCurTeam] = useState(1);
  const [Team1Character, setTeam1Character] = useState(cat);
  const [Team2Character, setTeam2Character] = useState(dog);
  const [Team3Character, setTeam3Character] = useState(fox);
  const [Team4Character, setTeam4Character] = useState(panda);
  const [Team5Character, setTeam5Character] = useState(bunny);
  const [Team1Name, setTeam1Name] = useState("");
  const [Team2Name, setTeam2Name] = useState("");
  const [Team3Name, setTeam3Name] = useState("");
  const [Team4Name, setTeam4Name] = useState("");
  const [Team5Name, setTeam5Name] = useState("");
  return (
    <div className="App" style={{textAlign: "center"}}>
        {(() => {
        if (currentPage === "main") {
            return <MainMenu setCurrentPage={setCurrentPage} setPoints={setPoints} setCurrentTeam={setCurrentTeam} 
            setClickedCategories={setClickedCategories} setClickedCharacters={setClickedCharacters}/>;
        } else if (currentPage === "team") {
            return <TeamSelection setCurrentPage={setCurrentPage} setCurrentTeams={setCurrentTeams} setCurTeam={setCurTeam} 
            setPoints={setPoints}/>;
        } else if (currentPage === "rules") {
            return <Rules setCurrentPage={setCurrentPage} setCurTeam={setCurTeam}/>;
        } else if (currentPage === "levels") {
            return <Levels setCurrentPage={setCurrentPage} setCurrentLevel={setCurrentLevel}/>;
        } else if (currentPage === "categories") {
            return <Categories setCategory={setCategory} setCurrentPage={setCurrentPage} clickedCategories={clickedCategories} 
            setClickedCategories={setClickedCategories} setCurTeam={setCurTeam}/>;
        } else if (currentPage === "question") {
            return <Question category={category} setCurrentPage={setCurrentPage} setPoints={setPoints} level={level} 
            currentTeam={currentTeam} points={points} setStatus={setStatus} setCurTeam={setCurTeam}/>;
        } else if (currentPage === "points") {
            return <Points setCurrentPage={setCurrentPage} points={points} status={status} setCurrentTeam={setCurrentTeam} 
            teams={teams} currentTeam={currentTeam} clickedCategories={clickedCategories} Team1Character={Team1Character} 
            Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} 
            Team5Character={Team5Character} Team1Name={Team1Name} Team2Name={Team2Name} Team3Name={Team3Name} Team4Name={Team4Name} 
            Team5Name={Team5Name}/>;
        } else if (currentPage === "winner") {
            return <Winner setCurrentPage={setCurrentPage} points={points} setCurTeam={setCurTeam} Team1Character={Team1Character} 
            Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} 
            Team5Character={Team5Character} Team1Name={Team1Name} Team2Name={Team2Name} Team3Name={Team3Name} Team4Name={Team4Name} 
            Team5Name={Team5Name} teams={teams}/>;
        } else if (currentPage === "characters") {
          return <Characters setCurrentPage={setCurrentPage} setClickedCharacters={setClickedCharacters} 
          clickedCharacters={clickedCharacters} teams={teams} curTeam={curTeam} setCurTeam={setCurTeam} setTeam1Character={setTeam1Character}
          setTeam2Character={setTeam2Character} setTeam3Character={setTeam3Character} setTeam4Character={setTeam4Character} 
          setTeam5Character={setTeam5Character}/>
        } else if (currentPage === "names") {
          return <Names setCurrentPage={setCurrentPage} teams={teams} Team1Character={Team1Character} 
          Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} Team5Character={Team5Character} 
          setTeam1Name={setTeam1Name} setTeam2Name={setTeam2Name} setTeam3Name={setTeam3Name} setTeam4Name={setTeam4Name} 
          setTeam5Name={setTeam5Name}/>;
        }
    })()}
    </div>
  );
};

export default App;