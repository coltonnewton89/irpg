import React, { Component } from 'react';

class CommonDen extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="commonDen_container" id='commonDen_container'>
                <h2><b>Common Denominators of Fire Behavior on Tragedy Fires</b></h2>
                <p>There are five major common denominators of fire behavior on fatal and near-fatal fires. Such fires often occur:</p>
                <p>1. On relatively small fires or deceptively quiet areas of large fires.</p>
                <p>2. In relatively light fuels, such as grass, herbs, and light brush.</p>
                <p>3. When there is an unexpected shift in wind direction or in wind speed.</p>
                <p>4. When fire responds to topographic conditions and runs uphill.</p>
                <p>5. Critical burn period between 1400 and 1700.</p>
                <br/>
                <p>Alignment of topography and wind during the critical
                burning period should be considered a trigger point to
                reevaluate tactics. Blowup to burnover conditions
                generally occur in less than 60 minutes and can be as
                little as 5 minutes. A tactical pause may be prudent
                around 1400 for reevaluating your situational
                awareness of topography, weather, and fuel.</p>
            </div>
         );
    }
}
 
export default CommonDen;