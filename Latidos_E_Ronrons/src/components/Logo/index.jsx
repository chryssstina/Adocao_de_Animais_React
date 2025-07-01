function Logo() {
  return (
    <a className="navbar-brand" href="#">
      <img
        src="/imgs/AZAREA.png"
        alt="Logotipo"
        id="imglogo"
        className="img-fluid m-0 m-md-3 ms-md-3"
        style={{ maxWidth: "150px" }} // Example for setting a maximum width
      />
    </a>
  );
}

export default Logo;
