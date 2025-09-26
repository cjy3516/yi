// 八卦类型定义
export interface Trigram {
  name: string
  symbol: string
  meaning: string
  nature: string
  direction: string
  element: string
}

// 六十四卦类型定义
export interface Hexagram {
  number: number
  name: string
  chineseName: string
  upperTrigram: string
  lowerTrigram: string
  description: string
  interpretation: string
  advice: string
}

// 占卜输入数据
export interface DivinationInput {
  lowerNumber: number
  upperNumber: number
  changeNumber: number
}

// 占卜结果
export interface DivinationResult {
  id: string
  timestamp: Date
  input: DivinationInput
  lowerTrigram: string
  upperTrigram: string
  hexagram: string
  changeLine: number
  interpretation: string
}

// 占卜历史记录
export interface DivinationHistory {
  results: DivinationResult[]
}

// 表单验证规则
export interface ValidationRule {
  required?: boolean
  type?: 'number'
  min?: number
  max?: number
  message?: string
}
