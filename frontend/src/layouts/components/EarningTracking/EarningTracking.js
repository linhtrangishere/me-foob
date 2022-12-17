import { useEffect, useRef, useState } from 'react';
import styles from './EarningTracking.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function EarningTracking() {
    const refFollow = useRef();
    const refStatistical = useRef();

    const [data, setData] = useState();
    const [data2, setData2] = useState();

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }

    useEffect(() => {
        fetch('http://localhost:5000/earning-tracking/getThuNhap', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
            });
        fetch('http://localhost:5000/earning-tracking/getThongKe', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData2(data);
            });
    }, []);

    return (
        <>
            <div className={cx('container', 'grid', 'link-block')}>
                <div
                    className={cx('link')}
                    onClick={() => {
                        var linkBlock = document.querySelectorAll('.' + cx('link-block') + '>div');
                        linkBlock[0].classList.add(cx('link'));
                        linkBlock[1].classList.remove(cx('link'));
                        refFollow.current.style.display = 'block';
                        refStatistical.current.style.display = 'none';
                    }}
                >
                    Theo dõi thu nhập
                </div>
                <div
                    onClick={() => {
                        var linkBlock = document.querySelectorAll('.' + cx('link-block') + '>div');
                        linkBlock[0].classList.remove(cx('link'));
                        linkBlock[1].classList.add(cx('link'));
                        refFollow.current.style.display = 'none';
                        refStatistical.current.style.display = 'block';
                    }}
                >
                    Thống kê thu nhập
                </div>
            </div>
            <div className={cx('container', 'grid')} ref={refFollow}>
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
                            </tr>
                            {data &&
                                Object.keys(data).map(function (key) {
                                    return (
                                        <tr key={key}>
                                            <td>{parseInt(key) + 1}</td>
                                            <td>{data[key].MaPhieuDatHang}</td>
                                            <td>
                                                {data[key].xa1}, {data[key].huyen1}, {data[key].tinh1}
                                            </td>
                                            <td>
                                                {data[key].xa2}, {data[key].huyen2}, {data[key].tinh2}
                                            </td>
                                            <td>{format(data[key].TongHoaDon)}</td>
                                        </tr>
                                    );
                                })}
                        </table>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')} style={{ display: 'none' }} ref={refStatistical}>
                <div className={cx('title')}>
                    <h1>Thống kê thu nhập</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('content-wrapper')}>
                        <table>
                            <tr>
                                <th>STT</th>
                                <th>Tháng</th>
                                <th>Số lượng đơn hàng</th>
                                <th>Thu nhập</th>
                            </tr>
                            {data2 &&
                                Object.keys(data2).map(function (key) {
                                    return (
                                        <tr key={key}>
                                            <td>{parseInt(key) + 1}</td>
                                            <td>{data2[key].thang}</td>
                                            <td>{data2[key].sldh}</td>
                                            <td>{format(data2[key].phi)}</td>
                                        </tr>
                                    );
                                })}
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EarningTracking;
