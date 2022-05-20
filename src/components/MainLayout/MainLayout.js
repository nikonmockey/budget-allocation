import React from 'react'
import { Flex } from '..'
import styles from './styles.module.scss'


export const MainLayout = ({ children, }) =>
  <Flex className={styles.container} f1 column>
    {children}
  </Flex>
