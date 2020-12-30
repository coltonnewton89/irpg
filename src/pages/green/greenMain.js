import React, { Component } from 'react';


import RiskManagement from '../green/RiskManagement'
import PlanningFor from '../green/PlanningFor'
import LookUp from '../green/LookUp'
import CommonDen from '../green/CommonDen'
import CommonTactics from '../green/CommonTactics'
import Lces from '../green/Lces'
import Safety from '../green/Safety'
import DownHill from '../green/DownHill'
import Indicators from '../green/Indicators'
import Wui from '../green/Wui'

class GreenMain extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <RiskManagement/> <br/>
                <PlanningFor/> <br/>
                <LookUp/> <br/>
                <CommonDen/> <br/>
                <CommonTactics/> <br/>
                <Lces/> <br/>
                <Safety/> <br/>
                <DownHill/> <br/>
                <Indicators/> <br/>
                <Wui/>
            </div>
         );
    }
}
 
export default GreenMain;