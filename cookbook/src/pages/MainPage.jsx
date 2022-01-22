import React from "react";
import AppNavbar from "../components/Navbar/AppNavbar";
import AppJumbotron from "../components/Jumbotron/AppJumbotron";
import MyAddRecipe from "../components/AddRecipeForm/AddRecipeForm";
import FooterPage from "../components/Footer";

function MainPage () {
    return (
        <div>
            <AppNavbar/>
            <AppJumbotron/>
            <MyAddRecipe/>
            <FooterPage/>
        </div>
    );
}

export default MainPage;
