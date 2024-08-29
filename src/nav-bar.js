import './nav-bar.css';
import logo from './asserts/logo.png';
import { IoIosContacts } from "react-icons/io";
import { FaMoneyCheck } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoLibrary } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { PiStudentDuotone } from "react-icons/pi";
import { FaUserTie } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaClinicMedical } from "react-icons/fa";
import { FaBookOpenReader } from "react-icons/fa6";
import React, { useState } from 'react';

function Logo() {
    return (
        <img src={logo} alt='Logo' className='logoimg' />
    );
}

export default function Navbar() {
    const [regularStudents, setRegularStudents] = useState(8);
    const [remedialStudents, setRemedialStudents] = useState(13);
    const [inPaidClubs, setInPaidClubs] = useState(0);

    return (
        <div className='both'>
            <div className="nav-bar-left">
                <Logo />
                <IoIosContacts className='png' />
                <p className="png-name">Student management</p>
                <FaMoneyCheck className="png" />
                <p className="png-name">Money management</p>
                <RiDiscountPercentLine className='png' />
                <p className="png-name">Quality management</p>
                <IoLibrary className='png' />
                <p className="png-name">Quality management</p>
                <SiGoogleanalytics className='png' />
                <p className="png-name1">Attendance</p>
            </div>

            <div className='content'>
                <nav>
                    <h1>Student Management</h1>
                </nav>

                <div className="status-container">
                    <div
                        className="stat-item regular"
                        onMouseEnter={() => setRegularStudents(regularStudents + 1)}
                    >
                        <p><PiStudentDuotone style={{ height: '70px', width: '80px' }} /></p>
                        <p>{regularStudents}</p>
                        <span>Regular Students</span>
                    </div>

                    <div
                        className="stat-item remedial"
                        onMouseEnter={() => setRemedialStudents(remedialStudents + 1)}
                    >
                        <p><FaUserTie style={{ height: '70px', width: '80px' }} /></p>
                        <p>{remedialStudents}</p>
                        <span>Remedial Students</span>
                    </div>

                    <div
                        className="stat-item paid-clubs"
                        onMouseEnter={() => setInPaidClubs(inPaidClubs + 1)}
                    >
                        <p><IoIosContacts style={{ height: '70px', width: '80px' }} /></p>
                        <p>{inPaidClubs}</p>
                        <span>In Paid Clubs</span>
                    </div>
                </div>
                <hr></hr>
                 <h4>Menu</h4>
                <div className="menu">
                    <div className="menu-item"><p><FaUserAlt style={{height: '100px', width:'200px',color:'blue'}} /></p> Regular Enrollment</div>
                    <div className="menu-item"><p><FaBook style={{height: '100px', width:'200px',color:'blue'}} /></p>Remedial Enrollment</div>
                    <div className="menu-item"><p><PiStudentDuotone style={{height: '100px', width:'200px',color:'blue'}} /></p>Club Management</div>
                    <div className="menu-item"><p><FaBookOpenReader style={{height: '100px', width:'200px',color:'blue'}} /></p>Classroom Management</div>
                    <div className="menu-item"><p><MdEmail style={{height: '100px', width:'200px',color:'blue'}} /></p>SMS / Email</div>
                    <div className="menu-item"><p><FaFileAlt style={{height: '100px', width:'200px',color:'blue'}} /></p>Attendance</div>
                    <div className="menu-item"><p><FaClinicMedical style={{height: '100px', width:'200px',color:'blue'}} /></p>Clinic</div>
                </div>
            </div>

            </div>
    );
}
