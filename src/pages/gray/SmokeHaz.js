import React, { Component } from 'react';

class SmokeHaz extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="smokeHaz_container">
                <h2><b>Smoke Hazards and Mitigation</b></h2>
                <b>1. Line Personnel</b>
                <br/>
                • Direct attack, line holding and mop up resources
                have the highest smoke exposures. Symptoms of
                over exposure start with headaches and visual
                impairment, then impaired decision making, and
                possible death (from carbon monoxide). If
                needed rotate resources in and out of smoky
                areas. Consider exposure when developing mop
                up standards. <br/>
                • Use lookouts to monitor and communicate
                hazardous smoke conditions that may impact
                nearby roads. Make appropriate supervisory
                and/or safety notifications.
                <br/>
                <br/>
                <b>2. ICP/Spike Camps</b> <br/>
                • Avoid locating camps in valleys or lower lying
                areas where smoke can concentrate under
                potential inversion conditions, in drainages where
                smoke can flow through, or where the fire is
                adjacent to camp.
                <br/>
                <br/>
                <b>3. Public</b> <br/>
                • Identify possible smoke sensitive areas (roads,
                communities, which can include schools and
                hospitals, etc.) that may be impacted by smoke.
                Monitor smoke impacts, and when heavy smoke
                is expected or present, notify authorities such as
                the air regulatory agency, health department, or
                public safety directly or through dispatch.
            </div>
         );
    }
}
 
export default SmokeHaz;