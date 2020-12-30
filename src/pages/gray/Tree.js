import React, { Component } from 'react';

class Tree extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="tree_container" id='tree_container'>
                <h2><b>Hazard Tree Safety</b></h2>
                <p>Hazard trees, both dead snags and live green trees, are
                one of the most common risks encountered on the
                fireline. All firefighters should frequently survey their
                work area for potential hazard trees.</p>
                <br/>
                <b>Situation Awareness</b>
                <p>
                <u>Environment:</u> <br/>
                • Current and forecasted winds <br/>
                • Night operations <br/>
                • Steep slopes <br/>
                • Diseased or bug-kill areas <br/>
                • Number and height of hazard trees <br/>
                • Anticipated burn-down time <br/>
                • Potential for trees to domino <br/>
                <u>Hazard tree indicators:</u> <br/>
                • Trees burning for any period of time <br/>
                • High risk tree species (rot and shallow roots) <br/>
                • Numerous downed trees <br/>
                • Dead, broken, or burning tops and limbs
                overhead <br/>
                • Accumulation of downed limbs <br/>
                • Absence of needles, bark, or limbs <br/>
                • Leaning or hung-up trees
                </p>
                <br/>
                <br/>
                <b>Hazard Control</b>
                <p>
                • Eliminate the hazards with qualified sawyers,
                blasters/explosives, or heavy equipment. <br/>
                • Avoid hazards by designating “No Work Zones”
                (flag, sign, and map). <br/>
                • Modify suppression tactics or fireline location to
                avoid high risk areas. <br/>
                • Post lookouts to help secure high risk areas. <br/>
                • Utilize road/traffic controls in high risk areas.
                • Fire proof potential hazard trees to prevent
                ignition. <br/>
                • Keep clear of bucket drops near trees/snags. <br/>
                • Reposition firefighters to secure areas in response
                to high winds in forecast. <br/>
                • Provide timely feedback to others regarding any
                hazard trees.
                </p>
                <b>
                In addition to suppression and mop up operations,
                assess, control, and monitor hazard trees along
                roads and when selecting break areas or campsites.
                </b>
            </div>
         );
    }
}
 
export default Tree;