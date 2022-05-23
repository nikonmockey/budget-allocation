import React, { useState, ReactNode } from 'react';
import { Flex } from 'components';

import styles from './styles.module.scss'


type Props = {
  children: ReactNode,
  name: string,
  tooltip: string,
}

export const Block = ({ children, name, tooltip }: Props) => {
  const [showTooltip, setTooltip] = useState(false);

  return (
    <Flex column className={styles.container}>
      <Flex alignCenter className={styles.header}>
        <h3>{name}</h3>
        <div className={styles.tooltipIcon} onMouseOver={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>i</div>
        {
          showTooltip &&
            <div className={styles.tooltipBlock}>{tooltip}</div>
        }
      </Flex>
      {children}
    </Flex>
)}
