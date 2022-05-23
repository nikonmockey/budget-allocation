import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import {
  FirstTab,
  SecondTab,
} from 'pages'

import {
  ContextLayout,
  Header,
  Tabs,
} from 'components'

import { tabs_links } from 'utils/consts'

const App = () => (
    <Router>
      <ContextLayout>
        <Header />
        <Tabs />
        <Routes>
          <Route path="/" element={<FirstTab />} />
          <Route path={tabs_links.firsttab} element={<FirstTab />} />
          <Route path={tabs_links.secondtab} element={<SecondTab />} />
        </Routes>
      </ContextLayout>
    </Router>
)

export default App
