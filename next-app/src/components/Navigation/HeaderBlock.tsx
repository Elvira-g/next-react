'use client';

import React from 'react';
import { Layout, theme } from 'antd';

const { Header } = Layout;

export const HeaderBlock: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return <Header style={{ padding: 0, background: colorBgContainer }} />
};
