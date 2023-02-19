import ArtistItem from './ArtistItem';

function ArtistList(props) {
  console.log('aaa');
  console.log(props.artist);
  return (
    <>
      <section className="pt-4">
        {props.artists.map((artist) => (
          <ArtistItem artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
}
export default ArtistList;
