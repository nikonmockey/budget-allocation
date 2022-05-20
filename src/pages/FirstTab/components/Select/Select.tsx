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

export const Select = ({ children, name, tooltip }: Props) => {
  const [isOpenedSelect, setOpenedSelect] = useState(false);
  const [element, setElement] = useState(FREQUENCY[0]);
  const handleElement = (el: string) => {
    setElement(el);
    setOpenedSelect(false);
  }

  return (
    <Block name="Budget Frequency" tooltip="Annually - will divide the budget into 12. Monthly - will assign the budget to each month. Quarterly - will assign the budget to each quarter.">
      <Flex alignCenter justifyBetween className={styles.select} onClick={() => setOpenedSelect(!isOpenedSelect)}>
        <span>{element}</span>
        <div className={cx(styles.triangle, isOpenedSelect && styles.isOpened)} />
      </Flex>
      {
        isOpenedSelect &&
          <Flex className={styles.selectList} column>
            {
              FREQUENCY.map( (el) =>
                <Flex alignCenter className={styles.element} onClick={ () => handleElement(el)}>{el}</Flex>
            )}
          </Flex>
      }
    </Block>
)}
