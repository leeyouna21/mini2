import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import summaryData from '../../json/summary.json';
import {useNavigate, useParams} from "react-router-dom";


const Summary = () => {
    const [isSumRightVisible, setIsSumRightVisible] = useState(true);
    const [newTask, setNewTask] = useState("");
    const [displayedTasks, setDisplayedTasks] = useState([]); // 입력값을 표시할 배열
    const [TodoFocused, setTodoFocused] = useState(false); // 오른쪽 패널 투두리스트 클릭시 보더 나오는 부분
    const [todoinputMsgPlaceholder, setTodoInputMsgPlaceholder] = useState("Click Here !!");
    const [myLists, setMyLists] = useState([]);
    const [hover, setHover] = useState(false);
    const [boxClick, setboxClick] = useState(false);
    const [boxes, setBoxes] = useState([]); // 상자 정보를 담을 배열
    const navigate = useNavigate();

    const clickHome = () => {
        navigate("/main")
    }

    const handlehover = () => {
        setHover (true);
    }

    const handleClick = () => {
        setboxClick (!boxClick);
    }

    const handlemouseLeave = () => {
        setHover (false);
    }

    const handleAddListEnter = (e) => {
        if (e.key === "Enter") {
            const newTodoItem = {
                title: newTask,
                complete: undefined
            };
            setMyLists((prevList) => [...prevList, newTodoItem]);
            setNewTask(""); // 입력된 값 초기화
        }
    };
    //끝
    
    const handleInputText = (e) => {
        setNewTask(e.target.value); // 입력값 업데이트
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && newTask.trim() !== '') {
            setDisplayedTasks(prevTasks => [
                ...prevTasks,
                newTask.trim() // 입력값을 trim하여 공백 제거 후 저장
            ]);
            setNewTask(""); // 입력값 초기화
        }
    };

        //오른쪽 패널 투두리스트 add new task 입력된 값을 저장할 상태와 상태를 업데이트할 함수 시작
        const handleInputChangeTodo = (event) => {
            // input 값이 변경될 때마다 호출되는 함수
            setNewTask(event.target.value); // 입력된 값으로 상태 업데이트
        };
        const handleInputFocus = () => {
            setTodoInputMsgPlaceholder("Add New Studyplanner");
        };
        
        const handleInputBlur = () => {
            setTodoInputMsgPlaceholder("Click Here !!");
        };
    

    //투두리스트 클릭시 border생성 함수 시작
    const handleTodoFocused = () => {
        setTodoFocused(true);
    }

    const handleTodoBlur = () => {
        setTodoFocused(false);
    }
    //투두리스트 클릭시 border생성 함수 끝

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
    // 창 열었다가 접기 기능 끝

    const handleToggleSumRight = () => {
        setIsSumRightVisible(!isSumRightVisible);
    };
    return (
        <div className="sum_wrap">
            <h3 className='home_title' onClick={clickHome}>IntelliText</h3>
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
                            😶 아쉬워요 - 돈까스가 딱딱해요. 음식이 식어있어요. 깊은 맛이 아닌, 연한 맛이 나요. 줄 서서 먹을 정돈 아니예요.
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
                            <h5>2024년 전 후 블로그를 비교해 보았을 때 전체적인 평점은 <span style={{fontWeight: 'bold'}}>80점</span> 입니다. </h5>
                        </div>
                        <div className="finalSum_prev">
                            <h5>2023년에는 주차가 불편하다는 평이 많았는데,2024년에는 <span style={{fontWeight: 'bold'}}>주차 문제가 개선 되어</span> 불편 사항이 많이 줄어들었습니다.</h5>
                        </div>
                        <div className="finalSum_tast">
                            <h5>전체적인 음식 맛의 평은 좋습니다.
                                기준이 되는 년도들의 블로그를 다 파악해 보았을 때, 전체적으로 음식에 대한 평은 굉장히 높은 수준으로 나타납니다.
                            </h5>
                        </div>
                        <div className="finalSum_rec">
                            <h5>이 곳에 가셔서 꼭 드셔야 하는 메뉴를 골라보았을 때 '<span style={{fontWeight: 'bold'}}>치즈돈까스</span>' 메뉴가 1순위로 나옵니다.</h5>
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
                                <div className="box"></div>
                                {/* {boxes.map((box, index) => (
                                    <div key={index}
                                        className={`box ${box.hover ? 'hover' : ''} ${box.boxClick ? 'boxClick' : ''}`}
                                        onMouseEnter={() => handlehover(index)}
                                        onMouseLeave={handlemouseLeave}
                                        onClick={() => handleClick(index)}>
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="studyList_wrap">
                            <div className="title">
                                <h4>예전 리뷰 블로그 바로가기</h4>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Summary;
