import React, { Component } from 'react'
import './Head.css'
class Component1 extends Component {
    state = {  } 
   
  nav = {color: "white",display:"flex",justifyContent:"space-around",alignItem:"center",fontFamily: "Sans-Serif"
        };
  dnav={display:"flex",alignItem:"center",justifyContent:"center"};
  box={height:"320px",backgroundColor:"#6600ff"};
    render() { 
        return (
            <>
            <nav style={this.nav}><div  className='logo'><h1><i class="fa fa-spotify" aria-hidden="true"></i>Spotify</h1></div><div style={this.dnav} className="nav"><a href="" className="nava">Premium</a><a href="" className="nava">Support</a><a href="" className="nava">Download</a><a href="">|</a><a href="" className="nava">Sign up</a><a href="" className="nava">Log in</a></div></nav>
            <div className='box' style={this.box}>
                <div className='mid'>
                <h2>Get Premium free for 1 month</h2>
                <p>Just &#8377; 119/- Lorem ipsum dolor sit amet consectetur adipisicing elit, veniam!</p>
                <div className="flex">
                    <button>GET STARTED</button>
                    &nbsp;
                    <button>SEE OTHER PLANS</button>
                </div>
                <p className='p11'><a href="">Terms and conditions Apply.</a> Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
            </div>

            <div className='box' style={{height:"320px"}}>
            <div className='mid second'>
                <h2>Introducing Premium Mini</h2>
                <p>&#8377; 7 for 1 day.</p>
                <p>&#8377; 25 for 1 day.</p>
                <div className="flex xx">
                    <button>GET MINI</button>
               </div>
                <p className='p11'><a href="">Terms and conditions Apply.</a></p>
                </div>
            </div>

            
          
            </>
        );
    }
}

export default Component1;