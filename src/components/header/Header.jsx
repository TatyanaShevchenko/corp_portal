import logo from '../../images/Logo.jpg'
import styles from './index.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <img
                src={logo}
                alt="Site logo"
                style={{ width: '100px', height: '100px' }}
            />
        </header>
    )
}
