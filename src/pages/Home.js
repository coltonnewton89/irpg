import React, { Component } from 'react';
import '../theme/Home.css'
import cover from '../imgs/cover.png'
import Main from './Main'

class Home extends Component {
    state = { 
        open: false,
     }

     openUp =()=> {
         this.setState({open: !this.state.open})
         console.log(this.state.open)
     }
    render() { 
        return ( 
            <div className="homeShell">
                {
                    // !this.state.open ? 
                    //     <div className='homeContainer'>
                    //     <h1 className='coverTitle'>IRPG</h1>
                    //     <img className='coverImg' src={cover} alt="image of helicopter"/>
                    //     <p className='openBtn' onClick={this.openUp}>Open</p>
                    //     </div> :
                    <Main/>
                }
                
            </div>
         );
    }
}
 
export default Home;