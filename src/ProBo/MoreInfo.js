import React from 'react';
import './MoreInfo.css';
class MoreInfo extends React.Component{
    render(){
        return(
            <div>
            <div className="container-padding">
                <div className="inner"><div className="inner-text">
                        <div id="title">
                        ProBo<br/>
                        더할나위없이 완벽한 보충제
                        </div><br/>
                        <div id="subtitle">
                        MemberShip 결제 시 &#8361;30,000부터<br/>
                        <div id="title_link1">
                            <a> 더알아보기&gt; </a>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <a> 결제하기&gt; </a>
                        </div> 
                        </div>
                        
                    </div></div>
                    
            </div>
            <div className="container-padding">
                <div className="inner2">
                    <div className="helth">
                        <div className="helth_image1"/>
                        <div className="helth_title">
                            건강한 운동을 위해
                        </div>
                    </div>
                    <div className="helth2">
                        <div className="helth_image2">
                        <div className="helth_party"/>
                        <div className="helth_title2">
                            아 존나 귀찮아
                        </div>
                        </div>
                        <div className="helth_image2">
                            
                        <div className="helth_party2"/>
                        <div className="helth_title2">
                            에베베베베.....
                        </div>
                        </div>
                        <div className="helth_image3">
                            <div className="helth_party3"/>
                            <div className="helth_title2">
                            균형잡힌 식단을 위해
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default MoreInfo;