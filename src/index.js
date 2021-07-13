/*
 * @Author: Mr.xie
 * @Date: 2021-07-09 14:19:39
 * @LastEditTime: 2021-07-13 15:18:51
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /react_dom/src/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

// import Home from './views/Home.js'


import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const First = () => <p>跳转后的组件</p>

const App = () => {
  return (
    < Router >
      <div>
        <h1>react路由基础</h1>
        {/* 路由入口 */}
        <Link to='/first'>页面一</Link>
        {/* 指定路由出口 */}
        <Route path='/first' component={First}></Route>
      </div>
    </Router >
  )

}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
