function ArtistItem(props) {
  return (
    <>
      <div className="container px-lg-5">
        <div className="row gx-lg-5">
          <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
            <div className="card flex-row flex-wrap">
              <div
                className="card-header border-0 my-auto"
                style={{ backgroundColor: 'transparent' }}
              >
                <img
                  src={props.artist.imageUrl}
                  alt=""
                  style={{
                    width: '56px',
                    height: '56px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                />
              </div>
              <div className="card-block px-2 mx-auto">
                <h4 className="card-title">{props.artist.name}</h4>
                <p className="card-text">Description</p>
                <a href="#" className="btn btn-primary">
                  BUTTON
                </a>
              </div>
              <div className="w-100"></div>
              <div className="card-footer w-100 text-muted">FOOTER</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistItem;
