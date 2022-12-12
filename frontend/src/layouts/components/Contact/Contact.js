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
    const [dayStart, setDayStart] = useState();
    const [dayEnd, setDayEnd] = useState();

    const [testTransaction, setTestTransaction] = useState(true);

    function convertDate(day) {
        var date = day.slice(0, 10);
        date = date.split('-');
        return date;
    }

    useEffect(() => {
        const abortController = new AbortController();
        fetch(`http://localhost:5000/contact/getBranch/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            signal: abortController.signal,
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setData(data);
                setDayEnd(convertDate(data[0].NgayHetHan));
                setDayStart(convertDate(data[0].NgayKichHoat));
            });

        return () => {
            abortController.abort();
        };
    }, [id]);

    const handleOnClickReset = () => {
        if (testTransaction)
            fetch(`http://localhost:5000/contact/getDateline/${data[0].MaHopDong}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setDayEnd(convertDate(data.output.NGAYHETHAN));
                    alert('Successful')
                });
        else
            fetch(`http://localhost:5000/contact/getDatelineFix/${data[0].MaHopDong}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data) => {
                    setDayEnd(convertDate(data.output.NGAYHETHAN));
                    alert('Successful')
                });
    };
    const [deadline, setDeadline] = useState();
    useEffect(() => {
        if (dayEnd !== undefined) {
            setDeadline(`${dayEnd[0]}-${dayEnd[1]}-${dayEnd[2]}`);
            console.log('called');
        }
    }, [dayEnd]);
    const handleOnClickUpdate = () => {
        fetch(`http://localhost:5000/contact/updateDateline/${data[0].MaHopDong}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.returnValue === 0) {
                    fetch(`http://localhost:5000/contact/getBranch/${id}`, {
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
                            setDayEnd(convertDate(data[0].NgayHetHan));
                            setDayStart(convertDate(data[0].NgayKichHoat));
                        });
                    alert('Gia hạn thành công');
                }
                if (data.returnValue === 1) alert('Gia hạn thất bại');
            });
    };

    useEffect(() => {
        console.log(testTransaction);
    }, [testTransaction]);
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Hợp đồng</h1>
                    <div className={cx('transaction-test')}>
                        <div className={cx('input-tran')}>
                            <input
                                type="radio"
                                name="test-tran"
                                for="no-fix"
                                id="no-fix"
                                onClick={(e) => {
                                    setTestTransaction(true);
                                }}
                            />
                            <label for="no-fix">No Fix</label>
                        </div>
                        <div className={cx('input-tran')}>
                            <input
                                type="radio"
                                name="test-tran"
                                id="fix"
                                for="fix"
                                onClick={(e) => {
                                    setTestTransaction(false);
                                }}
                            />
                            <label for="fix">Fix</label>
                        </div>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Mã hợp đồng</Text>
                                {data !== undefined && data[0].MaHopDong}
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Mã số thuế</Text> {data !== undefined && data[0].MaSoThue}
                            </div>
                        </div>
                    </div>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Người đại diện</Text>
                                {data !== undefined && data[0].NguoiDaiDien}
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Số chi nhánh đăng ký</Text>
                                {data !== undefined && data[0].SoLuongChiNhanh}
                            </div>
                        </div>
                    </div>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Ngày lập hợp đồng</Text>
                                {dayStart !== undefined && `${dayStart[2]}/${dayStart[1]}/${dayStart[0]}`}
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Ngày hết hợp đồng</Text>
                                <input type="date" value={deadline !== undefined && deadline} />
                            </div>
                        </div>
                    </div>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Địa chỉ</Text>
                                {data !== undefined && data[0].Diachikinhdoanh}
                            </div>
                        </div>
                    </div>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Số tài khoản</Text>
                                {data !== undefined && data[0].STKNganHang}
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Ngân hàng</Text> {data !== undefined && data[0].NganHang}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('btn-submit')}>
                    <Button className={cx('btn')} style={{ backgroundColor: 'red' }}>
                        Hủy
                    </Button>
                    <Button className={cx('btn')} onClick={handleOnClickReset}>
                        Tải lại dữ liệu
                    </Button>
                    <Button className={cx('btn')} onClick={handleOnClickUpdate}>
                        Gia hạn
                    </Button>
                    <Button className={cx('btn')}>Xác nhận</Button>
                </div>
            </div>
        </>
    );
}

export default Contact;
