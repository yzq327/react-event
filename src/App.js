import React from "react";

class App extends React.Component {
  parentRef;
  childRef;
  constructor(props) {
    super(props);
    this.parentRef = React.createRef();
    this.childRef = React.createRef();
  }
  componentDidMount() {
    document.addEventListener(
      "click",
      (e) => {
        console.log("原生事件：document DOM 事件捕获---");
      },
      true
    );
    this.parentRef.current?.addEventListener(
      "click",
      () => {
        console.log("原生事件：父元素 DOM 事件捕获---");
      },
      true
    );
    this.childRef.current?.addEventListener(
      "click",
      () => {
        console.log("原生事件：子元素 DOM 事件捕获---");
      },
      true
    );
    document.addEventListener(
      "click",
      (e) => {
        console.log("原生事件：document DOM 事件冒泡！");
      },
      false
    );
    this.parentRef.current?.addEventListener(
      "click",
      () => {
        console.log("原生事件：父元素 DOM 事件冒泡！");
      },
      false
    );
    this.childRef.current?.addEventListener(
      "click",
      () => {
        console.log("原生事件：子元素 DOM 事件冒泡！");
      },
      false
    );
  }
  parentClickFun = () => {
    console.log("React 事件：父元素事件冒泡！");
  };
  parentCapture = () => {
    console.log("React 事件：父元素事件捕获-----");
  };
  childClickFun = () => {
    console.log("React 事件：子元素事件冒泡！");
  };
  childCapture = () => {
    console.log("React 事件：子元素事件捕获-----");
  };
  render() {
    return (
      <div
        ref={this.parentRef}
        onClick={this.parentClickFun}
        onClickCapture={this.parentCapture}
      >
        <button
          ref={this.childRef}
          onClick={this.childClickFun}
          onClickCapture={this.childCapture}
        >
          分析事件执行顺序
        </button>
      </div>
    );
  }
}
export default App;
