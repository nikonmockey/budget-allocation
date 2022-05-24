import React, { useState, useContext, ChangeEvent } from 'react';
import cx from 'classnames';
import num from 'numeral';
import { Flex } from 'components';
import { MONTHS } from 'consts';
import { ChannelsContext } from 'components';

import { ReactComponent as PaidReviewsIcon } from 'assets/icons/paidReviewsIcon.svg';
import { ReactComponent as PencilIcon } from 'assets/icons/pencil.svg';
import styles from './styles.module.scss';


export const SecondTab = () => {
  const [scrolled, toggleScroll] = useState(false);
  const [isEditingAmount, setEditing] = useState({ id: null, name: null });
  const [tempAmount, changeTempAmount] = useState('');
  const handleScroll = () => toggleScroll(!scrolled);
  const { channels, setBudget } = useContext(ChannelsContext);

  const startEditing = (amount, id, name) => {
    setEditing({ id, name });
    changeTempAmount(amount);
  }
  const cancelEditing = () => {
    setEditing({ id: null, name: null });
    changeTempAmount('');
  }
  const handleAmountUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    changeTempAmount(e.target.value);
  }
  const handleAmountChange = (id, name, budget) => {
    const numeralValue = num(tempAmount || 0);
    const newBudget = {};
    Object.keys(budget).map( (period) => {
      newBudget[period] = period === name  ? numeralValue.value() : budget[period];
    });
    setBudget(id, newBudget);
    cancelEditing();
  }

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
              channels.map( ({ id, budget }) =>
                <Flex alignCenter className={styles.row}>
                  {
                    Object.keys(budget).map( (name) =>
                      <Flex
                        alignCenter
                        className={styles.cell}
                        key={name}
                      >
                        {
                          isEditingAmount.id === id && isEditingAmount.name === name
                            ? <Flex alignCenter className={styles.form}>
                                <input
                                  value={num(tempAmount).format('0,0')}
                                  autoFocus={true}
                                  onChange={handleAmountUpdate}
                                  type="text"
                                  className={styles.input}
                                />
                                <Flex center  className={styles.ok} onClick={() => handleAmountChange(id, name, budget)}>✓</Flex>
                                <Flex center className={styles.cancel} onClick={cancelEditing}>ｘ</Flex>
                              </Flex>
                            : <p>${num(budget[name]).format('0,0')}</p>
                        }
                        <PencilIcon className={styles.pencil} onClick={() => startEditing(num(budget[name]), id, name) } />
                      </Flex>
                  )}
                </Flex>
            )}
          </Flex>
        </Flex>
    </Flex>
)}

