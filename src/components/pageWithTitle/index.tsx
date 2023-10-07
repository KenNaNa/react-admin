import React from 'react';
import DocumentTitle from 'react-document-title'
import globalConfigs from '@/config/global';

export default function PageWithTitle({ title, children }: { title: string, children: React.ReactNode }) {
    const text = `${title} | ${globalConfigs.title}`
    return (
        <DocumentTitle title={text}>
            {children}
        </DocumentTitle>
    )
}