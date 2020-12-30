import React, { Component } from 'react';

class ContentGray extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsGray">
                    <h4>Specific Hazards</h4>
                    <a href="#refuse_container" className='contentLink'>How to Properly Refuse Risk</a>
                    <a href="#thunder_container" className='contentLink'>Thunderstorm Safety</a>
                    <a href="#tree_container" className='contentLink'>Hazard Tree Safety</a>
                    <a href="#powerline_container" className='contentLink'>Powerline Safety</a>
                    <a href="#roadside_container" className='contentLink'>Roadside Response Safety</a>
                    <a href="#uxo_container" className='contentLink'>Unexploded Ordinance Safety</a>
                    <a href="#oil_container" className='contentLink'>Oil and Gas Site Safety</a>
                    <a href="#smokeHaz_container" className='contentLink'>Smoke Hazards and Mitigation</a>
                    <a href="#smokeTrans_container" className='contentLink'>Smoke and Transport Safety</a>
                    <a href="#last_container" className='contentLink'>Last Resort Survival</a>
                </div>
         );
    }
}
 
export default ContentGray;