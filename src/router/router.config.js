import React from 'react';

const lazyLoading = dir => React.lazy(() => import(`@/views/${dir}`));
const menuList = [
  {
    key: '/list',
    icon: 'table',
    title: '列表页',
    children: [
      {
        key: '/list/query',
        title: '查询表格',
        component: lazyLoading('list/query')
      },
      {
        key: '/list/standard',
        title: '标准表格',
        component: lazyLoading('list/standard')
      },
      {
        key: '/list/card',
        title: '卡片列表',
        component: lazyLoading('list/card')
      }
    ]
  }
];
export default menuList;
