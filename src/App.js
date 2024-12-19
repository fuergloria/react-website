import CV from "./CV"
import Layout from "./Layout";
import Home from "./Home";
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
    <HashRouter basename="/react-website">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="cv" element={<CV />} />
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
