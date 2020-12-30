import React, { Component } from 'react';

class SmokeTrans extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="smokeTrans_container" id='smokeTrans_container'>
                <h2><b>Smoke and Transportation Safety</b></h2>
                <p><b>1. Assess safety risks to personnel and public posed
                by smoke on roads.</b> During initial attack and/or daily
                sizeup on extended attack, evaluate the potential of
                smoke to impact roadways up to three miles away.
                Identify drainages that may allow for smoke to impact
                roadways during the night and early morning.</p>
                <b>
                2. Critical threshold values that identify potential
                for reduced visibility: <br/>
                - Surface Temperature ≤ 70 ⁰ F <br/>
                - RH ≥ 70 % <br/>
                - Surface Wind Speed &#60; 7 mph <br/>
                - Cloud Cover ≤ 60 %
                </b>
                <p>
                    <b>3. Hazard Control:</b> Mitigate when roadway visibility
                    is expected to be impacted. Consider use of: smoke
                    observers, smoke signs, reduced speed limit, drone
                    car, lead car, lane closure, or, if necessary, entire road
                    closure. Notify appropriate authorities.
                </p>
                <b>Consider use of local, regional, or national air
                resource or meteorological specialists (Air
                Resource Advisors (THSP), Incident Meteorologist
                (IMET)).</b>
            </div>
         );
    }
}
 
export default SmokeTrans;