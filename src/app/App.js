
import Header from "./pages/header/Header";
import Body from "./pages/body/Body";
import Footer from "./pages/footer/Footer";
import React, { useState, useEffect } from "react";






function App() {

//set state APP
const [appState , setAppState ] = useState({ 
  currentPage : "allGames"  

});  

//update state APP
function updateAppState(currentPage){
  setAppState({
        ...appState, 
        currentPage:currentPage
    })
};





  return (

    <div> 
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>

  );
}

export default App;
