import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './Header.scss'
function Header() {
    return (
        <header className='header p-4'>
            <Container>
                <Row className='align-center'>
                    <Col xs='6'>
                        <h4 className='header__link header__logo'><Link to='/'>PHOTO APP</Link></h4>
                    </Col>
                    <Col xs='6'>
                        <h5 className='header__link text-end'><Link to='/'>Back home</Link></h5>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header

