import { useState } from "react";
import { Link } from "react-router-dom";
import WardrobeAPI from "../api/WardrobeAPI";

function Create() {
  const [values, setValues] = useState({
    brand: "",
    model: "",
    category: "",
    material: "",
    color: "",
    size: "",
    price: 0,
    description: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(values);
      const response = await WardrobeAPI.post(
        "/PairOfShoes",
        new URLSearchParams(values)
      );
      console.log(response.values);
      alert("Post skapad!");
    } catch (err) {
      console.log(`Fel: ${err.message}`); // Lägg till felhantering
    }
  };

  return (
    <>
      <h1>Skapa ny</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="brand" className="me-2">
          Märke
        </label>
        <input
          type="text"
          name="brand"
          placeholder="Ange märke"
          onChange={(e) => setValues({ ...values, brand: e.target.value })}
        />
        <br />
        <label htmlFor="model" className="me-2">
          Modell
        </label>
        <input
          type="text"
          name="model"
          placeholder="Ange modell"
          onChange={(e) => setValues({ ...values, model: e.target.value })}
        />
        <br />
        <label htmlFor="category" className="me-2">
          Kategori
        </label>
        <input
          type="text"
          name="category"
          placeholder="Ange kategori"
          onChange={(e) => setValues({ ...values, category: e.target.value })}
        />
        <br />
        <label htmlFor="material" className="me-2">
          Material
        </label>
        <input
          type="text"
          name="material"
          placeholder="Ange material"
          onChange={(e) => setValues({ ...values, material: e.target.value })}
        />
        <br />
        <label htmlFor="color" className="me-2">
          Färg
        </label>
        <input
          type="text"
          name="color"
          placeholder="Ange färg"
          onChange={(e) => setValues({ ...values, color: e.target.value })}
        />
        <br />
        <label htmlFor="size" className="me-2">
          Storlek
        </label>
        <input
          type="text"
          name="size"
          placeholder="Ange storlek"
          onChange={(e) => setValues({ ...values, size: e.target.value })}
        />
        <br />
        <label htmlFor="price" className="me-2">
          Pris
        </label>
        <input
          type="number"
          name="price"
          placeholder="Ange pris"
          onChange={(e) => setValues({ ...values, price: e.target.value })}
        />
        <br />
        <label htmlFor="description" className="me-2">
          Beskrivning
        </label>
        <input
          type="text"
          name="description"
          placeholder="Ange beskrivning"
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
        />
        <br />
        <input type="submit" value="Skapa" className="btn btn-success" />
        <Link to="/shoes" className="btn btn-primary">
          Tillbaka
        </Link>
      </form>
    </>
  );
}

export default Create; //
