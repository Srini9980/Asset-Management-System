import React from 'react';
import { Link } from 'react-router-dom';
import h1 from '../assets/h1.jpg';
import a1 from '../assets/a1.webp';
import a2 from '../assets/a2.jpg';
import a3 from '../assets/a3.jpg';
import logo from '../assets/logo.jpg';
import Footer from '../footer/Footer';

function HomePage() {

    return (
        <div>
            <div
                id='intro-example'
                className='p-5 text-center bg-image '
                style={{ backgroundImage: `url(${h1})`, width: "100%", height: "750px" }}>
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', width: "100%", height: "270px" }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-balck'>
                            <img src={logo} className="rounded" alt="Logo" width="80px" height="80px" />
                            <h1 className='mb-2'><b><em>WELCOME! </em></b></h1>
                            <h4 className='mb-3'><b>ASSET-MANAGEMENT-SYSTEM</b></h4>
                            <Link
                                className='btn btn-outline-light btn-lg m-2'
                                to='/user/login'
                                role='button'
                                rel='nofollow'>SignIn</Link>
                            <Link
                                className='btn btn-outline-light btn-lg m-3'
                                to='/user/login'
                                role='button'>SignUp</Link>
                        </div>
                    </div>
                </div><br></br>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <img src={a1} className="rounded-circle" alt="Asset" width="350px" height="250px" />
                    <img src={a2} className="rounded-circle" alt="Shipment" width="350px" height="250px" />
                    <img src={a3} className="rounded-circle" alt="Warehouse" width="350px" height="250px" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage;