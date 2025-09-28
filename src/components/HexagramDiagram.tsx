import React from 'react'
import { trigramLines } from '../data/consts'
import { Typography } from 'antd'

const { Text } = Typography

export interface HexagramDiagramProps {
  lowerTrigram: string
  upperTrigram: string
  changeLine?: number // 1-6，自下而上
  size?: number // 宽度
  showLabels?: boolean // 是否显示爻的标签
}

// 画一条爻线
const Line: React.FC<{
  isYang: boolean
  highlighted?: boolean
  label?: string
  showLabel?: boolean
}> = ({ isYang, highlighted, label, showLabel }) => {
  const baseStyle: React.CSSProperties = {
    height: 16,
    margin: '8px 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }

  const lineStyle: React.CSSProperties = {
    flex: 1,
    height: 10, // 统一高度
    background: highlighted ? '#faad14' : '#2d3748',
    borderRadius: 4,
    transition: 'all 0.3s ease',
  }

  const brokenLineStyle: React.CSSProperties = {
    height: 10, // 与阳爻相同高度
    background: highlighted ? '#faad14' : '#2d3748',
    borderRadius: 4,
    transition: 'all 0.3s ease',
    width: '45%',
    flex: 'none', // 不使用flex布局，固定宽度
  }

  const labelStyle: React.CSSProperties = {
    marginRight: 8,
    minWidth: 40,
    fontSize: 12,
    color: highlighted ? '#fa8c16' : '#666',
    fontWeight: highlighted ? 'bold' : 'normal',
  }

  if (isYang) {
    // 阳爻 (实线)
    return (
      <div style={baseStyle}>
        {showLabel && label && <Text style={labelStyle}>{label}</Text>}
        <div style={lineStyle} />
      </div>
    )
  }

  // 阴爻 (断线)
  return (
    <div style={baseStyle}>
      {showLabel && label && <Text style={labelStyle}>{label}</Text>}
      <div
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          gap: '8px',
        }}>
        <div style={brokenLineStyle} />
        <div style={brokenLineStyle} />
      </div>
    </div>
  )
}

export const HexagramDiagram: React.FC<HexagramDiagramProps> = ({
  lowerTrigram,
  upperTrigram,
  changeLine,
  size = 220,
  showLabels = true,
}) => {
  const lower = trigramLines[lowerTrigram] || [0, 0, 0]
  const upper = trigramLines[upperTrigram] || [0, 0, 0]

  // 六爻数组，自下而上：lower(3) + upper(3)
  const lines = [...lower, ...upper] // index 0 = 初爻

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

  const containerStyle: React.CSSProperties = {
    width: size,
    margin: '0 auto',
    padding: '16px',
  }

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: 16,
    padding: '8px 0',
    borderBottom: '1px solid #e8e8e8',
  }

  const trigramInfoStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 12,
    color: '#666',
    marginTop: 16,
    paddingTop: 8,
    borderTop: '1px solid #e8e8e8',
  }

  return (
    <div className="hexagram-diagram" style={containerStyle}>
      <div style={headerStyle}>
        <Text strong style={{ fontSize: 16, color: '#2d3748' }}>
          {upperTrigram}
          {lowerTrigram}卦象
        </Text>
        {changeLine && (
          <div style={{ marginTop: 4 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              变爻：
              {changeLine >= 1 && changeLine <= 6
                ? getLineLabel(changeLine - 1, lines[changeLine - 1] === 1)
                : `第${changeLine}爻`}
            </Text>
          </div>
        )}
      </div>

      <div>
        {[5, 4, 3, 2, 1, 0].map((idx) => {
          // idx: 5=上爻, 4=五爻, 3=四爻, 2=三爻, 1=二爻, 0=初爻
          const isYang =
            idx >= 0 && idx < lines.length ? lines[idx] === 1 : false
          const highlighted = changeLine === idx + 1
          const label = getLineLabel(idx, isYang)
          return (
            <div
              key={idx}
              className={`yao-line ${highlighted ? 'highlighted' : ''}`}>
              <Line
                isYang={isYang}
                highlighted={highlighted}
                label={label}
                showLabel={showLabels}
              />
            </div>
          )
        })}
      </div>

      <div style={trigramInfoStyle}>
        <div>
          <Text strong>上卦：</Text>
          <Text>{upperTrigram}</Text>
        </div>
        <div>
          <Text strong>下卦：</Text>
          <Text>{lowerTrigram}</Text>
        </div>
      </div>
    </div>
  )
}
