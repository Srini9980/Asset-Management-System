import React from "react";
import b1 from '../assets/bg.jpg';
import b2 from '../assets/tb.png';
import b3 from '../assets/shipcircle.png';
import b4 from '../assets/wc.png';
import Marquee from "react-fast-marquee";
import Navbar from "../navBar/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from '../footer/Footer';

function AdminDashboard() {

    const navigate = useNavigate();
    navigate("");

    const myUser = localStorage.getItem("myUser");
    console.log(myUser);

    return (
        <div>
            {myUser !== null ?
        <div style={{ backgroundImage: `url(${b1})`, width: "100%", height: "1800px" }}>
            <Navbar />
            <div>
                
                    <div style={{ fontFamily: "inherit", fontSize: "30px", color: "silver" }}>
                        <h3><u><i>Hello {JSON.parse(myUser).userName}</i></u></h3>
                        <Marquee direction="right"><h1><u><i>Admin Dashboard</i></u></h1><br></br></Marquee>
                    </div>
                <div>
                    <img style={{ float: "left" }} src={b2} alt="admin-medal" width="150px" height="150px" />
                    <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "goldenrod" }}>Administrators, commonly known as admins or sysops (system operators), are Wikipedia editors who have been
                        granted the technical ability to perform certain special actions on the English Wikipedia. These include the
                        ability to block and unblock user accounts, IP addresses, and IP ranges from editing, edit fully protected
                        pages, protect and unprotect pages from editing, delete and undelete pages, rename pages without restriction,
                        and use certain other tools.</p><br></br><br></br>
                    <hr style={{ color: "white" }}></hr>
                    <img style={{ float: "right" }} src={b3} alt="shipment-graph" width="250px" height="350px" /><br></br><br></br><br></br><br></br>
                    <p style={{ fontFamilt: "inherit", fontSize: "20px", color: "goldenrod" }}>Administrators assume these responsibilities as volunteers after undergoing a community review process. They do
                        not act as employees of the Wikimedia Foundation. They are never required to use their tools, and must never use them
                        to gain an advantage in a dispute in which they were involved. Administrators should not be confused with Wikimedia
                        system administrators ("sysadmins").</p><br></br><br></br><br></br><br></br>
                    <hr style={{ color: "white" }}></hr>
                    <div style={{ float: "left" }}>
                        <h3 style={{ fontFamily: "initial", color: "ghostWhite", fontSize: "50px" }}><u>Administrators' abilities</u></h3>
                        <ul style={{ color: "silver" }}>
                            <p>1. Block and unblock user accounts and IP addresses from editing</p>
                            <p>2.  Apply, modify, and remove page protection on a particular page to restrict or allow editing, moving, or creation</p>
                            <p>3.  Delete pages with 5,000 or fewer revisions</p>
                            <p>4.  Grant and revoke certain user permissions requested by user accounts</p>
                            <p>5.  View and restore deleted pages</p>
                            <p>6.  Restrict and restore public visibility of information in individual logs and page revisions</p>
                            <p>7.  Edit fully protected pages</p>
                            <p>8.  Override the title blacklist</p>
                            <p>9.  Move a page to any desired title</p>
                        </ul><br></br>
                    </div>
                </div>
                <div>
                    <img src={b4} alt="warehouse" width="90%" height="600px" />
                </div>

            </div>
            <Footer/>
        </div>
        : <h2>Please Login</h2>
            }
        </div>
    )
}

export default AdminDashboard;