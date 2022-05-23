import React, { useContext } from 'react';
import { ChannelsContext } from 'components';

import { Channel } from './components/Channel/Channel';
import styles from './styles.module.scss';


export const FirstTab = () => {
  const { channels } = useContext(ChannelsContext);

  return (
    <>
      {
        channels.map( ({ id, name, allocation, frequency, budget },idx) => (
          <Channel key={name+id+idx} id={id} name={name} allocation={allocation} frequency={frequency} budget={budget} />
      ))}
    </>
  )
}
