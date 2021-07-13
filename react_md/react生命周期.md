<!--
 * @Author: Mr.xie
 * @Date: 2021-07-13 10:10:09
 * @LastEditTime: 2021-07-13 10:53:19
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /react_dom/react_md/react生命周期.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

一 创建时
    construtor
        触发时机：创建组件时 最先执行
        作用：1 初始化state 2 为事件处理程序绑定this
    render
        触发时机：每次条件渲染会触发
        作用：渲染ui（注意不能 调用setState()
    componentDidMount
        触发时机：组件挂载 完成dom渲染后
        作用：1 发送网络请求 2 dom操作
二 更新时
    render
        触发时机：每次组件渲染会触发
        作用：渲染ui（与 挂载阶段 是同一个render）
    componentDidUpdate
        触发时机：组件更新 完成dom渲染后
        作用：1 发送网络请求 2DOm操作 
        注意：如果要setState() 必须放在一个if条件中
三 卸载时
    componentWillUnmout
        执行时机：组件卸载 从页面消失
        作用：执行清理工作 定时器清楚。。。


render-props 和高阶组件
代码优化：
    1推荐 给render props 模式添加props校验
    2应该在组件卸载时解除 mousemove事件绑定

    Mouse.propTypes - {
        chidlren:PropTypes.func.isRequired
    }

    componentWillUnmout(){
        window.removeEventListener('mousemove',this.handleMouseMove)
    }
