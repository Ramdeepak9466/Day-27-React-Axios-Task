import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getAllRes } from "./api-axios";

const ResDataContext = createContext();

const ContextData = ({ children }) => {

  //State is passed to all componenets this state retreived data from the API 
  const [occupied, setOccupied] = useState([]);

  //Function to get data from api and set in setOccupied state
  const loadData = async () => {
    const data = await getAllRes();
    setOccupied(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  //Count to Calculate the Residents Occupied the flat
  let count = occupied.length;

  return (
    <>
      <ResDataContext.Provider value={[occupied, setOccupied, count]}>
        {children}
      </ResDataContext.Provider>
    </>
  );
};
ContextData.propTypes = {
  children: PropTypes.object,
};

export { ResDataContext, ContextData };
