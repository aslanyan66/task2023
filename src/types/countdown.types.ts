import { IUniqueId } from './common.types'

type ICountdownUnitName = 'millisecond' | 'second' | 'minute'
type ICountDownStatus = 'stopped' | 'playing' | 'paused'
type ISelectedTime = number | string

export type ICountDownUnit = 1 | 1000 | 60_000

export type IUnitOptions = {
  name: ICountdownUnitName
  value: ICountDownUnit
  id: IUniqueId
}

export type ICountdownState = {
  timeRemaining: number
  countdownStatus: ICountDownStatus
  selectedUnit: ICountDownUnit
  selectedTime: ISelectedTime
  delay: number
}

export type ICountdownAction =
  | { type: 'set-remaining'; payload: number }
  | { type: 'start'; payload: number }
  | { type: 'select-time'; payload: ISelectedTime }
  | { type: 'pause' }
  | { type: 'resume' }
  | { type: 'stop' }
  | { type: 'select-unit'; payload: ICountDownUnit }
