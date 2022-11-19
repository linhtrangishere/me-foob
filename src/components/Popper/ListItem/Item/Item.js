import React from 'react';
import styles from './Item.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Star from '~/components/Star';

const cx = classNames.bind(styles);

function Item({ children, hint = false }) {
    return (
        <div className={cx('item')}>
            <Button to="/restaurant" className={cx('link')}>
                <div className={cx('img')}>
                    <img src={images.product} alt="" />
                </div>
                <h6 className={cx('name')}>Cơm Tấm Thăng Trầm - Tân Trang</h6>
                {!hint && (
                    <div className={cx('more')}>
                        <h3 className={cx('type')}>Cơm</h3>
                        <Star amount={4}/>
                    </div>
                )}
            </Button>
        </div>
    );
}

export default Item;
