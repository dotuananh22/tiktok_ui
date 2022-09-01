import classNames from 'classnames/bind'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Button from '~/components/Button'
import styles from './AccountPreview.module.scss'

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_100x100.jpeg?x-expires=1662166800&x-signature=n4%2FN45XeTdaTY5Q2XughWYGkJrk%3D"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vietphuongthoa</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Việt Phương Thoa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>11.7M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>444.1M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    )
}

export default AccountPreview