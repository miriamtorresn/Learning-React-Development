import { Form, Button } from 'react-bootstrap';

const Search = () => (
  <Form>
    <Form.Group>
      <Form.Label>Search</Form.Label>
      <Form.Control type="text" placeholder="Escribe algo para buscar" />
      <Button variant="primary" type="submit"> Buscar </Button>
    </Form.Group>
  </Form>
);

export default Search;