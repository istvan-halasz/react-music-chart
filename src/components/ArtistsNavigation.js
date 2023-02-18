import { NavLink } from 'react-router-dom';

function ArtistsNavigation() {
  return (
    <>
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <button class="btn btn-outline-success" type="button">
            Main button
          </button>
          <button class="btn btn-sm btn-outline-secondary" type="button">
            Smaller button
          </button>
        </form>
      </nav>
    </>
  );
}

export default ArtistsNavigation;
