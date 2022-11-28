import React from 'react';
import styles from './ListProduct.module.scss';

import classNames from 'classnames/bind';
import Item from './Item';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function ListProduct() {
    return (
        <>
            <div className={cx('title')}>
                <h1>Giỏ hàng</h1>
            </div>
            <div className={cx('content')}>
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
                <Item />
            </div>
            <div className={cx('btn-submit')}>
                <Button className={cx('btn')} to='/checkout'>Đặt hàng</Button>
            </div>
        </>
    );
}

export default ListProduct;
