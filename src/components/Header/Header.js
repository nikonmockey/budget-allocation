import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex } from '..'
import { tabs_links } from 'utils/consts'

import styles from './styles.module.scss'


export const Header = () =>
  <Flex column className={styles.container}>
    <h1>Build your budget plan</h1>
    <h2>Setup channels</h2>
    <Flex justifyBetween fullWidth>
      <p className={styles.paragraph}>Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.</p>
      <button className={styles.button}>+ Add Channel</button>
    </Flex>
  </Flex>
