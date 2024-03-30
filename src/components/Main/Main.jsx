import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      showBox2: false,
      showBox3: false,
      showSum: false,
      activeBox2Button: null,
      activeBox3Button: null,
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

  handleBox2ButtonClick = (language) => {
    this.setState({ showBox3: true, activeBox2Button: language });
  };

  handleBox3ButtonClick = (language) => {
    this.setState({ showSum: true, activeBox3Button: language });
  };

  render() {
    const { inputValue, showBox2, showBox3, showSum, activeBox2Button, activeBox3Button } = this.state;

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
                  <h3>리뷰를 검색하고 싶은 음식점의 이름을 작성하세요.</h3>
                  <input
                    className="searchbar"
                    type="text"
                    placeholder="찾으시는 매장 이름을 입력하세요."
                    value={inputValue}
                    onChange={this.handleInputChange}
                    onKeyPress={this.handleInputKeyPress}
                  />
                </div>
              </div>
              {showBox2 && (
                <div className={`box2 ${showBox2 ? 'slide-up' : 'slide-up-hidden'}`}>
                  <div className="minibox_wrap1">
                    <div className="wrap_title">
                      <h3>어떤 플랫폼의 리뷰를 보고 싶으세요?</h3>
                    </div>
                    <div className="buttons">
                      <button
                        className={activeBox3Button === '네이버 블로그' ? 'translate-button active' : 'translate-button'}
                        onClick={() => this.handleBox2ButtonClick('네이버 블로그')}
                      >
                        네이버 블로그
                      </button>
                      <button
                        className={activeBox3Button === '구글' ? 'translate-button active' : 'translate-button'}
                        onClick={() => this.handleBox2ButtonClick('구글')}
                      >
                        구글
                      </button>
                      <button
                        className={activeBox3Button === '티스토리' ? 'translate-button active' : 'translate-button'}
                        onClick={() => this.handleBox2ButtonClick('티스토리')}
                      >
                        티스토리
                      </button>
                      <button
                        className={activeBox3Button === '다음' ? 'translate-button active' : 'translate-button'}
                        onClick={() => this.handleBox2ButtonClick('다음')}
                      >
                        다음
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {showBox3 && (
                <div className={`box3 ${showBox3 ? 'slide-up' : 'slide-up-hidden'}`}>
                  <div className="minibox_wrap2">
                    <div className="wrap_title">
                      <h3>보고싶은 리뷰의 작성연도를 선택해주세요.</h3>
                    </div>
                    <div className="buttons">
                      <button
                        className={activeBox2Button === '2024' ? 'active' : ''}
                        onClick={() => this.handleBox3ButtonClick('2024')}
                      >
                        2024
                      </button>
                      <button
                        className={activeBox2Button === '2023' ? 'active' : ''}
                        onClick={() => this.handleBox3ButtonClick('2023')}
                      >
                        2023
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {showSum && (
                <div className={`sum ${showSum ? 'slide-up' : 'slide-up-hidden'}`}>
                  <Link to="/Loading">
                    <button className="sum_button">Search</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
