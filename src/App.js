
import { Routes ,Route} from 'react-router-dom';
import './App.css';
 import Home from './pages/Home/Home';
 import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Guide from './pages/Guide/Guide';
import Jobs from './pages/Jobs/Jobs';


function App() {
  
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="about" Component={About}/>
      <Route exact path="guide" Component={Guide}/>
      <Route path="contact" Component={Contact}/>
      <Route path="jobs" Component={Jobs}/>
      </Routes>
    </div>
  );
}

export default App;
