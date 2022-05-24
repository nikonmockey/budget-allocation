import React, { useContext } from 'react';
import { ChannelsContext, Flex } from 'components';

import styles from './styles.module.scss';

export const Header = () => {
  const { addChannel, toggleOpenedChannel } = useContext(ChannelsContext);
  const handleAddingNewChannel = () => {
    addChannel();
    toggleOpenedChannel(null);
  }

  return (
    <Flex column className={styles.container}>
      <h1>Build your budget plan</h1>
      <h2>Setup channels</h2>
      <Flex justifyBetween fullWidth>
        <p className={styles.paragraph}>Setup your added channels by adding baseline budgets out of your total budget. See the forecast impact with the help of tips and insights.</p>
        <button className={styles.button} onClick={handleAddingNewChannel}>+ Add Channel</button>
      </Flex>
    </Flex>
)}
