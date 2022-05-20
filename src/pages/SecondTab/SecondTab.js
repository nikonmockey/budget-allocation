import React, { useState } from 'react';
import cx from 'classnames';
import { Flex } from 'components';
import { PERIODS } from 'utils/consts';

import { ReactComponent as PaidReviewsIcon } from 'assets/icons/paidReviewsIcon.svg';

import styles from './styles.module.scss';


export const SecondTab = () => {
  const [scrolled, toggleScroll] = useState(false);
  return (
    <Flex className={styles.container}>
        <Flex column justifyBetween className={styles.header}>
          <h2>Channel</h2>
          <Flex alignCenter>
            <PaidReviewsIcon />
            <p>New Channel</p>
          </Flex>
        </Flex>
        <Flex className={styles.table}>
          <div className={styles.arrow} onClick={ () => toggleScroll(!scrolled) }>
            { !scrolled ? '>' : '<' }
          </div>
          <Flex className={cx(scrolled && styles.scrolled)}>
          {
            PERIODS.Annually.map( (cell) =>
              <Flex column justifyBetween className={styles.cell}>
                <h2>{cell} 21</h2>
                <p>$7,500</p>
              </Flex>
          )}
          </Flex>
        </Flex>
    </Flex>
)}
