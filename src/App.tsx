
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="relative w-full h-full min-h-screen bg-gray-50 text-gray-900 font-sans antialiased overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
