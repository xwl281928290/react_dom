/*
 * @Author: Mr.xie
 * @Date: 2021-07-09 14:49:22
 * @LastEditTime: 2021-07-13 15:09:26
 * @LastEditors: Mr.xie
 * @Description:
 * @FilePath: /react_dom/src/views/Home.js
 * 可以输入预定的版权声明、个性签名、空行等
 */
import React from "react";
import FnCompontents from '../compontent/Fn_compontents'
import ClassCompontents from '../compontent/Class_compontents'
import { HelloFn, HelloClass } from '../compontent/ComProps'


const foutter = () => {
    return (
        <div>
            <span>下面引入两个组件</span>
            <FnCompontents />
            <ClassCompontents />

            {/* 组件传值 可以是任意类型 但是是只读的 */}
            {/* <ComProps name='jack' /> */}
            <HelloFn name='宋江' />
            <HelloClass
                name='李逵'
                age={10}
                colors={['red', 'green', 'blue']}
                fn={() => console.log('这是一个函数')}
                tag={<p>这是p标签</p>}
            />
        </div>
    )
}


export default foutter;

