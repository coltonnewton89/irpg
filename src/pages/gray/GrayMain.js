import React, { Component } from 'react';
import '../../theme/grayMain.css'

import Refuse from '../gray/Refuse'
import Thunder from '../gray/Thunder'
import Tree from '../gray/Tree'
import Powerline from '../gray/Powerline'
import Roadside from '../gray/Roadside'
import Uxo from '../gray/Uxo'
import Oil from '../gray/Oil'
import SmokeHaz from '../gray/SmokeHaz'
import SmokeTrans from '../gray/SmokeTrans'
import Last from '../gray/Last'

class GrayMain extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {/* <Refuse/>
                <Thunder/>
                <Tree/>
                <Powerline/>
                <Roadside/>
                <Uxo/>
                <Oil/>
                <SmokeHaz/>
                <SmokeTrans/> */}
                <Last/>
            </div>
         );
    }
}
 
export default GrayMain;