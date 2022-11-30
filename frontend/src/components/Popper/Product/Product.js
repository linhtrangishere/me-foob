import React, { useEffect, useRef, useState } from 'react';
import styles from './Product.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import images from '~/assets/images';
import Button from '~/components/Button';
import Item from './Item';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ children }) {
    const { id } = useParams();

    const [dataBranch, setDataBranch] = useState();
    const [dataMenu, setDataMenu] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/branch/getBranch/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setDataBranch(data));
        }, 1000);
        setTimeout(() => {
            fetch(`http://localhost:5000/branch/getMenu/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setDataMenu(data));
        }, 1000);
    }, []);
    return (
        <>
            <div className={cx('list')}>
                <h1 className={cx('title')}>
                    <Text>{dataBranch !== undefined && dataBranch[0].TenChiNhanh}</Text>
                </h1>
                <h3 className={cx('type')}>
                    <Text>{dataBranch !== undefined && dataBranch[0].LoaiAmThuc}</Text>
                </h3>
                <Star amount={dataBranch !== undefined && dataBranch[0].Rating} />
                <Text className={cx('time')}>
                    <Text className={cx('time-open')}>Giờ mở cửa</Text>
                    <Text>
                        {dataBranch !== undefined && dataBranch[0].ThoiGianMoCua} -{' '}
                        {dataBranch !== undefined && dataBranch[0].ThoiGianDongCua}
                    </Text>
                </Text>
            </div>
            <div className={cx('menu')}>
                <h1 className={cx('title')}>
                    <Text>Thực đơn</Text>
                </h1>
                <div className={cx('list-item')}>
                    {dataMenu !== undefined &&
                        Object.keys(dataMenu).map(function (key) {
                            return <Item key={key} value={dataMenu[key]} />;
                        })}
                </div>
            </div>
        </>
    );
}

export default Product;
