import CV from "./CV"
import Layout from "./Layout";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
  
    <BrowserRouter basename="/react-website">
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="cv" element={<CV />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
