import React from 'react';
import styles from '../ListProduct.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Item() {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    return (
        <>
            <div className={cx('item')}>
                <div className={cx('group', 'img')}>
                    <img src={images.product} alt="" />
                </div>
                <div className={cx('group', 'info')}>
                    <Text className={cx('name')}>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                    <Text className={cx('type')}>Cơm</Text>
                </div>
                <div className={cx('group', 'price')}>
                    <Text>7000</Text>
                </div>
                <div className={cx('group', 'amount')}>
                    <div className={cx('sub')}>
                        <img src={images.sub} alt="" />
                    </div>
                    10
                    <div className={cx('plus')}>
                        <img src={images.plus} alt="" />
                    </div>
                </div>
                <div className={cx('group', 'price')}>
                    <Text>70000</Text>
                </div>
                <div className={cx('group', 'btn')}>
                    <img src={images.trash} alt="" />
                </div>
            </div>
        </>
    );
}

export default Item;
