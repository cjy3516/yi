import React from 'react'
import { Card, Typography, List, Tag, Space } from 'antd'
import { hexagramChangeLines } from '../data/consts'

const { Title, Text } = Typography

export interface ChangeLineInfoProps {
  hexagramName: string
  changeLine: number
}

export const ChangeLineInfo: React.FC<ChangeLineInfoProps> = ({
  hexagramName,
  changeLine,
}) => {
  const hexagramLines = hexagramChangeLines[hexagramName]
  
  if (!hexagramLines) {
    return (
      <Card size="small" title="爻辞解释">
        <Text type="secondary">暂无此卦的详细爻辞信息</Text>
      </Card>
    )
  }

  // 爻的名称映射
  const lineNames = {
    1: '初爻',
    2: '二爻', 
    3: '三爻',
    4: '四爻',
    5: '五爻',
    6: '上爻'
  }

  // 生成所有六爻的数据，高亮变爻
  const allLines = [6, 5, 4, 3, 2, 1].map(lineNum => {
    const lineInfo = hexagramLines[lineNum]
    const isChangeLine = lineNum === changeLine
    
    return {
      lineNum,
      name: lineNames[lineNum as keyof typeof lineNames],
      text: lineInfo?.text || '暂无',
      interpretation: lineInfo?.interpretation || '暂无解释',
      isChangeLine
    }
  })

  return (
    <Card 
      size="small" 
      title={
        <Space>
          <span>爻辞详解</span>
          <Tag color="orange">变爻：{lineNames[changeLine as keyof typeof lineNames]}</Tag>
        </Space>
      }
      style={{ marginTop: 16 }}>
      <List
        size="small"
        dataSource={allLines}
        renderItem={(line) => (
          <List.Item 
            className={`change-line-item ${line.isChangeLine ? 'active' : ''}`}
            style={{ 
              borderRadius: 4,
              padding: '8px 12px',
              margin: '4px 0'
            }}>
            <List.Item.Meta
              title={
                <Space>
                  <Tag 
                    color={line.isChangeLine ? 'orange' : 'default'}
                    style={{ minWidth: 48, textAlign: 'center' }}>
                    {line.name}
                  </Tag>
                  <Text strong={line.isChangeLine} style={{ fontSize: 13 }}>
                    {line.text}
                  </Text>
                </Space>
              }
              description={
                <Text 
                  type="secondary" 
                  style={{ 
                    fontSize: 12,
                    fontWeight: line.isChangeLine ? 500 : 'normal'
                  }}>
                  {line.interpretation}
                </Text>
              }
            />
          </List.Item>
        )}
      />
    </Card>
  )
}
