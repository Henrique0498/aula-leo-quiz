import { useRouter } from 'next/dist/client/router'
import Button from '../components/Button'
import Statistic from '../components/Statistic'
import styles from './../styles/Result.module.css'

const Result = () => {
  const router = useRouter()
  const total = Number(router.query.total)
  const okay = Number(router.query.okay)
  const percentage = Math.round((okay / total) * 100)

  return (
    <div className={styles.container}>
      <h1>Resultado Final</h1>
      <div style={{ display: 'flex' }}>
        <Statistic text="Perguntas" value={total} />
        <Statistic text="Certas" value={okay} background="#9CD2A4" />
        <Statistic
          text="Percentual"
          value={`${percentage}%`}
          background="#DE6A33"
        />
      </div>
      <Button href="/" text="Tentar Novamente" />
    </div>
  )
}

export default Result
