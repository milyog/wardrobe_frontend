import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Garderob</h1>
      <Link to={"/shoes"} className="btn btn-success">
        Skor
      </Link>
    </div>
  );
}

export default Home;
