import React from 'react'
import ReactEcharts from 'echarts-for-react';
import { lineChartOption, barChartOption, pieChartOption } from '@/components/echarts/config'

export default function EchartsForReact({ type, height }: { type: string, height: string }): React.ReactNode {
    if (type === 'line') {
        return (
            <ReactEcharts option={lineChartOption} style={{ height: height }} />
        )
    } else if (type === 'bar') {
        return (
            <ReactEcharts option={barChartOption} style={{ height: height }} />
        )
    } else {
        return (
            <ReactEcharts option={pieChartOption} style={{ height: height }} />
        )
    }
}