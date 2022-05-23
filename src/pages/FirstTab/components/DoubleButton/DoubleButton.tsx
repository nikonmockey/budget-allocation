import React, { useState, ReactNode, useContext } from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { FREQUENCY } from 'utils/consts';
import { ChannelsContext } from 'components';
import { Block } from '../Block/Block';

import styles from './styles.module.scss'

type Props = {
  allocation: string,
  onClick: () => void
}

export const DoubleButton = ({ allocation, onClick }: Props) => {
  const { channels, toggleAllocation } = useContext(ChannelsContext);

  return (
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
)}
