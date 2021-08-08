import React, { useState, useEffect } from "react";
import man from "../assets/images/dashboard/profile.jpg";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
} from "reactstrap";
import { Jwt_token } from "../data/config";
import { useAuth0 } from "@auth0/auth0-react";
import { withRouter } from "react-router-dom";
// import { Twitter, Facebook, GitHub } from "react-feather";
import {
  Password,
  SignIn,
  EmailAddress,
  RememberPassword,
  ForgotPassword,
  CreateAccount,
  FIREBASE,
  AUTH0,
  JWT,
} from "../constant";

const Logins = (props) => {
  const { loginWithRedirect } = useAuth0();
  const [email, setEmail] = useState("test@gmail.com");
  const [password, setPassword] = useState("test123");
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState("firebase");
  const [togglePassword, setTogglePassword] = useState(false);

  const [value, setValue] = useState(man);
  const [name, setName] = useState("Emay Walter");
  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);
  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName("Emay Walter");
    localStorage.setItem("token", Jwt_token);
    setTimeout(() => {
      props.history.push(`/products/allproducts`);
    }, 200);
  };

  return (
    <Container fluid={true} className="p-0">
      <Row>
        <Col xs="12">
          <div className="login-card">
            <div>
              <div>
                <a className="logo" href="index.html">
                  <img
                    className="img-fluid for-light"
                    src={require("../assets/images/logo/login.png")}
                    alt=""
                  />
                  <img
                    className="img-fluid for-dark"
                    src={require("../assets/images/logo/logo_dark.png")}
                    alt=""
                  />
                </a>
              </div>
              <div className="login-main login-tab">
                <Nav className="border-tab flex-column" tabs>
                  <NavItem>
                    <NavLink
                      className={selected === "firebase" ? "active" : ""}
                      onClick={() => setSelected("firebase")}
                    >
                      <img
                        src={require("../assets/images/firebase.svg")}
                        alt=""
                      />
                      <span>{FIREBASE}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={selected === "jwt" ? "active" : ""}
                      onClick={() => setSelected("jwt")}
                    >
                      <img src={require("../assets/images/jwt.svg")} alt="" />
                      <span>{JWT}</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={selected === "auth0" ? "active" : ""}
                      onClick={() => setSelected("auth0")}
                    >
                      <img src={require("../assets/images/auth0.svg")} alt="" />
                      <span>{AUTH0}</span>
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={selected} className="content-login">
                  <TabPane
                    className="fade show"
                    tabId={selected === "firebase" ? "firebase" : "jwt"}
                  >
                    <Form className="theme-form">
                      <h4>
                        {selected === "firebase"
                          ? "Sign In With Firebase"
                          : "Sign In With Jwt"}
                      </h4>
                      <p>{"Enter your email & password to login"}</p>
                      <FormGroup>
                        <Label className="col-form-label">{EmailAddress}</Label>
                        <Input
                          className="form-control"
                          type="email"
                          required=""
                          onChange={(e) => setEmail(e.target.value)}
                          defaultValue={email}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label className="col-form-label">{Password}</Label>
                        <Input
                          className="form-control"
                          type={togglePassword ? "text" : "password"}
                          onChange={(e) => setPassword(e.target.value)}
                          defaultValue={password}
                          required=""
                        />
                        <div
                          className="show-hide"
                          onClick={() => setTogglePassword(!togglePassword)}
                        >
                          <span className={togglePassword ? "" : "show"}></span>
                        </div>
                      </FormGroup>
                      <div className="form-group mb-0">
                        <div className="checkbox ml-3">
                          <Input id="checkbox1" type="checkbox" />
                          <Label className="text-muted" for="checkbox1">
                            {RememberPassword}
                          </Label>
                        </div>
                        <a className="link" href="#javascript">
                          {ForgotPassword}
                        </a>
                        {selected === "firebase" ? (
                          <Button
                            color="primary"
                            className="btn-block"
                            disabled={loading ? loading : loading}
                            onClick={(e) => loginAuth(e)}
                          >
                            {loading ? "LOADING..." : SignIn}
                          </Button>
                        ) : (
                          <Button
                            color="primary"
                            className="btn-block"
                            onClick={(e) => loginAuth(e)}
                          ></Button>
                        )}
                      </div>
                      <h6 className="text-muted mt-4 or">
                        {"Or Sign in with"}
                      </h6>
                      <p className="mt-4 mb-0">
                        {"Don't have account?"}
                        <a className="ml-2" href="#javascript">
                          {CreateAccount}
                        </a>
                      </p>
                    </Form>
                  </TabPane>
                  <TabPane className="fade show" tabId="auth0">
                    <div className="auth-content">
                      <img
                        src={require("../assets/images/auth-img.svg")}
                        alt=""
                      />
                      <h4>{"Welcome to login with Auth0"}</h4>
                      <p>
                        {
                          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                        }
                      </p>
                      <Button color="info" onClick={loginWithRedirect}>
                        {AUTH0}
                      </Button>
                    </div>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default withRouter(Logins);
