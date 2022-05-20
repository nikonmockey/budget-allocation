import React, { ReactNode } from 'react'
import cx from 'classnames'

import styles from './styles.module.scss'


type Props = {
  children: ReactNode,
  f1?: boolean,
  column?: boolean,
  center?: boolean,
  justifyBetween?: boolean,
  alignCenter?: boolean,
  alignLeft?: boolean,
  fullWidth?: boolean,
  half?: boolean,
  third?: boolean,
  stretch?: boolean,
  wrap?: boolean,
  relative?: boolean,
  mb24?: boolean,
  className?: string,
  onClick?: () => void,
}

export const Flex = ({
    children,
    f1,
    column,
    center,
    justifyBetween,
    alignCenter,
    alignLeft,
    fullWidth,
    half,
    third,
    stretch,
    wrap,
    relative,
    mb24,
    className,
    onClick,
    ...props
  }: Props) =>
    <div
      className={ cx(
        styles.flex,
        className,
        f1              && styles.f1,
        column          && styles.column,
        center          && styles.center,
        justifyBetween  && styles.jcsb,
        alignCenter     && styles.aic,
        alignLeft       && styles.ail,
        fullWidth       && styles.w100,
        half            && styles.half,
        third           && styles.third,
        stretch         && styles.stretch,
        wrap            && styles.wrap,
        relative        && styles.relative,
        mb24            && styles.mb24,
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
