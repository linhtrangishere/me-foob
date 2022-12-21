import styles from './Branch.module.scss';

import classNames from 'classnames/bind';
import ProductCoop from '~/components/Popper/ProductCoop';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Star from '~/components/Star';

const cx = classNames.bind(styles);

function Branch() {
    const { id } = useParams();
    const [data, setData] = useState();
    //const [name, setName] = useState();

    useEffect(() => {
        const abortController = new AbortController();
        fetch(`http://localhost:5000/branch/getMenu/${id}`, {
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
                <div className={cx('grid')}>
                <div className={cx('list')}>
                    <h1 className={cx('title')}>
                        <Text>{data !== undefined && data[0].TenDoiTac}</Text>
                    </h1>
                    <h3 className={cx('type')}>
                        <Text>{data !== undefined && data[0].LoaiAmThuc}</Text>
                    </h3>
                    <Star amount={data !== undefined && data[0].Rating} />
                    <Text className={cx('contact')}>Liên hệ: {data !== undefined && data[0].Email}</Text>
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
