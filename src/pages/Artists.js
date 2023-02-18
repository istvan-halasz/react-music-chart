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
      <header className="py-5">
        <div className="container px-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 fw-bold">Artists</h1>
              <p className="fs-4">Here you can find the list of Artists...</p>
              <a className="btn btn-primary btn-lg" href="#!">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="pt-4">
        {artists.map((artist) => (
          <ArtistItem artist={artist} />
        ))}
      </section>
    </>
  );
}

export default ArtistsPage;
