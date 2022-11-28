import styles from './Restaurant.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import Product from '~/components/Popper/Product';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Restaurant() {
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
                <Text>Món ăn</Text>
            </div>
            <div className={cx('container', 'grid')}>
                <Product />
            </div>
        </>
    );
}

export default Restaurant;
