import React, { useRef } from 'react';
import styles from './Restaurant.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import { ListItem } from '~/components/Popper';
import Text from '~/components/Text';
import Product from '~/components/Popper/Product';

const cx = classNames.bind(styles);

function Restaurant() {
    return (
        <>
            <div className={cx('address', 'container', 'grid')}>
                <Button to="/">Trang chủ</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Button to="/restaurants">Nhà hàng</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Text>Món ăn</Text>
            </div>
            <div className={cx('container', 'grid')}>
                <Product />
            </div>
        </>
    );
}

export default Restaurant;
