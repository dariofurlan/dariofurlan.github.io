import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='flex-1'>
      <Header />
      <Content>
        <h1>Hello, world!</h1>
      </Content>
    </div>
    <Footer />
  </StrictMode>,
)
