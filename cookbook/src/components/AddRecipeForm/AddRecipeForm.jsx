import React from "react";
import './styles.css';
import {Form} from "react-bootstrap";

function MyAddRecipe () {
    return (
        <Form className="form">
            <div className="title">Încarcă o rețetă</div>
            <div className="subtitle">Inspiră-ne cu ideea ta</div>
            <Form.Group className="input-container">
                <Form.Label>Titlul rețetei</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="input-container">
                <Form.Label>Ingredientele necesare</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <Form.Group className="input-container">
                <Form.Label>Timpul de preparare (minute)</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="input-container">
                <Form.Label>Modul de preparare</Form.Label>
                <Form.Control as="textarea" rows={10} />
            </Form.Group>
            <button type="text" className="submit">Încarcă rețeta</button>
        </Form>
    );
}

export default MyAddRecipe;
