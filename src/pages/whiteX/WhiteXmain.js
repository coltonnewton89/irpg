import React, { Component } from 'react';

import SizeUpReport from './sizeUpReport'
import BriefingChecklist from './BriefingChecklist'
import TensAndEighteens from './TensAndEighteens'
import Irs from './Irs'
import Operational from './Operational'
import Com from './Com'
import Human from './Human'
import Aar from './Aar'

class WhiteXmain extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <SizeUpReport/>
                <BriefingChecklist/>
                <TensAndEighteens/>
                <Irs/>
                <Operational/>
                <Com/>
                <Human/>
                <Aar/>
            </div>
         );
    }
}
 
export default WhiteXmain;