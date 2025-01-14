import './App.css';
import Header from './components/Header';
import Herosection from './components/Herosection';
import AboutHackathonix from './components/AboutHackathonix';
import Logo from './components/Logo';
import Prizes from './components/Prizes';
import Sponsors from './components/Sponsors';
import Core from './components/Core';
import TeamMembers from './components/TeamMembers';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AboutDept from './components/AboutDept';
import Domains from './components/Domains';

function App() {
  return (
    <div>
      <Header />
      <section id="home"><Herosection /></section>
      <Logo />
      <section id="about"><AboutHackathonix /></section>
      <Prizes />
      <section id="domains"><Domains /></section>
      <Sponsors />
      <AboutDept />
      <Core />
      <TeamMembers />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
