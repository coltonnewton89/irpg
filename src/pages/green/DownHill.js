import React, { Component } from 'react';

class DownHill extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="downHill_container" id='downHill_container'>
                <h2><b>Downhill Checklist</b></h2>
                <p>Downhill fireline construction is hazardous in steep
                terrain, fast-burning fuels, or rapidly changing
                weather. It should not be attempted unless there is no
                tactical alternative. When building downhill fireline,
                the following is required:</p>
                <p>1. Discuss assignments with crew supervisor(s) and
                fireline overhead prior to committing crew(s).
                Responsible overhead individual stays with job
                until completed (TFLD or ICT4 qualified or
                better).</p>
                <p>2. Decision is made after proposed fireline has been scouted by supervisor(s) of involved crew(s).</p>
                <p>3. Coordinate LCES for all personnel involved.</p>
                <p>• Crew supervisor(s) is in direct contact with lookout who can see the fire.</p>
                <p>• Establish communication between all crews.</p>
                <p>• Rapid access to safety zone(s) in case fire crosses below crew(s).</p>
                <p>4. Use direct attack whenever possible. If not
                possible, the fireline should be completed
                between anchor points before being fired out.</p>
                <p>5. Fireline will not lie in or adjacent to a chute or chimney.</p>
                <p>6. Starting point will be anchored for crew(s) building fireline down from the top.</p>
                <p>7. Monitor bottom of fire; if potential exists for the fire to spread, take action to secure the fire edge.</p>
            </div>
         );
    }
}
 
export default DownHill;