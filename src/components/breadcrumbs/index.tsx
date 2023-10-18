import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import useStore from '@/store';

const generateBreadcrumbs = (data: any, pathnames: any, breadcrumbs: any) => {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.key === pathnames[0]) {
            pathnames.shift();
            breadcrumbs.push(item);
            if (item.children) {
                generateBreadcrumbs(item.children, pathnames, breadcrumbs);
            }
            break;
        }
    }
};

const CustomBreadcrumb = () => {
    const { menuStore } = useStore()
    const data = menuStore.menuData
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const breadcrumbs: any = [];

    generateBreadcrumbs(data, pathnames, breadcrumbs);

    console.log('breadcrumbs===>', breadcrumbs)

    return (
        <Breadcrumb>
            {breadcrumbs.map((item: any, index: number) => (
                <Breadcrumb.Item key={index}>
                    {index === breadcrumbs.length - 1 ? (
                        item.meta.title
                    ) : (
                        <Link to={item.path}>{item.meta.title}</Link>
                    )}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
};

export default CustomBreadcrumb;
