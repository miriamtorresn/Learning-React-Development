import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Search = () => (
  <Form>
    <Form.Group>
      <Container>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Escribe algo para buscar" />
          </Col>
          <Col>
            <Button variant="primary" type="submit"> Buscar </Button>
          </Col>
        </Row>
      </Container>
    </Form.Group>
  </Form>
);

export default Search;