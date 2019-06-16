import React from 'react';
import { Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';

function ContactForm() {
    return (
        <Form>
            <FormGroup row>
                <Label for="name" sm={2}>Name</Label>
                <Col sm={10}>
                    <Input type="name" name="name" id="name" placeholder="with a placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleEmail" sm={2}>Email</Label>
                <Col sm={10}>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="exampleText" sm={2}>Text Area</Label>
                <Col sm={10}>
                    <Input type="textarea" name="text" id="exampleText" />
                </Col>
            </FormGroup>
            <Button />
        </Form>
    );
}
export default ContactForm;