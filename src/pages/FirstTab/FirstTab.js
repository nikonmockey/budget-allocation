import React, { useState } from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { PERIODS } from 'utils/consts';

import { ReactComponent as PaidReviewsIcon } from 'assets/icons/paidReviewsIcon.svg';
import { ReactComponent as Breadcrumbs } from 'assets/icons/breadcrumbs.svg';

import { Block } from './components/Block';
import { Select } from './components/Select/Select';
import { Input } from './components/Input/Input';
import { DoubleButton } from './components/DoubleButton/DoubleButton';
import styles from './styles.module.scss';


export const FirstTab = () => {
  const [isOpened, setOpened] = useState(false);
  const [isCardOpened, setCardOpened] = useState(false);

  return (
    <Flex className={styles.container} f1 column>
      <Flex fullWidth alignCenter className={styles.header} onClick={() => setOpened(!isOpened)}>
        <div className={cx(styles.triangle, isOpened && styles.isOpened)} />
        <PaidReviewsIcon />
        <p>New Channel</p>
        <Breadcrumbs className={styles.breadcrumbs} onClick={()=>setCardOpened(true)}/>
        {
          isCardOpened &&
            <Flex column className={styles.card}>
              <Flex>Edit</Flex>
              <Flex>Delete</Flex>
            </Flex>
        }
      </Flex>
      {
        isOpened &&
          <Flex column className={styles.budgetContainer}>
            <Flex>
              <Select />
              <Input />
              <DoubleButton />
            </Flex>
            <Flex column className={styles.breakdownContainer}>
              <h3>Budget Breakdown</h3>
              <p>By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.</p>
              <Flex wrap justifyBetween>
              {
                PERIODS.Annually.map( (cell) =>
                  <Flex column className={styles.cell}>
                    <h5>{cell} 22</h5>
                    <input className={styles.input} />
                  </Flex>
              )}
              </Flex>
            </Flex>
          </Flex>
      }
    </Flex>
)}
