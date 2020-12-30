import React, { Component } from 'react';

class Safety extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="safety_container" id='safety_container'>
                <h2><b>Safety Zones</b></h2>
                <p>A safety zone is an area where a firefighter can survive
                without a fire shelter. Considerations for effective safety
                zones:</p>
                <p>• Take advantage of heat barriers such as lee side of ridges, large rocks, or solid structures.</p>
                <p>• When possible, burn out safety zones prior to arrival of the fire front.</p>
                <p>• Avoid locations that are upslope or downwind from the
                fire; chimneys, saddles, or narrow canyons; and steep
                uphill escape routes.</p>
                <p>• Not intended for structure protection.</p>
                <br/>
                <p>Separation distance between the firefighter and the flames
                should be at least four times the maximum continuous flame
                height. Distance separation for flat terrain and no wind is
                the radius from the center of the safety zone to the nearest
                fuels.</p>

                <table>
                    <tr>
                        <th>Flame Height</th>
                        <th>Seperation Distance <br/>
                        (firefighters to flames)</th>
                        <th>Area in Acres*</th>
                    </tr>
                    <tr>
                        <td>10 ft.</td>
                        <td>40 ft.</td>
                        <td>1/10 acre</td>
                    </tr>
                    <tr>
                        <td>20 ft.</td>
                        <td>80 ft.</td>
                        <td>1/2 acre</td>
                    </tr>
                    <tr>
                        <td>50 ft.</td>
                        <td>200 ft.</td>
                        <td>3 acres</td>
                    </tr>
                    <tr>
                        <td>100 ft.</td>
                        <td>400 ft.</td>
                        <td>12 acres</td>
                    </tr>
                    <tr>
                        <td>200 ft.</td>
                        <td>800 ft.</td>
                        <td>46 acres</td>
                    </tr>
                </table>
                <p>*Area in acres is calculated to allow for distance separation
                on all sides for a 3-person engine crew (1 acre is
                approximately the size of a football field, or 208 feet by 208
                feet). Calculations are based on radiant heat only and do not
                account for convective heat from wind and/or terrain
                influences. <b>Since calculations assume no wind and no
                slope, safety zones downwind or upslope from the fire will
                require larger separation distances.</b></p>
            </div>
         );
    }
}
 
export default Safety;