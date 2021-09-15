import CircularProgress from '@material-ui/core/CircularProgress'

import styles from './index.module.scss'

export const Loader = () => {
    return (
        <div className={styles.container}>
            <CircularProgress />
        </div>
    )
}
