import React,{Component} from 'react';
import {Link} from 'react-router-dom';

//404页面
export default class NotFound extends Component{
    render(){
        return (
            <section>
                <span>这个页面不存在</span>
                <Link to="/">返回首页</Link>
                <Link to="/">或者使用豆瓣App</Link>
            </section>
        )
    }
}