/*
 * @Author: Mr.xie
 * @Date: 2021-07-09 14:19:39
 * @LastEditTime: 2021-07-09 16:47:24
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /react_dom/src/compontent/Class_compontents.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from "react";

import '../css/com.css'

// 类组件
export class class_compontents extends React.Component {

  constructor() {
    super()

    this.inputRef = React.createRef()
  }

  state = {
    text: "我是类组件最常用",
    num: 1,
    inputValue: '',
  };

  addNum = () => {
    this.setState({
      num: this.state.num + 1
    })
  }

  // 受控组件
  handleChange = e => {
    const target = e.target;
    const value = e.target.type === 'checkbox'
      ? target.checked
      : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  // 非受控组件
  inputValueRef = () => {
    console.log('非受控组件获取inputvalue', this.inputRef.current.value)
  }

  render() {
    return <div className='ClassCom' style={{ height: '150px' }}>
      <div>{this.state.text}{this.state.num}</div>
      <button onClick={() => this.addNum()}>添加</button>
      <input type='text' name='inputValue' value={this.state.inputValue}
        onChange={this.handleChange} />

      <div>
        <input type='text' ref={this.inputRef} />
        <button onClick={this.inputValueRef} >非受控组件ref方式获取dom</button>
      </div>
    </div>
  }
}

export default class_compontents;
