import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Offcanvas, Form, } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import Brand from '../Brand/Brand';
import MenuList from '../MenuList/MenuList';
import './NavBar.css'
import Counter from '../Counter/Counter';
import {FaSearch} from 'react-icons/fa'

const NavBar = ({categories}) => {
    return (
        <>
            <Navbar className='navBar' expand={false}>
                <Container fluid>

                    <Brand img="../../img/icon.png" title="TechStore"/>

                    <Form className="formSearch">
                        <Form.Control
                            type="search"
                            placeholder="Buscá lo que desees!"
                            className="me-2 navSearch"
                            aria-label="Search"
                        />
                        <FaSearch className='searchIcon' />
                    </Form>

                    <Navbar.Toggle className='shadow-none border-0' aria-controls="offcanvasNavbar" ><span style={{ color: "#fff" }}><CartWidget /> <Counter value={0} /> </span></Navbar.Toggle>
                    <Navbar.Offcanvas
                        className="bg-white"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Carrito</Offcanvas.Title>
                        </Offcanvas.Header>
                        <hr className='w-75 m-auto' />
                        <p className='mt-3 mx-3' >Agregá lo que quieras al carrito!</p>
                        <Offcanvas.Body>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>

                </Container>
            </Navbar>
            
            <nav className='container-fluid navCategory' >
                <ul className='d-flex justify-content-center m-0'>
                    {categories.map((cat, i) => <MenuList key={i} section= {cat.section} route = {cat.route} />)}
                </ul>
            </nav>
        </>
    );
}
export default NavBar; 