import aparts from "/aparts.svg";
import AddModalBtn from "./AddModalBtn.jsx";

const Header = () => {
  return (
    <>
          <nav className="navbar bg-dark ">
            <div className="container-fluid">
              <div className="navbar-brand">
                <img
                  src={aparts}
                  alt="Logo"
                  width="30"
                  height="24"
                  className="d-inline-block align-text-top"
                />{" "}
                <span className="ps-3" style={{ color: "#FFFADA" }}>
                  House Residents Details
                </span>
              </div>
            </div>
          </nav>
      
      <AddModalBtn />
    </>
  );
};

export default Header;
