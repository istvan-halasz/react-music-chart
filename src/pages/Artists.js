import ArtistItem from '../components/Artists/ArtistItem';

const artists = [
  {
    id: 1,
    name: 'OneRepublic',
    imageUrl:
      'https://petofilive.hu/wp-content/uploads/sites/12/2022/03/westcoast-500x500.jpg',
  },
  {
    id: 2,
    name: 'Camilla Cabello ft. Ed Sheeran',
    imageUrl:
      'https://petofilive.hu/wp-content/uploads/sites/12/2022/03/edsheeran.jpg',
  },
  {
    id: 3,
    name: 'Kygo ft. DNCE',
    imageUrl:
      'https://petofilive.hu/wp-content/uploads/sites/12/2022/03/kygo.jpg',
  },
  {
    id: 4,
    name: 'Charlie Puth',
    imageUrl:
      'https://petofilive.hu/wp-content/uploads/sites/12/2022/02/charlieputh-e1644695149519-300x286.jpeg',
  },
  {
    id: 5,
    name: 'Tyga feat. Doja Cat',
    imageUrl:
      'https://petofilive.hu/wp-content/uploads/sites/12/2022/04/dojacat.jpg',
  },
];

function ArtistsPage() {
  return (
    <>
      <section className="pt-4">
        {artists.map((artist) => (
          <ArtistItem artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
}

export default ArtistsPage;
