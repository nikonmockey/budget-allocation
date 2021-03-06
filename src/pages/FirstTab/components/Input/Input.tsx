import React, { ChangeEvent } from 'react';
import cx from 'classnames';
import num from 'numeral';
import { Block } from '..';

import styles from './styles.module.scss'

type Props = {
  frequency: string,
  allocation: string,
  budget: number,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

export const Input = ({ frequency, allocation, budget, onChange }: Props) => {
  return (
    <Block name={`Baseline ${frequency} Budget`} tooltip="Chosen budget frequency value.">
      <input
        className={cx(styles.input, allocation === 'Manual' && styles.disabled)}
        value={num(budget).format('0,0')}
        onChange={onChange}
      />
    </Block>
)}
