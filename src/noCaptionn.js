import React from "react";

class NoCapture extends React.Component {
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
      (e) => {
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
      (e) => {
        console.log("原生事件：父元素 DOM 事件冒泡！");
        // e.stopPropagation();
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
  parentClickFun = (e) => {
    console.log("React 事件：父元素事件冒泡！");
    // e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
  };
  parentCapture = (e) => {
    // e.stopPropagation();
    console.log("React 事件：父元素事件捕获-----");
  };
  childClickFun = (e) => {
    console.log("React 事件：子元素事件冒泡！");
    // e.preventDefault();
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
        <p
          ref={this.childRef}
          onClick={this.childClickFun}
          onClickCapture={this.childCapture}
        >
          分析事件执行顺序
        </p>
      </div>
    );
  }
}
export default NoCapture;
