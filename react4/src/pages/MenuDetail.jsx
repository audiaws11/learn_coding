import Navbar from "../ components/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const MenuDetail = () => {
    const [menu, setMenu] = useState([]);
    const { id } = useParams();

    const getMenuDetail = () => {
        axios
            .get(`https://api.mudoapi.tech/menu/${id}`)
            .then((res) => setMenu(res?.data?.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getMenuDetail();
    }, []);

    return (
        <div>
            <Navbar />
            <h1 style={titleStyle}>Menu Detail</h1>
            <div style={menuDetailStyle}>
                <h2 style={itemNameStyle}>Nama Menu: {menu?.name}</h2>
                <img src={menu?.imageUrl} style={imageStyle} alt={menu?.name} />
                <h3 style={descriptionStyle}>Deskripsi: {menu?.description}</h3>
                <h4 style={typeStyle}>Tipe: {menu?.type}</h4>
            </div>
        </div>
    );
};


const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
};

const menuDetailStyle = {
    textAlign: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "20px",
};

const itemNameStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
};

const imageStyle = {
    width: "300px",
    height: "200px",
    borderRadius: "8px",
    marginBottom: "10px",
};

const descriptionStyle = {
    fontSize: "18px",
    marginBottom: "10px",
};

const typeStyle = {
    fontSize: "16px",
};

export default MenuDetail;
