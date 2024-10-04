import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Contact from './sections/Contact'
import Me from './sections/Me'
import FormSuccess from './sections/FormSuccess'
import FormError from './sections/FormError'
import Projects from './sections/Projects'
import Services from './sections/Services'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormSuccess />
    <FormError />
    <div className='flex-1 bg-base-100'>
      <Header />
      <Content>
        <Me />
        <div className='divider'></div>
        <Projects />
        <div className='divider'></div>
        <Services />
        <div className='divider'></div>
        <Contact />
      </Content>
    </div>
    <Footer />
  </StrictMode>,
)
