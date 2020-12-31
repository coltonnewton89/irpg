import React, { Component } from 'react';

class Vehicle extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='vehicle_container' id='vehicle_container'>
                <h2><b>Vehicle Accident Operations</b></h2>
                <b>Report on Conditions</b>
                • Hazards (fuel, electrical, traffic, access, etc.). <br/>
                • Need for law enforcement, ambulance,
                helicopter, tow truck, extrication tools.<br/>
                • Injuries (number of victims, severity).<br/>
                • Vehicles (number, type).
                <br/> <br/>
                <b>Establish Traffic Control</b>
                • Place apparatus between oncoming traffic and
                rescuers. Keep exhaust from pointing at scene
                and victims. <br/>
                • Place warning devices. <br/>
                • Establish positive communications. <br/>
                • Consider the use of high visibility vests.
                <br/> <br/>
                <b>Assess Fire Hazard or Potential</b>
                • Take suppression action as needed if trained, equipped and authorized. <br/>
                • Be aware of fuels running downgrade.
                <br/> <br/>
                <b>Perform Patient Assessment</b>
                • Provide first aid or triage assessment. <br/>
                • If there are fatalities, do not give names or other
                information over radio that would reveal identity,
                and do not move body. <br/> 
                <b>Keep dispatcher advised of changes.
                Document all actions taken.</b>
            </div>
         );
    }
}
 
export default Vehicle;