import React from 'react'
import { Card, Row, Col, Typography, Space } from 'antd'
import { trigramLines } from '../data/consts'

const { Title, Text } = Typography

// 简单的三爻显示组件
const SimpleTrigramDisplay: React.FC<{ name: string; lines: number[] }> = ({
  name,
  lines,
}) => {
  return (
    <Card size="small" style={{ textAlign: 'center' }}>
      <Title level={5}>{name}</Title>
      <div style={{ margin: '10px 0' }}>
        {[2, 1, 0].map((idx) => {
          // 从上到下显示
          const isYang = lines[idx] === 1
          return (
            <div key={idx} style={{ margin: '4px 0' }}>
              {isYang ? (
                <div
                  style={{
                    width: 40,
                    height: 6,
                    background: '#333',
                    margin: '0 auto',
                    borderRadius: 2,
                  }}
                />
              ) : (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 6,
                    width: 40,
                    margin: '0 auto',
                  }}>
                  <div
                    style={{
                      width: 15,
                      height: 10,
                      background: '#333',
                      borderRadius: 2,
                    }}
                  />
                  <div
                    style={{
                      width: 15,
                      height: 10,
                      background: '#333',
                      borderRadius: 2,
                    }}
                  />
                </div>
              )}
            </div>
          )
        })}
      </div>
      <Text type="secondary" style={{ fontSize: 10 }}>
        [{lines.join('')}]
      </Text>
    </Card>
  )
}

export const TrigramTest: React.FC = () => {
  return (
    <div style={{ padding: 20 }}>
      <Title level={3}>八卦测试</Title>
      <div
        style={{
          marginBottom: 16,
          padding: 12,
          background: '#f0f0f0',
          borderRadius: 8,
        }}>
        <Text strong>阴阳爻测试：</Text>
        <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
          <div>
            <Text>阳爻：</Text>
            <div
              style={{
                width: 40,
                height: 10,
                background: '#333',
                borderRadius: 2,
                marginTop: 4,
              }}
            />
          </div>
          <div>
            <Text>阴爻：</Text>
            <div style={{ display: 'flex', gap: 6, marginTop: 4 }}>
              <div
                style={{
                  width: 15,
                  height: 10,
                  background: '#333',
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 15,
                  height: 10,
                  background: '#333',
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Row gutter={[16, 16]}>
        {Object.entries(trigramLines).map(([name, lines]) => (
          <Col key={name} span={6}>
            <SimpleTrigramDisplay name={name} lines={lines} />
          </Col>
        ))}
      </Row>
    </div>
  )
}
