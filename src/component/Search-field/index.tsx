import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import color from "../../constant";

const onSearch = (value: string) => console.log(value);

export default function SearchField() {
  return (
    <Form className="d-flex my-3 w-100" style={{ height: "8vh" }}>
      <Form.Control
        type="search"
        placeholder="Search"
        className=" searchfield "
        aria-label="Search"
        style={{
          borderRadius: "0px",
          borderTopLeftRadius: "4px",
          borderEndStartRadius: "4px",
        }}
      />
      <Button
        className="px-3"
        style={{
          background: color.pink,
          border: `1px solid ${color.pink}`,
          borderRadius: "0px",
          borderEndEndRadius:"4px",
          borderTopRightRadius:"4px"
        }}
      >
        <AiOutlineSearch size={18} />
      </Button>
    </Form>
  );
}
