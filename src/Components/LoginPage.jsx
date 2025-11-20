import React, { useState } from "react";
import { Form, Button, Alert, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setAuth }) => {
    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [showError, setShowError] = useState(false);
    const [loading, setLoading] = useState(false);

    const [forgotModal, setForgotModal] = useState(false);
    const [forgotUsername, setForgotUsername] = useState("");
    const [forgotMessage, setForgotMessage] = useState("");

    const navigate = useNavigate(); // <- used for navigation

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputUsername === "admin" && inputPassword === "admin") {
            localStorage.setItem("auth", "true");
            setAuth(true);
            navigate("/dashboard");
        } else {
            setShowError(true);
        }
    };
    const handleForgotSubmit = (e) => {
        e.preventDefault();
        if (!forgotUsername) return;
        // Here you can call your API to reset password
        setForgotMessage(`Password reset link sent to ${forgotUsername} if it exists.`);
        setForgotUsername("");
    };

    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    return (
        <div
            className="sign-in__wrapper"
        style={{ backgroundImage: `url(/assets/images/login-bg.jpg)` }}
        >
            <div className="sign-in__backdrop"></div>
            <Form className="shadow p-4 login_card rounded" onSubmit={handleSubmit}>
                <img
                    className="mx-auto d-block mb-2"
                    src="/assets/images/velearn-logo.png"
                    alt="logo"
                />
                {/* <div className="h4 mb-2 text-center">Login</div> */}

                <Form.Group className="mb-2" controlId="username">
                    <div className="form-item">
                        <input type="text" label="Name"
                            name="name"
                            value={inputUsername}
                            onChange={(e) => setInputUsername(e.target.value)}
                            required
                            className="form_fields"
                            autocomplete="off"
                            ondrop="return false;" onpaste="return false;" />
                        <label for="Name">Username</label>
                        <p className="error-msg"></p>
                    </div>
                </Form.Group>

                <Form.Group className="mb-2" controlId="password">
                    <div className="form-item">
                        <input type="text" label="Password"
                            name="password"
                            value={inputPassword}
                            onChange={(e) => setInputPassword(e.target.value)}
                            required
                            className="form_fields"
                            autocomplete="off"
                            ondrop="return false;" onpaste="return false;" />
                        <label for="password">Password</label>
                        <p className="error-msg"></p>
                    </div>
                </Form.Group>

                {showError && (
                    <div className="error-msg"> Incorrect username or password. </div>
                )}
                <Form.Group className="mb-2" controlId="checkbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className="w-100" variant="primary" type="submit" disabled={loading}>
                    {loading ? "Logging In..." : "Log In"}
                </Button>

                <div className="d-grid justify-content-end mt-2">
                    <Button
                        className="text-muted px-0 border-0"
                        variant="link"
                        onClick={() => setForgotModal(true)}
                    >
                        Forgot password?
                    </Button>
                </div>
            </Form>
            {/* Forgot Password Modal */}
            <Modal show={forgotModal} onHide={() => setForgotModal(false)}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Forgot Password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleForgotSubmit}>
                        <Form.Group className="mb-3" controlId="forgotUsername">
                            <div className="form-item">
                                <input type="text" label="forgotUsername"
                                    name="forgotUsername"
                                    value={forgotUsername}
                                    onChange={(e) => setForgotUsername(e.target.value)}
                                    required
                                    className="form_fields"
                                    autocomplete="off"
                                    ondrop="return false;" onpaste="return false;" />
                                <label for="forgotUsername">Enter your username</label>
                                <p className="error-msg"></p>
                            </div>
                        </Form.Group>
                        {forgotMessage && <Alert variant="success">{forgotMessage}</Alert>}
                        <Button type="submit" variant="primary" className="w-100">
                            Submit
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default LoginPage;
