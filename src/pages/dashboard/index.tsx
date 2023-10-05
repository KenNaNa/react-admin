import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import EchartsForReact from '@/components/echarts'
function Dashboard() {
  // 使用状态来控制仪表盘布局
  const [layout, setLayout] = useState('default'); // 默认布局

  // 根据当前布局选择不同的列数
  const cols = layout === 'default' ? 3 : 2;

  // 渲染仪表盘内容
  return (
    <div>
      <Row gutter={16}>
        {/* 添加关键指标组件 */}
        <Col span={24 / cols}>
          <Card title="访问数量">
            <p>21,212,212</p>
          </Card>
        </Col>
        <Col span={24 / cols}>
          <Card title="消息数量">
            <p>43,534</p>
          </Card>
        </Col>
        <Col span={24 / cols}>
          <Card title="购买数量">
            <p>12.432</p>
          </Card>
        </Col>
        {/* 添加更多关键指标 */}
      </Row>


      {/* 统计数据 */}
      <Row style={{ marginTop: '10px' }} gutter={16}>
        {/* 添加折线图 */}
        <Col span={24 / cols}>
          <Card title="折线图">
            <EchartsForReact type='line' height='280px' />
          </Card>
        </Col>
        {/* 添加柱状图 */}
        <Col span={24 / cols}>
          <Card title="柱状图">
            <EchartsForReact type='bar' height='280px' />
          </Card>
        </Col>
        {/* 添加饼状图 */}
        <Col span={24 / cols}>
          <Card title="饼状图">
            <EchartsForReact type='pie' height='280px' />
          </Card>
        </Col>
      </Row>

      {/* 统计数据 */}
      <Row style={{ marginTop: '10px' }} gutter={16}>
        {/* 添加折线图 */}
        <Col span={24 / cols}>
          <Card title="折线图">
            <EchartsForReact type='line' height='280px' />
          </Card>
        </Col>
        {/* 添加柱状图 */}
        <Col span={24 / cols}>
          <Card title="柱状图">
            <EchartsForReact type='bar' height='280px' />
          </Card>
        </Col>
        {/* 添加饼状图 */}
        <Col span={24 / cols}>
          <Card title="饼状图">
            <EchartsForReact type='pie' height='280px' />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
