
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Harry Potter</h1>
      <p>
        Harry Potter is a fictional character created by J.K. Rowling. He is the
        protagonist of the Harry Potter series and is known for his bravery,
        loyalty, and friendship.
      </p>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
      <p>
        <Link to="/1">Fact 1</Link> | <Link to="/2">Fact 2</Link> |{" "}
        <Link to="/3">Fact 3</Link>
      </p>
    </div>
  );
};

export default AboutPage;
