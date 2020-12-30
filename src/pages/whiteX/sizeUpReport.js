import React, { Component } from 'react';

class SizeUpReport extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='sizeup_container' id='sizeup_container'>
                <h2 className='sizeup_h'>
                    <b>SIZEUP REPORT</b>
                </h2>
                <ul className='sizeup_ul'>
                    <li className='sizeup_li'><input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Incident Type (wildland fire, vehicle accident, <br/>
                    hazmat spill, search and rescue, etc.)</li>
                    
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Location/Jurisdiction
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Incident Size
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Incident Status
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Establish IC and Fire Name
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Weather Conditions
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Radio Frequencies
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Best Access Routes
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/> Assets/Values at Risk
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Special Hazards or Concerns
                    </li>
                    <li className='sizeup_li'>
                    <input type="checkbox" name="sizeupCheck" className="sizeupCheckBox"/>Additional Resource Needs
                    </li>
                </ul>
                <p className='sizeup_p'>This reference is intended to assist in reporting key information regarding incident conditions when first arriving on scene.
                    All agencies will have specific information requirements that may involve additional reports.
                </p>
            </div>
         );
    }
}
 
export default SizeUpReport;