'use client';

import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

export const FooterBlock: React.FC = () => {

  return <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
};
