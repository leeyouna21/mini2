import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
            <h3>IntelliText</h3>
            <div className="sum_center">
                <div className="center_container">
                    <div className="center_left">
                        <div className="score">
                            <h4>2024년에 등록 된 리뷰의 총점은 90점으로 높은편입니다.</h4>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5>💡 ‘연돈’에 대한 이용우님의 블로그 요약입니다.</h5>
                            </div>
                            <div className="good">
                                🥰 만족해요 - 사장님이친절해요. 음식이 매우 맛있어요. 주차가 편해요. 외식하기 좋아요.
                            </div>
                            <div className="bad">
                            😶 아쉬워요 - 사장님이 안친절해요. 음식이 매우 맛없어요. 주차가 안 편해요. 외식하기 안 좋아요.
                            </div>
                        </div>
                    </div>
                    <div className="center_center">
                        <div className="score">
                            <h4>2023년에 등록 된 리뷰의 총점은 20점으로 낮은편입니다.</h4>
                        </div>
                        <div className="blog">
                            <div className="source">
                                <h5></h5>
                            </div>
                            <div className="good"></div>
                            <div className="bad"></div>
                        </div>
                    </div>
                    <div className="center_right">
                        <div className="finalSum_title">
                            <h3>💡IntelliText가 분석한 ‘연돈’ 찐리뷰</h3>
                        </div>
                        <div className="finalSum_score">
                            <h6></h6>
                        </div>
                        <div className="finalSum_prev">
                            <h6></h6>
                        </div>
                        <div className="finalSum_rec">
                            <h6></h6>
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
                                {boxes.map((box, index) => (
                                    <div 
                                        key={index}
                                        className={`box ${box.hover ? 'hover' : ''} ${box.boxClick ? 'boxClick' : ''}`}
                                        onMouseEnter={() => handlehover(index)}
                                        onMouseLeave={handlemouseLeave}
                                        onClick={() => handleClick(index)}
                                    >
                                    <h6>fdg</h6>
                                    </div>
                                ))}
                                {/* {boxes.map((box, index) => (
                                    <div key={index}
                                        className={`box ${box.hover ? 'hover' : ''} ${box.boxClick ? 'boxClick' : ''}`}
                                        onMouseEnter={() => handlehover(index)}
                                        onMouseLeave={handlemouseLeave}
                                        onClick={() => handleClick(index)}>
                                        <link rel="stylesheet" href="https://m.blog.naver.com/ange15321/222820773679" />
                                    </div>
                                ))} */}
                            </div>
                        </div>
                        <div className="studyList_wrap">
                            <div className="title">
                                <h4>예전 리뷰 블로그 바로가기</h4>
                            </div>
                            {/* {isScListVisible.todoList && (
                            <div className="study_wrap" >
                                <div className={`add_list ${TodoFocused ? 'focused' : ''}`} onClick={handleTodoFocused} onBlur={handleTodoBlur}>
                                    {/* <div className="add_logo"></div> 
                                    <h6>
                                        <input 
                                            type="text"
                                            placeholder={todoinputMsgPlaceholder}
                                            value={newTask}
                                            onChange={handleInputChangeTodo}
                                            onFocus={handleInputFocus}
                                            onBlur={handleInputBlur}
                                            onKeyPress={handleAddListEnter}
                                        />
                                    </h6>
                                </div>
                                {/* 투두 함수를 받아와서 뿌려주어야 하는 위치 시작 *
                                <div className="my_listwrap">
                                    {myLists.map((list, index) => list.complete == undefined &&  (
                                        <div className="my_list" key={index}>
                                            <div className="check_wrap">
                                                <input
                                                    type="checkbox"
                                                />
                                            </div>
                                            <div className="chbox_wrap">
                                                <div className="study_box">
                                                    <h5>{list.title}</h5>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    )}
                                </div>
                            </div>
                            )} */}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Summary;
