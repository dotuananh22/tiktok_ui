import PropTypes from 'prop-types'
import classNames from 'classnames/bind'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import styles from './SuggestedAccounts.module.scss'

const cx = classNames.bind(styles)

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/031e861b377f05c9f3c19a67d7f53df9~c5_100x100.jpeg?x-expires=1662166800&x-signature=n4%2FN45XeTdaTY5Q2XughWYGkJrk%3D'
                alt=''
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>vietphuongthoa</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Việt Phương Thoa</p>
            </div>
        </div>
    )
}

AccountItem.propTypes = {

}

export default AccountItem