import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistsRootLayout from './pages/ArtistsRoot';
import ArtistsPage from './pages/Artists';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'artists',
        element: <ArtistsRootLayout />,
        children: [
          {
            index: true,
            element: <ArtistsPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
