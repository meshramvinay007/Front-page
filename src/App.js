import './App.css';
import CustomLink from './components/custom-link/CustomLink';
import Navigation from './components/navigation/Navigation';
import Section from "./components/section/Section"

function App() {
  return (
    <div className='my-app'>
     <Navigation />
     <Section />
     <CustomLink />
    </div>
  );
}

export default App;
