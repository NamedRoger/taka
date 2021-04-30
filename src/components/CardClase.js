import React from 'react';
import { Card } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

const CardClase = ({ grupo, clase, maestro, className,href }) => {
    return (
        <>
            <Card bg="light"
                text="dark"
                style={{ width: '18rem' }}
                className={className}>
                <Card.Header>{grupo}</Card.Header>
                <Card.Body>
                    <Link to={href}>
                        <Card.Title>{clase}</Card.Title>
                    </Link> 
                    <Card.Text>
                        {maestro}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardClase;