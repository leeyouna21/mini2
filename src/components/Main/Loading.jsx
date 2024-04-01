import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Loading = ({history}) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/sum");
        }, 5000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="loadingspinner" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
            <FadeLoader 
                color="#ffc36a" 
                height={15} 
                width={5}
                radius={2}
                margin={2}
                loading={true}
            />
            <h3 className="loadingtext" style={{fontSize:15}}>블로그 리뷰를 모아 분석중이예요! 다 되면, 해당 페이지로 이동합니다.</h3>
        </div>
    )
}

export default Loading;
