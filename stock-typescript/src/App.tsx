import { useState, useEffect } from 'react'
import Navbar from "./scenes/navbar"
import { SelectedPage } from './shared/types'
import { Dashboard } from './scenes/dashboard'
import { AboutUs } from './scenes/aboutUs'
import { News } from './scenes/news/news'
import { Analytics } from './scenes/analytics'
import { StockProivder } from './context/StockContext'
import { initState } from './context/StockContext'


function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Dashboard)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(
    () => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true)
          setSelectedPage(SelectedPage.Dashboard)
        }
        if (window.scrollY !== 0) setIsTopOfPage(false)
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

  return (
    <div className='app bg-gray-20'>
      <StockProivder inputValue={initState.inputValue} >
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage} />
        <Dashboard setSelectedPage={setSelectedPage} />
        <Analytics />
        <News />
        <AboutUs />
      </StockProivder>
    </div>)

}

export default App
