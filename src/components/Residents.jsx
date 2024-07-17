import { useState, useContext } from "react";
import { deleteRes } from "../api-axios.js";
import Header from "./Header.jsx";
import EditModalBtn from "./EditModalBtn.jsx";
import { ResDataContext } from "../ContextFile.jsx";

function Residents() {
  //State to Show available residents in the aparts
  const [occupied, setOccupied] = useContext(ResDataContext);

  //State to pass Residents data to Edit Modal Component
  const [edit, setEdit] = useState([]);

  //Onclick Edit button Modal is Opened to edit data
  const openModal = (flats) => {
    setEdit(flats);
  };

  //Delete function to delete the Residents
  const deleteFlat = async (id) => {
    // eslint-disable-next-line no-unused-vars
    const data = await deleteRes(id);
    setOccupied(occupied.filter((flats) => flats.id !== id));
  };

  return (
    <>
      <div>
        <Header />
        <div className="d-sm-flex row gap-4 ms-3">
          {occupied.map((flat) => (
            <div
              key={flat.id}
              className="card text-bg-info mb-3 mt-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Occupied</div>
              <div className="card-body">
                <h5 className="card-title">Flat No : {flat.id}</h5>
                <ul className="card-text" style={{ listStyle: "none" }}>
                  <li>
                    <b>Name :</b> {flat.name}
                  </li>
                  <li>
                    <b>Username:</b> {flat.username}
                  </li>
                  <li>
                    <b>Company: </b> {flat.company}
                  </li>
                  <li>
                    <b>Email: </b> {flat.email}
                  </li>
                  <li>
                    <b>Phone: </b> {flat.phone}
                  </li>
                </ul>
                <div className="d-sm-flex mt-3 gap-3">
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      deleteFlat(flat.id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => openModal(flat)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Modal Component to open modal on click Edit button */}
          {edit && <EditModalBtn id={edit.id} updatedRes={edit} />}
        </div>
      </div>
    </>
  );
}

export default Residents;
