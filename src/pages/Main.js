import React, { Component } from 'react';
import '../theme/main.css'
import Contents from '../pages/Contents'

class Main extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='mainContainer'>
               <Contents/>
            </div>
         );
    }
}
 
export default Main;