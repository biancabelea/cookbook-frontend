import React from "react";
import AppNavbar from "../components/Navbar/AppNavbar";
import AppJumbotron from "../components/Jumbotron/AppJumbotron";
import MyAddRecipe from "../components/AddRecipeForm/AddRecipeForm";

function MainPage () {
    return (
        <div>
            <AppNavbar/>
            <AppJumbotron/>
            <MyAddRecipe/>
        </div>
    );
}

export default MainPage;
