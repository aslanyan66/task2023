import { ICountdownAction, ICountdownState } from 'types/countdown.types'

export const initialCountdownState: ICountdownState = {
  selectedTime: '',
  timeRemaining: 0,
  selectedUnit: 1,
  countdownStatus: 'stopped',
  delay: 100,
}
export function countdownReducer(
  state: ICountdownState,
  action: ICountdownAction,
): ICountdownState {
  switch (action.type) {
    case 'start':
      return {
        ...state,
        selectedTime: action.payload,
        timeRemaining: action.payload,
        selectedUnit: initialCountdownState.selectedUnit,
        countdownStatus: 'playing',
      }
    case 'pause':
      return {
        ...state,
        countdownStatus: 'paused',
      }
    case 'resume':
      return {
        ...state,
        countdownStatus: 'playing',
      }
    case 'set-remaining':
      return {
        ...state,
        timeRemaining: action.payload,
      }
    case 'select-time':
      return {
        ...state,
        selectedTime: action.payload,
      }
    case 'select-unit':
      return {
        ...state,
        selectedUnit: action.payload,
      }
    case 'stop':
      return { ...initialCountdownState }
    default:
      return state
  }
}
