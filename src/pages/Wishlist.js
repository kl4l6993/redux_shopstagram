import React from 'react'
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { Trash } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlist } from '../redux/wishlistSlice';
import { addToCart } from '../redux/cartSlice';



function Wishlist() {

    const wishArray=useSelector((state)=>(state.wish));
    const dispatch=useDispatch();

    const wishlisttocart=(array,id)=>{

        dispatch(addToCart(array));
        dispatch(removeWishlist(id));

    }
    

    return (
        <div className='mt-5'>

            <h2 className='mt-2' style={{ color: 'orange', textAlign: 'center', fontFamily: 'Nosifer' }}>Welcome to Wishlist</h2>
            {
                wishArray.length > 0 ? (
                    <div className='mt-5'>
                        <Container className='mt-2 p-2'>
                            <Row>
                                <Col lg={12} md={12} sm={12}>
                                    <Table striped bordered responsive hover variant="outline-warning" className='text-center'>
                                        <thead>
                                            <tr>
                                                <th style={{ color: 'orange', fontFamily: 'Merienda' }}>#</th>
                                                <th style={{ color: 'orange', fontFamily: 'Merienda' }}>Title</th>
                                                <th style={{ color: 'orange', fontFamily: 'Merienda' }}>Price in INR</th>
                                                <th style={{ color: 'orange', fontFamily: 'Merienda' }}>Ratings</th>
                                                <th style={{ color: 'orange', fontFamily: 'Merienda', height: '50px', width: '20px' }}>Image</th>
                                                <th colSpan={2} style={{ color: 'orange', fontFamily: 'Merienda' }}></th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                wishArray.map((i, index) => (
                                                    <tr>
                                                        <td className='pt-5'>{index + 1}</td>
                                                        <td className='pt-5'>{i.title > 30 ? i.title.slice(0, 30) + ".." : i.title}</td>
                                                        <td className='pt-5'>{i.price}</td>
                                                        <td className='pt-5'>{i.rating.rate}</td>
                                                        <td><img style={{ height: '100px', width: '100px' }} src={i.image}></img></td>
                                                        <td className='pt-4'><Button onClick={()=>wishlisttocart(i,i.id)} className='mt-3 text-center' variant="success">Add to Cart <i className="fa-solid fa-cart-shopping fa-shake text-white"></i></Button></td>
                                                        <td className='pt-4'><Trash onClick={()=>dispatch(removeWishlist(i.id))} style={{ color: 'red' }} className='btn' size={60}></Trash></td>
                                                        
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </Row>
                        </Container>


                    </div>) : <h2 className='mt-5 text-center' style={{ color: 'skyblue' }}>Wishlist is empty!, Please continue Shopping!</h2>
            }

        </div>
    )
}

export default Wishlist