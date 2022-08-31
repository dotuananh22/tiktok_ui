import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
    faPlus,
} from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'

import config from '~/config'
import Button from '~/components/Button'
import styles from './Header.module.scss'
import images from '~/assets/images'
import Menu from '~/components/Popper/Menu'
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons'
import Image from '~/components/Image'
import Search from '../Search'

const cx = classNames.bind(styles)

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    type: 'language',
                    code: 'fr',
                    title: 'Tiếng Pháp',
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
]

function Header() {
    const currentUser = true

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break
            default:

        }
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@tiger050794',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]

    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <Link to={config.routes.home} className={cx('logo-link')}>
                <img src={images.logo} alt='TikTok' />
            </Link>

            <Search />

            <div className={cx('actions')}>
                {currentUser ? (
                    <>
                        <Tippy
                            delay={[0, 50]}
                            content="Upload video" placement='bottom'
                        >
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button>
                        </Tippy>
                        <Tippy
                            delay={[0, 50]}
                            content="Message" placement='bottom'
                        >
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button>
                        </Tippy>
                        <Tippy
                            delay={[0, 50]}
                            content="Inbox" placement='bottom'
                        >
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button>
                        </Tippy>
                    </>
                ) : (
                    <>
                        <Button text>
                            <FontAwesomeIcon icon={faPlus} className={cx('icon-upload')} />
                            Upload
                        </Button>
                        <Button primary>Log in</Button>
                    </>
                )}


                <Menu
                    items={currentUser ? userMenu : MENU_ITEMS}
                    onChange={handleMenuChange}
                >
                    {currentUser ? (
                        <Image
                            className={cx('user-avatar')}
                            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/115cca71265c94522079ac7e93a0274b.jpeg?x-expires=1661324400&x-signature=VupGkvaMD7tKbZbOt5TBOqJXJWA%3D"
                            alt="sontungmtp"
                        />
                    ) : (
                        <>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </>
                    )}
                </Menu>
            </div>
        </div >
    </header >
}

export default Header
