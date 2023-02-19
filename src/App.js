import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistsRootLayout from './pages/ArtistsRoot';
import ArtistsPage from './pages/Artists';
import EditArtistPage from './pages/EditArtis';
import { action as manipulateArtistAction } from './components/Artists/ArtistForm';

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
          {
            path: 'new',
            element: <EditArtistPage />,
            action: manipulateArtistAction
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
