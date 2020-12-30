import React, { Component } from 'react';

class PlanningFor extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="planningFor_container" id='planningFor_container'>
                <h2><b>Planning for Medical Emergencies</b></h2>
                <p>Prior to each operational period, Incident
                Commanders, supervisors, and all wildland
                firefighters need to ask and be able to answer the
                following three questions:</p>
                <p>1. What are we going to do if someone gets hurt?</p>
                <p>• Are there personnel on your crew/division/fire that can provide medical support?</p>
                <p>• What type of equipment is available to treat and transport injured personnel?</p>
                <p>2. How will we get them out of here?</p>
                <p>• Could you get an injured firefighter to a road or to a helispot?</p>
                <p>• How many personnel and what kind of equipment would you need to get an injured firefighter out?</p>
                <p>3. How long will it take to get them to a hospital?</p>
                <p>• Where is the closest hospital?</p>
                <p>• Will you use air or ground transportation?</p>
                <p>• Could conditions change and affect the transportation timeline?</p>
                <p>- Smoke/clouds/nightfall</p>
                <p>- Fire behavior</p>
                <p>- Mechanical failures</p>
                <i>All operational activities should be based on answers to these questions. If the answers are insufficient, stop, reassess, and consider alternate strategies and tactics.</i>
            </div>
         );
    }
}
 
export default PlanningFor;