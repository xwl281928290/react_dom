import React from "react";

// 函数组件 名称大写开头
const fn_compontents = () => {
  function handleClick() {
    console.log("函数事件");
  }
  return (
    <div>
      我是一个函数组件
      <button onClick={handleClick}>点我</button>
    </div>
  );
};

export default fn_compontents;
