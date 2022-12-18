import React, { useEffect, useState } from 'react';
import styles from './Product.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import Item from './Item';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ children, TenDoiTac = '' }) {
    const { id } = useParams();

    const [dataMenu, setDataMenu] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/restaurant/getMenu/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => setDataMenu(data));
    }, [id]);
    return (
        <>
            <div className={cx('list')}>
                <h1 className={cx('title')}>
                    <Text>{TenDoiTac}</Text>
                </h1>
                <h3 className={cx('type')}>
                    <Text>{dataMenu !== undefined && dataMenu[0].LoaiAmThuc}</Text>
                </h3>
                <Star amount={dataMenu !== undefined && dataMenu[0].Rating} />
            </div>
            <div className={cx('menu')}>
                <h1 className={cx('title', 'thuc-don')}>
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
