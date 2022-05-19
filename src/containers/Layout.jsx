import React from 'react';
import 'antd/dist/antd.css';
import "../styles/Layout.css";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { PokemonList } from '../components/PokemonList';

const { Header, Content, Footer } = Layout;

export default () => (
    <Layout>
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
            }}
        >
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
            >
                {/* <Input placeholder="Basic usage" /> */}
            </Menu>
        </Header>
        <Content
            className="site-layout"
            style={{
                padding: '0 50px',
                marginTop: 64,
            }}
        >
            <Breadcrumb
                style={{
                    margin: '16px 0',
                }}
            >
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div
                className="site-layout-background"
                style={{
                    padding: 24,
                    minHeight: 380,
                }}
            >
                <div>
                    <PokemonList />
                </div>
            </div>

        </Content>
        {<Footer
            style={{
                textAlign: 'center',
            }}
        >
            Ant Design ©2018 Created by Ant UED
        </Footer>}
    </Layout>
);