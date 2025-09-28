import React from 'react'
import { Card, Typography, List, Tag, Space } from 'antd'
import { hexagramChangeLines, trigramLines } from '../data/consts'

const { Title, Text } = Typography

export interface ChangeLineInfoProps {
  hexagramName: string
  changeLine: number
  lowerTrigram?: string
  upperTrigram?: string
}

export const ChangeLineInfo: React.FC<ChangeLineInfoProps> = ({
  hexagramName,
  changeLine,
  lowerTrigram,
  upperTrigram,
}) => {
  const hexagramLines = hexagramChangeLines[hexagramName]

  if (!hexagramLines) {
    return (
      <Card size="small" title="爻辞解释">
        <Text type="secondary">暂无此卦的详细爻辞信息</Text>
      </Card>
    )
  }

  // 根据阴阳爻生成正确的标签
  const getLineLabel = (lineIndex: number, isYang: boolean): string => {
    const positions = ['初', '二', '三', '四', '五', '上']
    const position = positions[lineIndex]
    const yinYang = isYang ? '九' : '六'

    if (lineIndex === 0) {
      return `初${yinYang}`
    } else if (lineIndex === 5) {
      return `上${yinYang}`
    } else {
      return `${yinYang}${position}`
    }
  }

  // 生成六爻线条数据
  let lines: number[] = [0, 0, 0, 0, 0, 0] // 默认全阴
  if (lowerTrigram && upperTrigram) {
    const lower = trigramLines[lowerTrigram] || [0, 0, 0]
    const upper = trigramLines[upperTrigram] || [0, 0, 0]
    lines = [...lower, ...upper] // index 0 = 初爻
  }

  // 生成所有六爻的数据，高亮变爻
  const allLines = [6, 5, 4, 3, 2, 1].map((lineNum) => {
    const lineInfo = hexagramLines[lineNum]
    const isChangeLine = lineNum === changeLine
    const lineIndex = lineNum - 1 // 转换为0-5的索引
    const isYang =
      lineIndex >= 0 && lineIndex < lines.length
        ? lines[lineIndex] === 1
        : false
    const name = getLineLabel(lineIndex, isYang)

    return {
      lineNum,
      name,
      text: lineInfo?.text || '暂无',
      interpretation: lineInfo?.interpretation || '暂无解释',
      isChangeLine,
    }
  })

  return (
    <Card
      size="small"
      title={
        <Space>
          <span>爻辞详解</span>
          <Tag color="orange">
            变爻：
            {changeLine >= 1 && changeLine <= 6
              ? getLineLabel(changeLine - 1, lines[changeLine - 1] === 1)
              : `第${changeLine}爻`}
          </Tag>
        </Space>
      }
      style={{ height: '100%' }}>
      <List
        size="small"
        dataSource={allLines}
        renderItem={(line) => (
          <List.Item
            className={`change-line-item ${line.isChangeLine ? 'active' : ''}`}
            style={{
              borderRadius: 4,
              padding: '8px 12px',
              margin: '4px 0',
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
                    fontWeight: line.isChangeLine ? 500 : 'normal',
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
