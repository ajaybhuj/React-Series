import { useParams } from "react-router-dom";
function About() {
  const { id } = useParams();
  return (
    <div>
      <h1>About us page:{id}</h1>
    </div>
  );
}

export default About;
