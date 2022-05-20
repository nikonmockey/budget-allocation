import React, { useState, ReactNode } from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { FREQUENCY } from 'utils/consts';
import { Block } from '../Block';

import styles from './styles.module.scss'


type Props = {
  children: ReactNode,
  name: string,
  tooltip: string,
}

export const DoubleButton = ({ children, name, tooltip }: Props) => {
  const frequency = 'Annually';
  const allocation = 'Equal';

  return (
    <Block name="Budget Allocation" tooltip='"Equal" - Adding an amount to “Baseline budget”, should fill the “Budget Breakdown” fields and be divided equally. "Manual" - The “Baseline budget” should become the sum of all the “Budget Breakdown” fields.'>
      <Flex alignCenter className={styles.container}>
        <Flex half center className={cx(allocation === 'Equal' && styles.active)}>
          Equal
        </Flex>
        <Flex half center className={cx(allocation !== 'Equal' && styles.active)}>
          Manual
        </Flex>
      </Flex>
    </Block>
)}
