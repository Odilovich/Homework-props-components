import Card from "./components/card";
import { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [animals, setAnimals] = useState([
    {
      id: "123EFGF4567865",
      name: "Lion",
      color: "Yellow",
      age: "10",
      desc: "The lion (Panthera leo) is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane.",
    },
  ]);
  const [form, setForm] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = nanoid();
    const payload = { ...form, id };
    animals.push(payload);
    setAnimals([...animals]);
    event.target.reset();
  };
  const deleteAnimals = (id) => {
    const new_animals = animals.filter((animal) => animal.id !== id);
    setAnimals([...new_animals]);
  };
  return (
    <div className="container my-4">
      <div className=" row my-4">
        <div className=" cold-md-6">
          <div className="card w-[700px]">
            <div className="card-body">
              <form id="submit" onSubmit={handleSubmit}>
                <input
                  required
                  type="text"
                  onChange={handleChange}
                  name="name"
                  placeholder="Enter animal name"
                  className="form-control my-2"
                />
                <input
                  required
                  type="text"
                  onChange={handleChange}
                  name="color"
                  placeholder="Enter animal color"
                  className="form-control my-2"
                />
                <input
                  required
                  type="number"
                  onChange={handleChange}
                  name="age"
                  placeholder="Enter animal age"
                  className="form-control my-2"
                />
                <textarea
                  className="form-control my-2 max-h-[80px]"
                  name="desc"
                  id=""
                  cols="2"
                  rows="2"
                  placeholder="Enter description"
                ></textarea>
              </form>
              <div className="card-footer">
                <button type="submit" form="submit" className="btn btn-success">
                  Add new animal
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {animals.map((animal, index) => {
          return (
            <div className="col-md-4" key={index}>
              <Card animal={animal} deleteAnimals={deleteAnimals} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
