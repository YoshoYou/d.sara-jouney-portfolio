import './App.css';
import { ContactMe } from './components/ContactMe/ContactMe';
import { Expirtes } from './components/Expirtes/Expirtes';
import { Footer } from './components/Footer/Footer';
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
      <Footer />
    </div>
  );
}
export default App;
