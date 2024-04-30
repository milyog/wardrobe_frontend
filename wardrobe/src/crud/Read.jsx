import { useEffect, useState } from "react";
import styles from "../shoes/Shoes.module.css";
import WardrobeAPI from "../api/WardrobeAPI";
import Card from "react-bootstrap/Card";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [shoe, setShoe] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPairOfShoes = async () => {
      setIsLoading(true);

      try {
        const response = await WardrobeAPI.get("/PairOfShoes/" + id);
        setShoe(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchPairOfShoes();
  }, []);

  return (
    <>
      <h1 className={styles.headerStyle}>Ett par skor</h1>

      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Laddar ...</span>
        </div>
      ) : (
        <Card>
          <Card.Body>
            <Card.Title className="fs-2">
              {shoe.brand} {shoe.model}
            </Card.Title>
            <p>Kategori: {shoe.category}</p>
            <p>Material: {shoe.material}</p>
            <p>Färg: {shoe.color}</p>
            <p>Storlek: {shoe.size}</p>
            <p>Pris: {shoe.price}</p>
            <p>Beskrivning: {shoe.description}</p>
            <Link
              to={`/update/${id}`}
              className={`btn btn-sm btn-primary me-2`}
            >
              Redigera
            </Link>
            <Link to={"/shoes"} className="btn btn-sm btn-success">
              Tillbaka
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default Read; //
