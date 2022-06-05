import styles from './styles.module.css'
import Link from 'next/link'

interface ButtonProps {
  text: string
  href?: string
  onClick?: <T>(e: T) => void
}

const Button = (props: ButtonProps) => {
  function renderButton() {
    return (
      <button className={styles.container} onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  return props.href ? (
    <Link href={props.href}>
      <a>{renderButton()}</a>
    </Link>
  ) : (
    renderButton()
  )
}

export default Button
