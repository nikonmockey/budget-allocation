import React, { useState } from 'react';
import { Flex } from 'components';
import { MONTHS, FREQUENCY } from 'utils/consts';

import styles from './styles.module.scss';

export const BudgetContext = React.createContext({
  value: 'Equal',
  toggleAllocation: () => {},
});
export const ChannelsContext = React.createContext({
  channels: [],
  openedChannel: null,
  setOpenChannel: (id: number | null) => {},
  addChannel: () => {},
  removeChannel: (id: number) => {},
  editChannel: (id: number, name: string) => {},
  toggleAllocation: (id: number) => {},
  setFrequency: (id: number, frequency: string) => {},
  setBudget: (id: number, budget: {}) => {},
});

export const ContextLayout = ({ children }) => {
  const [channels, setChannels] = useState([]);
  const [openedChannel, setOpenChannel] = useState(null);

  const id = channels.length === 0 ? 1 : channels[channels.length - 1].id + 1;
  const addChannel = () => setChannels([...channels, {
    id,
    name: `New Channel ${id}`,
    allocation: 'Equal',
    frequency: FREQUENCY[0],
    budget: {...MONTHS},
  }]);

  const removeChannel = (id: number) => setChannels(channels.filter( channel => channel.id !== id ));
  const editChannel = (id: number, name: string) => {
    const newChannels = [...channels];
    const idx = newChannels.findIndex(channel => channel.id === id);
    newChannels[idx].name = name;
    setChannels(newChannels);
  }
  const toggleAllocation = (id:number) => {
    const newChannels = [...channels];
    const idx = newChannels.findIndex(channel => channel.id === id);
    const newAllocation = newChannels[idx].allocation === 'Equal' ? 'Manual' : 'Equal'
    newChannels[idx].allocation = newAllocation;
    setChannels(newChannels);
  }
  const setFrequency = (id: number, frequency: string) => {
    const newChannels = [...channels];
    const idx = newChannels.findIndex(channel => channel.id === id);
    newChannels[idx].frequency = frequency;
    setChannels(newChannels);
  }
  const setBudget = (id: number, budget: {}) => {
    const newChannels = [...channels];
    const idx = newChannels.findIndex(channel => channel.id === id);
    newChannels[idx].budget = budget;
    setChannels(newChannels);
  }
  const channelsObject = {
    channels,
    openedChannel,
    setOpenChannel,
    addChannel,
    removeChannel,
    editChannel,
    toggleAllocation,
    setFrequency,
    setBudget,
  };

  return (
    <ChannelsContext.Provider value={channelsObject}>
      <Flex className={styles.container} f1 column>
        {children}
      </Flex>
    </ChannelsContext.Provider>
)}
