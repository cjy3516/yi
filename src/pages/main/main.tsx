import React, { useState, useEffect } from 'react'
import {
  Button,
  Col,
  Form,
  InputNumber,
  Row,
  Typography,
  Card,
  Space,
  Divider,
  Alert,
  Collapse,
  List,
  Tag,
  Modal,
  message,
} from 'antd'
import {
  HistoryOutlined,
  DeleteOutlined,
  QuestionCircleOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'
import { DivinationInput, DivinationResult } from '../../types'
import {
  calculateDivination,
  validateInput,
  formatTime,
} from '../../utils/divination'
import { LocalStorageManager } from '../../utils/storage'
import { trigramsInfo, hexagramsInfo } from '../../data/consts'
import { HexagramDiagram } from '../../components/HexagramDiagram'
import { ChangeLineInfo } from '../../components/ChangeLineInfo'

const { Title, Text, Paragraph } = Typography
const { Panel } = Collapse

export const Main = () => {
  const [form] = Form.useForm()
  const [result, setResult] = useState<DivinationResult | null>(null)
  const [history, setHistory] = useState<DivinationResult[]>([])
  const [loading, setLoading] = useState(false)
  const [helpVisible, setHelpVisible] = useState(false)

  // 加载历史记录
  useEffect(() => {
    const savedHistory = LocalStorageManager.getHistory()
    setHistory(savedHistory.results)
  }, [])

  // 计算占卜
  const onFinish = async (values: DivinationInput) => {
    setLoading(true)

    try {
      const input: DivinationInput = {
        lowerNumber: values.lowerNumber,
        upperNumber: values.upperNumber,
        changeNumber: values.changeNumber,
      }

      // 验证输入
      const validation = validateInput(input)
      if (!validation.isValid) {
        message.error(validation.errors.join('，'))
        return
      }

      // 计算占卜结果
      const divinationResult = calculateDivination(input)
      setResult(divinationResult)

      // 保存到历史记录
      LocalStorageManager.saveResult(divinationResult)

      // 更新历史记录状态
      const updatedHistory = LocalStorageManager.getHistory()
      setHistory(updatedHistory.results)

      message.success('占卜完成！')
    } catch (error) {
      message.error('占卜计算失败，请重试')
      console.error('占卜计算错误:', error)
    } finally {
      setLoading(false)
    }
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('表单验证失败:', errorInfo)
    message.error('请检查输入数据')
  }

  // 清空历史记录
  const clearHistory = () => {
    Modal.confirm({
      title: '确认清空',
      content: '确定要清空所有占卜历史记录吗？此操作不可恢复。',
      onOk() {
        LocalStorageManager.clearHistory()
        setHistory([])
        message.success('历史记录已清空')
      },
    })
  }

  // 删除单条记录
  const deleteResult = (id: string) => {
    LocalStorageManager.deleteResult(id)
    const updatedHistory = LocalStorageManager.getHistory()
    setHistory(updatedHistory.results)
    message.success('记录已删除')
  }

  // 随机生成数字
  const generateRandomNumbers = () => {
    const randomLower = Math.floor(Math.random() * 900) + 100
    const randomUpper = Math.floor(Math.random() * 900) + 100
    const randomChange = Math.floor(Math.random() * 900) + 100

    form.setFieldsValue({
      lowerNumber: randomLower,
      upperNumber: randomUpper,
      changeNumber: randomChange,
    })

    message.info('已生成随机数字')
  }

  return (
    <>
      {/* 使用说明 */}
      <Card style={{ marginBottom: 24 }}>
        <Space>
          <Text strong>使用说明：</Text>
          <Text>
            输入三个三位数（100-999），系统将根据周易理论计算出对应的卦象和解释。
          </Text>
          <Button
            type="link"
            icon={<QuestionCircleOutlined />}
            onClick={() => setHelpVisible(true)}>
            详细说明
          </Button>
        </Space>
      </Card>

      <Row gutter={[24, 24]}>
        {/* 占卜表单 */}
        <Col xs={24} lg={12}>
          <Card
            title="占卜输入"
            extra={
              <Button
                icon={<ThunderboltOutlined />}
                onClick={generateRandomNumbers}>
                随机生成
              </Button>
            }>
            <Form
              form={form}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              layout="vertical">
              <Form.Item
                label="下卦数字"
                name="lowerNumber"
                rules={[
                  { required: true, message: '请输入下卦数字' },
                  {
                    type: 'number',
                    min: 100,
                    max: 999,
                    message: '请输入100-999之间的数字',
                  },
                ]}>
                <InputNumber
                  style={{ width: '100%' }}
                  placeholder="请输入100-999之间的数字"
                  min={100}
                  max={999}
                />
              </Form.Item>

              <Form.Item
                label="上卦数字"
                name="upperNumber"
                rules={[
                  { required: true, message: '请输入上卦数字' },
                  {
                    type: 'number',
                    min: 100,
                    max: 999,
                    message: '请输入100-999之间的数字',
                  },
                ]}>
                <InputNumber
                  style={{ width: '100%' }}
                  placeholder="请输入100-999之间的数字"
                  min={100}
                  max={999}
                />
              </Form.Item>

              <Form.Item
                label="变爻数字"
                name="changeNumber"
                rules={[
                  { required: true, message: '请输入变爻数字' },
                  {
                    type: 'number',
                    min: 100,
                    max: 999,
                    message: '请输入100-999之间的数字',
                  },
                ]}>
                <InputNumber
                  style={{ width: '100%' }}
                  placeholder="请输入100-999之间的数字"
                  min={100}
                  max={999}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading}
                  size="large"
                  block>
                  开始占卜
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>

        {/* 占卜结果 */}
        <Col xs={24} lg={12}>
          <Card title="占卜结果">
            {result ? (
              <div className="result-section">
                <Space
                  direction="vertical"
                  size="large"
                  style={{ width: '100%' }}>
                  {/* 基本信息 */}
                  <div>
                    <Title level={4} style={{ marginBottom: 16 }}>
                      {result.hexagram}卦
                    </Title>
                    <Row gutter={16}>
                      <Col span={8}>
                        <Text strong>下卦：</Text>
                        <br />
                        <Tag color="blue">{result.lowerTrigram}</Tag>
                        <Text type="secondary">
                          ({trigramsInfo[result.lowerTrigram]?.meaning})
                        </Text>
                      </Col>
                      <Col span={8}>
                        <Text strong>上卦：</Text>
                        <br />
                        <Tag color="green">{result.upperTrigram}</Tag>
                        <Text type="secondary">
                          ({trigramsInfo[result.upperTrigram]?.meaning})
                        </Text>
                      </Col>
                      <Col span={8}>
                        <Text strong>变爻：</Text>
                        <br />
                        <Tag color="orange">第{result.changeLine}爻</Tag>
                      </Col>
                    </Row>
                  </div>

                  <Divider />

                  {/* 卦象解释 */}
                  <div>
                    <Title level={5}>卦象解释</Title>
                    <Paragraph>{result.interpretation}</Paragraph>
                  </div>

                  {/* 详细信息 */}
                  {hexagramsInfo[result.hexagram] && (
                    <Collapse>
                      <Panel header="卦象详细信息" key="1">
                        <Space direction="vertical" style={{ width: '100%' }}>
                          <div>
                            <Text strong>卦辞：</Text>
                            <Text>
                              {hexagramsInfo[result.hexagram].description}
                            </Text>
                          </div>
                          <div>
                            <Text strong>卦象含义：</Text>
                            <Text>
                              {hexagramsInfo[result.hexagram].interpretation}
                            </Text>
                          </div>
                          <div>
                            <Text strong>建议：</Text>
                            <Text>{hexagramsInfo[result.hexagram].advice}</Text>
                          </div>
                        </Space>
                      </Panel>
                    </Collapse>
                  )}
                </Space>
              </div>
            ) : (
              <Alert
                message="暂无占卜结果"
                description="请输入数字并点击'开始占卜'按钮"
                type="info"
                showIcon
              />
            )}
          </Card>
        </Col>
      </Row>

      {/* 卦象展示和爻辞详解 */}
      {result && (
        <div className="hexagram-section">
          <Row gutter={[24, 24]}>
            {/* 卦象图示 */}
            <Col xs={24} md={10} lg={8}>
              <div className="hexagram-diagram-container">
                <HexagramDiagram
                  lowerTrigram={result.lowerTrigram}
                  upperTrigram={result.upperTrigram}
                  changeLine={result.changeLine}
                  size={280}
                  showLabels={true}
                />
              </div>
            </Col>

            {/* 爻辞详解 */}
            <Col xs={24} md={14} lg={16}>
              <div className="change-line-info-container">
                <ChangeLineInfo
                  hexagramName={result.hexagram}
                  changeLine={result.changeLine}
                />
              </div>
            </Col>
          </Row>
        </div>
      )}

      {/* 历史记录 */}
      {history.length > 0 && (
        <Card
          title={
            <Space>
              <HistoryOutlined />
              <span>占卜历史</span>
              <Tag color="blue">{history.length}条记录</Tag>
            </Space>
          }
          extra={
            <Button danger size="small" onClick={clearHistory}>
              清空历史
            </Button>
          }
          style={{ marginTop: 24 }}>
          <List
            dataSource={history}
            renderItem={(item) => (
              <List.Item
                className="history-item"
                actions={[
                  <Button
                    type="text"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => deleteResult(item.id)}>
                    删除
                  </Button>,
                ]}>
                <List.Item.Meta
                  title={
                    <Space>
                      <Text strong>{item.hexagram}卦</Text>
                      <Tag color="blue">{item.lowerTrigram}</Tag>
                      <Tag color="green">{item.upperTrigram}</Tag>
                      <Tag color="orange">第{item.changeLine}爻</Tag>
                    </Space>
                  }
                  description={
                    <Space direction="vertical" size="small">
                      <Text type="secondary">{formatTime(item.timestamp)}</Text>
                      <Text ellipsis>{item.interpretation}</Text>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Card>
      )}

      {/* 帮助说明弹窗 */}
      <Modal
        title="周易占卜使用说明"
        open={helpVisible}
        onCancel={() => setHelpVisible(false)}
        footer={[
          <Button key="close" onClick={() => setHelpVisible(false)}>
            关闭
          </Button>,
        ]}
        width={600}>
        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
          <div>
            <Title level={5}>占卜原理</Title>
            <Paragraph>
              周易占卜基于《易经》的八卦理论，通过三个数字计算出对应的卦象：
            </Paragraph>
            <ul>
              <li>
                <Text strong>下卦数字</Text>：除以8取余数，对应八卦中的下卦
              </li>
              <li>
                <Text strong>上卦数字</Text>：除以8取余数，对应八卦中的上卦
              </li>
              <li>
                <Text strong>变爻数字</Text>：除以6取余数，确定变爻位置
              </li>
            </ul>
          </div>

          <div>
            <Title level={5}>八卦对应</Title>
            <Row gutter={8}>
              {Object.entries(trigramsInfo).map(([key, trigram]) => (
                <Col key={key} span={6}>
                  <Tag color="blue">
                    {trigram.symbol} {trigram.name}({trigram.meaning})
                  </Tag>
                </Col>
              ))}
            </Row>
          </div>

          <div>
            <Title level={5}>使用建议</Title>
            <Paragraph>
              • 占卜前保持心境平和，专注于要询问的问题
              <br />
              • 数字可以随机生成，也可以根据个人喜好选择
              <br />
              • 占卜结果仅供参考，重要的决策还需理性思考
              <br />• 可以保存历史记录，方便回顾和对比
            </Paragraph>
          </div>
        </Space>
      </Modal>
    </>
  )
}
