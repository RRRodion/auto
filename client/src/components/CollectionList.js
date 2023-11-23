import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {useLocation} from "react-router-dom";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import CollectionItem from "./CollectionItem";

const CollectionList = observer( () => {
    const {collection} = useContext(Context)

    return (
        <Row className="d-flex">
            {collection.collection.map(collection=>
                <CollectionItem key={collection.id} collection={collection}/>
            )}
        </Row>
    );
});

export default CollectionList;