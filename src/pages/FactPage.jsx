
import { useParams, Link } from "react-router-dom";

const facts = [
  { id: "1", text: "Harry Potter is a Gryffindor." },
  { id: "2", text: "Harry Potter has a lightning-shaped scar." },
  { id: "3", text: "Harry Potter's best friends are Hermione and Ron." },
];

const FactPage = () => {
  const { factId } = useParams();
  const fact = facts.find((f) => f.id === factId);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {fact ? (
        <>
          <h1>Fact {fact.id}</h1>
          <p>{fact.text}</p>
        </>
      ) : (
        <h1>Fact not found</h1>
      )}
      <p>
        <Link to="/about">Back to About</Link>
      </p>
    </div>
  );
};

export default FactPage;
