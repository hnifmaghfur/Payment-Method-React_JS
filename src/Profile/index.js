import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Samuel from "../assets/img/samuel.svg";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="d-flex flex-column align-items-center py-5 rounded-12 shadow-sm bg-white h-100">
          <img
            src={require("../assets/img/samuel.svg")}
            alt=""
            srcSet=""
            className="mt-3"
          />
          <div className="small font-light">
            <img
              src={require("../assets/img/pencil.svg")}
              width="15px"
              height="15px"
              className="my-2"
              alt=""
            />
            edit
          </div>
          <div className="font-lg font-20">Robert Chadler</div>
          <div className="font-medium font-20 mb-5">phone</div>
          <Link
            to=""
            className="bg-grey-50 text-decoration-none text-black-50 w-50 p-3 rounded-7 my-2"
          >
            <div className="row">
              <div className="font-medium font-15 col-10 mr-3">
                Personal Information
              </div>
              <img
                src={require("../assets/img/arrow-left.svg")}
                alt=""
                className="justy-self-end"
              />
            </div>
          </Link>
          <Link
            to=""
            className="bg-grey-50 text-decoration-none text-black-50 w-50 p-3 rounded-7 my-2"
          >
            <div className="row">
              <div className="font-medium font-15 col-10 mr-3">
                Change Password
              </div>
              <img
                src={require("../assets/img/arrow-left.svg")}
                alt=""
                className="justy-self-end"
              />
            </div>
          </Link>
          <Link
            to=""
            className="bg-grey-50 text-decoration-none text-black-50 w-50 p-3 rounded-7 my-2"
          >
            <div className="row">
              <div className="font-medium font-15 col-10 mr-3">Change PIN</div>
              <img
                src={require("../assets/img/arrow-left.svg")}
                alt=""
                className="justy-self-end"
              />
            </div>
          </Link>
          <Link
            to=""
            className="bg-grey-50 text-decoration-none text-black-50 w-50 p-3 rounded-7 my-2"
          >
            <div className="row">
              <div className="font-medium font-15 col-10 pr-0">Logout</div>
              <img src="awd.jpg" alt="" className="justy-self-end" />
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default Profile;
