import React, { useRef, useState } from 'react';
import styles from './ProductCoop.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import images from '~/assets/images';
import Button from '~/components/Button';
import Item from './Item';

const cx = classNames.bind(styles);

function ProductCoop({ children, title = 'Mì Trộn Tên Lửa - CMT8', type = 'Bún - Phở - Cháo,Tạp Dề Bạc' }) {
    return (
        <>
            <div className={cx('list')}>
                <h3 className={cx('type')}>
                    <Text>Loại: {type}</Text>
                </h3>
                <h3 className={cx('type')}>
                    <Text>
                        <Text style={{ marginRight: '12px' }}>Đánh giá:</Text>
                        <Star amount={4.8} />
                    </Text>
                </h3>
            </div>
            <div className={cx('menu')}>
                <h1 className={cx('title')}>
                    <Text>Thực đơn</Text>
                </h1>
                <div className={cx('list-item')}>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </>
    );
}

export default ProductCoop;
