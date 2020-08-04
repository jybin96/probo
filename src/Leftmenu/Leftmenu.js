import React from 'react';
import Leftitem from './Leftitem';
import OverflowScrolling from 'react-overflow-scrolling';
import './Leftmenu.css';


class Leftmenu extends React.Component {
    render() {
        return (
            <div className="bigbox">
                 <OverflowScrolling className='overflow-scrolling'>
                 <Leftitem/>
                 <Leftitem/>
                 <Leftitem/>
                 <Leftitem/>
                 </OverflowScrolling>
                
            </div>
        )
    }
}


export default Leftmenu;