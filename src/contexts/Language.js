import React from 'react'

const Language = React.createContext({ language: 'pt-br', toggleLanguage: () => console.log('testeok') })
Language.displayName = 'LanguageContext'

export default Language