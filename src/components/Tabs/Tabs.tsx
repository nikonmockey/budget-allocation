import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex } from 'components'
import { tabs_links } from 'consts'

import styles from './styles.module.scss'


export const Tabs = () =>
  <Flex className={styles.container}>
    <NavLink to={tabs_links.firsttab} className={styles.link}>Tab 1</NavLink>
    <NavLink to={tabs_links.secondtab} className={styles.link}>Tab 2</NavLink>
  </Flex>
