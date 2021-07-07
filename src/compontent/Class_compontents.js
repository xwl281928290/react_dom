import React from "react";

// 类组件
export class class_compontents extends React.Component {
  state = {
    text: "这是一个类组件",
  };

  render() {
    return <div>{this.state.text}</div>;
  }
}

export default class_compontents;
