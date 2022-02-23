// ROOT COMPONENT whre our react code gets rendered from initially
// so routes go here
// any component with pathname "/" will get rendered first when app loads
// navbar
// page holder
// all state och skit i top layer? app


import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom"
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider, styled} from 'baseui';
import { strawberryTheme } from './themes/strawberry';
import NavBarHeader from './modules/organisms/NavBarHeader';
import Home from './modules/pages/Home';
import About from './modules/pages/About';
import Games from './modules/pages/Games';
import Crochet from './modules/pages/Crochet';
import Felting from './modules/pages/Felting';
/*  <Centered>
          <StatefulInput />
        </Centered>*/

const engine = new Styletron();

const Centered = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
});


// Styletron & BaseProvider is from Base Web
function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={strawberryTheme}>
      <NavBarHeader/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="games" element={<Games/>}/>
        <Route path="crochet" element={<Crochet/>}/>
        <Route path="felting" element={<Felting/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
