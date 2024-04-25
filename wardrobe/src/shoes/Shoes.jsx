import { useEffect, useState } from "react";
import styles from "./Shoes.module.css";
import shoePicture from "../assets/shoes.jpg";
import WardrobeAPI from "../api/WardrobeAPI";

function Shoes() {
  const [shoes, setShoes] = useState([]);

  const listItems = shoes.map((shoe) => (
    <li key={shoe.id} className={styles.card}>
      <h2>
        {shoe.brand} {shoe.model}
      </h2>
      <p>
        <b>Kategori:</b> {shoe.category}
      </p>
      <p>
        <b>Material:</b> {shoe.material}
      </p>
      <p>
        <b>Färg:</b> {shoe.color}
      </p>
      <p>
        <b>Storlek:</b> {shoe.size}
      </p>
      <p>
        <b>Pris:</b> {shoe.price}
      </p>
      <p>
        <b>Beskrivning:</b> {shoe.description}
      </p>
    </li>
  ));

  useEffect(() => {
    const fetchAllShoes = async () => {
      try {
        const response = await WardrobeAPI.get("/PairOfShoes");
        setShoes(response.data);
        console.log(response.data);
      } catch (err) {
        if (err.response) {
          //Ej 200-någonting
          console.log(err.response.data); // Alternativen beror på
          console.log(err.response.status); // vad backend skickar
          console.log(err.response.headers);
        } else {
          // Om odefinierad
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchAllShoes();
  }, []);

  return (
    <div>
      <h1>Skor</h1>
      <ul className={styles.noBullets}>{listItems}</ul>
    </div>
  );
}

export default Shoes;
