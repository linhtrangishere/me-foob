import React, { useRef } from 'react';
import styles from './Product.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import images from '~/assets/images';
import Button from '~/components/Button';
import Item from './Item';

const cx = classNames.bind(styles);

function Product({ children, title = 'Mì Trộn Tên Lửa - CMT8', type = 'Bún - Phở - Cháo,Tạp Dề Bạc' }) {
    const refDescription = useRef();

    const handleOnclick = () => {
        if (refDescription.current.classList.value === cx('description', 'open'))
            refDescription.current.classList.remove(cx('open'));
        else refDescription.current.classList.add(cx('open'));
    };

    return (
        <>
            <div className={cx('list')}>
                <h1 className={cx('title')}>
                    <Text>{title}</Text>
                </h1>
                <h3 className={cx('type')}>
                    <Text>{type}</Text>
                </h3>
                <Star amount={4.8} />
                <Text className={cx('time')}>
                    <Text className={cx('time-open')}>Giờ mở cửa</Text>
                    <Text>{type}</Text>
                </Text>
                <div className={cx('description')} ref={refDescription}>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                    <Text>
                        <img src={images.tag} alt="" />
                        {type}
                    </Text>
                </div>
                <Button btn onClick={handleOnclick}>
                    Xem Thêm
                </Button>
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

export default Product;
