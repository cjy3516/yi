import React from 'react'
import type { FC } from 'react'
import 'antd/dist/reset.css'
import './App.css'
import { Main } from './pages/main/main'

const App: FC = () => (
  <div className="App">
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">周易占卜</h1>
        <p className="app-subtitle">探索古老的智慧，指引人生方向</p>
      </div>
      <Main />
    </div>
  </div>
)

export default App
