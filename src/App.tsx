import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import { useTranslation } from "react-i18next"
export default function App() {
  const [_, i18n] = useTranslation("global")
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      gap: "20px"
    }}>
      <Header />
      <div>
        <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
      </div>
      <Home />
    </div>
  )
}
