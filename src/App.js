import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Overview } from "./components/Overview";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Routes, Route } from 'react-router-dom';
import { ProjectDetail } from './components/ProjectDetail';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <Overview />
            <Projects />
          </>
        } />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
