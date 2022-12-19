import React, { useEffect, useState } from 'react';
import styles from './Product.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import Item from './Item';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function Product({ data = {} }) {
    return (
        <>
            <div className={cx('menu')}>
                <h1 className={cx('title')}>
                    <Text>Thực đơn gồm có món ăn</Text>
                </h1>
                <div className={cx('list-item')}>
                    {data && Object.keys(data).map(function (key) {
                            return <Item key={key} data={data[key]} />;
                        })}
                </div>
            </div>
        </>
    );
}

export default Product;
