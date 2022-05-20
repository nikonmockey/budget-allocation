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

export const Input = ({ children, name, tooltip }: Props) => {
  const frequency = 'Annually'

  return (
    <Block name={`Baseline [${frequency}] Budget`} tooltip="Chosen budget frequency value.">
      <input className={styles.input} />
    </Block>
)}
