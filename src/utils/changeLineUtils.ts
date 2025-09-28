// 变爻位置的一般含义
export const changeLinePositionMeanings: { [key: number]: string } = {
  1: '初爻变化代表事物的起始阶段发生转变，需要重新审视基础和出发点。',
  2: '二爻变化表示在发展过程中遇到转折，需要调整策略和方法。',
  3: '三爻变化意味着事物发展到关键转折点，面临重要选择。',
  4: '四爻变化表示接近成功时出现变数，需要谨慎应对。',
  5: '五爻变化代表在最佳位置时遇到变化，是重要的转机。',
  6: '上爻变化表示事物发展到极点后的转变，需要准备新的开始。',
}

// 变爻的吉凶倾向
export const changeLineTendencies: {
  [key: number]: {
    type: 'positive' | 'neutral' | 'negative'
    description: string
  }
} = {
  1: { type: 'neutral', description: '谨慎观察，稳扎稳打' },
  2: { type: 'positive', description: '中正之道，较为有利' },
  3: { type: 'negative', description: '处境危险，需要警惕' },
  4: { type: 'neutral', description: '进退两难，需要智慧' },
  5: { type: 'positive', description: '最佳位置，大有可为' },
  6: { type: 'negative', description: '物极必反，宜知进退' },
}

/**
 * 获取变爻的综合分析
 */
export const getChangeLineAnalysis = (
  changeLine: number,
  hexagramName: string,
  hexagramChangeLines: any
) => {
  const positionMeaning =
    changeLinePositionMeanings[changeLine] || '此爻发生变化，需要关注。'
  const tendency = changeLineTendencies[changeLine] || {
    type: 'neutral',
    description: '需要谨慎对待',
  }
  const specificLine = hexagramChangeLines[hexagramName]?.[changeLine]

  return {
    positionMeaning,
    tendency,
    specificLine,
    hasSpecificInfo: !!specificLine,
  }
}




