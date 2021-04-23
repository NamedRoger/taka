import React from 'react';
import { Card } from '@themesberg/react-bootstrap';

const CardClase = ({ grupo, clase, maestro, className }) => {
    return (
        <>
            <Card bg="light"
                text="dark"
                style={{ width: '18rem' }}
                className={className}>
                <Card.Header>{grupo}</Card.Header>
                <Card.Body>
                    <Card.Title>{clase}</Card.Title>
                    <Card.Text>
                        {maestro}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardClase;