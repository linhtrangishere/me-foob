import styles from './Contact.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Contact() {
    const { id } = useParams();
    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            // fetch(`http://localhost:5000/contact/getBranch/${id}`, {
            fetch(`http://localhost:5000/contact/getBranch/DTNCT1U4H4`, {
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
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Hợp đồng</h1>
                </div>
                <div className={cx('content')}>
                    <Text>Mã hợp đồng: {data !== undefined && data[0].MaHopDong}</Text>
                    <Text>
                        Ngày lập hợp đồng:
                        {data !== undefined &&
                            `${data[0].NgayKichHoat}/${data[0].ThangKichHoat}/${data[0].NamKichHoat}`}
                    </Text>
                    <Text>
                        Ngày hết hợp đồng:
                        {data !== undefined && `${data[0].NgayHetHan}/${data[0].ThangHetHan}/${data[0].NamHetHan}`}
                    </Text>
                    <Text>Mã số thuế: {data !== undefined && data[0].MaSoThue}</Text>
                    <Text>Người đại diện: {data !== undefined && data[0].NguoiDaiDien}</Text>
                    <Text>Số chi nhánh đăng ký: {data !== undefined && data[0].SoLuongChiNhanh}</Text>
                    <Text>Địa chỉ: {data !== undefined && data[0].Diachikinhdoanh}</Text>
                    <Text>Số tài khoản: {data !== undefined && data[0].STKNganHang}</Text>
                    <Text>Ngân hàng: {data !== undefined && data[0].NganHang}</Text>
                </div>
                <div className={cx('btn-submit')}>
                    <Button className={cx('btn')} style={{ backgroundColor: 'red' }} to="/checkout">
                        Hủy
                    </Button>
                    <Button className={cx('btn')} to="/checkout">
                        Gia hạn
                    </Button>
                    <Button className={cx('btn')} to="/checkout">
                        Xác nhận
                    </Button>
                </div>
            </div>
        </>
    );
}

export default Contact;
