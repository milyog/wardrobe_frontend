import { useEffect, useState } from "react";
import styles from "./Shoes.module.css";
import WardrobeAPI from "../api/WardrobeAPI";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Shoes() {
  const [shoes, setShoes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const listItems = shoes.map((shoe) => (
    <Card key={shoe.id}>
      <Card.Body>
        <li>
          <p className="fs-2">
            {shoe.brand} {shoe.model}
          </p>
          <p>Kategori: {shoe.category}</p>
          {/*
          <p>Material: {shoe.material}</p>
          <p>Färg: {shoe.color}</p>
          <p>Storlek: {shoe.size}</p>
          <p>Pris: {shoe.price}</p>
          <p>Beskrivning: {shoe.description}</p>
          */}
          <p>
            Använd antal gånger:{" "}
            {/*}
            {shoe.usageLogs.map(
              (usageLog) => usageLog.wearCounter + ":" + " " + usageLog.wearDate
            )}*/}
            {shoe.usageLogs.length > 0
              ? shoe.usageLogs[shoe.usageLogs.length - 1].wearCounter
              : "Ingen uppgift än."}
          </p>
          <p>
            {" "}
            Senast använd:{" "}
            {shoe.usageLogs.length > 0
              ? shoe.usageLogs[shoe.usageLogs.length - 1].wearDate
              : "Ingen uppgift än."}
          </p>
        </li>
        <Link to={`/read/${shoe.id}`} className={`btn btn-sm btn-info me-2`}>
          Visa
        </Link>
        <Link
          to={`/update/${shoe.id}`}
          className={`btn btn-sm btn-primary me-2`}
        >
          Redigera
        </Link>
        <Button
          onClick={() => handleDelete(shoe.id)}
          className={`btn btn-sm btn-danger`}
        >
          Ta bort
        </Button>
      </Card.Body>
    </Card>
  ));

  const handleDelete = async (id) => {
    const confirm = window.confirm("Vill du ta bort den här posten?");

    if (confirm) {
      try {
        await WardrobeAPI.delete("/PairOfShoes/" + id);
        alert("Post borttagen!");
        window.location.reload();
      } catch (err) {
        console.log(`Fel: ${err.message}`); // Lägg till felhantering
      }
    }
  };

  useEffect(() => {
    const fetchAllShoes = async () => {
      setIsLoading(true);
      try {
        const response = await WardrobeAPI.get("/PairOfShoes");
        setShoes(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
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
    <>
      <h1 className={styles.headerStyle}>Skor</h1>
      <Link to="/create" className="btn btn-success">
        Skapa ny
      </Link>
      <Link to={"/"} className="btn btn-primary">
        Tillbaka
      </Link>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Laddar ...</span>
        </div>
      ) : (
        <ul className={styles.noBullets}>{listItems}</ul>
      )}
    </>
  );
}

export default Shoes;
