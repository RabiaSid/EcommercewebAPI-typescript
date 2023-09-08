import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AppLogo } from "../../assets";
import SearchField from "../Search-field";
// import GradientButton from "../../Button/GradientButton/index";
// import { AppLogo } from "../../../Assets";
// import baseColors from "../../../Constant/color";
// import DropdownMenu from "../../Dropdown";

export default function AppHeader() {
  return  <>
  {["md"].map((expand) => (
    <Navbar key={expand}  expand={expand} className="px-2 p-0 " style={{
      background: "var(--transparency-quantinery, rgba(119, 83, 223, 0.15))",
    }}>
      <Container fluid  
      // style={{height: "70px", minHeight:"60px"}} 
      // className="h-auto h"
      >
        <Navbar.Brand href="/" className="d-flex align-items-center col-9 ">
         <img width="150px" height="80px" src={AppLogo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
            <img width="150px" height="80px" src={AppLogo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="col w-100 ">
            <SearchField />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>
}

