import { DivinationResult, DivinationHistory } from '../types'

const STORAGE_KEY = 'divination_history'

/**
 * 本地存储管理工具
 */
export class LocalStorageManager {
  /**
   * 保存占卜历史
   * @param result 占卜结果
   */
  static saveResult(result: DivinationResult): void {
    try {
      const history = this.getHistory()
      history.results.unshift(result) // 添加到开头

      // 限制历史记录数量，最多保存50条
      if (history.results.length > 50) {
        history.results = history.results.slice(0, 50)
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch (error) {
      console.error('保存占卜历史失败:', error)
    }
  }

  /**
   * 获取占卜历史
   * @returns 占卜历史
   */
  static getHistory(): DivinationHistory {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const history = JSON.parse(stored)
        // 转换时间字符串为Date对象
        history.results = history.results.map((result: any) => ({
          ...result,
          timestamp: new Date(result.timestamp),
        }))
        return history
      }
    } catch (error) {
      console.error('读取占卜历史失败:', error)
    }

    return { results: [] }
  }

  /**
   * 清空占卜历史
   */
  static clearHistory(): void {
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error('清空占卜历史失败:', error)
    }
  }

  /**
   * 删除指定的占卜记录
   * @param id 记录ID
   */
  static deleteResult(id: string): void {
    try {
      const history = this.getHistory()
      history.results = history.results.filter((result) => result.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history))
    } catch (error) {
      console.error('删除占卜记录失败:', error)
    }
  }
}
