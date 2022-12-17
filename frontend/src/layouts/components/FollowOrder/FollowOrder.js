import styles from './FollowOrder.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Text from '~/components/Text';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

function FollowOrder() {
    const [data, setData] = useState();
    const { id } = useParams();

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/follow-order/getDonHang/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                });
        }, 100);
    }, [id]);

    const [name, setName] = useState();
    const [listMonAn, setListMonAn] = useState();
    const [keyIndex, setKeyIndex] = useState(-1);

    const hanldeOnClickDetail = (pdh) => {
        fetch('http://localhost:5000/follow-order/getTenKH', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ pdh: pdh }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setName(data);
            });
        fetch('http://localhost:5000/follow-order/getDetail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({ pdh: pdh }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setListMonAn(data);
            });
    };

    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Theo dõi đơn đặt hàng</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Mã đơn hàng</th>
                                <th>Thành tiền</th>
                                <th>Trạng thái</th>
                                <th>Chi tiết</th>
                            </tr>
                            {data &&
                                Object.keys(data).map(function (key) {
                                    return (
                                        <tr key={key}>
                                            <td>{parseInt(key) + 1}</td>
                                            <td>{data[key].MaPhieuDatHang}</td>
                                            <td>{format(data[key].TongHoaDon)}</td>
                                            <td>{data[key].TinhTrangDonHang}</td>
                                            <td
                                                className={cx('more')}
                                                data-toggle="modal"
                                                data-target="#more"
                                                onClick={() => {
                                                    hanldeOnClickDetail(data[key].MaPhieuDatHang);
                                                    setKeyIndex(parseInt(key));
                                                }}
                                            >
                                                Chi tiết
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
                                    {data && keyIndex !== -1 && `${data[keyIndex].MaPhieuDatHang}`}
                                </Text>
                                <Text>
                                    <strong>Chi nhánh: </strong>
                                    {name && name[0].TenChiNhanh}
                                </Text>
                                <Text>
                                    <strong>Địa chỉ chi nhánh: </strong>
                                    {name && `${name[0].dccn}`}
                                </Text>
                                <Text>
                                    <strong>Tên khách hàng: </strong>
                                    {name && name[0].TenKhachHang}
                                </Text>
                                <Text>
                                    <strong>Địa chỉ: </strong>
                                    {name && `${name[0].dcgh}`}
                                </Text>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('item-modal')}>
                                <Text>
                                    <strong>Món được đặt:</strong>
                                </Text>
                                {listMonAn &&
                                    Object.keys(listMonAn).map(function (key) {
                                        return (
                                            <div key={key} className={cx('dish')}>
                                                <Text className={cx('name-dish')}>{listMonAn[key].TenMonAn}</Text>
                                                <Text className={cx('price-dish')}>
                                                    {listMonAn[key].SoLuongMonAn} x{' '}
                                                    {format(parseInt(listMonAn[key].Gia))}
                                                </Text>
                                            </div>
                                        );
                                    })}

                                <div className={cx('dish')}>
                                    <Text className={cx('name-dish')}>
                                        <strong>Tổng tiền</strong>
                                    </Text>
                                    <Text className={cx('price-dish')}>
                                        {data && keyIndex !== -1 && format(parseInt(data[keyIndex].TongHoaDon))}
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

export default FollowOrder;
