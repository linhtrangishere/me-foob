import styles from './Restaurant.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Product from '~/components/Popper/Product';
import Text from '~/components/Text';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles);
function Restaurant() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [data0, setData0] = useState();
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
        }
    }, [id]);
    useEffect(() => {
        //const abortController = new AbortController();
        if (data)
            fetch(`http://localhost:5000/restaurant/getMenu/${data[0].MaThucDon}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((data0) => { setData0(data0);});
        // return () => {
        //     abortController.abort();
        // }
    }, [data]);
    return (
        <>
            <div className={cx('address', 'container', 'grid')}>
                <Button to="/">Trang chủ</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Button to="/restaurants">Nhà hàng</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
            </div>
            <div className={cx('container', 'grid')}>
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
               {data0 &&  <Product data={data0} /> }
            </div>
        </>
    );
}
export default Restaurant;