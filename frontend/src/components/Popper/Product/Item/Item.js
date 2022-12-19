import React, { useState } from 'react';
import styles from './Item.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Item({ children, data = {} }) {
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
                data-toggle="modal"
                data-target="#exampleModalLong"
                // key={key}
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
                            <Text>{data && data.TenMonAn}</Text>
                        </h6>
                        <div className={cx('group-row')}>
                            <Text>{format(data && data.Gia)}</Text>
                            <div className={cx('btn')}>
                                <Button>asd</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && (
                <div
                    className="modal fade"
                    id="exampleModalLong"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                >
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" style={{ overflow: 'hidden' }}>
                            <div className={cx('content-wrapper')}>
                                <div className={cx('content')}>
                                    <div className={cx('close')} data-dismiss="modal" aria-label="Close">
                                        <img src={images.close} alt="" />
                                    </div>
                                </div>
                                <div className={cx('separate')}></div>
                                <div className={cx('item-modal')}>
                                    <div className={cx('link-modal')}>
                                        <div className={cx('img')}>
                                            <img src={images.product} alt="" />
                                        </div>
                                        <div className={cx('group')}>
                                            <h6 className={cx('name')}>
                                                <Text>{data !== undefined && data.TenMonAn}</Text>
                                            </h6>
                                            <div className={cx('group-row')}>
                                                <Text>{format(data !== undefined && data.Gia)}</Text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {data !== undefined && data.length > 0 && (
                                    <>
                                        <div className={cx('separate')}></div>
                                        <div className={cx('note')}>
                                            <h6>Mô tả món ăn</h6>
                                            <Text>{data.MieuTaMon} </Text>
                                        </div>
                                    </>
                                )}
                                <div className={cx('separate-big')}></div>
                                <div className={cx('note')}>
                                    <h6>Ghi chú người bán hoặc người giao hàng</h6>
                                    <input type="text" placeholder="Ghi chú ..." />
                                </div>
                                <div className={cx('footer')}>
                                    <div className={cx('amount')}>
                                        <div
                                            className={cx('sub')}
                                            onClick={() => {
                                                if (amount > 0) setAmount(amount - 1);
                                            }}
                                        >
                                            <img src={images.sub} alt="" />
                                        </div>
                                        {amount}
                                        <div
                                            className={cx('plus')}
                                            onClick={() => {
                                                setAmount(amount + 1);
                                            }}
                                        >
                                            <img src={images.plus} alt="" />
                                        </div>
                                    </div>
                                    <div className={cx('btn-modal')}>
                                        {amount !== 0 && (
                                            <div>
                                                Add to Basket - {format(data !== undefined && data.Gia * amount)} ₫
                                            </div>
                                        )}
                                        {amount === 0 && (
                                            <div className={cx('cancel')} data-dismiss="modal" aria-label="Close">
                                                Cancel
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Item;
