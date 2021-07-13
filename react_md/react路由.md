<!--
 * @Author: Mr.xie
 * @Date: 2021-07-13 14:12:24
 * @LastEditTime: 2021-07-13 15:42:17
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /react_dom/react_md/react路由.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

1 react 路由介绍
    现代的前端应用大多都是spa（但页面应用），也就是只有一个html页面的应用程序，因为他的用户体验更好，对服务器压力更小，所以更受欢迎，为了有效的使用单个页面来管理原来那么多页面的功能，前端路由应运而生
    1）前端路由的功能：让用户从一个试图(页面) 导航到另一个试图（页面）
    2）前端路由是一套映射规则，在react中，是url路径与组件的对应关系
    3）使用react路由简单来说，就是配置路径和组件（配对）
2 路由的基础使用
    1) 安装
        npm i react-router-dom 或 yarn add react-router-dom
    2）导入
        import { BrowserRouter as Router,Route,Link} from 'react-router-dom'
    3) 基本使用
        1.Router 组件：包裹整个应用，一个React应用只需要使用一次
        2.两种常用Router：hashRouter和BrowserRouter
        3.HashRouter：使用URL的哈希值实现（localhost：3000/#first）
            推荐使用H5 historyApi实现 （locahost：3000/first）

        < Router >
            <div>
                <h1>react路由基础</h1>
                <Link to='/first'>页面一</Link>
                <Route path='/first' component={First}></Route>
            </div>
        </Router >

3 路由的执行过程
    1）点击link组件（a标签） 修改了浏览器地址栏中url
    2）react路由间听到地址蓝url的变化
    3）react路由内部遍历所有Router组件 使用路哟规则（path）与pathname 进行匹配
4 编程式导航
    this.props.history.push('/home')
    props.history.go(-1)
5 默认路由
    <Route path='/' component={First}></Route>
6 匹配模式
    模糊匹配
        1) /  === /first
        2) /first === /first/a/b
    精确匹配 exact 关键字
        <Route exact path='/' component={First}></Route>