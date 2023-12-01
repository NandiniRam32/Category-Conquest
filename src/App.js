import React, { useState } from 'react';
import { MainMenu } from './MainMenu';
import { TeamSelection } from './TeamSelection';
import { Rules } from './Rules';
import { Levels } from './Levels';
import { Categories } from './Categories';
import { Question } from './Question';
import { Points } from './Points';
import { Winner } from './Winner';

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
  const [teams, setCurrentTeams] = useState(1);
  const [points, setPoints] = useState([0, 0, 0, 0, 0]);
  const [currentTeam, setCurrentTeam] = useState(0);
  const [status, setStatus] = useState("Correct!");
  const [clickedCategories, setClickedCategories] = useState(new Set());
  return (
    <div className="App" style={{textAlign: "center"}}>
        {(() => {
        if (currentPage === "main") {
            return <MainMenu setCurrentPage={setCurrentPage} setPoints={setPoints} setCurrentTeam={setCurrentTeam} 
            setClickedCategories={setClickedCategories}/>;
        } else if (currentPage === "team") {
            return <TeamSelection setCurrentPage={setCurrentPage} setCurrentTeams={setCurrentTeams}/>;
        } else if (currentPage === "rules") {
            return <Rules setCurrentPage={setCurrentPage}/>;
        } else if (currentPage === "levels") {
            return <Levels setCurrentPage={setCurrentPage} setCurrentLevel={setCurrentLevel}/>;
        } else if (currentPage === "categories") {
            return <Categories setCategory={setCategory} setCurrentPage={setCurrentPage} clickedCategories={clickedCategories} 
            setClickedCategories={setClickedCategories}/>;
        } else if (currentPage === "question") {
            return <Question category={category} setCurrentPage={setCurrentPage} setPoints={setPoints} level={level} 
            currentTeam={currentTeam} points={points} setStatus={setStatus}/>;
        } else if (currentPage === "points") {
            return <Points setCurrentPage={setCurrentPage} points={points} status={status} setCurrentTeam={setCurrentTeam} 
            teams={teams} currentTeam={currentTeam} clickedCategories={clickedCategories}/>;
        } else if (currentPage === "winner") {
            return <Winner setCurrentPage={setCurrentPage} points={points}/>;
        }
    })()}
    </div>
  );
};

export default App;