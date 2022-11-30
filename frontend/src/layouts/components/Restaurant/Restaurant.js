import styles from './Restaurant.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Product from '~/components/Popper/Product';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Restaurant() {
    const { id } = useParams();
    const [name, setName] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/branch/getName/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setName(data));
        }, 1000);
    }, []);
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
                {name !== undefined && <Text>{'Tên chi nhánh' && name[0].TenChiNhanh}</Text>}
            </div>
            <div className={cx('container', 'grid')}>
                <Product />
            </div>
        </>
    );
}

export default Restaurant;
