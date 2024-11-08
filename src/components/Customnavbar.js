import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";

export default function Customnavbar({
  title,
  pricing,
  darkMode,
  toggleDarkMode,
}) {
  return (
    <Navbar
      style={{
        backgroundColor: darkMode ? "#343a40" : "#e3f2fd", // Dark grey for dark mode, light blue for light mode
        color: darkMode ? "#ffffff" : "#212529", // White text in dark mode, dark text in light mode
      }}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ color: darkMode ? "#ffffff" : "#212529" }}
        >
          TextUtils
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="#"
            style={{ color: darkMode ? "#ffffff" : "#212529" }}
          >
            Home
          </Nav.Link>
        </Nav>
        <Form>
          <Form.Check
            type="switch"
            id="dark-mode-switch"
            label={
              <span style={{ color: darkMode ? "#ffffff" : "#212529" }}>
                Enable Dark Mode
              </span>
            } // Text color of the switch label
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </Form>
      </Container>
    </Navbar>
  );
}
