import React, { useRef } from 'react';
import styles from './Restaurants.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import { ListItem } from '~/components/Popper';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Restaurants() {
    return (
        <>
            <div className={cx('address','container', 'grid')}>
                <Button to="/">Trang chủ</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Text>Nhà hàng</Text>
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi GrabFood ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi GrabFood ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
        </>
    );
}

export default Restaurants;
