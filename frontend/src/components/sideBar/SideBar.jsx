import React from 'react';
import { Link } from 'react-router-dom';
import './sideBar.css';
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle, FiLogOut } from 'react-icons/fi';
import { FaUserFriends, FaBriefcase } from 'react-icons/fa';
import { RiMessage2Line, RiNotification3Line } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';

const SideBar = () => {
  return (
    <div className='side-bar'>
      <ul>
        <li><Link to="/"><FiHome /> Home</Link></li>
        <li><Link to="/friends"><FaUserFriends /> Friends</Link></li>
        <li><Link to="/jobs"><FaBriefcase /> Jobs</Link></li>
        <li><Link to="/messages"><RiMessage2Line /> Messages</Link></li>
        <li><Link to="/notifications"><RiNotification3Line /> Notifications</Link></li>
        <li><Link to="/settings"><BiCog /> Settings</Link></li>
        <li><Link to="/logout"><FiLogOut /> Logout</Link></li>
      </ul>
    </div>
  )
}

export default SideBar;
