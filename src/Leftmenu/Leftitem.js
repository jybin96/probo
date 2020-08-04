import React from 'react';
import './Leftitem.css';
import Star from './star.png';
import whiteheart from './whiteheart.png';

class Leftitem extends React.Component {
    render() {
        return (
            <div>
                <div className="item">
                    <div className="itemimage">
                    </div>

                    <div className="itemname"> <p>신타 22g 산다라맛</p>
                    <div className="hearticon"><img src={whiteheart} width="50" /></div>
                    </div>
                    <div className="ingredients">단백질 22g, 펌핑, 유산소, 무산소, 풀업, 친업
                        <div className="sss">
                            <div className="pointstar"><img src={Star} width="20" /></div>
                            <div className="star_num"> 4.25/5</div>
                            <div className="price">45.000 ~</div>
                        </div>
                    </div>
                    <hr/>

                </div>
            </div>
        )
    }
}


export default Leftitem;