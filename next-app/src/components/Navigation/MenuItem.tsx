'use client';
import React from 'react';
import { Menu } from 'antd';
import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import Link from 'next/link';
import { MenuType } from '@/app/layout';
import s from './navigation.module.css'


export const MenuItem= (props: MenuType) => {
    return <Link className={s.menuItem} href={props.link}>{props.title}</Link>
}