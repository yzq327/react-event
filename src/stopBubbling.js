import React from "react";

class StopBubbling extends React.Component {
  componentDidMount() {
    document.body.addEventListener("click", this.handleBodyClick, false);
    document.addEventListener("click", this.handleDocumentClick, false);
  }

  handleDocumentClick = (e) => {
    console.log("handleDocumentClick！ ");
  };

  handleBodyClick = (e) => {
    if (e.target && e.target === document.querySelector("#inner")) {
      return;
    }
    console.log("handleBodyClick！");
  };

  handleClickTestBox = (e) => {
    console.warn("handleClickTestBox！");
  };

  handleClickTestBox2 = (e) => {
    console.warn("handleClickTestBox2！");
  };

  handleClickTestBox3 = (e) => {
    // 阻止合成事件的冒泡
    e.stopPropagation();
    // 阻止与原生事件的冒泡
    e.nativeEvent.stopImmediatePropagation();
    console.warn("handleClickTestBox3！");
  };

  render() {
    return (
      <div
        className="test-box"
        onClick={this.handleClickTestBox}
        style={{ background: "red" }}
      >
        Box
        <div
          onClick={this.handleClickTestBox2}
          style={{ background: "green", margin: "10px" }}
        >
          Box2
          <div
            id="inner"
            onClick={this.handleClickTestBox3}
            style={{ background: "yellow", margin: "10px" }}
          >
            Box3 

          </div>
        </div>
      </div>
    );
  }
}

export default StopBubbling;
