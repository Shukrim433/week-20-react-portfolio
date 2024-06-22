import { Outlet } from 'react-router-dom'; //** acts as the place holder-gets replaced by the page component that will be displayed depending on the url
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
     {/* Outlet component will conditionally show the appropriate page component based on the URL */}
      <div className='body'>
      <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
