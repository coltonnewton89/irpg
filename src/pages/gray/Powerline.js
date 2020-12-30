import React, { Component } from 'react';

class Powerline extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="powerline_container" id='powerline_container'>
                <h2><b>Powerline Safety</b></h2>
                <p>Fire activity near high voltage electrical transmission/
                distribution lines can cause multiple hazards and
                electrocute or seriously injure firefighters. The IC and
                line supervisors must be aware and communicate
                powerline hazards to all resources. Contact power
                companies when powerlines are threatened or
                involved.</p>
                <br/>
                <b>Down Powerlines</b>
                <p>
                • Communicate: Notify all responders of down
                electrical lines. Obtain radio check-back. <br/>
                • Identify: Determine entire extent of hazard by
                visually tracking all lines, two poles in each
                direction, from the downed wire. <br/>
                • Isolate: Flag area around down wire hazards; post
                guards. <br/>
                • Deny entry: Delay firefighting actions until
                hazard identification and flagging are complete
                and/or confine actions to safe areas. <br/>
                • Downed line on vehicle: Stay in vehicle until the
                power company arrives. If vehicle is on fire,
                jump out with both feet together. Do not touch
                the vehicle. Keep feet together and shuffle or hop
                away.
                </p>
                <b>• Always treat downed wires as energized!</b>
                <br/>
                <br/>
                <b>Ground Tactics</b>
                <p>
                • Normal tactics apply when fire is more than 100 feet
                from powerlines. <br/>
                • Heavy smoke and flames can cause arcs to ground.
                Direct attack must be abandoned within 100 feet of
                transmission lines. <br/>
                • Spot fires or low ground fires can be fought with
                hose lines if heavy smoke or flame is not within 100
                feet of powerlines. <br/>
                • Always maintain a distance of 35 feet from
                transmission towers. <br/>
                • Never use straight streams or foam—use a fog
                pattern. <br/>
                • Use extreme caution if engaging in tactical firing
                operations. <br/>
                • Extinguish wooden poles burning at the base to
                prevent down wire hazards.  
                </p>
                <br/>
                <b>Aerial Tactics</b>
                <p>• Communicate locations of all transmission lines to
                air resources. <br/>
                • Aerial drops onto powerlines will cause arcing to
                ground or arcing to powerline towers and poles. <br/>
                • Drops should be parallel to lines and avoid drift
                making contact on the powerlines. <br/>
                • When flying across powerlines, cross at the towers.</p>
                <br/>
                <b>ALWAYS!</b>
                <p>• <b>Look Out</b> for any powerlines near the incident.</p>
                <p>• <b>Communicate</b> location of all powerlines that present a hazard.</p>
                <p>• <b>Escape Routes</b> should not be under or near overhead powerlines.</p>
                <p>• <b>Safety Zones, ICP, and staging areas</b> should not be located under or near overhead powerlines.</p>
            </div>
         );
    }
}
 
export default Powerline;