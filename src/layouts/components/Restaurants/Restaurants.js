import styles from './Restaurants.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';
import { ListItem } from '~/components/Popper';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Restaurants() {
    return (
        <>
            <div className={cx('address','container', 'grid')}>
                <Button to="/">Trang chủ</Button>
                <Text className={cx('img')}>
                    <img src={images.right} alt="" />
                </Text>
                <Text>Nhà hàng</Text>
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
        </>
    );
}

export default Restaurants;
