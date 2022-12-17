import styles from './ManageCart.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function ManageCart() {
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    const { id } = useParams();
    const [data, setData] = useState();
    const [dataCustomer, setDataCustomer] = useState();
    const [dataCart, setDataCart] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/manage-cart/getCarts/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setData(data));
        }, 100);
    }, []);

    const handleOnClick = (slug) => {
        setTimeout(() => {
            fetch(`http://localhost:5000/manage-cart/getDetailCart/${slug}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setDataCustomer(data));
        }, 100);
        setTimeout(() => {
            fetch(`http://localhost:5000/manage-cart/products/${slug}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => setDataCart(data));
        }, 100);
    };

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
                            {data !== undefined &&
                                Object.keys(data).map(function (key) {
                                    return (
                                        <tr key={key} value={data[key]}>
                                            <td>{key + 1}</td>
                                            <td>{data[key].MaPhieuDatHang}</td>
                                            <td>{`${data[key].dc}`}</td>
                                            <td>{format(data[key].TongHoaDon)}</td>
                                            <td>{data[key].TinhTrangDonHang}</td>
                                            <td
                                                className={cx('more')}
                                                data-toggle="modal"
                                                data-target="#more"
                                                onClick={() => handleOnClick(data[key].MaPhieuDatHang)}
                                            >
                                                Chi tiết
                                            </td>
                                            <td
                                                className={cx('submit')}
                                                onClick={() => {
                                                    fetch('http://localhost:5000/manage-cart/submit', {
                                                        method: 'POST',
                                                        headers: {
                                                            'Content-Type': 'application/json',
                                                            Accept: 'application/json',
                                                        },
                                                        body: JSON.stringify({
                                                            pdh: `${data[key].MaPhieuDatHang}`,
                                                        }),
                                                    })
                                                        .then((res) => {
                                                            return res.json();
                                                        })
                                                        .then((data) => {
                                                            alert('Thành công');
                                                        });
                                                }}
                                            >
                                                Xác nhận
                                            </td>
                                        </tr>
                                    );
                                })}
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
                                    <strong>Mã đơn hàng: </strong>
                                    {dataCustomer !== undefined && dataCustomer[0].MaPhieuDatHang}
                                </Text>
                                <Text>
                                    <strong>Chi nhánh: </strong>
                                    {dataCustomer !== undefined && dataCustomer[0].TenChiNhanh}
                                </Text>
                                <Text>
                                    <strong>Địa chỉ chi nhánh: </strong>
                                    {dataCustomer !== undefined &&
                                        `${dataCustomer[0].dccn}`}
                                </Text>
                                <Text>
                                    <strong>Tên khách hàng: </strong>
                                    {dataCustomer !== undefined && dataCustomer[0].TenKhachHang}
                                </Text>
                                <Text>
                                    <strong>Địa chỉ: </strong>
                                    {dataCustomer !== undefined &&
                                        `${dataCustomer[0].dcgh}`}
                                </Text>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('item-modal')}>
                                <Text>
                                    <strong>Món được đặt:</strong>
                                </Text>
                                {dataCart !== undefined &&
                                    Object.keys(dataCart).map(function (key) {
                                        return (
                                            <div className={cx('dish')} key={key} value={dataCart[key]}>
                                                <Text className={cx('name-dish')}>{dataCart[key].TenMonAn}</Text>
                                                <Text className={cx('price-dish')}>{dataCart[key].SoLuongMonAn}</Text>
                                                <Text className={cx('price-dish')}>x</Text>
                                                <Text className={cx('price-dish')}>{dataCart[key].Gia}</Text>
                                            </div>
                                        );
                                    })}

                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>
                                        <strong>Tổng tiền</strong>
                                    </Text>
                                    <Text className={cx('price-dish')}>
                                        {dataCustomer !== undefined && dataCustomer[0].TongHoaDon}
                                    </Text>
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
