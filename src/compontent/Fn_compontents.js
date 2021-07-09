/*
 * @Author: Mr.xie
 * @Date: 2021-07-09 14:19:39
 * @LastEditTime: 2021-07-09 17:07:08
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /react_dom/src/compontent/Fn_compontents.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from "react";
import '../css/com.css'
// 函数组件 名称大写开头
const fn_compontents = () => {
  function handleClick() {
    console.log("函数事件");
  }
  return (
    <div className='FnCom'>
      我是函数组件
      <button onClick={handleClick}>点我</button>
    </div>
  );
};

export default fn_compontents;
