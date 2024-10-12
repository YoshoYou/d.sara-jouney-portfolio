import './App.css';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Expirtes } from './components/Expirtes/Expirtes';
import { Home } from './components/Home/Home';
import { MyJob } from './components/MyJob/MyJob';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Expirtes/>
      <MyJob />
      <ContactMe />
    </div>
  );
}
export default App;
