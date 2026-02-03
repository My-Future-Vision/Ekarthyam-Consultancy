import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Profile } from './components/Profile';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Profile />
        <Services />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
