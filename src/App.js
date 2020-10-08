import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Axios from "axios";
import "./App.css";
import Home from "./Home";
import Profile from "./Profile";
import Confirmation from "./Confirmation";
import Topup from "./Topup";
import InputTransfer from "./InputTransfer";
import Transfer from "./Transfer";
import { HeaderNav, FooterNav, Navbar, History } from "./Components";

function App() {
  const [data, setData] = useState([]);
  const path = window.location.href.split("/");
  const id = path[path.length - 1];
  useEffect(() => {
    Axios.get(`http://localhost:8000/api/users/${id}`)
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(data);

  return (
    <Router>
      <div className="container-fluid bg-index p-0 d-flex flex-column">
        <header>
          <HeaderNav data={data} />
        </header>
        <div className="h-100">
          <div className="row mx-0 px-4 py-4  h-100">
            <div className="col-3 px-3">
              <Navbar />
            </div>
            <div className="col-9 pl-lg-2">
              <Switch>
                <Route exact path="/:id">
                  <Home data={data} />
                </Route>
                <Route exact path="/:id/transfer">
                  <Transfer />
                </Route>
                <Route exact path="/:id/topup">
                  <Topup />
                </Route>
                <Route exact path="/:id/profile">
                  <Profile data={data} />
                </Route>
                <Route exact path="/:id/history">
                  <History />
                </Route>
                <Route exact path="/:id/id/confirmation/to/:to">
                  <Confirmation />
                </Route>
                <Route exact path="/:id/id/input_transfer/:to">
                  <InputTransfer />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <footer className="justify-content-end align-items-end">
          <FooterNav />
        </footer>
      </div>
    </Router>
  );
}

export default App;
