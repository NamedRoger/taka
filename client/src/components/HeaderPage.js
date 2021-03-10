import React from 'react';
import { Col, Row} from '@themesberg/react-bootstrap';

const HeaderPage = ({title}) => {
    
    return(
        <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
          <Col className="d-block mb-4 mb-md-0">
            <h1 className="h2">{title}</h1>
          </Col>
        </Row>
    );
}

export default HeaderPage;