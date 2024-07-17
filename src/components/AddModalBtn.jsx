import { useContext, useEffect, useState } from "react";
import { addRes } from "../api-axios.js";
import { ResDataContext } from "../ContextFile.jsx";

const AddModalBtn = () => {
  //Used Context to change the UI
  const [occupied, setOccupied, count] = useContext(ResDataContext);

  const intialDetails = {
    name: "",
    username: "",
    company: "",
    email: "",
    phone: "",
  };
  //State to add Residents details intially given empty values
  const [addData, setAddData] = useState(intialDetails);

  //Handle Change function to change the data to new values
  const handleChange = (e) => {
    setAddData({ ...addData, [e.target.name]: e.target.value });
  };

  //Async function to Add the details in the API
  const newData = async () => {
    const data = await addRes(addData);
    setAddData(data);
    setOccupied([...occupied, data]);
  };

  useEffect(() => {
    setAddData(addData);
  }, [addData]);

  //Handle Submit function where async function is called
  const handleSubmit = (e) => {
    e.preventDefault();
    newData();
  };

  return (
    <>
      <div className="row">
        <div className="bg-primary-subtle">
          <div className="row p-1">
            <div className="col">
              <b>Occupied : {count}</b>
              <div>
                <b>Not Occupied : {100 - count}</b>
                <div>
                  <b>Total : 100</b>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-primary col-3 mx-auto me-3 p-3"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Add Resident
            </button>

            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabIndex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Residents Details
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <input
                        type="text"
                        value={addData.name}
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        type="text"
                        name="username"
                        value={addData.username}
                        className="form-control"
                        placeholder="Username"
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        type="text"
                        name="company"
                        value={addData.company}
                        className="form-control"
                        placeholder="Company"
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        type="Email"
                        name="email"
                        value={addData.email}
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                      />
                      <br />
                      <input
                        type="text"
                        name="phone"
                        value={addData.number}
                        className="form-control"
                        placeholder="Phone"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleSubmit}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModalBtn;
