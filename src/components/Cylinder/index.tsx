import styles from './index.module.scss'

type IProps = {
  state: number
}
const Cylinder = ({ state }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container} style={{ height: `${state}%` }}></div>
    </div>
  )
}

export default Cylinder
