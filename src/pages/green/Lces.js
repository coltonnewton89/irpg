import React, { Component } from 'react';

class Lces extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="lces_container" id='lces_container'>
                <h2><b>LCES</b></h2>
                <p><b>LCES</b> must be established and known to</p>
                <p><b>ALL</b> firefighters <b>Before</b> it is needed.</p>
                <b>Lookout(s)</b>
                <p>• Experienced, competent, trusted</p>
                <p>• Enough lookouts at good vantage points</p>
                <p>• Knowledge of crew locations</p>
                <p>• Knowledge of escape and safety locations</p>
                <p>• Knowledge of trigger points</p>
                <p>• Map, weather kit, watch, IAP</p>

                <b>Communication(s)</b>
                <p>• Radio frequencies confirmed</p>
                <p>• Backup procedures and check-in times established</p>
                <p>• Provide updates on any situation change</p>
                <p>• Sound alarm early, not late</p>

                <b>Escape Route(s)</b>
                <p>• More than one escape route</p>
                <p>• Avoid steep uphill escape routes</p>
                <p>• Scouted for loose soils, rocks, vegetation</p>
                <p>• Timed considering slowest person, fatigue, and
                temperature factors</p>
                <p>• Marked for day or night</p>
                <p>• Evaluate escape time vs. rate of spread</p>
                <p>• Vehicles parked for escape</p>

                <b>Safety Zone(s)</b>
                <p>• Survivable without a fire shelter</p>
                <p>• Back into clean burn</p>
                <p>• Natural features (rock areas, water, meadows)</p>
                <p>• Constructed sites (clear-cuts, roads, helispots)</p>
                <p>• Scouted for size and hazards</p>
                <p>•<b> Upslope? Downwind? Heavy Fuels? Each means more heat impact meaning larger safety zone.</b></p>
                <p>Time available to use escape routes will decrease and safety
                zone size will increase (possibly by more than double) as
                wind exceeds 10 mph and/or slope exceeds 20%!</p>
            </div>
         );
    }
}
 
export default Lces;