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
import { Mode } from './Mode';
import { QuestionArcade } from './QuestionArcade';
import { LevelsSolo } from './LevelsSolo';
import { CharactersSolo } from './CharactersSolo';
import { NamesSolo } from './NamesSolo';
import { CategoriesSolo } from './CategoriesSolo';
import { QuestionSolo } from './QuestionSolo';
import { PointsSolo } from './PointsSolo';
import { WinnerSolo } from './WinnerSolo';
import { Settings } from './Settings';
import { Leaderboard } from './Leaderboard';
import cat from './components/cat.jpg';
import dog from './components/dog.jpg';
import fox from './components/fox.jpg';
import panda from './components/panda.jpg';
import bunny from './components/bunny.jpg';
import GraySquare from './components/GraySquare.jpg';
import { ClassicMode } from './ClassicMode';
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';
import musicSource from './BackgroundMusic.mp3';
import useLocalStorage from './useLocalStorage';

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
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [mode, setMode] = useState("classic");
  const [soloCharacter, setSoloCharacter] = useState(cat);
  const [soloName, setSoloName] = useState("");
  const [soloPoints, setSoloPoints] = useState(0);
  let [language, setLanguage] = useState("English");
  let [backgroundMusic, setBackgroundMusic] = useState(0);
  const { t } = useTranslation();
  const [audio] = useState(new Audio(musicSource));
  audio.loop = true;
  let [soloUsers, setSoloUsers] = useLocalStorage("soloUsers", ["", 0, GraySquare, "", 0, GraySquare, "", 0, GraySquare, "", 0, GraySquare, "", 0, GraySquare]);
  return (
    <div className="App" style={{textAlign: "center"}}>
        {(() => {
        if (currentPage === "main") {
            return <MainMenu setCurrentPage={setCurrentPage} setPoints={setPoints} setCurrentTeam={setCurrentTeam} 
            setClickedCategories={setClickedCategories} setClickedCharacters={setClickedCharacters} backgroundColor={backgroundColor} 
            setBackgroundColor={setBackgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "team") {
            return <TeamSelection setCurrentPage={setCurrentPage} setCurrentTeams={setCurrentTeams} setCurTeam={setCurTeam} 
            setPoints={setPoints} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "rules") {
            return <Rules setCurrentPage={setCurrentPage} setCurTeam={setCurTeam} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "levels") {
            return <Levels setCurrentPage={setCurrentPage} setCurrentLevel={setCurrentLevel} backgroundColor={backgroundColor} language={language} 
            backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "categories") {
            return <Categories setCategory={setCategory} setCurrentPage={setCurrentPage} clickedCategories={clickedCategories} 
            setClickedCategories={setClickedCategories} setCurTeam={setCurTeam} backgroundColor={backgroundColor} mode={mode} language={language} 
            backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "question") {
            return <Question category={category} setCurrentPage={setCurrentPage} setPoints={setPoints} level={level} 
            currentTeam={currentTeam} points={points} setStatus={setStatus} setCurTeam={setCurTeam} backgroundColor={backgroundColor} 
            mode={mode} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "points") {
            return <Points setCurrentPage={setCurrentPage} points={points} status={status} setCurrentTeam={setCurrentTeam} 
            teams={teams} currentTeam={currentTeam} clickedCategories={clickedCategories} Team1Character={Team1Character} 
            Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} 
            Team5Character={Team5Character} Team1Name={Team1Name} Team2Name={Team2Name} Team3Name={Team3Name} Team4Name={Team4Name} 
            Team5Name={Team5Name} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "winner") {
            return <Winner setCurrentPage={setCurrentPage} points={points} setCurTeam={setCurTeam} Team1Character={Team1Character} 
            Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} 
            Team5Character={Team5Character} Team1Name={Team1Name} Team2Name={Team2Name} Team3Name={Team3Name} Team4Name={Team4Name} 
            Team5Name={Team5Name} teams={teams} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "characters") {
          return <Characters setCurrentPage={setCurrentPage} setClickedCharacters={setClickedCharacters} 
          clickedCharacters={clickedCharacters} teams={teams} curTeam={curTeam} setCurTeam={setCurTeam} setTeam1Character={setTeam1Character}
          setTeam2Character={setTeam2Character} setTeam3Character={setTeam3Character} setTeam4Character={setTeam4Character} 
          setTeam5Character={setTeam5Character} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>
        } else if (currentPage === "names") {
          return <Names setCurrentPage={setCurrentPage} teams={teams} Team1Character={Team1Character} 
          Team2Character={Team2Character} Team3Character={Team3Character} Team4Character={Team4Character} Team5Character={Team5Character} 
          setTeam1Name={setTeam1Name} setTeam2Name={setTeam2Name} setTeam3Name={setTeam3Name} setTeam4Name={setTeam4Name} 
          setTeam5Name={setTeam5Name} backgroundColor={backgroundColor} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "mode") {
          return <Mode setCurrentPage={setCurrentPage} backgroundColor={backgroundColor} setMode={setMode} setSoloPoints={setSoloPoints} language={language} 
          backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "questionArcade") {
          return <QuestionArcade category={category} setCurrentPage={setCurrentPage} setPoints={setPoints} level={level} 
            currentTeam={currentTeam} points={points} setStatus={setStatus} setCurTeam={setCurTeam} backgroundColor={backgroundColor} 
            mode={mode} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "levelsSolo") {
          return <LevelsSolo setCurrentPage={setCurrentPage} setCurrentLevel={setCurrentLevel} backgroundColor={backgroundColor} language={language} 
          backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "charactersSolo") {
          return <CharactersSolo setCurrentPage={setCurrentPage} setClickedCharacters={setClickedCharacters} 
          clickedCharacters={clickedCharacters} setCurTeam={setCurTeam} backgroundColor={backgroundColor} 
          soloCharacter={soloCharacter} setSoloCharacter={setSoloCharacter} language={language} backgroundMusic={backgroundMusic}/>
        } else if (currentPage === "namesSolo") {
          return <NamesSolo setCurrentPage={setCurrentPage} soloCharacter={soloCharacter} backgroundColor={backgroundColor} 
          soloName={soloName} setSoloName={setSoloName} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "categoriesSolo") {
          return <CategoriesSolo setCategory={setCategory} setCurrentPage={setCurrentPage} clickedCategories={clickedCategories} 
          setClickedCategories={setClickedCategories} setCurTeam={setCurTeam} backgroundColor={backgroundColor} mode={mode} language={language} 
          backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "questionSolo") {
          return <QuestionSolo category={category} setCurrentPage={setCurrentPage} setPoints={setPoints} level={level} 
          currentTeam={currentTeam} points={points} setStatus={setStatus} setCurTeam={setCurTeam} backgroundColor={backgroundColor} 
          mode={mode} soloPoints={soloPoints} setSoloPoints={setSoloPoints} clickedCategories={clickedCategories} language={language} backgroundMusic={backgroundMusic}/>;
        } else if (currentPage === "pointsSolo") {
          return <PointsSolo setCurrentPage={setCurrentPage} soloPoints={soloPoints} setSoloPoints={setSoloPoints} soloCharacter={soloCharacter} soloName={soloName} 
          backgroundColor={backgroundColor} clickedCategories={clickedCategories} language={language} backgroundMusic={backgroundMusic}/>
        } else if (currentPage === "winnerSolo") {
          return <WinnerSolo setCurrentPage={setCurrentPage} soloPoints={soloPoints} setSoloPoints={setSoloPoints} soloCharacter={soloCharacter} soloName={soloName} 
          backgroundColor={backgroundColor} clickedCategories={clickedCategories} setCurTeam={setCurTeam} language={language} backgroundMusic={backgroundMusic} 
          soloUsers={soloUsers} setSoloUsers={setSoloUsers}/>
        } else if (currentPage === "classicMode") {
          return <ClassicMode setCurrentPage={setCurrentPage} setCurTeam={setCurTeam} backgroundColor={backgroundColor} mode={mode} language={language} 
          backgroundMusic={backgroundMusic}/>
        } else if (currentPage === "settings") {
          return <Settings setCurrentPage={setCurrentPage} setCurTeam={setCurTeam} backgroundColor={backgroundColor} mode={mode} language={language} 
          setLanguage={setLanguage} backgroundMusic={backgroundMusic} setBackgroundMusic={setBackgroundMusic} audio={audio}/>
        } else if (currentPage === "leaderboard") {
          return <Leaderboard setCurrentPage={setCurrentPage} setPoints={setPoints} setCurrentTeam={setCurrentTeam} 
          setClickedCategories={setClickedCategories} setClickedCharacters={setClickedCharacters} backgroundColor={backgroundColor} 
          setBackgroundColor={setBackgroundColor} language={language} backgroundMusic={backgroundMusic} soloUsers={soloUsers} setSoloUsers={setSoloUsers}/>;
        }
    })()}
    </div>
  );
};

export default App;