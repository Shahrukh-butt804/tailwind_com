import './App.css';
import Hero1 from './components/HeroSections.js/Hero1';
import Card1 from './components/cards/card1';
import Navbar from './components/navbar/Navbar1';

function App() {
  return (
    <div className='h-screen w-screen bg-black text-white'>
      <Navbar/>
      <Hero1 />
      <Card1 />
    </div>
  );
}

export default App;
