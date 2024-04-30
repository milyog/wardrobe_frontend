import { useEffect, useState } from "react";
import styles from "./Shoes.module.css";
import shoePicture from "../assets/shoes.jpg";
import WardrobeAPI from "../api/WardrobeAPI";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Shoes() {
  const [shoes, setShoes] = useState([]);

  const listItems = shoes.map((shoe) => (
    <Card className="bg-info text-light">
      <Card.Body>
        <li key={shoe.id}>
          <Card.Title className="fs-2 fw-bold">
            {shoe.brand} {shoe.model}
          </Card.Title>
          <Card.Text>
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
          </Card.Text>
        </li>
      </Card.Body>
    </Card>
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
      <h1 className={styles.headerStyle}>Skor</h1>
      <ul className={styles.noBullets}>{listItems}</ul>
    </div>
  );
}

export default Shoes; //
