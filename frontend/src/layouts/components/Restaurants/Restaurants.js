import styles from './Restaurants.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import { ListItem } from '~/components/Popper';
import Text from '~/components/Text';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Restaurants() {
    const [dataHor1, setDataHor1] = useState({});
    const [dataHor2, setDataHor2] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/home/getBranch1', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => setDataHor1(data));
        fetch('http://localhost:5000/home/getBranch2', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => setDataHor2(data));
    }, []);
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
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    data={dataHor1}
                />
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    data={dataHor2}
                />
            </div>
        </>
    );
}

export default Restaurants;
