import React, { ChangeEvent, memo } from 'react'
import styles from './index.module.scss'
import { IOption } from 'types/common.types'

type IProps = {
  options: IOption[]
  onChange(arg: number): void
  defaultValue: number
}
const Select = memo(({ onChange, options, defaultValue }: IProps) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onChange(Number(event.target.value))
  return (
    <div className={styles.wrapper}>
      <select className={styles.container} onChange={handleChange} defaultValue={defaultValue}>
        {options.map(({ id, name, value }) => (
          <option key={id} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
})

Select.displayName = 'Select'

export default Select
