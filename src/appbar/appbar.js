import React from 'react';
import './appbar.css';
import Appimg from './appbar.png';
import Menu from './menu.png';
class Appbar extends React.Component{
    constructor(props){
        super(props);
        
        this.menuclick = this.menuclick.bind(this);
    }
    menuclick(){
        const menu = document.querySelector('.drop_menu');
        const maininput = document.querySelector('.main_input')
        menu.classList.toggle('active');
        maininput.classList.toggle('active');
    }
    render(){
        return(
            <div className="appbar"> 
                <img src={Appimg} height="50px" width="auto" href="#none"/>
                <ul className="drop_menu">
                    <li><a href="javascript:void(0);">마이페이지</a></li>
                    <li><a href="javascript:void(0);">고객지원</a></li>
                    <li><a href="javascript:void(0);">가격비교</a></li>
                    <li><a href="javascript:void(0);">Q&A</a> </li>
                </ul>
                <a onClick={this.menuclick} className="appbar_toogle" href="javascript:void(0);">
                    <img src={Menu} width="30px" height ="30px"/>
                </a>
            </div>
        )
    }
}

export default Appbar;