"use client";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormContact = () => {
  return (
    <Form className="form-contact p-4 bordered rounded-3 bgColor-light">
      <h3 className="color-dark mb-2 fs-4 fw-bold">Drop Us a Message</h3>
      <p className="mb-4">Fill out the contact form below, and we'll get back to you as soon as possible.</p>
      <Form.Group className="mb-3" controlId="formContactFullName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContactEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Subject</Form.Label>
        <Form.Select>
          <option value="order-status">Order status</option>
          <option value="feedback">Feedback</option>
          <option value="report-an-issue">Report an issue</option>
          <option value="request-refund-or-discount">
            Request refund or discount
          </option>
          <option value="product-question">Product question</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContactMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button className="btn-main" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default FormContact;
