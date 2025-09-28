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
    height: 14,
    margin: '6px 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  }

  const lineStyle: React.CSSProperties = {
    flex: 1,
    height: '100%',
    background: highlighted ? '#faad14' : '#2d3748',
    borderRadius: 4,
    transition: 'all 0.3s ease',
  }

  const brokenLineStyle: React.CSSProperties = {
    ...lineStyle,
    marginRight: '8px',
    width: '45%',
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
        {showLabel && label && (
          <Text style={labelStyle}>{label}</Text>
        )}
        <div style={lineStyle} />
      </div>
    )
  }

  // 阴爻 (断线)
  return (
    <div style={baseStyle}>
      {showLabel && label && (
        <Text style={labelStyle}>{label}</Text>
      )}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between' }}>
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

  // 爻的标签
  const lineLabels = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻']

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
        <Text strong style={{ fontSize: 14 }}>
          {upperTrigram}{lowerTrigram}卦象
        </Text>
        {changeLine && (
          <div style={{ marginTop: 4 }}>
            <Text type="secondary" style={{ fontSize: 12 }}>
              变爻：{lineLabels[changeLine - 1]}
            </Text>
          </div>
        )}
      </div>

      <div>
        {[0, 1, 2, 3, 4, 5]
          .map((i) => 5 - i) // 由上到下渲染 (上爻到初爻)
          .map((idx) => {
            const isYang = lines[idx] === 1
            const highlighted = changeLine === idx + 1
            return (
              <div 
                key={idx}
                className={`yao-line ${highlighted ? 'highlighted' : ''}`}>
                <Line 
                  isYang={isYang} 
                  highlighted={highlighted}
                  label={lineLabels[idx]}
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
