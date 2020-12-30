import React, { Component } from 'react';

class LookUp extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="lookUp_container" id='lookUp_container'>
                <table className='tableOne'>
                    <tr className='trOne'>
                        <th>Fire Environment Factors</th>
                        <th>Indicators</th>
                    </tr>
                    <tr>
                        <th>Fuel Characteristics</th>
                        <td>
                            <p>• Substantial amounts of cured or curing fine fuel/continuous</p>
                            <p>• Heavy dead and down</p>
                            <p>• Tight crown spacing (&#60; &#50;&#48; ft.)</p>
                            <p>• Unusual low live and dead fuel moisture values (locally defined)</p>
                            <p>• Special conditions</p>
                            <p>□ Efficient firebrand sources</p>
                            <p>□ Numerous snags</p>
                            <p>□ Preheated canopy</p>
                            <p>□ Frost and bug-kill</p>
                            <p>□ High dead-to-live ratio</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Topography</th>
                        <td>
                            <p>• Steep slopes (&gt; &#52;&#53;%)</p>
                            <p>• Chutes/ chimneys/ passes/ saddles</p>
                            <p>• Box and narrow canyons</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Weather</th>
                        <td>
                            <p>• Wind</p>
                            <p>□ Speeds above 10 mph</p>
                            <p>□ Lenticular clouds</p>
                            <p>□ Fast moving clouds</p>
                            <p>□ Cold frontal passages indicated by weak vortices and fluctuating temperatures</p>
                            <p>□ Cumulonimbus clouds</p>
                            <p>□ Dust cloud approaching</p>
                            <p>□ Sudden calm</p>
                            <p>□ Battling or shifting wind</p>
                        </td>
                    </tr>
                    <tr>
                    <th>Weather (continued)</th>
                    <td>
                        <p>• Atmospheric Instability</p>
                        <p>□ Good visibility</p>
                        <p>□ Battling or shifting wind</p>
                        <p>□ Dust devils</p>
                        <p>□ Cumulus clouds</p>
                        <p>□ Castellanus clouds in the a.m.</p>
                        <p>□ Smoke rises straight up</p>
                        <p>□ Inversion begins to lift</p>
                        <p>□ Unusually high Haines values for the local area</p>
                        <p>• Temp/RH</p>
                        <p>□ Above normal temperatures</p>
                        <p>□ Critically low humidity based on local thresholds</p>
                    </td>
                    </tr>
                    <tr>
                    <th>Plume Dynamics</th>
                    <td>
                        <p>• Well developed, nearly vertical column</p>
                        <p>• Formation of a large ice cap/ pyrocumulus cloud</p>
                        <p>• Thunder heard/lightning flashes</p>
                        <p>• Sprinkles of rain</p>
                        <p>• Sudden calm</p>
                        <p>• Changing column with alternating strengthening inflows and outflows</p>
                        <p>• Becoming hazy with smoke at your feet</p>
                    </td>
                    </tr>
                    <tr>
                    <th>Rapidly Chaning Behavior</th>
                    <td>
                        <p>• Smoldering fires pick up</p>
                        <p>• Trees begin to torch</p>
                        <p> Fire whirls beginning</p>
                        <p>• Leaning or sheared column</p>
                        <p>• Frequent spot fires</p>
                    </td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default LookUp;