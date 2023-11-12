import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addtoWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productsSlice';




function Home() {

    // const products= useSelector((state)=>state.productsSlice.allProducts)
    //Destructuing to get all loading,all Products and error
    const { allProducts, loading, error } = useSelector((state) => state.productsSlice)

    const dispatch = useDispatch();

    // //creating states to store this reslts.data array

    // const [products, setProducts] = useState([]);



    // //API Call to get product details

    // const fetchProducts = async () => {
    //     const results = await axios.get('https://fakestoreapi.com/products')
    //     setProducts(results.data);
    // }

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])




    // console.log(products);


    return (
        <div>
            <div className='mt-5 mb-4 p-4'>
                <Container>
                    <Row className='mt-3 mb-3'>
                        <Col lg={7} md={7} sm={12} style={{ display: 'flex', alignItems: 'center' }}>
                            <Image className='text-center mb-5' style={{ width: '100%' }} src="https://i.postimg.cc/ZqbnhVMw/Lovepik-com-400769670-online-shopping.png" />
                        </Col>
                        <Col lg={5} md={5} sm={12}>
                            <h3 style={{ fontFamily: 'yatra one', textAlign: 'center' }}>Enjoy your Shopping with <span style={{ fontFamily: 'Nosifer', color: 'orange' }}> Shopstagram!</span></h3> <br /><br />
                            <h5 style={{ fontFamily: 'Dancing Script', color: 'white', textAlign: "justify" }}>Experience the best of online shopping for men, women and kids in India, you are at the right place. <br></br>Shopstagram is the ultimate destination for fashion and lifestyle, being host to a wide array of merchandise including clothing, footwear, accessories, jewellery, personal care products and more. </h5>
                        </Col>
                    </Row>
                </Container>

            </div>

            <div style={{ backgroundColor: 'white' }}>
                <div className='mt-5 mb-5 p-3'>
                    <Container>
                        <Row className='mt-5 ps-1'>
                            {
                                loading &&

                                <i class="fa-solid fa-spinner fa-5x fa-spin" style={{ color: 'red', textAlign: 'center' }}></i>
                            }
                            {
                                allProducts.length > 0 && allProducts.map(i => (
                                    <Col lg={4} md={4} sm={12} className='mb-5'>
                                        <Card style={{ width: '18rem', height: '600px', borderRadius: '15px' }} className='m-auto p-3 cards'>
                                            <Card.Img variant="top" src={i.image} style={{ width: '100%', height: '230px', borderRadius: '15px' }} />
                                            <Card.Body>
                                                <Card.Title className='text-center mt-2' style={{ height: '30px', display: 'flex', alignItems: 'center' }}><h6><b>{i.title.length > 30 ? i.title.slice(0, 30) + ".." : i.title}</b></h6></Card.Title>
                                                <hr></hr>
                                                <Card.Text>
                                                    <b>Price:</b> INR {i.price}/-
                                                </Card.Text>
                                                <Card.Text>
                                                    <b>Ratings:</b> {i.rating.rate} out of {i.rating.count} reviews
                                                </Card.Text>
                                                <hr></hr>
                                                <div className='text-center mt-4'>
                                                    <Button onClick={() => dispatch(addToCart(i))} className='text-center' variant="outline-warning">Add to Cart <i className="fa-solid fa-cart-shopping"></i></Button>
                                                    <Button onClick={() => dispatch(addtoWishlist(i))} className='mt-3 text-center' variant="outline-info">Add to Wishlist <i class="fa-solid fa-basket-shopping text-dark"></i></Button>
                                                </div>
                                            </Card.Body>
                                        </Card>

                                    </Col>


                                ))

                            }
                            
                        </Row>
                        <br />
                    </Container>
                </div>
            </div>

        </div>
    )
}

export default Home