import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/productsSlice';



function Header() {

    const dispatch=useDispatch()

    const data = useSelector((state) => state.cart)
    return (
        <div style={{ backgroundImage: "url(" + 'https://i.postimg.cc/90fSRPHB/Pngtree-old-paper-texture-gradient-dark-1460509.png' + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: '100%'}}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Link style={{ textDecoration: 'none' }} to={'/'}>
                        <Navbar.Brand className='text-white me-5'><img
                            alt=""
                            src="https://i.postimg.cc/L80tkrgf/Png-Item-5001688.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        /><span style={{ fontFamily: 'Merienda', color: 'white' }}> <b>S</b>HOPSTA<span style={{ color: 'orange' }}>G</span>RAM</span></Navbar.Brand>

                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mt-1" defaultActiveKey="/home" as="ul">
                            <Link style={{ textDecoration: 'none' }} to={'/'}><Nav.Item as="li"><Nav.Link href=" " className='ms-3 text-white'>Home</Nav.Link></Nav.Item></Link>
                            <Nav.Item as="li"><Nav.Link href="footer" className='ms-3 text-white'>About</Nav.Link></Nav.Item>
                            <Nav.Item as="li"><Nav.Link href="footer" className='ms-3 text-white'>Contact</Nav.Link></Nav.Item>
                        </Nav>
                        <Form>
                            <Row>
                                <Col xs="auto" className='mt-1 ms-3'>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                        onChange={(e)=>dispatch(searchProduct(e.target.value))}
                                    />
                                </Col>
                                <br></br>
                            </Row>
                        </Form>
                        <br/>
                        {/* <Form className="d-flex w-50">
                            <Form.Control
                                type="Search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="warning">Search</Button>
                        </Form> */}
                        <Nav className='border-start ms-auto fa-xl'>
                            <Link to={'/cart'} style={{ textDecoration: 'none' }}><Nav.Link href=" " className='ms-2 text-white' ><i className="fa-solid fa-cart-shopping fa-shake text-white"></i><span className='fs-6 text-warning'>{data.length}</span></Nav.Link></Link>
                            <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>
                                <Nav.Link href=" " className='ms-2 text-white'>
                                    <i class="fa-solid fa-basket-shopping text-white fa-bounce"></i><span className='fs-6 text-dark'> Wishlist</span>
                                </Nav.Link>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header