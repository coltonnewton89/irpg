import React, { Component } from 'react';

import '../yellow/Vehicle'
import Vehicle from '../yellow/Vehicle';
import HazInc from '../yellow/HazInc'
import HazIso from '../yellow/HazIso'
import HazClass from '../yellow/HazClass'
import Local from '../yellow/Local'
import AllHaz from '../yellow/AllHaz'
import Structure from '../yellow/Structure'
import MissingPerson from '../yellow/MissingPerson'

class YellowMain extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Vehicle/>
                <HazInc/>
                <HazIso/>
                <HazClass/>
                <Local/>
                <AllHaz/>
                <Structure/>
                <MissingPerson/>
            </div>
         );
    }
}
 
export default YellowMain;