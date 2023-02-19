import { Suspense } from 'react';
import { Await, defer, useLoaderData } from 'react-router-dom';
import ArtistList from '../components/Artists/ArtistList';

function ArtistsPage() {
  const { artists } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={artists}>
        {(loadedArtists) => {
          return <ArtistList artists={loadedArtists} />;
        }}
      </Await>
    </Suspense>
  );
}

export default ArtistsPage;

async function loadArtists() {
  const response = await fetch(
    'https://react-music-chart-203d9-default-rtdb.firebaseio.com/artists.json'
  );

  if (response.ok) {
    const responseData = await response.json();

    const loadedArtists = [];

    for (const key in responseData) {
      loadedArtists.push({
        id: key,
        name: responseData[key].name,
        imageUrl: responseData[key].imageUrl,
      });
    }    
    return loadedArtists;
  }
}

export function loader() {
  return defer({
    artists: loadArtists(),
  });
}
