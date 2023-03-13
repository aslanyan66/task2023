import React, { ChangeEvent, useCallback, useEffect, useReducer } from 'react'
import { Cylinder, Select, ButtonsSection } from 'components'
import { timeUnits } from 'constants/time'
import { getCurrentTimeToStr, timeToMilliseconds, isValidTimeForCount } from 'utils'
import { initialCountdownState, countdownReducer } from './reducer'
import { ICountDownUnit } from 'types/countdown.types'
import styles from './index.module.scss'
const Countdown = () => {
  const [countdownState, dispatch] = useReducer(countdownReducer, initialCountdownState)
  const { delay, timeRemaining, selectedTime, selectedUnit, countdownStatus } = countdownState
  const isStopped = countdownStatus === 'stopped'

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined

    if (!isStopped && timeRemaining <= 0) {
      dispatch({ type: 'stop' })
    } else if (countdownStatus === 'playing') {
      interval = setInterval(() => {
        dispatch({ type: 'set-remaining', payload: timeRemaining - delay })
      }, delay)
    }
    return () => clearInterval(interval)
  }, [countdownStatus, timeRemaining, delay, isStopped])

  const handleTimeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if (Number(value) >= 0) {
      dispatch({ type: 'select-time', payload: value || '' })
    }
  }

  const handleUnitSelect = useCallback(
    (unit: ICountDownUnit) => dispatch({ type: 'select-unit', payload: unit }),
    [],
  )

  const onCountStop = useCallback(() => {
    dispatch({ type: 'stop' })
  }, [])

  const onCountStart = useCallback(() => {
    const timeWithMilliseconds = timeToMilliseconds(+selectedTime, selectedUnit)
    if (isValidTimeForCount(timeWithMilliseconds)) {
      dispatch({ type: 'start', payload: timeWithMilliseconds })
    }
  }, [selectedTime, selectedUnit])

  const onCountPause = useCallback(() => dispatch({ type: 'pause' }), [])
  const onCountResume = useCallback(() => dispatch({ type: 'resume' }), [])

  const showingTime = getCurrentTimeToStr(timeRemaining)

  return (
    <div className={styles.container}>
      <Cylinder
        state={isStopped || selectedTime === 0 ? 0 : (timeRemaining * 100) / +selectedTime}
      />
      <div className={styles.inputContainer}>
        {isStopped ? (
          <input type="number" autoFocus value={selectedTime} onChange={handleTimeInput} />
        ) : (
          <h1>{showingTime}</h1>
        )}
      </div>
      <ButtonsSection
        {...{
          countdownStatus,
          handleStart: countdownStatus === 'paused' ? onCountResume : onCountStart,
          handleStop: onCountStop,
          handlePause: onCountPause,
        }}
      />
      {isStopped && (
        <label>
          Unit:
          <Select
            options={timeUnits}
            onChange={handleUnitSelect}
            defaultValue={timeUnits[0].value}
          />
        </label>
      )}
    </div>
  )
}

export default Countdown
