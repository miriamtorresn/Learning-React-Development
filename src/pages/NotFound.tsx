import { Container, Row, Col } from 'react-bootstrap';
import MainMenu from '../components/MainMenu';

const NotFound = () => (
  <Container>
    <Row>
      <Col>
        <MainMenu />
      </Col>
    </Row>
    <Row>
      <Col>
        <h1>:(  Error 404</h1>
        <h3>Lo sentimos, la página que buscas no existe.</h3>
      </Col>
    </Row>
  </Container>
);

export default NotFound;