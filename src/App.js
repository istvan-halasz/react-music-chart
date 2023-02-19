import './App.css';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtistsRootLayout from './pages/Artists/ArtistsRoot';
import ArtistsPage, { loader as artistsLoader } from './pages/Artists/Artists';
import EditArtistPage, { loader as artistDetailLoader } from './pages/Artists/EditArtist';
import { action as manipulateArtistAction } from './components/Artists/ArtistForm';
import NewArtistPage from './pages/Artists/NewArtist';

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
            loader: artistsLoader,
          },
          {
            path: ':artistId',
            id: 'artis-detail',
            element: <EditArtistPage />,
            action: manipulateArtistAction,
            loader: artistDetailLoader
          },
          {
            path: 'new',
            element: <NewArtistPage />,
            action: manipulateArtistAction,
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
