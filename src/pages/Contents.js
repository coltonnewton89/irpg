import React, { Component } from 'react';
import '../theme/contents.css'
import SimpleAccordion from '../components/Accordion'




class Contents extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="contentsContainer">
                <h3 className='contentsTitle'>Table of Contents</h3>
                <SimpleAccordion/>
            </div>
         );
    }
}
 
export default Contents;