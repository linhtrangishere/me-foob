import React from 'react';
import styles from './Branch.module.scss';

import classNames from 'classnames/bind';
import ListProduct from '~/components/Popper/ListProduct';
import Text from '~/components/Text';
import Button from '~/components/Button';
import ProductCoop from '~/components/Popper/ProductCoop';

const cx = classNames.bind(styles);

function Branch() {
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Chi nhánh</h1>
                </div>
                <div className={cx('content')}>
                    <Text>
                        Tên chi nhánh: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                    <Text>
                        Thời gian hoạt động: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                    <Text>
                        Tình trạng: <Button className={cx('btn-change')}>Đổi</Button>
                    </Text>
                </div>
                <ProductCoop/>
                <div className={cx('btn-submit')}>
                    <Button className={cx('btn')} to="/checkout">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Branch;
