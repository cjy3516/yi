import React from 'react'
import { trigramLines } from '../data/consts'

export interface MiniHexagramDiagramProps {
  lowerTrigram: string
  upperTrigram: string
  changeLine?: number // 1-6，自下而上
  size?: number // 宽度
}

// 迷你爻线组件
const MiniLine: React.FC<{
  isYang: boolean
  highlighted?: boolean
}> = ({ isYang, highlighted }) => {
  const lineHeight = 3
  const lineWidth = 24

  const baseStyle: React.CSSProperties = {
    height: lineHeight,
    margin: '1.5px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const yangStyle: React.CSSProperties = {
    width: lineWidth,
    height: lineHeight,
    background: highlighted ? '#faad14' : '#2d3748',
    borderRadius: 1,
  }

  const yinStyle: React.CSSProperties = {
    width: lineWidth * 0.4,
    height: lineHeight,
    background: highlighted ? '#faad14' : '#2d3748',
    borderRadius: 1,
  }

  if (isYang) {
    return (
      <div style={baseStyle}>
        <div style={yangStyle} />
      </div>
    )
  }

  return (
    <div style={baseStyle}>
      <div style={{ display: 'flex', gap: 3 }}>
        <div style={yinStyle} />
        <div style={yinStyle} />
      </div>
    </div>
  )
}

export const MiniHexagramDiagram: React.FC<MiniHexagramDiagramProps> = ({
  lowerTrigram,
  upperTrigram,
  changeLine,
  size = 32,
}) => {
  const lower = trigramLines[lowerTrigram] || [0, 0, 0]
  const upper = trigramLines[upperTrigram] || [0, 0, 0]

  // 六爻数组，自下而上：lower(3) + upper(3)
  const lines = [...lower, ...upper] // index 0 = 初爻

  const containerStyle: React.CSSProperties = {
    width: size,
    height: size * 1.0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '10px 6px', // 增加上下内边距
    background: 'linear-gradient(145deg, #ffffff, #f8f9fa)',
    borderRadius: 6,
    border: '1px solid #e8e8e8',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  }

  return (
    <div className="mini-hexagram" style={containerStyle}>
      {[5, 4, 3, 2, 1, 0].map((idx) => {
        // idx: 5=上爻, 4=五爻, 3=四爻, 2=三爻, 1=二爻, 0=初爻
        const isYang = idx >= 0 && idx < lines.length ? lines[idx] === 1 : false
        const highlighted = changeLine === idx + 1
        return <MiniLine key={idx} isYang={isYang} highlighted={highlighted} />
      })}
    </div>
  )
}
