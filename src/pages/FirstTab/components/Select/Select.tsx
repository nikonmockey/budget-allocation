import React, { useState, ReactNode } from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { FREQUENCY } from 'utils/consts';
import { Block } from '../Block/Block';

import styles from './styles.module.scss'

type Props = {
  frequency: string,
  onClick: (el: string) => void
}
export const Select = ({ frequency, onClick }: Props) => {
  const [isOpenedSelect, setOpenedSelect] = useState(false);
  const handleClick = (el: string) => {
    onClick(el);
    setOpenedSelect(false);
  }

  return (
    <Block name="Budget Frequency" tooltip="Annually - will divide the budget into 12. Monthly - will assign the budget to each month. Quarterly - will assign the budget to each quarter.">
      <Flex alignCenter justifyBetween className={styles.select} onClick={() => setOpenedSelect(!isOpenedSelect)}>
        <span>{frequency}</span>
        <div className={cx(styles.triangle, isOpenedSelect && styles.isOpened)} />
      </Flex>
      {
        isOpenedSelect &&
          <Flex className={styles.selectList} column>
            {
              FREQUENCY.map( (el) =>
                <Flex alignCenter className={styles.element} onClick={ () => handleClick(el)}>{el}</Flex>
            )}
          </Flex>
      }
    </Block>
)}
