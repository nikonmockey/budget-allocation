import React from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { Block } from '..';

import styles from './styles.module.scss'

type Props = {
  allocation: string,
  onClick: () => void
}

export const DoubleButton = ({ allocation, onClick }: Props) => (
  <Block name="Budget Allocation" tooltip='"Equal" - Adding an amount to “Baseline budget”, should fill the “Budget Breakdown” fields and be divided equally. "Manual" - The “Baseline budget” should become the sum of all the “Budget Breakdown” fields.'>
    <Flex alignCenter className={styles.container} onClick={onClick}>
      <Flex half center className={cx(allocation === 'Equal' && styles.active)}>
        Equal
      </Flex>
      <Flex half center className={cx(allocation !== 'Equal' && styles.active)}>
        Manual
      </Flex>
    </Flex>
  </Block>
)
