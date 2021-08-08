import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { firebase_app, auth0 } from "./data/config";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Auth0Provider } from "@auth0/auth0-react";
import store from "./store";
import App from "./components/app";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { routes } from "./route";
import ConfigDB from "./data/customizer/config";
import {
  configureFakeBackend,
  authHeader,
  handleResponse,
} from "./services/fack.backend";

// Signin page
import Signin from "./auth/signin";

// Authentication
import Login from "./pages/authentication/login";
import LoginWithBgImage from "./pages/authentication/loginWithBgImage";
import LoginWithBgVideo from "./pages/authentication/loginWithBgVideo";
import LoginWithValidation from "./pages/authentication/loginwithValidation";
import Register from "./pages/authentication/register";
import RegisterWithBgImage from "./pages/authentication/registerWithBgImage";
import RegisterWithBgVideo from "./pages/authentication/registerWithBgVideo";
import UnlockUser from "./pages/authentication/unlockUser";
import Forgetpwd from "./pages/authentication/forgetpwd";
import Resetpwd from "./pages/authentication/resetpwd";

// Error page
import Error400 from "./pages/errors/error400";
import Error401 from "./pages/errors/error401";
import Error403 from "./pages/errors/error403";
import Error404 from "./pages/errors/error404";
import Error500 from "./pages/errors/error500";
import Error503 from "./pages/errors/error503";

// Comming soo
import Comingsoon from "./pages/comingSoon/comingsoon";
import ComingsoonImg from "./pages/comingSoon/comingsoonImg";
import ComingsoonVideo from "./pages/comingSoon/comingsoonVideo";

// Maintenanc
import Maintenance from "./pages/maintenance";

import Callback from "./auth/callback";

// setup fake backend
configureFakeBackend();

const Root = (props) => {
  const [anim, setAnim] = useState("");
  const animation =
    localStorage.getItem("animation") ||
    ConfigDB.data.router_animation ||
    "fade";
  const abortController = new AbortController();
  const [currentUser, setCurrentUser] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const jwt_token = localStorage.getItem("token");

  useEffect(() => {
    const requestOptions = { method: "GET", headers: authHeader() };
    fetch("/users", requestOptions).then(handleResponse);
    setAnim(animation);
    firebase_app.auth().onAuthStateChanged(setCurrentUser);
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;

    return function cleanup() {
      abortController.abort();
    };

    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Auth0Provider
        domain={auth0.domain}
        clientId={auth0.clientId}
        redirectUri={auth0.redirectUri}
      >
        <Provider store={store}>
          <BrowserRouter basename={`/`}>
            <Switch>
              <Route path={`/login`} component={Signin} />
              <Route path={`/pages/auth/login`} component={Login}></Route>
              <Route
                path={`/pages/auth/loginWithBgImg1`}
                component={LoginWithBgImage}
              ></Route>
              <Route
                path={`/pages/auth/loginWithBgImg2`}
                component={LoginWithBgVideo}
              ></Route>
              <Route
                path={`/pages/auth/loginWithValidation`}
                component={LoginWithValidation}
              ></Route>
              <Route path={`/pages/auth/signup`} component={Register}></Route>
              <Route
                path={`/pages/auth/signupWithImg1`}
                component={RegisterWithBgImage}
              ></Route>
              <Route
                path={`/pages/auth/signupWithImg2`}
                component={RegisterWithBgVideo}
              ></Route>
              <Route
                path={`/pages/auth/forgetPwd`}
                component={Forgetpwd}
              ></Route>
              <Route
                path={`/pages/auth/unlockUser`}
                component={UnlockUser}
              ></Route>
              <Route path={`/pages/auth/resetPwd`} component={Resetpwd}></Route>

              <Route
                path={`/pages/errors/error400`}
                component={Error400}
              ></Route>
              <Route
                path={`/pages/errors/error401`}
                component={Error401}
              ></Route>
              <Route
                path={`/pages/errors/error403`}
                component={Error403}
              ></Route>
              <Route
                path={`/pages/errors/error404`}
                component={Error404}
              ></Route>
              <Route
                path={`/pages/errors/error500`}
                component={Error500}
              ></Route>
              <Route
                path={`/pages/errors/error503`}
                component={Error503}
              ></Route>

              <Route
                path={`/pages/comingsoon/comingsoon`}
                component={Comingsoon}
              ></Route>
              <Route
                path={`/pages/comingsoon/comingsoonImg`}
                component={ComingsoonImg}
              ></Route>
              <Route
                path={`/pages/comingsoon/comingsoonVideo`}
                component={ComingsoonVideo}
              ></Route>

              <Route
                path={`/pages/maintenance`}
                component={Maintenance}
              ></Route>

              <Route path={`/callback`} render={() => <Callback />} />

              {currentUser !== null || authenticated || jwt_token ? (
                <App>
                  <Route
                    exact
                    path={`/`}
                    render={() => {
                      return <Redirect to={`/dashboard/default`} />;
                    }}
                  />
                  <TransitionGroup>
                    {routes.map(({ path, Component }) => (
                      <Route key={path} exact path={`${path}`}>
                        {({ match }) => (
                          <CSSTransition
                            in={match != null}
                            timeout={100}
                            classNames={anim}
                            unmountOnExit
                          >
                            <div>
                              <Component />
                            </div>
                          </CSSTransition>
                        )}
                      </Route>
                    ))}
                  </TransitionGroup>
                </App>
              ) : (
                <Redirect to={`/login`} />
              )}
            </Switch>
          </BrowserRouter>
        </Provider>
      </Auth0Provider>
    </Fragment>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.unregister();
