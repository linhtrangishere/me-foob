import React, { useState } from 'react';
import styles from './Login.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import Button from '../Button';

const cx = classNames.bind(styles);

function Login({ children, login = false, name = '', ...props }) {
    const handleLogout = () => {
        fetch('http://localhost:5000/login/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                user: localStorage.getItem('dienThoai'),
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.returnValue === 0) alert('Thất bại');
                else {
                    localStorage.setItem('userName', '');
                    console.log(localStorage.getItem('userName'));
                    window.location.href = '/';
                }
            });
    };

    return (
        <>
            {localStorage.getItem('userName') ? (
                <HeadlessTippy
                    interactive
                    appendTo={() => document.body}
                    delay={[0, 500]}
                    placement="bottom-start"
                    render={(attrs) => (
                        <ul className={cx('dropdown-menu')} tabIndex="-1" {...attrs}>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/contact/DT000HNUKU">Xem hợp đồng</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/branch">Thông tin chi nhánh</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/manage-cart/DT000HNUKU">Quản lý đơn hàng (Đối tác)</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/manage-driver">Quản lý đơn hàng (tài xế)</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/follow-order">Theo dõi đơn hàng</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/earning-tracking">Theo dõi thu nhập (tài xế)</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} to="/manage-coop">Quản lý đối tác (đối tác)</Button>
                            </li>
                            <li className={cx('item')}>
                                <Button className={cx('item-link')} onClick={() => handleLogout()}>Đăng xuất</Button>
                            </li>
                        </ul>
                    )}
                >
                    <div className={cx('dropdown-btn')}>
                        <Button className={cx('name-user')}>{localStorage.getItem('userName')}</Button>
                    </div>
                </HeadlessTippy>
            ) : (
                <>
                    <Button headerGroup href="/login">
                        <div className={cx('login')}>Đăng nhập</div>
                    </Button>
                    <Button headerGroup href="/register">
                        <div className={cx('login')}>Đăng ký</div>
                    </Button>
                </>
            )}
        </>
    );
}

export default Login;
