import styles from './Restaurants.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import { ListItem } from '~/components/Popper';
import Text from '~/components/Text';
import { useEffect, useState } from 'react';
import ProductCoop from '~/components/Popper/ProductCoop';


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
            <div className={cx('address', 'container', 'grid')}>
                <Button to="/">Trang chủ</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Text>Nhà hàng</Text>
            </div>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Nhà hàng</h1>
                </div>
                <div className={cx('content')}>
                    <Text>
                        Tên nhà hàng: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                    <Text>
                        Thể loại ẩm thực: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                    <Text>
                        Liên hệ: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                </div>
                <ProductCoop />
                <div className={cx('btn-submit')}>
                    <Button className={cx('btn')} to="/checkout">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Restaurants;
