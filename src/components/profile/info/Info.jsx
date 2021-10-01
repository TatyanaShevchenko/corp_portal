import styles from './index.module.scss'

export const Info = ({ profile }) => {
    if (profile) {
        const {
            fullName,
            aboutMe,
            lookingForAJob,
            lookingForAJobDescription,
            contacts: {
                facebook,
                github,
                instagram,
                mainLink,
                twitter,
                vk,
                website,
                youtube,
            },
            photos: { small },
        } = profile

        return (
            <div className={styles.info}>
                <div className={styles.main__info}>
                    <p className={styles.title}>{fullName}</p>
                    <p className={styles.status}>{aboutMe}</p>
                    <img
                        className={styles.photo}
                        src={
                            small ||
                            'https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png'
                        }
                        alt="User"
                    />
                </div>
                <div>
                    {lookingForAJob && (
                        <p className={styles.job_status}>
                            {lookingForAJobDescription}
                        </p>
                    )}
                    <div className={styles.contacts}>
                        <ul className={styles.contacts__list}>
                            {facebook && (
                                <li className={styles.contacts__list__item}>
                                    facebook: {facebook}
                                </li>
                            )}
                            {github && (
                                <li className={styles.contacts__list__item}>
                                    github: {github}
                                </li>
                            )}
                            {instagram && (
                                <li className={styles.contacts__list__item}>
                                    instagram: {instagram}
                                </li>
                            )}
                            {mainLink && (
                                <li className={styles.contacts__list__item}>
                                    mainLink: {mainLink}
                                </li>
                            )}
                            {twitter && (
                                <li className={styles.contacts__list__item}>
                                    twitter: {twitter}
                                </li>
                            )}
                            {vk && (
                                <li className={styles.contacts__list__item}>
                                    vk: {vk}
                                </li>
                            )}
                            {website && (
                                <li className={styles.contacts__list__item}>
                                    website: {website}
                                </li>
                            )}
                            {youtube && (
                                <li className={styles.contacts__list__item}>
                                    youtube: {youtube}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={styles.info}>
            <p className={styles.title}>No user</p>
        </div>
    )
}
