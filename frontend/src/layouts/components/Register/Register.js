import { useEffect, useRef, useState } from 'react';
import styles from './Register.module.scss';

import classNames from 'classnames/bind';
import { banks } from '~/assets/Banks';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Register() {
    const [customer, setCustomer] = useState(true);
    const [driver, setDriver] = useState(false);
    const [coop, setCoop] = useState(false);
    const [errPassword1, setErrPassword1] = useState(true);
    const [errPassword2, setErrPassword2] = useState(true);
    const [errPassword3, setErrPassword3] = useState(true);

    const [KhachHang, setKhachHang] = useState({
        name: '',
        email: '',
        tinh: '',
        huyen: '',
        xa: '',
        dienthoai: '',
        matkhau: '',
        nhaplaimatkhau: '',
    });

    const arrNumber = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const setInputKhachHang = (e) => {
        const { name, value } = e.target;
        if (name === 'Họ tên') {
            if (value.length <= 50) setKhachHang((pre) => ({ ...pre, name: value }));
        } else if (name === 'email') {
            if (value.length <= 50) setKhachHang((pre) => ({ ...pre, email: value }));
        } else if (name === 'Số điện thoại') {
            if (value.length <= 10) {
                if (value.length <= 0) setKhachHang((pre) => ({ ...pre, dienthoai: value }));
                else if (arrNumber.includes(value[value.length - 1]))
                    setKhachHang((pre) => ({ ...pre, dienthoai: value }));
            }
        } else if (name === 'Mật khẩu') {
            if (value.length <= 20) setKhachHang((pre) => ({ ...pre, matkhau: value }));
            if (value.length === 0) setKhachHang((pre) => ({ ...pre, nhaplaimatkhau: value }));
        } else if (name === 'Nhập lại mật khẩu') {
            if (value.length <= 20) {
                if (value.length > 0) {
                    setErrPassword1(TaiXe.matkhau === value);
                }
                if (TaiXe.matkhau.length > 0 && value[value.length - 1] !== ' ')
                    setKhachHang((pre) => ({ ...pre, nhaplaimatkhau: value }));
            }
        } else if (name === 'tinh') {
            setKhachHang((pre) => ({ ...pre, tinh: value }));
        } else if (name === 'huyen') {
            setKhachHang((pre) => ({ ...pre, huyen: value }));
        } else if (name === 'xa') {
            setKhachHang((pre) => ({ ...pre, xa: value }));
        }
    };

    const RegisterKhachHang = () => {
        fetch('http://localhost:5000/register/customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(KhachHang),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    const [TaiXe, setTaiXe] = useState({
        name: '',
        cmnd: '',
        bienso: '',
        diachinha: '',
        stk: '',
        nganhang: '',
        phithechan: 1000000,
        email: '',
        tinh: '',
        huyen: '',
        xa: '',
        dienthoai: '',
        matkhau: '',
        nhaplaimatkhau: '',
    });

    const setInputTaiXe = (e) => {
        const { name, value } = e.target;

        if (name === 'Họ tên') {
            if (value.length <= 50) setTaiXe((pre) => ({ ...pre, name: value }));
        } else if (name === 'CMND') {
            if (value.length <= 10) {
                if (value.length <= 0) setTaiXe((pre) => ({ ...pre, cmnd: value }));
                else if (arrNumber.includes(value[value.length - 1])) setTaiXe((pre) => ({ ...pre, cmnd: value }));
            }
        } else if (name === 'email') {
            if (value.length <= 50) setTaiXe((pre) => ({ ...pre, email: value }));
        } else if (name === 'Địa chỉ') {
            if (value.length <= 50) setTaiXe((pre) => ({ ...pre, diachinha: value }));
        } else if (name === 'Biển số xe') {
            if (value.length <= 20) setTaiXe((pre) => ({ ...pre, bienso: value }));
        } else if (name === 'Số điện thoại') {
            if (value.length <= 10) {
                if (value.length <= 0) setTaiXe((pre) => ({ ...pre, dienthoai: value }));
                else if (arrNumber.includes(value[value.length - 1])) setTaiXe((pre) => ({ ...pre, dienthoai: value }));
            }
        } else if (name === 'bank') {
            if (value.length <= 20) setTaiXe((pre) => ({ ...pre, nganhang: value }));
        } else if (name === 'Số tài khoản') {
            if (value.length <= 20) setTaiXe((pre) => ({ ...pre, stk: value }));
        } else if (name === 'Mật khẩu') {
            if (value.length <= 20) setTaiXe((pre) => ({ ...pre, matkhau: value }));
            if (value.length === 0) setTaiXe((pre) => ({ ...pre, nhaplaimatkhau: value }));
        } else if (name === 'Nhập lại mật khẩu') {
            if (value.length <= 20) {
                if (value.length > 0) {
                    setErrPassword2(TaiXe.matkhau === value);
                }
                if (TaiXe.matkhau.length > 0 && value[value.length - 1] !== ' ')
                    setTaiXe((pre) => ({ ...pre, nhaplaimatkhau: value }));
            }
        } else if (name === 'tinh') {
            setTaiXe((pre) => ({ ...pre, tinh: value }));
        } else if (name === 'huyen') {
            setTaiXe((pre) => ({ ...pre, huyen: value }));
        } else if (name === 'xa') {
            setTaiXe((pre) => ({ ...pre, xa: value }));
        }
    };

    const RegisterTaiXe = () => {
        fetch('http://localhost:5000/register/driver', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(TaiXe),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    const [DoiTac, setDoiTac] = useState({
        name: '',
        email: '',
        masothue: '',
        soluongchinhanh: 0,
        loaiamthuc: '',
        stk: '',
        nganhang: '',
        diachikinhdoanh: '',
        dienthoai: '',
        matkhau: '',
        nhaplaimatkhau: '',
        diachi: '',
    });

    const setInputDoiTac = (e) => {
        const { name, value } = e.target;
        if (name === 'Họ tên') {
            if (value.length <= 50) setDoiTac((pre) => ({ ...pre, name: value }));
        } else if (name === 'email') {
            if (value.length <= 50) setDoiTac((pre) => ({ ...pre, email: value }));
        } else if (name === 'Số lượng chi nhánh') {
            if (value.length <= 10) {
                if (value.length <= 0) setDoiTac((pre) => ({ ...pre, soluongchinhanh: value }));
                else if (arrNumber.includes(value[value.length - 1]))
                    setDoiTac((pre) => ({ ...pre, dienthoai: value }));
            }
        } else if (name === 'Loại ẩm thực') {
            if (value.length <= 50) setDoiTac((pre) => ({ ...pre, loaiamthuc: value }));
        } else if (name === 'Số điện thoại') {
            if (value.length <= 10) {
                if (value.length <= 0) setDoiTac((pre) => ({ ...pre, dienthoai: value }));
                else if (arrNumber.includes(value[value.length - 1]))
                    setDoiTac((pre) => ({ ...pre, dienthoai: value }));
            }
        } else if (name === 'bank') {
            if (value.length <= 50) setDoiTac((pre) => ({ ...pre, nganhang: value }));
        } else if (name === 'Số tài khoản') {
            if (value.length <= 50) setDoiTac((pre) => ({ ...pre, stk: value }));
        } else if (name === 'Mật khẩu') {
            if (value.length <= 20) setDoiTac((pre) => ({ ...pre, matkhau: value }));
            if (value.length === 0) setDoiTac((pre) => ({ ...pre, nhaplaimatkhau: value }));
        } else if (name === 'Nhập lại mật khẩu') {
            if (value.length <= 20) {
                if (value.length > 0) {
                    setErrPassword3(TaiXe.matkhau === value);
                }
                if (TaiXe.matkhau.length > 0 && value[value.length - 1] !== ' ')
                    setDoiTac((pre) => ({ ...pre, nhaplaimatkhau: value }));
            }
        }
    };

    const RegisterDoiTac = () => {
        fetch('http://localhost:5000/register/coop', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(DoiTac),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
            });
    };


    const [provinces, setProvinces] = useState();
    const [districts, setDistricts] = useState();
    const [wards, setWards] = useState();

    const [nameBank, setNameBank] = useState();
    const [provincesBank, setProvincesBank] = useState();
    const [branch, setBranch] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            var result = await fetch('https://provinces.open-api.vn/api/p/')
                .then((response) => response.json())
                .then((data) => data);
            setProvinces(result);
            setNameBank(banks);
        };
        fetchApi();
    }, []);

    const handleSelectProvinces = () => {
        const fetchApi = async () => {
            const result = await fetch(
                `https://provinces.open-api.vn/api/p/${document.getElementById('provinces').value}?depth=2`,
            )
                .then((response) => response.json())
                .then((data) => data);
            setDistricts(result.districts);
        };
        fetchApi();
    };

    const handleSelectDistricts = () => {
        const fetchApi = async () => {
            const result = await fetch(
                `https://provinces.open-api.vn/api/d/${document.getElementById('districts').value}?depth=2`,
            )
                .then((response) => response.json())
                .then((data) => data);
            setWards(result.wards);
        };
        fetchApi();
    };

    const handleSelectNameBank = () => {
        const fetchApi = async () => {
            var result = document.getElementById('name-bank').value;
            result = nameBank.find(({ MaNganHang }) => MaNganHang === `${result}`);
            setProvincesBank(result.province);
        };
        fetchApi();
    };
    const handleSelectProvincesBank = () => {
        const fetchApi = async () => {
            var result1 = document.getElementById('name-bank').value;
            var result2 = document.getElementById('provinces-bank').value;
            var result = nameBank.find(({ MaNganHang }) => MaNganHang === `${result1}`);
            result = result.province.find(({ TenTinhThanh }) => TenTinhThanh === result2);
            setBranch(result.branch);
        };
        fetchApi();
    };

    const refLink = useRef([]);

    const handleOnClickLink = (index) => {
        if (index === 0) {
            setCustomer(true);
            setDriver(false);
            setCoop(false);
        } else if (index === 1) {
            setCustomer(false);
            setDriver(true);
            setCoop(false);
        } else if (index === 2) {
            setCustomer(false);
            setDriver(false);
            setCoop(true);
        }
        // eslint-disable-next-line array-callback-return
        refLink&&refLink.current.map((value, indexSub) => {
            if (indexSub === index) refLink.current[indexSub].classList.add(cx('active'));
            else refLink.current[indexSub].classList.remove(cx('active'));
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
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Đăng ký</h1>
                </div>
                <div className={cx('decentralization')}>
                    <div className={cx('link', 'active')} onClick={() => handleOnClickLink(0)} ref={pushRefLink}>
                        Khách hàng
                    </div>
                    <div className={cx('link')} onClick={() => handleOnClickLink(1)} ref={pushRefLink}>
                        Tài xế
                    </div>
                    <div className={cx('link')} onClick={() => handleOnClickLink(2)} ref={pushRefLink}>
                        Đối tác
                    </div>
                </div>
                <div className={cx('content-wrapper')}>
                    {customer && (
                        <div className={cx('content')}>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Họ tên</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Email</Text>
                                <input type="email" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Tài khoản ngân hàng</Text>
                                <select id="name-bank" onChange={handleSelectNameBank}>
                                    <option value={0} key={0}>
                                        Tên Ngân Hàng
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        nameBank&&nameBank.map((index) => {
                                            return (
                                                <option value={Number(index.MaNganHang)} key={Number(index.MaNganHang)}>
                                                    {index.TenNH}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="provinces-bank" onChange={handleSelectProvincesBank}>
                                        <option value={0} key={0}>
                                            Tỉnh thành
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            provincesBank &&
                                                provincesBank&&provincesBank.map((index) => {
                                                    return (
                                                        <option value={index.TenTinhThanh} key={index.Code}>
                                                            {index.TenTinhThanh}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }
                                {
                                    <select id="branch-bank">
                                        <option value={0} key={0}>
                                            Chi nhánh
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            branch &&
                                                branch&&branch.map((index) => {
                                                    return (
                                                        <option value={index.TenChiNhanh} key={index.MaChiNhanh}>
                                                            {index.TenChiNhanh}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }
                                <input type="text" placeholder="Số tài khoản" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Địa chỉ</Text>
                                <select id="provinces" onChange={handleSelectProvinces}>
                                    <option value={0} key={0}>
                                        Thành phố
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        provinces&&provinces.map((index) => {
                                            return (
                                                <option value={index.code} key={index.code}>
                                                    {index.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="districts" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Quận/Huyện
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            districts &&
                                                districts&&districts.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                {
                                    <select id="wards" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Phường/Xã
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            wards &&
                                                wards&&wards.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                <input type="text" placeholder="Số nhà, Tên đường, Khu phố" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Số điện thoại</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Mật khẩu</Text>
                                <input type="password" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Nhập lại mật khẩu</Text>
                                <input type="password" />
                            </div>
                        </div>
                    )}
                    {driver && (
                        <div className={cx('content')}>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Họ tên</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>CMND</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Email</Text>
                                <input type="email" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Địa chỉ</Text>
                                <select id="provinces" onChange={handleSelectProvinces}>
                                    <option value={0} key={0}>
                                        Thành phố
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        provinces&&provinces.map((index) => {
                                            return (
                                                <option value={index.code} key={index.code}>
                                                    {index.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="districts" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Quận/Huyện
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            districts &&
                                                districts&&districts.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                {
                                    <select id="wards" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Phường/Xã
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            wards &&
                                                wards&&wards.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                <input type="text" placeholder="Số nhà, Tên đường, Khu phố" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Biển số xe</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Khu vực hoạt động</Text>
                                <select id="provinces" onChange={handleSelectProvinces}>
                                    <option value={0} key={0}>
                                        Thành phố
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        provinces&&provinces.map((index) => {
                                            return (
                                                <option value={index.code} key={index.code}>
                                                    {index.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="districts" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Quận/Huyện
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            districts &&
                                                districts&&districts.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                {
                                    <select id="wards" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Phường/Xã
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            wards &&
                                                wards&&wards.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                <input type="text" placeholder="Số nhà, Tên đường, Khu phố" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Tài khoản ngân hàng</Text>
                                <select id="name-bank" onChange={handleSelectNameBank}>
                                    <option value={0} key={0}>
                                        Tên Ngân Hàng
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        nameBank&&nameBank.map((index) => {
                                            return (
                                                <option value={Number(index.MaNganHang)} key={Number(index.MaNganHang)}>
                                                    {index.TenNH}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="provinces-bank" onChange={handleSelectProvincesBank}>
                                        <option value={0} key={0}>
                                            Tỉnh thành
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            provincesBank &&
                                                provincesBank&&provincesBank.map((index) => {
                                                    return (
                                                        <option value={index.TenTinhThanh} key={index.Code}>
                                                            {index.TenTinhThanh}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }
                                {
                                    <select id="branch-bank">
                                        <option value={0} key={0}>
                                            Chi nhánh
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            branch &&
                                                branch&&branch.map((index) => {
                                                    return (
                                                        <option value={index.TenChiNhanh} key={index.MaChiNhanh}>
                                                            {index.TenChiNhanh}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }
                                <input type="text" placeholder="Số tài khoản" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Số tài khoản (nếu có)</Text>
                                <input type="password" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Số điện thoại</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Mật khẩu</Text>
                                <input type="password" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Nhập lại mật khẩu</Text>
                                <input type="password" />
                            </div>
                        </div>
                    )}
                    {coop && (
                        <div className={cx('content')}>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Họ tên người đại diện</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Email</Text>
                                <input type="email" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Tên quán/Nhà hàng</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Địa chỉ</Text>
                                <select id="provinces" onChange={handleSelectProvinces}>
                                    <option value={0} key={0}>
                                        Thành phố
                                    </option>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        provinces&&provinces.map((index) => {
                                            return (
                                                <option value={index.code} key={index.code}>
                                                    {index.name}
                                                </option>
                                            );
                                        })
                                    }
                                </select>
                                {
                                    <select id="districts" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Quận/Huyện
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            districts &&
                                                districts&&districts.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                {
                                    <select id="wards" onChange={handleSelectDistricts}>
                                        <option value={0} key={0}>
                                            Phường/Xã
                                        </option>
                                        {
                                            // eslint-disable-next-line array-callback-return
                                            wards &&
                                                wards&&wards.map((index) => {
                                                    return (
                                                        <option value={index.code} key={index.code}>
                                                            {index.name}
                                                        </option>
                                                    );
                                                })
                                        }
                                    </select>
                                }

                                <input type="text" placeholder="Số nhà, Tên đường, Khu phố" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Số lượng chi nhánh</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>
                                    Số lượng đơn hàng dự kiến mỗi ngày (ví dụ: 0-50, 50-200...)
                                </Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>
                                    Loại ẩm thực (cơm, mì/bún/phở, bánh mì, đồ ăn nhanh, trà sữa...)
                                </Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Số điện thoại</Text>
                                <input type="text" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Mật khẩu</Text>
                                <input type="password" />
                            </div>
                            <div className={cx('text-input')}>
                                <Text className={cx('text')}>Nhập lại mật khẩu</Text>
                                <input type="password" />
                            </div>
                        </div>
                    )}
                    <div className={cx('btn-sub', 'text-input')}>
                        <input className={cx('submit')} type="submit" value="Tạo tài khoản" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
