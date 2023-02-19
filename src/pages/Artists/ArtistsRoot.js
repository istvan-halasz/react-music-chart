import { Outlet } from 'react-router-dom';
import ArtistsNavigation from '../../components/ArtistsNavigation';

function ArtistsRootLayout() {
  return (
    <>
      <ArtistsNavigation />
      <Outlet />
    </>
  );
}

export default ArtistsRootLayout;
