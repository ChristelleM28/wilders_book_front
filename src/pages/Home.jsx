import { useState, useEffect } from "react";
import axios from "axios";
import Wilder from "../components/Wilder";
import Form from "../components/Form";
import "./home.css";

const Home = () => {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    //je définis la fonction qui récupère tous les wilders
    const fetchWilders = async () => {
      const response = await axios.get("http://localhost:5001/api/wilders");
      setWilders(response.data);
    };
    // j'appelle la fonction
    fetchWilders();
  }, []);

  const deleteWilder = async (wilder) => {
    await axios.delete(`http://localhost:5001/api/wilders/${wilder.id}`);
    setWilders(
      wilders.filter((currentWilder) => currentWilder.id !== wilder.id)
    );
  };

  const handleAddWilder = async (e, name, skill) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:5001/api/wilders", {
      name,
      skill,
    });
    if (response.status === 200) {
      setWilders((prevState) => [...prevState, response.data]);
    }
  };

  //cours: et remplacer dans le Form onSave={save}
  // const save = async (name) => {
  //   const res = await axios.post("http://localhost:5001/api/wilders", {name});
  //   setWilders([...wilders, res.data]);
  // }

  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
      
          {wilders.map((wilder) => (
            <Wilder
              key={wilder.id}
              wilderInfos={wilder}
              onDeleteButtonClicked={() => {
                deleteWilder(wilder);
              }}
            />
          ))}
        </section>
      </main>
      <Form handleAddWilder={handleAddWilder} />

      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
