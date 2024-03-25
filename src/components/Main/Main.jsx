import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showBox2: false,
      showBox3: false,
      showSum: false
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ showBox2: true });
    }
  };

  handleBox2ButtonClick = () => {
    this.setState({ showBox3: true });
  };

  handleBox3ButtonClick = () => {
    this.setState({ showSum: true });
  };

  render() {
    const { inputValue, showBox2, showBox3, showSum } = this.state;

    return (
      <div>
        <div className="main">
          <div className="container">
            <div className="title">
              <h1>📝Intelli Text</h1>
            </div>
            <div className="boxMain_wrap">
              <div className="box1">
                <div className="box1_title">
                  <h3>번역/요약 하시고 싶은 주제를 입력하세요.</h3>
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="찾으시는 주제를 입력하세요."
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleInputKeyPress}
                  />
                </div>
              </div>
              <div className={`box2 ${showBox2 ? 'slide-up' : 'slide-up-hidden'}`}>
                <div className="minibox_wrap1">
                  <div className="wrap_title">
                    <h3>해당 기사의 언어를 선택해주세요.</h3>
                  </div>
                  
                  <button className="language-button" onClick={this.handleBox2ButtonClick}>
                    한국어
                  </button>
                  <button className="language-button" onClick={this.handleBox2ButtonClick}>
                    영어
                  </button>
                  <button className="language-button" onClick={this.handleBox2ButtonClick}>
                    일어
                  </button>
                  <button className="language-button" onClick={this.handleBox2ButtonClick}>
                    중국어
                  </button>
                </div>
              </div>
              <div className={`box3 ${showBox3 ? 'slide-up' : 'slide-up-hidden'}`}>
                <div className="minibox_wrap2">
                  <h3>어떤 언어로 번역해드릴까요?</h3>
                </div>
                <button className="translate-button" onClick={this.handleBox3ButtonClick}>
                  한국어
                </button>
                <button className="translate-button" onClick={this.handleBox3ButtonClick}>
                  영어
                </button>
                <button className="translate-button" onClick={this.handleBox3ButtonClick}>
                  일어
                </button>
                <button className="translate-button" onClick={this.handleBox3ButtonClick}>
                  중국어
                </button>
              </div>
              <div className={`sum ${showSum ? 'slide-up' : 'slide-up-hidden'}`}>
                <Link to="/sum">
                  <button className="sum_button">Summary</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;