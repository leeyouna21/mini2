import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import summaryData from '../../json/summary.json';
import {useNavigate, useParams} from "react-router-dom";


const Summary = () => {
    const [isSumRightVisible, setIsSumRightVisible] = useState(true);
    const [newTask, setNewTask] = useState("");
    const navigate = useNavigate();

    const clickHome = () => {
        navigate("/main")
    }

    // 창 열었다가 접기 기능
    const [isScListVisible, setScListVisible] = useState({
        scheduleList: true,
        todoList: true,
        completeList: true
        });
        
        const handleFoldClick = (listName) => {
        setScListVisible(prevState => ({
            ...prevState,
            [listName]: !prevState[listName]
        }));
        };

    const handleToggleSumRight = () => {
        setIsSumRightVisible(!isSumRightVisible);
        const rightBtn = document.querySelector('.right_btn');
        if(!isSumRightVisible) {
            rightBtn.classList.add('clicked');
        } else  {
            rightBtn.classList.remove('clicked');
        }
    };

    // 창 열었다가 접기 기능 끝

    return (
        <div className="sum_wrap">
            <h3 className='home_title' onClick={clickHome}>IntelliText</h3>
            <div className="right_btn" onClick={handleToggleSumRight}></div>
            <div className="sum_center">
                <div className="center_container">
                    <div className="center_left">
                        <div className="score">
                            <h4>2024년에 등록 된 리뷰의 평점은 <span style={{fontWeight: 'bold'}}>90점</span>으로 높은편입니다.</h4>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5>💡 ‘연돈’에 대한 참새야모하니님의 블로그 요약입니다.</h5>
                            </div>
                            <div className="good">
                                🥰 만족해요 - 새로운 건물이어서 쾌적해요. 좋은 재료를 사용하는 거 같아요. 재료가 신선해요. 
                            </div>
                            <div className="bad">
                            😶 아쉬워요 - 음식을 직접 가지러 가야해요. 주문한 메뉴가 많으면, 많이 움직여야해요. 기대한 만큼의 맛은 아니예요. 외식하기 안 좋아요.
                            </div>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5>💡 ‘연돈’에 대한 리즈님의 블로그 요약입니다.</h5>
                            </div>
                            <div className="good">
                                🥰 만족해요 - 캐치테이블 예약이 돼요. 아기 의자 및 식기가 있어요. 주차가 편해요. 외식하기 좋아요.
                            </div>
                            <div className="bad">
                            😶 아쉬워요 - 화장실이 청결하지 않아요. 캐치테이블 순번을 꼼꼼하게 확인하지 않아요. 모두 셀프예요. 푸드코트 같은 느낌이 들어요.
                            </div>
                        </div>
                    </div>
                    <div className="center_center">
                        <div className="score">
                            <h4>2023년에 등록 된 리뷰의 평점은 <span style={{fontWeight: 'bold'}}>20점</span>으로 낮은편입니다.</h4>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5>💡 ‘연돈’에 대한 부산남자일호님의 블로그 요약입니다.</h5>
                            </div>
                            <div className="good">
                                🥰 만족해요 - 방송에도 나와서 그런지 확실히 맛이있긴 했어요. 돈까스를 좋아하는데 바삭하기도 하고 고기도 부드럽고 맛있었어요.
                            </div>
                            <div className="bad">
                            😶 아쉬워요 - 근데 엄청 기대할 맛은 아니었어요. 줄 서서 먹을 정돈 아니예요.
                            </div>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5>💡 ‘연돈’에 대한 치카치카를잘하는치코리타님의 블로그 요약입니다.</h5>
                            </div>
                            <div className="good">
                                🥰 만족해요 - 인기가 매우 많은 치즈돈까스를 시켜서 먹었어요.
                            </div>
                            <div className="bad">
                            😶 아쉬워요 - 돈까스가 딱딱해요. 음식이 식어있어요. 깊은 맛이 아닌, 연한 맛이 나요. 줄 서서 먹을 정돈 아니예요.
                            </div>
                        </div>
                    </div>   
                    <div className="center_right">
                        <div className="finalSum_title">
                            <h3>💡IntelliText가 분석한 ‘연돈’ 찐리뷰</h3>
                        </div>
                        <div className="finalSum_score">
                            <h5>2024년 전 후 블로그를 비교해 보았을 때 전체적인 평점은 <span style={{fontWeight: 'bold'}}>55점</span> 입니다. </h5>
                        </div>
                        <div className="finalSum_prev">
                            <h5>2024년 전에는 주차가 불편하다는 평이 많았는데,2024년 이후 리뷰에는 건물도 새 건물로 지어지고 주차할 수 있는 공간이 넓어져<span style={{fontWeight: 'bold'}}>주차 문제가 개선 되어</span> 불편 사항이 많이 줄어들었습니다.</h5>
                        </div>
                        <div className="finalSum_tast">
                            <h5>전체적인 음식 맛의 평은 좋습니다.
                                기준이 되는 년도들의 블로그를 다 파악해 보았을 때, 전체적으로 음식에 대한 평은 높은 수준으로 나타나지만, 일부 블로그에선 사장님이 계시지 않아 직원들만 있을 때, 사장님이 계실 때 음식의 맛차이가 난다고 
                                리뷰한 블로거들이 있었습니다.
                            </h5>
                        </div>
                        <div className="finalSum_rec">
                            <h5>이 곳에 가셔서 꼭 드셔야 하는 메뉴를 골라보았을 때 '<span style={{fontWeight: 'bold'}}>치즈돈까스</span>' 메뉴가 1순위로 나옵니다.
                                한정으로 판매하기 때문에 일찍 가서 드시는 걸 추천드립니다. 치즈돈까스 다음으로 인기가 많은 메뉴는 등심까스, 안심까스입니다. 
                            </h5>
                        </div>
                        <div className="text_tip">
                            <h5>
                                💡IntelliText가 분석한 <span style={{fontWeight: 'bold'}}>연돈 더 맛있게 먹는 꿀팁</span>  <br />
                                소스 없이 본연의 맛을 느껴보기 <br />
                                테이블 위에 올려진 히말라야 핑크소금을 갈아서 찍어 먹어보기 <br />
                                같이 나오는 연돈만의 특제소스에 찍어 먹어보기 <br />
                                추가로 시킨 연돈표 수제카레에 찍어서 먹기
                                
                            </h5>
                        </div>
                    </div>
                    
                </div>
            </div>
            {isSumRightVisible ? (
                <div className="sum_right">
                    <div className="right_container">
                        <div className="icon_area">
                            <div className="list_icon"></div>
                            <div className="close_icon" onClick={handleToggleSumRight}></div>
                        </div>
                        <div className="textList_wrap">
                            <div className="title">
                                <h4>최근 리뷰 블로그 바로가기</h4>
                            </div>
                            <div className="list_wrap">
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/todghkfskan/223383800916"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 치코리타 - 연돈 간략한 후기 #연돈 #내돈내산
                                        </Link>
                                    </h6>
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/decadentliz/223384511071"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 리즈 - 제주도 연돈 캐치테이블 주말 얘약 성공 웨이팅 5시간 후기
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/decadentliz/223384511071"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 레츠니 - 드디어 가본 제주 연돈 후기(웨이팅 방법)
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/decadentliz/223384511071"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 내가 뭘 물처럼 먹고있나 - 제주도 연돈 돈까스 덕후가 드디어 먹어본 솔직후기 + 예약
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/decadentliz/223384511071"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 레이로 방방곡곡 - [제주도맛집] 대한민국 1등 돈까스 제주도 '연돈'찐후기 (근황, 예약, 웨이팅, 주차, 메뉴, 볼카츠, 개인적 의견)
                                        </Link>
                                    </h6>                                
                                </div>
                            </div>
                        </div>
                        <div className="studyList_wrap">
                            <div className="title">
                                <h4>예전 리뷰 블로그 바로가기</h4>
                            </div>
                            <div className="list_wrap">
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/reset0621/223301342066"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 보블 - 연돈 돈가스 솔직후기
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/chchqhqh/223006798355"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 풍뎅이숲학교 - 연돈 현장 예약방법 아쉬운점 및 후기~!
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/1024sr/223189573987"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 온제onze - 제주서귀포 돈까스 맛집 연동 평일 웨이팅 :
                                        </Link>
                                    </h6>                                
                                </div>

                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/hwangbobae11/223192011999"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 bobilife - 연돈 예약 방법, 시간 맛있게 먹고온 후기
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/young9178/223301949481"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 엄마는 오늘도 나간다 - 제주도 연돈 예약, 확장 후 현장 예약 후기 제주 핫플
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/decadentliz/223384511071"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 리봉짱 - 제주 연돈 확장 이전 후 예약 방법 웨이팅 돈까스 후기
                                        </Link>
                                    </h6>                                
                                </div>
                                <div className="box">
                                    <h6>
                                        <Link to="https://blog.naver.com/rlaguswn444/223247792772"style={{ textDecoration: 'none', color: 'inherit' }} >
                                            작성자 먹어보고서 - 제주 연돈 돈까스 드디어 먹어봤어요.(주소이전, 예약방법, 후기)
                                        </Link>
                                    </h6>                                
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Summary;
