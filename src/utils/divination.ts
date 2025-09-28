import { DivinationInput, DivinationResult } from '../types'
import {
  eightTrigramsOrder,
  eightTrigramsMeaning,
  eightTrigramsGroupToHexagrams,
  hexagramsInfo,
  changeLineInterpretations,
} from '../data/consts'

/**
 * 计算占卜结果
 * @param input 占卜输入数据
 * @returns 占卜结果
 */
export const calculateDivination = (
  input: DivinationInput
): DivinationResult => {
  const { lowerNumber, upperNumber, changeNumber } = input

  // 计算下卦
  const lowerRemainder = lowerNumber % 8
  const lowerTrigram =
    lowerRemainder !== 0
      ? eightTrigramsOrder[lowerRemainder]
      : eightTrigramsOrder[8]

  // 计算上卦
  const upperRemainder = upperNumber % 8
  const upperTrigram =
    upperRemainder !== 0
      ? eightTrigramsOrder[upperRemainder]
      : eightTrigramsOrder[8]

  // 计算变爻
  const changeLine = changeNumber % 6
  const actualChangeLine = changeLine !== 0 ? changeLine : 6

  // 计算六十四卦
  const lowerMeaning = eightTrigramsMeaning[lowerTrigram]
  const upperMeaning = eightTrigramsMeaning[upperTrigram]

  let hexagramKey: string
  if (lowerTrigram === upperTrigram) {
    hexagramKey = lowerTrigram + '为'
  } else {
    hexagramKey = upperMeaning + lowerMeaning
  }

  const hexagramName = eightTrigramsGroupToHexagrams[hexagramKey] || '未知'

  // 获取卦象详细信息
  const hexagramInfo = hexagramsInfo[hexagramName]
  const changeLineInfo = changeLineInterpretations[actualChangeLine]

  // 生成解释
  const interpretation = hexagramInfo
    ? `${hexagramInfo.interpretation} ${changeLineInfo}`
    : `下卦：${lowerTrigram}(${lowerMeaning})，上卦：${upperTrigram}(${upperMeaning})，合起来是：${hexagramName}，变爻：${actualChangeLine}。${changeLineInfo}`

  return {
    id: generateId(),
    timestamp: new Date(),
    input,
    lowerTrigram,
    upperTrigram,
    hexagram: hexagramName,
    changeLine: actualChangeLine,
    interpretation,
  }
}

/**
 * 生成唯一ID
 */
const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

/**
 * 验证输入数据
 * @param input 输入数据
 * @returns 验证结果
 */
export const validateInput = (
  input: DivinationInput
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = []

  if (!input.lowerNumber || input.lowerNumber < 100 || input.lowerNumber > 999) {
    errors.push('下卦数字必须在100-999之间')
  }

  if (!input.upperNumber || input.upperNumber < 100 || input.upperNumber > 999) {
    errors.push('上卦数字必须在100-999之间')
  }

  if (!input.changeNumber || input.changeNumber < 100 || input.changeNumber > 999) {
    errors.push('变爻数字必须在100-999之间')
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

/**
 * 格式化时间
 * @param date 日期对象
 * @returns 格式化后的时间字符串
 */
export const formatTime = (date: Date): string => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}
