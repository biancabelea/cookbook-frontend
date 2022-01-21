import React from "react";
import AppNavbar from "../components/Navbar";
import AppJumbotron from "../components/Jumbotron";
import MyAddRecipe from "../components/AddRecipeForm";

function MainPage () {
    return (
        <div>
            <AppNavbar/>
            <AppJumbotron/>
        </div>
    );
}

export default MainPage;
