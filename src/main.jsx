import ReactDOM from 'react-dom/client';
// functions to set up routes and use them
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import all the pages for this app
import App from './App';
import ErrorPage from './pages/ErrorPage';
import AboutMePage from './pages/AboutMePage'; // default page
import PortfolioPage from './pages/PortfolioPage';
import ContactMePage from './pages/ContactMePage';
import ResumePage from './pages/ResumePage';


const router = createBrowserRouter([
  // define all the accessible routes, and which component(page) responds to which URL
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactMePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
