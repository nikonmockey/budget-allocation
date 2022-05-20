import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  FirstTab,
  SecondTab,
} from 'pages'

import {
  MainLayout,
  Header,
  Tabs,
} from 'components'

import { tabs_links } from 'utils/consts'

const App = () =>
  <Router>
    <MainLayout>
      <Header />
      <Tabs />
      <Routes>
        <Route path="/" element={<FirstTab />} />
        <Route path={tabs_links.firsttab} element={<FirstTab />} />
        <Route path={tabs_links.secondtab} element={<SecondTab />} />
      </Routes>
    </MainLayout>
  </Router>

export default App
