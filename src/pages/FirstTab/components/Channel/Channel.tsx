import React, { useState, useContext, ChangeEvent } from 'react';
import cx from 'classnames';
import num from 'numeral';
import { Flex } from 'components';
import { PERIODS } from 'utils/consts';
import { ChannelsContext } from 'components';

import { ReactComponent as PaidReviewsIcon } from 'assets/icons/paidReviewsIcon.svg';
import { ReactComponent as Breadcrumbs } from 'assets/icons/breadcrumbs.svg';

import { Block } from '../Block/Block';
import { Select } from '../Select/Select';
import { Input } from '../Input/Input';
import { DoubleButton } from '../DoubleButton/DoubleButton';
import styles from './styles.module.scss';

type Props = {
  name: string,
  id: number,
  allocation: string,
  frequency: string,
  budget: { [key: string]: number },
}

export const Channel = ({ name, id, allocation, frequency, budget }: Props) => {
  const [isEditingName, setEditing] = useState(false);
  const [isCardOpened, setCardOpened] = useState(false);
  const {
    channels,
    openedChannel,
    setOpenChannel,
    removeChannel,
    editChannel,
    toggleAllocation,
    setFrequency,
    setBudget,
  } = useContext(ChannelsContext);
  const overallBudget: number = Object.values(budget).reduce( (prev, curr) => prev + curr, 0);

  const isOpened = openedChannel === id;
  const handleOpeningChannel = () => setOpenChannel(isOpened ? null : id);
  const handleClickOnRemove = () => removeChannel(id);
  const handleClickOnEdit = (name: string) => {
    setEditing(true);
    setCardOpened(false);
  }
  const handleToggleAllocation = () => toggleAllocation(id);
  const handleSelectFrequency = (freq: string) => setFrequency(id, freq);
  const handleChannelNameChange = (e: ChangeEvent<HTMLInputElement>) => editChannel(id, e.target.value);

  const setBudgetCells = () => {
    if (frequency === 'Annually') {
      return PERIODS.Annually.map( (el: string) => ({ name: el, value: overallBudget / 12 }) );
    } else if (frequency === 'Quarterly') {
      return PERIODS.Quarterly.map( (el: string) => ({ name: el, value: overallBudget / 4 }) );
    }

    return PERIODS[frequency].map( (el: string) => ({ name: el, value: budget[el] }) );
  };
  const periodsArray = setBudgetCells();

  const handleBaselineChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numeralValue = num(value || 0);
    const divededValue = numeralValue.divide(12);

    const newBudget = {};
    const newMap = Object.keys(budget).map( (period) => {
      newBudget[period] = divededValue.value();
    });
    setBudget(id, newBudget);
  }
  const handlePeriodAmountChange = (e: ChangeEvent<HTMLInputElement>, period: string) => {
    const { value } = e.target;
    const numeralValue = num(value || 0);
    const newBudget = {};
    console.log({ numeralValue, value, budget, overallBudget, period });
    if (frequency === 'Annually') {
      const newMap = Object.keys(budget).map( (name) => {
        newBudget[name] = numeralValue.value();
      });
    } else if (frequency === 'Quarterly') {
      const newMap = Object.keys(budget).map( (name) => {
        newBudget[name] = numeralValue.divide(3).value();
      });
    } else {
      const newMap = Object.keys(budget).map( (name) => {
        newBudget[name] = name === period ? numeralValue.value() : budget[name];
      });
    }
    setBudget(id, newBudget);
  }

  return (
    <Flex className={styles.container} column>
      <Flex fullWidth className={styles.header}>
        <Flex alignCenter fullWidth onClick={handleOpeningChannel}>
          <div className={cx(styles.triangle, isOpened && styles.isOpened)} />
          <PaidReviewsIcon />
          {
            !isEditingName
            ? <p>{name}</p>
            : <input
                value={name}
                autoFocus={true}
                onChange={handleChannelNameChange}
                type="text"
                onBlur={ () => setEditing(false) }
              />
          }
        </Flex>
        <Breadcrumbs className={styles.breadcrumbs} onClick={ ()=>setCardOpened(!isCardOpened) }/>
        {
          isCardOpened &&
            <Flex column className={styles.card}>
              <Flex alignCenter onClick={handleClickOnEdit}>Edit</Flex>
              <Flex alignCenter onClick={handleClickOnRemove}>Delete</Flex>
            </Flex>
        }
      </Flex>
      {
        isOpened &&
          <Flex column className={styles.budgetContainer}>
            <Flex>
              <Select frequency={frequency} onClick={handleSelectFrequency} />
              <Input frequency={frequency} allocation={allocation} budget={overallBudget} onChange={handleBaselineChange} />
              <DoubleButton allocation={allocation} onClick={handleToggleAllocation} />
            </Flex>
            <Flex column className={styles.breakdownContainer}>
              <h3>Budget Breakdown</h3>
              <p>By default, your budget will be equally divided throughout the year. You can manually change the budget allocation, either now or later.</p>
              <Flex wrap justifyBetween>
              {
                periodsArray.map( (period) =>
                  <Flex column className={styles.cell} key={period.name}>
                    <h5>{period.name} 22</h5>
                    <Flex relative alignCenter className={cx(styles.input, allocation === 'Equal' && styles.disabled)}>
                      <div className={styles.dollasign}>$</div>
                      <input
                        value={num(period.value).format('0,0')}
                        className={cx(allocation === 'Equal' && styles.disabled)}
                        onChange={(e) => handlePeriodAmountChange(e, period.name)}
                      />
                    </Flex>
                  </Flex>
              )}
              </Flex>
            </Flex>
          </Flex>
      }
    </Flex>
)}
