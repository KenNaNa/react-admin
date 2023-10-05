export const lineChartOption = {
    // ECharts选项配置，可根据需要自定义
    title: {
        text: '折线图示例',
    },
    xAxis: {
        type: 'category',
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '销量',
            type: 'line',
            data: [150, 230, 224, 218, 135, 147, 260],
        },
    ],
};

// 柱状图配置
export const barChartOption = {
    // ECharts选项配置，可根据需要自定义
    title: {
        text: '柱状图示例',
    },
    xAxis: {
        type: 'category',
        data: ['产品A', '产品B', '产品C', '产品D', '产品E'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            name: '销量',
            type: 'bar',
            data: [320, 250, 430, 510, 620],
        },
    ],
};

// 饼状图配置
export const pieChartOption = {
    title: {
        text: '饼状图示例',
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 10,
        data: ['类别1', '类别2', '类别3', '类别4', '类别5'],
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center',
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '30',
                    fontWeight: 'bold',
                },
            },
            labelLine: {
                show: false,
            },
            data: [
                { value: 335, name: '类别1' },
                { value: 310, name: '类别2' },
                { value: 234, name: '类别3' },
                { value: 135, name: '类别4' },
                { value: 1548, name: '类别5' },
            ],
        },
    ],
};