import { defer } from 'react-router-dom';
import ArtistForm from '../../components/Artists/ArtistForm';
import { FIREBASEAPIURL } from '../../SystemEnv';

function EditArtistPage() {
  return <ArtistForm method="patch" />;
}

export default EditArtistPage;

export async function loader({ reqest, params }) {
  const id = params.artistId;

  return defer({ artist: await loadArtist(id) });
}

async function loadArtist(id) {
  const response = await fetch(FIREBASEAPIURL + '/artists.json/');
  const responseData = await response.json();
  const artist = {
    id: id,
    name: responseData[id].name,
    imageUrl: responseData[id].imageUrl,
  };
  console.log(artist);
  return artist;
}
