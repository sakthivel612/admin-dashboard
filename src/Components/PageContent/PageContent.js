import React from "react";
import {
  FaBars,
  FaBell,
  FaCalendar,
  FaClipboard,
  FaClipboardList,
  FaComments,
  FaDollarSign,
  FaDownload,
  FaEllipsisV,
  FaEnvelope,
  FaSearch,
} from "react-icons/fa";
import "./PageContent.css";
import { Canvas } from "canvas";
import AppFooter from "../AppFooter/AppFooter";

const PageContent = () => {
  return (
    <div className="total-Page-content">
      <div className="PageContent">
        <nav className="pageContent-nav-bar">
          <button id="siderbar-ToggleTop" className="ToggleTop-btn">
            <FaBars className="Fa-bar" />
          </button>
          <form className="search-bar">
            <div className="input-search">
              <input
                type="text"
                className="form-controll"
                placeholder="Search for..."
              ></input>
              <div className="input-group-append">
                <button type="button" className="search-btn">
                  <FaSearch className="search-icon" />
                </button>
              </div>
            </div>
          </form>
          <ul className="pageContent-navbar">
            <li className="pageContent-navItem">
              <a className="nav-link" href="#">
                <FaSearch className="search-icon1"/>
              </a>
            </li>
            <li className="pageContent-navItem">
              <a className="nav-link" href="#">
                <FaBell className="bell-icon" />
                <span className="bage-count">3+</span>
              </a>
            </li>
            <li className="pageContent-navItem">
              <a className="nav-link" href="#">
                <FaEnvelope className="bell-icon" />
                <span className="bage-count">7</span>
              </a>
            </li>
            <div className="topbar-divider"></div>
            <li className="pageContent-navItem">
              <a className="nav-link" href="#">
                <span className="profile-text">Douglas McGee</span>
                <img
                  className="img-profile"
                  src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
                  alt="profileimage"
                />
              </a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="Content-Dashboard">
            <h1 className="Dashboard-name">Dashboard</h1>
            <a className="generate-report" href="#">
              <FaDownload className="faDownload" /> Generate Report
            </a>
          </div>
          <div className="row">
            <div className="Earnings-month">
              <div className="Month-card">
                <div className="card-body">
                  <div className="card-body-details1">
                    <div className="card-body-details2">
                      <div className="Earnings-month-text">
                        Earnings (Monthly)
                      </div>
                      <div className="rupees">$40,000</div>
                    </div>
                    <div className="calender-box">
                      <FaCalendar className="Fa-calender" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Earnings-annual">
              <div className="Annual-card">
                <div className="card-body">
                  <div className="card-body-details1">
                    <div className="card-body-details2">
                      <div className="Earnings-Annual-text">
                        Earnings (Annual)
                      </div>
                      <div className="rupees">$215,000</div>
                    </div>
                    <div className="dollar-box">
                      <FaDollarSign className="Fa-dollar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Task">
              <div className="Task-card">
                <div className="card-body">
                  <div className="card-body-details1">
                    <div className="card-body-details2">
                      <div className="Task-text">Tasks</div>
                      <div className="percentage-box">
                        <div className="percentage">
                          <div className="percentage-count">50%</div>
                        </div>
                        <div className="prograss">
                          <div className="Task-prograss">
                            <div className="prograss-bar"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clipboard-box">
                      <FaClipboardList className="Fa-clipboard" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Pending-Request">
              <div className="Pending-card">
                <div className="card-body">
                  <div className="card-body-details1">
                    <div className="card-body-details2">
                      <div className="Pending-Request-text">
                        Pending Request
                      </div>
                      <div className="request-count">18</div>
                    </div>
                    <div className="calender-box">
                      <FaComments className="Fa-comments" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="project-card">
              <div className="project-card-shadow">
                <div className="project-header">
                  <h6 className="project-text">Projects</h6>
                </div>
                <div className="project-card-body">
                  <h4 className="project-title">
                    Server Migration
                    <span className="project-percentage">20%</span>
                  </h4>
                  <div className="project-progress">
                    <div className="project-bar1"></div>
                  </div>
                  <h4 className="project-title">
                    Sales Tracking
                    <span className="project-percentage">40%</span>
                  </h4>
                  <div className="project-progress">
                    <div className="project-bar2"></div>
                  </div>
                  <h4 className="project-title">
                    Customer Database
                    <span className="project-percentage">60%</span>
                  </h4>
                  <div className="project-progress">
                    <div className="project-bar3"></div>
                  </div>
                  <h4 className="project-title">
                    Payout Details
                    <span className="project-percentage">80%</span>
                  </h4>
                  <div className="project-progress">
                    <div className="project-bar4"></div>
                  </div>
                  <h4 className="project-title">
                    Account Setup
                    <span className="project-percentage">Complete!</span>
                  </h4>
                  <div className="project-progress">
                    <div className="project-bar5"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="color-card">
                  <div className="Primary-color">
                    <div className="Primary-text">
                      Primary
                      <div className="color-code">#4e73df</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Success-color">
                    <div className="Success-text">
                      Success
                      <div className="color-code">#1cc88a</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Info-color">
                    <div className="Info-text">
                      Info
                      <div className="color-code">#36b9cc</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Warning-color">
                    <div className="Warning-text">
                      Warning
                      <div className="color-code">#f6c23e</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Danger-color">
                    <div className="Danger-text">
                      Danger
                      <div className="color-code">#e74a3b</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Secondary-color">
                    <div className="Secondary-text">
                      Secondary
                      <div className="color-code">#858796</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Light-color">
                    <div className="Light-text">
                      Light
                      <div className="Light-color-code">#f8f9fc</div>
                    </div>
                  </div>
                </div>
                <div className="color-card">
                  <div className="Dark-color">
                    <div className="Dark-text">
                      Dark
                      <div className="color-code">#5a5c69</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="Illustrations">
              <div className="Illustrations-card">
                <div className="Illustrations-card-header">
                  <h6 className="Illustrations-text">Illustrations</h6>
                  <div className="Illustration-card-body">
                    <div className="text-center">
                      <img
                        className="Illustration-img"
                        src="https://labocare.org/assets/img/undraw_posting_photo.svg"
                        alt="Illustration_image"
                      />
                    </div>
                    <p>
                      Add some quality, svg illustrations to your project
                      courtesy of unDraw, a constantly updated collection of
                      beautiful svg images that you can use completely free and
                      without attribution!
                    </p>
                    <a href="#">Browse Illustrations on unDraw →</a>
                  </div>
                </div>
              </div>
              <div className="Approach-card">
                <div className="Approach-card-header">
                  <h6 className="Approach-text">Devlopment Approach</h6>
                </div>
                <div className="Approach-card-body">
                  <p>
                    SB Admin 2 makes extensive use of Bootstrap 4 utility
                    classes in order to reduce CSS bloat and poor page
                    performance. Custom CSS classes are used to create custom
                    components and custom utility classes.
                  </p>
                  <p>
                    Before working with this theme, you should become familiar
                    with the Bootstrap framework, especially the utility
                    classes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default PageContent;
