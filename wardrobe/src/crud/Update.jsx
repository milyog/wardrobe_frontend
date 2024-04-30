import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import WardrobeAPI from "../api/WardrobeAPI";

function Update() {
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

  const { id } = useParams();

  useEffect(() => {
    const fetchPairOfShoes = async () => {
      try {
        const response = await WardrobeAPI.get("/PairOfShoes/" + id);
        setValues(response.data);
        console.log(response.data);
      } catch (err) {
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

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      console.log(values);
      const response = await WardrobeAPI.put(
        "/PairOfShoes/" + id,
        new URLSearchParams(values)
      );
      console.log(response.values);
      alert("Post updaterad!");
    } catch (err) {
      console.log(`Fel: ${err.message}`);
    }
  };

  return (
    <>
      <h1>Redigera</h1>
      <form onSubmit={handleUpdate}>
        <label htmlFor="brand" className="me-2">
          Märke
        </label>
        <input
          type="text"
          name="brand"
          placeholder="Ange märke"
          value={values.brand}
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
          value={values.model}
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
          value={values.category}
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
          value={values.material}
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
          value={values.color}
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
          value={values.size}
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
          value={values.price}
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
          value={values.description}
          onChange={(e) =>
            setValues({ ...values, description: e.target.value })
          }
        />
        <br />
        <input type="submit" value="Ändra" className="btn btn-success" />
        <Link to="/shoes" className="btn btn-primary">
          Tillbaka
        </Link>
      </form>
    </>
  );
}

export default Update; //
