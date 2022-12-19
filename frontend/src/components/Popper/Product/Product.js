import React from 'react';
import styles from './Product.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Item from './Item';

const cx = classNames.bind(styles);

function Product({ data = {} }) {
    return (
        <>
            <div className={cx('menu')}>
                <h1 className={cx('title', 'thuc-don')}>
                    <Text>Thực đơn</Text>
                    <h1 className={cx('type')}><Text>Thực đơn gồm có {data[0].Tong} món ăn</Text></h1>
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
