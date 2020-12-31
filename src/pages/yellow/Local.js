import React, { Component } from 'react';

class Local extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="local_container" id='local_container'>
                <h2><b>Local Disaster Response</b></h2>
                <br/>
                <p>
                • Assess crew for injuries. <br/>
                • Move apparatus out of station if possible. <br/>
                • Determine if phones are working. <br/>
                • Check for power. <br/>
                • Assess the station for damage. <br/>
                • Monitor phone and radio for dispatch
                information. <br/>
                • Report by radio to dispatch or IC if established. <br/>
                • Initiate a “windshield survey” of first response
                area. <br/>
                • Do not fully commit to any incident. <br/>
                </p>
                <br/>
                <p>
                - Prioritize incidents with respect to life,
                hazard, and property. <br/>
                - Note any damage to infrastructure (roads,
                bridges, etc.). <br/>
                - Check for hazardous utility situations (gas,
                electric, water). <br/>
                - Note structural instability/collapse of any
                buildings. <br/>
                - Expect malfunctioning automatic alarms. <br/>
                - Use “negative reporting.” Only report things
                out of the ordinary.
                </p> <br/>
                • Follow local disaster plans.

            </div>
         );
    }
}
 
export default Local;