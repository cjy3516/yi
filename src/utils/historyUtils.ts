import { DivinationResult } from '../types'
import { hexagramsInfo, hexagramChangeLines } from '../data/consts'

/**
 * 为历史记录生成完整的描述文案
 */
export const generateHistoryDescription = (
  result: DivinationResult
): string => {
  const hexagramInfo = hexagramsInfo[result.hexagram]
  const changeLineInfo =
    hexagramChangeLines[result.hexagram]?.[result.changeLine]

  // 构建完整的描述
  const parts: string[] = []

  // 1. 卦辞（description + interpretation）
  if (hexagramInfo) {
    parts.push(`【卦辞】${hexagramInfo.description}`)
    parts.push(`【释义】${hexagramInfo.interpretation}`)
  }

  // 2. 变爻爻辞和解释
  if (changeLineInfo) {
    parts.push(`【变爻】${changeLineInfo.text}`)
    parts.push(`【爻辞释义】${changeLineInfo.interpretation}`)
  } else {
    // 使用通用的变爻说明
    const generalAdvice = getGeneralChangeLineAdvice(result.changeLine)
    parts.push(`【变爻提示】${generalAdvice}`)
  }

  // 3. 建议
  if (hexagramInfo && hexagramInfo.advice) {
    parts.push(`【建议】${hexagramInfo.advice}`)
  }

  return parts.join('\n')
}

/**
 * 提取爻辞的关键要点
 */
const extractKeyPoint = (text: string, interpretation: string): string => {
  // 从解释中提取关键建议，避免重复基础信息
  const cleanInterpretation = interpretation
    .replace(/^[初二三四五上][六九]：/, '') // 移除爻位前缀
    .replace(/。表示.*/, '') // 移除"表示"之后的解释
    .replace(/.*。表示/, '') // 或者保留"表示"之后的内容

  // 如果爻辞很短，直接使用
  if (text.length <= 8) {
    return `${text}，${cleanInterpretation.substring(0, 30)}...`
  }

  // 长爻辞提取关键词
  const keywords = extractKeywords(text)
  return `${keywords}，${cleanInterpretation.substring(0, 40)}...`
}

/**
 * 从爻辞中提取关键词
 */
const extractKeywords = (text: string): string => {
  // 提取一些常见的关键词和短语
  const patterns = [
    /[吉凶厉]/g,
    /[利不利]/g,
    /[贞]/g,
    /[无咎]/g,
    /[悔亡]/g,
    /[元吉]/g,
  ]

  const keywords: string[] = []
  patterns.forEach((pattern) => {
    const matches = text.match(pattern)
    if (matches) {
      keywords.push(...matches)
    }
  })

  if (keywords.length > 0) {
    return keywords.slice(0, 2).join('')
  }

  // 如果没有找到关键词，返回前几个字
  return text.substring(0, 6)
}

/**
 * 获取通用的变爻建议
 */
const getGeneralChangeLineAdvice = (changeLine: number): string => {
  const advices: { [key: number]: string } = {
    1: '初始阶段有变化，宜谨慎行事',
    2: '发展过程遇转折，宜调整策略',
    3: '关键时期有变数，需要决断',
    4: '接近成功有变化，宜谨慎前进',
    5: '最佳时机有转机，可积极把握',
    6: '事物到极点，宜知进退',
  }

  return advices[changeLine] || '此爻有变化，需要关注'
}

/**
 * 导出为 JSON 字符串
 */
export const exportHistoryAsJSON = (results: DivinationResult[]): string => {
  return JSON.stringify(
    results.map((r) => ({
      ...r,
      timestamp:
        r.timestamp instanceof Date ? r.timestamp.toISOString() : r.timestamp,
    })),
    null,
    2
  )
}

/**
 * 导出为 CSV（UTF-8，无 BOM）
 */
export const exportHistoryAsCSV = (results: DivinationResult[]): string => {
  const headers = [
    'id',
    'timestamp',
    'lowerTrigram',
    'upperTrigram',
    'hexagram',
    'changeLine',
  ]
  const lines = results.map((r) => {
    const row = [
      r.id,
      r.timestamp instanceof Date
        ? r.timestamp.toISOString()
        : String(r.timestamp),
      r.lowerTrigram,
      r.upperTrigram,
      r.hexagram,
      String(r.changeLine),
    ]
    return row.map(escapeCSVCell).join(',')
  })
  return [headers.join(','), ...lines].join('\n')
}

const escapeCSVCell = (value: string): string => {
  const needsQuote = /[",\n]/.test(value)
  const escaped = value.replace(/"/g, '""')
  return needsQuote ? `"${escaped}"` : escaped
}
