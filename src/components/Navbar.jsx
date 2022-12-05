const Navbar = ({ openForm }) => {
  return (
    <nav>
      <div className="container">
        <h2 className="title">crud</h2>
        <div>
          <button onClick={openForm} className="btn-create">
            create
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
