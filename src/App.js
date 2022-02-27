import './App.css';
import ImgSection from './components/ImgSection';
import Header from './components/Header';
import AnimSection from './components/AnimSection';
import CompaniesSection from './components/CompaniesSection';
import ExperienceSection from './components/ExperienceSection';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header />
      <AnimSection />
      <ImgSection />
      <CompaniesSection />
      <ExperienceSection />
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;