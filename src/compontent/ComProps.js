/*
 * @Author: Mr.xie
 * @Date: 2021-07-09 17:03:14
 * @LastEditTime: 2021-07-13 10:19:23
 * @LastEditors: Mr.xie
 * @Description:
 * @FilePath: /react_dom/src/compontent/ComProps.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

import React from 'react'
import ReactDOM from 'react-dom'
import '../css/com.css'

// 函数接受组件接受 传值 参数接收
const HelloFn = (props) => {
    return (
        <div >
            <h1>Fnprops:{props.name}</h1>
        </div>
    )
}

// 类组件接收参数 this.props
/**
 *  可以接收任意类型 
 *  在constructor中 使用props 要在super中传递
 *  自组件接收参数 是只读的
 */
class HelloClass extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
        console.log('1')
    }
    componentDidMount() {
        console.log('3')
    }
    render() {
        console.log('2')
        console.log(this.props)
        return (
            <div>ClassProps:{this.props.name}</div>
        )
    }
}

// 父组件 (子组件像 父 组件传递值 )
class fater extends React.Component {
    getChildMsg = data => {
        console.log('子组件中传递的数据', data)
    }
    render() {
        return (
            <div className='item'>
                父组件
                <sun getMsg={this.getChildMsg} />
            </div>
        )
    }
}
class sun extends React.Component {
    render() {
        return (
            <div>ClassProps:{this.props.name}</div>
        )
    }
}

// export default ComProps

export {
    HelloFn, HelloClass, fater
}
