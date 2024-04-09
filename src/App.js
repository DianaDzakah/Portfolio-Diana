import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Resume from "./pages/resume";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<About />}/>
         
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

