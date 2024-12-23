
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Harry Potter</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
        alt="Harry Potter"
        style={{ width: "300px", borderRadius: "10px" }}
      />
      <p>
        <Link to="/about">Learn more about Harry Potter</Link>
      </p>
    </div>
  );
};

export default HomePage;
