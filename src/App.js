import React from 'react'
import { ListOfCategory } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
export const App = () => (
  <div>
    <Logo />
    <GlobalStyle />
    <ListOfCategory />
    <ListOfPhotoCards />
  </div>
)
