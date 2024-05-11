import React from "react";
import "./components/TeamSelection.css";
import { useTranslation } from 'react-i18next';
import Translations from './Translations';
import i18n from './i18n';

export const CategoriesSolo = ({setCategory, setCurrentPage, clickedCategories, setClickedCategories, setCurTeam, backgroundColor, mode, language}) => {
    const handleSetCategory = (selectedCategory) => {
        setCategory(selectedCategory);
        setClickedCategories((prevClickedCategories) => new Set([...prevClickedCategories, selectedCategory]));
        setCurrentPage("questionSolo");
    };
    const { t } = useTranslation();

    const handleSetPage = (selectedPage) => {
        setCurrentPage(selectedPage);
    };

    const handleCategoryDisappear = (selectedCategory) => {
        return clickedCategories.has(selectedCategory);
    };

    return (
        <div className="teamsContainer">
            <div style={{ background: backgroundColor, width: "100vw", height: "100vh", color: "white", alignContent: "center"}}>
                <div style={{height: "8vh"}}></div>
                <div style={{marginLeft: "8vw"}}>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("science") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("science")} ><b>{language === 'English' ? 'Science' : t('Science')}</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("popCulture") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("popCulture")}><b>{language === 'English' ? 'Pop Culture' : t('Pop Culture')}</b></text>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("history") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("history")}><b>{language === 'English' ? 'History' : t('History')}</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("technology") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("technology")}><b>{language === 'English' ? 'Technology' : t('Technology')}</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("art") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("art")}><b>{language === 'English' ? 'Art' : t('Art')}</b></text>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("sports") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("sports")}><b>{language === 'English' ? 'Sports' : t('Sports')}</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("geography") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("geography")}><b>{language === 'English' ? 'Geography' : t('Geography')}</b></text>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("cuisine") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("cuisine")}><b>{language === 'English' ? 'Cuisine' : t('Cuisine')}</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("literature") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("literature")}><b>{language === 'English' ? 'Literature' : t('Literature')}</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("movies") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("movies")}><b>{language === 'English' ? 'Movies & TV' : t('Movies & TV')}</b></text>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("music") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("music")}><b>{language === 'English' ? 'Music' : t('Music')}</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("general") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("general")}><b>{language === 'English' ? 'General' : t('General')}</b></text>
                </div>
                <div style={{marginTop: "8vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1);}} 
                    className="changeColorWhite"><b>{language === 'English' ? 'Main Menu' : t('Main Menu')}</b></div>
                </div>
            </div>
        </div>
    );
};