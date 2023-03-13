import { memo } from 'react'

type IProps = {
  countdownStatus: string
  handleStart(): void
  handlePause(): void
  handleStop(): void
}
const ButtonsSection = memo(({ countdownStatus, handleStart, handlePause, handleStop }: IProps) => {
  return (
    <section className="button-section">
      {countdownStatus !== 'playing' && <button className="play" onClick={handleStart} />}
      {countdownStatus === 'playing' && <button className="pause" onClick={handlePause} />}
      <button className="stop" disabled={countdownStatus === 'stopped'} onClick={handleStop} />
    </section>
  )
})

ButtonsSection.displayName = 'ButtonsSection'
export default ButtonsSection
