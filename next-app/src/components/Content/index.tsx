'use client';

import React from 'react';
import { Layout, theme } from 'antd';
import s from './content.module.css'

const {  Content } = Layout;

export const ContentBlock = ({children}: Readonly<{children: React.ReactNode;}>) => {
  
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return <Content style={{ margin: '0 16px' }}>
          <div className={s.contentBlock}
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {children}
          </div>
    </Content>
};