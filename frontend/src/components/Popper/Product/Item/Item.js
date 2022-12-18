import React, { useEffect, useState } from 'react';
import styles from './Item.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Item({ children, key, value = null }) {
    const [amount, setAmount] = useState(1);
    const [modal, setModal] = useState(false);

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }

    return (
        <>
            <div
                className={cx('item')}
                key={key}
                onClick={() => {
                    if (modal) setModal(false);
                    else setModal(true);
                }}
            >
                <div className={cx('link')}>
                    <div className={cx('img')}>
                        <img src={images.product} alt="" />
                    </div>
                    <div className={cx('group')}>
                        <h6 className={cx('name')}>
                            {console.log(value.TenMonAn)}
                            <Text>{value !== undefined && value.TenMonAn}</Text>
                        </h6>
                        <div className={cx('group-row')}>
                            <Text>{format(value !== undefined && value.Gia)}</Text>
                            <div className={cx('btn')}>
                                <Button>asd</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
