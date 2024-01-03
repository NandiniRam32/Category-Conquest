import React from "react";
import "./components/TeamSelection.css";

export const Categories = ({setCategory, setCurrentPage, clickedCategories, setClickedCategories, setCurTeam, backgroundColor}) => {
    const handleSetCategory = (selectedCategory) => {
        setCategory(selectedCategory);
        setClickedCategories((prevClickedCategories) => new Set([...prevClickedCategories, selectedCategory]));
        setCurrentPage("question");
    };

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
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("science")} ><b>Science</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("popCulture") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("popCulture")}><b>Pop Culture</b></text>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("history") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("history")}><b>History</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("technology") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("technology")}><b>Technology</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("art") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("art")}><b>Art</b></text>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("sports") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("sports")}><b>Sports</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("geography") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("geography")}><b>Geography</b></text>
                    <text style={{background: "#28fc81", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("cuisine") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("cuisine")}><b>Cuisine</b></text>
                    <text style={{background: "#ff6bee", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("literature") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("literature")}><b>Literature</b></text>
                </div>
                <div style={{marginLeft: "8vw", marginTop: "10vh"}}>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("movies") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("movies")}><b>Movies & TV</b></text>
                    <text style={{background: "#c66bff", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("music") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("music")}><b>Music</b></text>
                    <text style={{background: "#44d8fc", marginRight: "6vw"}} className={`changeBgClrBlack teamsChoice1 ${handleCategoryDisappear("general") 
                    ? 'hidden' : ''}`} onClick={() => handleSetCategory("general")}><b>General</b></text>
                </div>
                <div style={{marginTop: "8vh", paddingLeft: "10vh", paddingRight: "10vh"}}>
                    <div style={{background: "#44d8fc", fontSize: "3vw"}} onClick={() => { handleSetPage("main"); setCurTeam(1);}} 
                    className="changeColorWhite"><b>Main Menu</b></div>
                </div>
            </div>
        </div>
    );
};