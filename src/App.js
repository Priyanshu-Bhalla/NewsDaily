import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0);
  const [inactive, setInactive] = useState(false);
  // constructor() {
  //   super();
  //     state = {
  //     text: "",
  //     mode: "light",
  //     progress: 0,

  //   }
  //   document.body.style.backgroundColor = "white";

  // }

  const setProg = (progress) => {
    setProgress(progress);

  }
  const handleMode = () => {
    if (mode === "dark") {
      setMode('light');
      document.body.style.backgroundColor = "white";

    }


    else {
      setMode('dark');
      document.body.style.backgroundColor = "#292929";

    }

  }
  const handleSideNav = () => {
    setInactive(!inactive);
  }



  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}

        />
        <Navbar mode={mode} handleMode={handleMode} inactive={inactive} handleSideNav={handleSideNav} />
        <Switch>
          <Route exact path="/"><  News inactive={inactive} setProg={setProg} key="general" country={'in'} category={'general'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/business"><  News inactive={inactive} setProg={setProg} key="business" country={'in'} category={'business'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/sports"><  News inactive={inactive} setProg={setProg} key="sports" country={'in'} category={'sports'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/technology"><  News inactive={inactive} setProg={setProg} key="technology" country={'in'} category={'technology'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/general"><  News inactive={inactive} setProg={setProg} key="general" country={'in'} category={'general'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/entertainment"><  News inactive={inactive} setProg={setProg} key="entertainment" country={'in'} category={'entertainment'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/health"><  News inactive={inactive} setProg={setProg} key="health" country={'in'} category={'health'} mode={mode} handleMode={handleMode} /> </Route>
          <Route exact path="/science"><  News inactive={inactive} setProg={setProg} key="science" country={'in'} category={'science'} mode={mode} handleMode={handleMode} /> </Route>

        </Switch>
      </Router>
      <div>


      </div>
    </>
  )

}


