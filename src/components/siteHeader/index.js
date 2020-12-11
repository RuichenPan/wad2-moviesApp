import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./siteHeader.css";
import { Menu, Dropdown,message} from 'antd';
import {UserOutlined } from '@ant-design/icons';
const SiteHeader = () => {
  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  
  const menu = (
    <Menu onClick={handleMenuClick}>
      
            <Link className="nav-link" to="/signup"> 
            <Menu.Item key="1" icon={<UserOutlined />}>
        Sign Up
            </Menu.Item></Link>

     
      <Link className="nav-link" to="/login"> 
      <Menu.Item key="2" icon={<UserOutlined />}>
        Log In
      </Menu.Item></Link>
      <Link className="nav-link" to="/logout">
      <Menu.Item key="3" icon={<UserOutlined />}>
        Log Out
      </Menu.Item></Link>
    </Menu>
  );
  return (
    <nav className="navbar  navbar-light fixed-top  bg-dark ">
                
            <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<UserOutlined />}>
            </Dropdown.Button>
          
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"  width="200" height="50" />
        </Link>
      </nav>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "video"]}
        size="3x"
      />
      <span className="navbar-text text-light">
        For the movie enthusiast !!
      </span>
      <FontAwesomeIcon
        className="navbar-text text-light"
        icon={["fas", "film"]}
        size="3x"
      />
      <nav className="navbar navbar-expand ">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/Upcoming">
              Upcoming
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/favorites">
              Favorites
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/toprated">
              Top Rated
            </Link>
          </li>         
           <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/watchList">
              Watch List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/movies/nowplaying">
              Now Playing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/actors">
              Popular Actors
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/actors/favorites">
              Favorite Actors
            </Link>
          </li>
          
        </ul>
      </nav>
      </nav>
  );
};

export default SiteHeader;


