import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../ components/Navbar";
import { Link } from "react-router-dom";

const Menu = () => {
    const [menu, setMenu] = useState([]);

    const getListMenu = () => {
        axios
            .get("https://api.mudoapi.tech/menus")
            .then((res) => {
                setMenu(res.data.data.Data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getListMenu();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 style={titleStyle}>Our Menu</h1>
            {menu.map((item) => (
                <div key={item.id} style={menuItemStyle}>
                    <h2 style={itemNameStyle}>{item.name}</h2>
                    <img src={item.imageUrl} alt={item.name} style={itemImageStyle}/>
                    <p style={itemDescriptionStyle}>Price: ${item.price}</p>
                    <Link to={`/menu/${item.id}`} style={itemDetail}>
                        <button>Detail Menu</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};



const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
};

const menuItemStyle = {
    marginBottom: "30px",
    borderRadius: "20px",
    textAlign: "center",
    width: "600px",
    border: "4px solid #ccc",
    boxSizing: "border-box", 
    display: "inline-block", 
    padding: "20px",
};

const itemNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
};

const itemDescriptionStyle = {
    fontSize: "18px",
};

const itemDetail = {
    marginBottom: "30px",
};

const itemImageStyle = {
    width: "400px",
    height: "300px",
    borderRadius: "8px",
};

export default Menu;
