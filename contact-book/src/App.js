import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className='App'>
      <h1 className='title'>Who's your favorite singer?</h1>
      <Container className='col-4'>
        <Row>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

//1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 검색창이 있다
//2. 리스트에 이름과 전화번호를 추가할 수 있다
//3. 리스트에 아이템이 몇개있는지 보인다
//4. 사용자가 유저를 이름검색으로 찾을 수 있다.
