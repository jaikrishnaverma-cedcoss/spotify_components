import React, { Component } from 'react'
class Component6 extends Component {
    state = {}
    render() {
        return (
            <>
                <div className='box box3 box4 cv' >
                    <div className='footer' style={{ width: "60%", display: 'flex', justifyContent: "space-between" }}>
                        <div className="col"><div className='logo'><h2 style={{ display: "flex" }}><i class="fa fa-spotify" aria-hidden="true"></i>Spotify</h2></div></div>
                        <div className="col">
                            <p>COMPANY</p>
                            <p>About</p>
                            <p>Job</p>
                            <p>For the Record</p>
                        </div>
                        <div className="col">
                            <p>COMMUNITIES</p>
                            <p>For Artists</p>
                            <p>Developers</p>
                            <p>Adverstising</p>
                            <p>Investors</p>
                            <p>Vendors</p>
                        </div>
                        <div className="col">
                            <p>USEFUL LINKS</p>
                            <p>Support</p>
                            <p>Web Players</p>
                            <p>Free Mobile App</p>
                        </div>
                        <div className="col" style={{width:"10%"}}></div>
                        <div className="col" style={{width:"22.66%"}}><div className="flex" style={{width:"100%",justifyContent:"space-between"}}>
                            <div className='circle'><i class="fa fa-instagram" aria-hidden="true"></i></div>
                            <div className='circle'><i class="fa fa-twitter" aria-hidden="true"></i></div>
                            <div className='circle'><i class="fa fa-facebook" aria-hidden="true"></i></div>
                        </div>
                        </div>
                       
                    </div>
                    <div className="flex" style={{justifyContent:'space-between',width:"60%",margin:"20px 0px"}}>
                            <div className='display:flex' style={{width:"300px",justifyContent:"space-between",alignItems:"flex-end"}}>
                                <p>Legal</p>
                                <p>Privacy Center</p>
                                <p>Privacy Policy</p>
                                <p>Cookies</p>
                                <p>About Ads</p>
                            </div>
                            <div style={{display:"flex",flexDirection:"column",}}>
                                <p><i class="fa fa-globe" aria-hidden="true"></i> India (English)</p>
                                <p>&copy; 2022 Spotify AB</p>
                            </div>
                            </div>





                </div>
            </>
        );
    }
}

export default Component6;