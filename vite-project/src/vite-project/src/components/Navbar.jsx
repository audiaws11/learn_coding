import "./style.css";

const Navbar =() => {
    const navList =["Home", "About", "Contact"];
    return (
        <div className="nav-list">
            {navList.map((list => <p>{list}</p>))}
        </div>
    );
};

export default Navbar;


