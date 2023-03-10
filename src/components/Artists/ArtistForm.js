import { Form, redirect, useNavigate } from 'react-router-dom';
import { FIREBASEAPIURL } from '../../SystemEnv';

function ArtistForm(props) {
  const navigate = useNavigate();
  return (
    <div className="container px-lg-5">
      <div className="row gx-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <Form method={props.method}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="imageUrl" className="form-label">
                Image Url
              </label>
              <input
                type="Url"
                className="form-control"
                id="imageUrl"
                name="imageUrl"
                required
              />
            </div>
            <div
              className="btn-group"
              role="group"
              aria-label="Button group with space"
            >
              <button type="submit" className="btn btn-primary ">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary ml-2"
                onClick={() => navigate('..')}
              >
                Cancel
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ArtistForm;

export async function action({ request, params }) {
  const data = await request.formData();

  const artistData = {
    name: data.get('name'),
    imageUrl: data.get('imageUrl'),
  };

  const response = await fetch(FIREBASEAPIURL + '/artists.json', {
    method: request.method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(artistData),
  });

  if (response.ok) {
    return redirect('/artists');
  }
}
