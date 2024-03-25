import React, { useState } from 'react';

const Summary = () => {
    const [isSumRightVisible, setIsSumRightVisible] = useState(true);
    const [newTask, setNewTask] = useState("");
    const [displayedTasks, setDisplayedTasks] = useState([]); // 입력값을 표시할 배열

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

    const handleToggleSumRight = () => {
        setIsSumRightVisible(!isSumRightVisible);
    };
    return (
        <div className="sum_wrap">
            <div className="sum_center">
                <div className="center_container">
                    <div className="mainBG">
                        <img src="" alt="" />
                    </div>
                    <div className="connection_wrap">
                        <div className="conne">
                            <h4></h4>
                        </div>
                    </div>
                    <div className="sum">
                        <h4></h4>
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
                            <div className="study_wrap">
                                <div className="add_list">
                                    <div className="add_logo"></div>
                                    <input 
                                        placeholder='Add New Task' 
                                        type="text" 
                                        value={newTask}
                                        onChange={handleInputText}
                                        onKeyDown={handleKeyDown}
                                    />
                                </div>
                                <div className="chbox_wrap">
                                    <div className="study_box">
                                        {displayedTasks.map((task, index) => (
                                            <div key={index}>
                                                <input className='check' type='checkbox' />
                                                <h5>{task}</h5>
                                            </div>
                                        ))}
                                    </div>
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
