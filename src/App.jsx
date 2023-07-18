import {
  Routes,
  Route,
} from "react-router-dom";

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' Logo a changer




import Project from "./pages/Projects/Project/Project";

import Home from "./pages/Home/Home";


function App() {

  return (
    <div className="App">
           <Routes> 
            <Route path="/projects/:id" element={<Project />} /> 
            <Route path="" element={<Home />} /> 
          </Routes> 
    </div>
  )
}

export default App
