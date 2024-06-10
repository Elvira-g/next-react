'use client';
import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuItem } from './MenuItem';
import { MenuType } from '@/app/layout';
import s from './navigation.module.css'

const { Sider } = Layout;

type Props = {
    items: MenuType[]
}

export const SiderBlock = ({items}: Props) => {
    const [collapsed, setCollapsed] = useState(false);

    return <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div className={s.menuList}>
           {items.map((item, key) => < MenuItem key={key} link={item.link} title={item.title}/>)} 
        </div>
        
    </Sider>
}