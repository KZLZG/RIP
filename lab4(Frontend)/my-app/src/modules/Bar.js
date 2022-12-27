import React, {useContext} from "react";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";

const Bar = observer(() =>{
    //const {device} = useContext(Context)
    return (
        <div>
            <ListGroup>
                <ListGroup.Item>Масла</ListGroup.Item>
                <ListGroup.Item>Антифризы</ListGroup.Item>
            </ListGroup>
        </div>
    );
})

export default Bar;