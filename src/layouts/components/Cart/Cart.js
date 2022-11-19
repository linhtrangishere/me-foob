import React from 'react';
import styles from './Cart.module.scss';

import classNames from 'classnames/bind';
import ListProduct from '~/components/Popper/ListProduct';

const cx = classNames.bind(styles);

function Cart() {
    return (
        <>
            <div className={cx('container', 'grid')}>
                <ListProduct/>
            </div>
        </>
    );
}

export default Cart;
