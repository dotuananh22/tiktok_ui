import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind'
import Image from '~/components/Image'
import styles from './AccountItem.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/115cca71265c94522079ac7e93a0274b.jpeg?x-expires=1661324400&x-signature=VupGkvaMD7tKbZbOt5TBOqJXJWA%3D"
                alt="sontungmtp"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Son Tung M-TP</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>tiger050794</span>
            </div>
        </div>
    )
}

export default AccountItem;