import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <Link to={"/"} style={linkStyle}>
        <p>Home</p>
      </Link>
      <Link to={"/menu"} style={linkStyle}>
        <p>Menu</p>
      </Link>
      <Link to={"/login"} style={linkStyle}>
        <p>Login</p>
      </Link>
    </div>
  );
}

const navbarStyle = {
  display: "flex",
  justifyContent: "space-around",
  gap: "20px",
  backgroundColor: "#D3D3D3",
  color: "#fff",
  padding: "10px",
 
};

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "18px",
  fontWeight: "bold",
};

export default Navbar;
