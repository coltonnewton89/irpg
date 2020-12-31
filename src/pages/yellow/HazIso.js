import React, { Component } from 'react';

class HazIso extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="hazIso_container" id='hazIso_container'>
                <h2><b>HazMat Isolation Distances</b></h2>
                <p>
                • Minor event (1 drum, 1 bag, etc.) = 150 feet <br/>
                • Major event (1 drum or more, etc.) = 500 feet <br/>
                • Residential and light commercial = 300 feet <br/>
                • Open areas = 1,000 feet <br/>
                • BLEVE (Boiling Liquid Expanding Vapor <br/>
                Explosion) potential = 2,500 feet (one-half mile) <br/>
                • Stage arriving units 2,500 feet upwind <br/>
                • Position vehicles headed out 
                </p>
                <p>
                The following 24-hour emergency response
                communication services have agreed to provide
                immediate information about chemicals and/or
                assistance from a manufacturer: 
                </p>
                <b>CHEMTREC 1-800-424-9300</b> <br/>
                <b>CHEMTEL 1-800-255-3924</b> <br/>
                <b>INFOTRAC 1-800-535-5053</b> <br/>
                <b>3E COMPANY 1-800-451-8346</b>
                <p>
                U.S. Army Operations Center for incidents involving
                explosives and ammunition: <b>(703) 697-0218</b>
                </p>
                <p>
                24-hour emergency and information calls to the
                nearest Poison Center: <b>1-800-222-1222</b>
                </p>
                <p>
                Federal law requires that all spills of hazardous
                substances must be immediately reported to the U.S.
                Coast Guard/National Response Center:
                <b>1-800-424-8802</b>
                </p>
            </div>
         );
    }
}
 
export default HazIso;