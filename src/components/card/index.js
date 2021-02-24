import React from 'react';
import './card.style.scss';
import {Col, Input, Row} from "reactstrap";
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons'
import './card.style.scss';

class Card extends React.Component {
    render() {
        return(
            <div className={'card'}>

                <Row>
                    <Col sm={10} md={10} lg={10} xl={10}>
                        <div className={'card-heading'}>
                            <h3>Title</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad animi assumenda aut</p>
                    </Col>
                    <Col className={'card-checkbox'} sm={2} md={2} lg={2} xl={2}>
                        <Input type="checkbox" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Card;