import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import Contact from './section/Contact'
import Me from './section/Me'
import FormSuccess from './section/FormSuccess'
import FormError from './section/FormError'
import Projects from './section/Projects'
import Services from './section/Services'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FormSuccess />
    <FormError />
    <div className='flex-1 w-full bg-base-100'>
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
