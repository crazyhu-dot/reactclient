import React, {Component} from 'react'
// import {Redirect, Route, Switch} from 'react-router-dom'
import { Layout } from 'antd';
import Header from "../../components/header";


import LeftNav from "../../components/left-nav";



const { Footer, Sider, Content } = Layout
/*
后台管理的路由组件
 */
export default class Admin extends Component {
    render () {
        return (
            <Layout style={{minHeight: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin: 20, backgroundColor: '#fff'}}>
                    </Content>
                    <Footer style={{textAlign: 'center', color: '#cccccc'}}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
