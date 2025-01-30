import React, { useState } from 'react';
import star from './img/star.svg';
import S from './style';
import Like from "./img/Like.svg";
import LikeClick from "./img/LikeClick.svg";

const OtherComponent = ({otherData}) => {
    const [likes,setLikes] = useState(Array(otherData.length).fill(false));

    const toggleLike = (index) => {
        setLikes((prevLikes) => {
            const newLikes = [...prevLikes]; // 기존 배열 복사
            newLikes[index] = !newLikes[index]; // 특정 인덱스만 변경
            return newLikes;
        });
    };
    
    return (
        (otherData.length > 0 && (otherData.slice(0,4).map((item,index) => (
        <S.OtherWrap key={index}>
            <div>
                    <img
                        onClick={() => toggleLike(index)} // 해당 인덱스만 변경
                        className="like"
                        src={likes[index] ? LikeClick : Like}
                        alt="하트"
                    />
            </div>
            <h2>{item.title}</h2>
            <h3>{item.description}</h3>
            <h4>{item.price}(원)</h4>
            <h5><img src={star} alt="star" />{item.star}({item.review})</h5>
        </S.OtherWrap>
        ))))
    );
};

export default OtherComponent;