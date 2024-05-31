import "./style.scss";
const index = ({animal, deleteAnimals}) => {
  return (
    <div className="card my-2">
      <div className="card-header">
        <h1>{animal.name}</h1>
      </div>
      <div className="card-body">
        <p className=" text-[16px] font-medium">Color: {animal.color}</p>
        <p className=" text-[16px] font-medium">Age: {animal.age}</p>
        <p className=" text-[16px] font-medium">Description: {animal.desc}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-danger" onClick={()=>deleteAnimals(animal.id)}>Delete</button>
      </div>
    </div>
  )
}

export default index
