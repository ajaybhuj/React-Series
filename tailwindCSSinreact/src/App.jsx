import "./App.css";
import Card from "./components/card";
function App() {
  return (
    <>
      <h1 className="bg-black text-white p-4 rounded mb-4">Tailwind TEST</h1>
      <Card username="Ajay" btnText="Click me" />
      <Card username="Bhuj" />
    </>
  );
}

export default App;
