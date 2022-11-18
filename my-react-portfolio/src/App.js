import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./components/navigation";
import Landpage from './components/landingpage';
import Aboutme from './components/aboutme';
import Extrainfo from './components/extrainfo';
import Services from './components/services';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Landpage />
        <Aboutme />
        <Extrainfo />
        <Services />
        <Skills />
      </div>
    </div>
  );
}

export default App;
