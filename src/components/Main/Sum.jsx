import React, { useState } from 'react';

const Summary = () => {
    const [isSumRightVisible, setIsSumRightVisible] = useState(true);
    const [newTask, setNewTask] = useState("");
    const [displayedTasks, setDisplayedTasks] = useState([]); // 입력값을 표시할 배열
    const [TodoFocused, setTodoFocused] = useState(false); // 오른쪽 패널 투두리스트 클릭시 보더 나오는 부분
    const [todoinputMsgPlaceholder, setTodoInputMsgPlaceholder] = useState("Click Here !!");
    const [myLists, setMyLists] = useState([]);


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
            setTodoInputMsgPlaceholder("Add New TodoList");
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
            <div className="sum_center">
                <div className="center_container">
                    <div className="center_left">
                        <div className="mainBG">
                            <img src="/mini2/public/image/text_img.png" alt="" className='changeBG'/>
                        </div>
                        <div className="connection_wrap">
                            <div className="conne">
                                <h4></h4>
                            </div>
                        </div>
                    </div>
                    
                    <div className="center_right">
                        <div className="sum">
                            <h4>Summary!</h4>
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
                                <h4>2024 수능 국어 과학지문</h4>
                            </div>
                            <div className="list_wrap">
                                <div className="box">
                                    <h6>1 문단</h6>
                                </div>
                                <div className="box">
                                    <h6>2 문단</h6>
                                </div>
                                <div className="box">
                                    <h6>3 문단</h6>
                                </div>
                                <div className="box">
                                    <h6>4 문단</h6>
                                </div>
                                <div className="box">
                                    <h6>5 문단</h6>
                                </div>
                                <div className="box">
                                    <h6>6 문단</h6>
                                </div>
                            </div>
                        </div>
                        <div className="studyList_wrap">
                            <div className="title">
                                <h4>Study planner</h4>
                            </div>
                            {isScListVisible.todoList && (
                            <div className="study_wrap" >
                                <div className={`add_list ${TodoFocused ? 'focused' : ''}`} onClick={handleTodoFocused} onBlur={handleTodoBlur}>
                                    <div className="add_logo"></div>
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
                                {/* 투두 함수를 받아와서 뿌려주어야 하는 위치 시작 */}
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
                        )}
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Summary;
