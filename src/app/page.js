import TopHeader from '../components/TopHeader';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import StatsTicker from '../components/StatsTicker';
import CoursesSection from '../components/CoursesSection';
import Sankalp30Feature from '../components/Sankalp30Feature';
import ResultsGallery from '../components/ResultsGallery';
import FacultySection from '../components/FacultySection';
import Footer from '../components/Footer';
import FloatingActions from '../components/FloatingActions';

export const metadata = {
  title: 'Aadhar Institute Hamirpur | Best IIT-JEE & NEET Coaching',
  description: 'Top coaching institute in Gandhi Chowk, Hamirpur for IIT-JEE, NEET, and Boards.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <TopHeader />
      <Navbar />
      <HeroSection />
      <StatsTicker />
      <CoursesSection />
      <Sankalp30Feature />
      <ResultsGallery />
      <FacultySection />
      <Footer />
      <FloatingActions />
    </main>
  );
}