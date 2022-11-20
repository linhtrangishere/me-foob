import React from 'react';
import styles from './ManageCart.module.scss';

import classNames from 'classnames/bind';
import ListProduct from '~/components/Popper/ListProduct';
import Text from '~/components/Text';
import Button from '~/components/Button';
import ProductCoop from '~/components/Popper/ProductCoop';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ManageCart() {
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Quản lý đơn đặt hàng</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Địa chỉ giao</th>
                                <th>Thành tiền</th>
                                <th>Trạng thái</th>
                                <th>Chi tiết</th>
                                <th>Xác nhận</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td>Đang giao hàng</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                                <td className={cx('submit')}>Xác nhận</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td>Đang giao hàng</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                                <td className={cx('submit')}>Xác nhận</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className={cx('btn-submit')}>
                    <Button className={cx('btn')} to="/checkout">
                        Xác nhận
                    </Button>
                </div>
            </div>
            <div
                className="modal fade"
                id="more"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ overflow: 'hidden' }}>
                        <div className={cx('content-wrapper-modal')}>
                            <div className={cx('content')}>
                                <div className={cx('close')} data-dismiss="modal" aria-label="Close">
                                    <img src={images.close} alt="" />
                                </div>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('item-modal')}>
                                <Text>
                                    <strong>Mã đơn hàng: </strong>Anh Ngọc Trần
                                </Text>
                                <Text>
                                    <strong>Chi nhánh: </strong>Anh Ngọc Trần
                                </Text>
                                <Text>
                                    <strong>Địa chỉ chi nhánh: </strong>Anh Ngọc Trần
                                </Text>
                                <Text>
                                    <strong>Tên khách hàng: </strong>Anh Ngọc Trần
                                </Text>
                                <Text>
                                    <strong>Địa chỉ: </strong>Anh Ngọc Trần
                                </Text>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('item-modal')}>
                                <Text>
                                    <strong>Món được đặt:</strong>
                                </Text>
                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                                    <Text className={cx('price-dish')}>70000</Text>
                                </div>
                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                                    <Text className={cx('price-dish')}>70000</Text>
                                </div>
                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                                    <Text className={cx('price-dish')}>70000</Text>
                                </div>
                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                                    <Text className={cx('price-dish')}>70000</Text>
                                </div>
                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>
                                        <strong>Tổng tiền</strong>
                                    </Text>
                                    <Text className={cx('price-dish')}>70000</Text>
                                </div>
                            </div>
                            <div className={cx('separate-big')}></div>
                            <div className={cx('footer')}>
                                <div className={cx('btn-modal')} data-dismiss="modal" aria-label="Close">
                                    <div> Hoàn thành</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ManageCart;
