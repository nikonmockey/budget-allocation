import React, { useState, useContext } from 'react';
import cx from 'classnames';
import num from 'numeral';
import { Flex } from 'components';
import { MONTHS } from 'utils/consts';
import { Row } from './components/Row/Row';
import { ChannelsContext } from 'components';

import { ReactComponent as PaidReviewsIcon } from 'assets/icons/paidReviewsIcon.svg';

import styles from './styles.module.scss';


export const SecondTab = () => {
  const [scrolled, toggleScroll] = useState(false);
  const handleScroll = () => toggleScroll(!scrolled);
  const { channels } = useContext(ChannelsContext);

  return (
    <Flex className={styles.container}>
        <Flex column className={styles.leftBlock}>
          <h2>Channel</h2>
          {
            channels.map( (channel, idx) =>
              <Flex alignCenter className={styles.row} key={channel.name+idx}>
                <PaidReviewsIcon />
                <p>{channel.name}</p>
              </Flex>
          )}
        </Flex>
        <Flex className={styles.table}>
          <div className={styles.arrow} onClick={handleScroll}>{!scrolled ? '>' : '<'}</div>
          <Flex column className={cx(scrolled && styles.scrolled)}>
            <Flex>
              {
                Object.keys(MONTHS).map( (name) =>
                  <h2 className={styles.cell} key={name}>{name} 21</h2>
              )}
            </Flex>
            {
              channels.map( ({ budget }) =>
                <Flex alignCenter className={styles.row}>
                  {
                    Object.keys(budget).map( (name) =>
                      <Flex column justifyBetween className={styles.cell} key={name}><p>${num(budget[name]).format('0,0')}</p></Flex>
                  )}
                </Flex>
            )}
          </Flex>
        </Flex>
    </Flex>
)}

