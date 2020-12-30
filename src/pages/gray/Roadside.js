import React, { Component } from 'react';

class Roadside extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="roadside_container">
                <h2><b>Roadside Response Safety</b></h2>
                <p>
                • Anytime traffic flow is affected by the incident,
                contact the jurisdictional law enforcement agency
                for assistance. <br/>
                • Conduct all operations as far from traffic lanes as
                possible. <br/>
                • When working in traffic and not involved in fire
                suppression activities, high visibility vests must
                be worn. <br/>
                • Park vehicles on the same side of the roadway. <br/>
                • Exit the vehicle away from the roadway
                whenever possible. <br/>
                • Post lookouts to watch for and control traffic in
                both directions. <br/>
                • Utilize road flares or other traffic warning signs. <br/>
                • Operate pumps from the non-traffic side or from
                the cab of the fire apparatus. <br/>
                • Keep all hose, fire tools, and equipment out of
                traffic lanes.
                </p>
            </div>
         );
    }
}
 
export default Roadside;