import React from 'react';
import './shop.css';
import Shopdiv from './shopdiv';

class Shopping extends React.Component{
    render(){
        return(
            <div className="shop_main">
                <Shopdiv/>
                <Shopdiv/>
                <Shopdiv/>
                <div class="cover-bar"></div>
            </div>
        )
    }
}

export default Shopping;