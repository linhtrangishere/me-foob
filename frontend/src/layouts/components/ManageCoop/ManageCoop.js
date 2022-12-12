import { useRef } from 'react';
import styles from './ManageCoop.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function ManageCoop() {
    const refLink = useRef([]);

    const handleOnClickLink = (index) => {
        var linkBlock = document.querySelectorAll('.' + cx('link-block') + '>div');
        for (let indexSub = 0; indexSub < linkBlock.length; indexSub++) {
            const element = linkBlock[indexSub];
            if (indexSub === index) element.classList.add(cx('link'));
            else element.classList.remove(cx('link'));
        }
        // eslint-disable-next-line array-callback-return
        refLink.current.map((value, indexSub) => {
            if (indexSub === index) refLink.current[indexSub].style.display = 'block';
            else refLink.current[indexSub].style.display = 'none';
        });
    };
    // eslint-disable-next-line no-const-assign
    refLink.current = [];
    const pushRefLink = (el) => {
        if (el && !refLink.current.includes(el)) {
            refLink.current.push(el);
        }
    };

    return (
        <>
            <div className={cx('container', 'grid', 'link-block')}>
                <div className={cx('link')} onClick={() => handleOnClickLink(0)}>
                    Danh sách hợp đồng của đối tác
                </div>
                <div onClick={() => handleOnClickLink(1)}>Thống kê lượng khách hàng</div>
                <div onClick={() => handleOnClickLink(2)}>Thống kê số lượng đơn hàng, doanh thu</div>
                <div onClick={() => handleOnClickLink(3)}>Thống kê số lượng đơn hàng, hoa hồng</div>
                <div onClick={() => handleOnClickLink(4)}>Thống kê tổng hoa hồng</div>
                <div onClick={() => handleOnClickLink(5)}>Danh sách đại lý bị report không tốt</div>
            </div>
            <div className={cx('container', 'grid')} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Danh sách hợp đồng</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Tên đối tác</th>
                                <th>Lượng khách hàng</th>
                                <th>Số lượng đơn hàng</th>
                                <th>Doanh thu</th>
                                <th>Hoa hồng</th>
                                <th>Tổng hoa hồng</th>
                                <th>Report</th>
                                <th>Thời hạn</th>
                                <th>Chi tiết</th>
                                <th>Gia Hạn</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>12312312</td>
                                <td>42342342</td>
                                <td>1000000</td>
                                <td>1000000</td>
                                <td>1000000</td>
                                <td>1000000</td>
                                <td>20/10/2023</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                                <td className={cx('submit')}>Gửi thông báo</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Thống kê thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Số lượng đơn hàng</th>
                                <th>Thu nhập</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Theo dõi thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Địa chỉ nhận</th>
                                <th>Địa chỉ giao</th>
                                <th>Phí vận chuyển</th>
                                <th>Chi tiết</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Thống kê thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Số lượng đơn hàng</th>
                                <th>Thu nhập</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Theo dõi thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Địa chỉ nhận</th>
                                <th>Địa chỉ giao</th>
                                <th>Phí vận chuyển</th>
                                <th>Chi tiết</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>DH121212121</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>227 Nguyễn Văn Cừ, P4, Quận 5, Tp HCM</td>
                                <td>1000000</td>
                                <td className={cx('more')} data-toggle="modal" data-target="#more">
                                    Chi tiết
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={pushRefLink}>
                <div className={cx('title')}>
                    <h1>Thống kê thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Ngày</th>
                                <th>Số lượng đơn hàng</th>
                                <th>Thu nhập</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>20/10/2022</td>
                                <td>200</td>
                                <td>1000000</td>
                            </tr>
                        </table>
                    </div>
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

export default ManageCoop;
