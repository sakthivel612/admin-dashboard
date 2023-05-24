import React, { useState } from "react";
import {
  FaArrowRight,
  FaChartArea,
  FaCog,
  FaFolder,
  FaLaughWink,
  FaList,
  FaTable,
  FaTachometerAlt,
  FaWrench,
} from "react-icons/fa";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul className="navbar-nav ">
        <a className="sidebar" href="#">
          <div className="side-bar-icon">
            <FaLaughWink className="laugh-icon" />
          </div>
          <div className="side-bar-text">
            SB Admin <sup>2</sup>
          </div>
        </a>
        <hr className="side-bar-line1"></hr>
        <li className="nav-item">
          <a className="nav-link1 active" href="#">
            <FaTachometerAlt className="tachometer tachometer-alt"/>
            <span>Dashboard</span>
          </a>
        </li>
        <hr className="side-bar-line2"></hr>
        <div className="sidebar-heading">Interface</div>
        <li className="nav-item">
          <a
            className="nav-link1 collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            <FaCog className="facog" />
            <span>Components</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="#">
            <FaWrench className="Wrench" />
            <span>Utilities</span>
          </a>
        </li>
        <hr className="side-bar-line2"></hr>
        <div className="sidebar-heading">ADDons</div>
        <li className="nav-item">
          <a className="nav-link1" href="#">
            <FaFolder className="faFolder" />
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="#">
            <FaChartArea className="facog" />
            <span>Charts</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link1" href="#">
            <FaTable className="facog" />
            <span>Tables</span>
          </a>
        </li>
        <hr className="side-bar-line3"></hr>
        <div className="text-button">
          <button className="rounded-button"></button>
        </div>
      </ul>
    </div>
  );
};

export default SideMenu;
