import PropTypes from "prop-types";
import { editRes } from "../api-axios.js";
import { useState, useEffect, useContext } from "react";
import { ResDataContext } from "../ContextFile.jsx";

const EditModalBtn = ({ id, updatedRes }) => {
  //Used Context to change the UI
  const [occupied, setOccupied] = useContext(ResDataContext);

  //State to Edit the details of the residents
  const [resId, setRes] = useState(updatedRes);

  useEffect(() => {
    setRes(updatedRes);
  }, [updatedRes]);

  //Function to change the details of the residents
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRes({ ...resId, [name]: value });
  };

  //Function to update the details of the residents in the API
  const updateRes = async () => {
    // eslint-disable-next-line no-unused-vars
    const update = await editRes(id, resId);
    let tempRes = occupied.findIndex((flats) => flats.id === resId.id);
    occupied[tempRes] = resId;
    setOccupied([...occupied]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRes();
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Residents
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
                value={resId.name}
                name="name"
                className="form-control"
                placeholder="Name"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="username"
                value={resId.username}
                className="form-control"
                placeholder="Username"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="company"
                value={resId.company}
                className="form-control"
                placeholder="Company"
                onChange={handleChange}
              />
              <br />
              <input
                type="Email"
                name="email"
                value={resId.email}
                className="form-control"
                placeholder="Email"
                onChange={handleChange}
              />
              <br />
              <input
                type="text"
                name="phone"
                value={resId.phone}
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
              type="submit"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={handleSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
EditModalBtn.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  updatedRes: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default EditModalBtn;
