import Link from "next/link";
import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="navbar">
          <a className="navbar-brand">
            <img
              src="../static/S-Logos-White-05.png"
              alt="Soulistic Music Logo"
              height="96"
            />
          </a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/schedule">
                  <a className="nav-link">Schedule</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/music">
                  <a className="nav-link">Music</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/bookings">
                  <a className="nav-link">Bookings</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
