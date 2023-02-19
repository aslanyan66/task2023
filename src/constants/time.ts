import { IUnitOptions } from 'types/countdown.types'

export const timeUnits: IUnitOptions[] = [
  {
    name: 'millisecond',
    value: 1,
    id: 0,
  },
  {
    name: 'second',
    value: 1000,
    id: 1,
  },
  {
    name: 'minute',
    value: 60_000, // 60 * 1000ms = 1 minute
    id: 2,
  },
]
