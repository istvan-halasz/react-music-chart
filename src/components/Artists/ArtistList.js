import ArtistItem from './ArtistItem';

function ArtistList(props) {
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
