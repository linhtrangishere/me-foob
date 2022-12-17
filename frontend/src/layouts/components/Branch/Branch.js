import styles from './Branch.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import ProductCoop from '~/components/Popper/ProductCoop';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Branch() {
    const { id } = useParams();
    const [data, setData] = useState();
    //const [name, setName] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        fetch(`http://localhost:5000/restaurant/getName/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => setData(data));
        return () => {
            abortController.abort();
        };
    }, [id]);
    return (
        <>
            <div className={cx('container', 'grid')}>
                <div className={cx('title')}>
                    <h1>Nhà hàng</h1>
                </div>
                <div className={cx('content')}>
                    <div className={cx('cover')}>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Tên nhà hàng: {data != undefined && data[0].TenDoiTac}</Text>
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Loại ẩm thực: {data != undefined && data[0].LoaiAmThuc}</Text>
                            </div>
                        </div>
                        <div className={cx('box')}>
                            <div className={cx('box-cover')}>
                                <Text className={cx('text')}>Liên hệ: {data != undefined && data[0].Email}</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('container', 'grid')}>
                <ProductCoop data={data}/>
            </div>
        </>
    );
}

export default Branch;
