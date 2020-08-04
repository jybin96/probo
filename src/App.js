import React from 'react';
import './App.css';
import Probo from './probo2.png';
import Inputmain from './inputmain/maininput';
import Appbar from './appbar/appbar';
import Bottom1 from './bottom/Bottom1';
import MoreInfo from './ProBo/MoreInfo';
import Shopping from './shoping/shop';
import Topmenu from './shoping/topmenu';
import App2 from './yunhuk/App2';
import Leftmenu from './Leftmenu/Leftmenu';
function App() {
  return (
    
    <div>
      {/* 
    <div className="App">
      <Appbar/>
      <div className="inputbox">
        <Inputmain/>
      </div>
      <div className="bottombox">
       <MoreInfo/>
     </div>
     <div className="bottombox">
       <Bottom1/>
     </div>
     
     
    </div>
  */}
    <div className="appbar2">
    
      <img src={Probo} width="190px" height="50px" />
    </div>
    <div className="left_top">
    <App2/>
    </div>
    
    
    <div className="probo_right_menu">
      <Topmenu/>
    </div>
    <div className="center">
    </div>
    <div className="probo_right">
      <Shopping/>
    </div>
    <div className="left_menu">
      <Leftmenu/>
    </div>
    </div>
  );
}

export default App;
