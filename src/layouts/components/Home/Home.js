import styles from './Home.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import { ListItem } from '~/components/Popper';
import Why from './Why';

const cx = classNames.bind(styles);

function Home({ children }) {
    return (
        <>
            <div className={cx('background')}>
                <div
                    className={cx('background-image')}
                    style={{ backgroundImage: `url("${images.background}")` }}
                ></div>
                <div className={cx('background-image-border')}></div>
            </div>

            <div className={cx('container', 'grid')}>
                <ListItem
                    title="Mã khuyến  mãi Yumi Yumi ở "
                    addr="CT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, HoCT56, Tam Đảo, P.15, Q.10, Hồ Chí Minh, Ho"
                />
            </div>
            <div className={cx('container', 'grid')}>
                <ListItem title="There's something for everyone!" hint />
            </div>
            <div className={cx('container', 'grid')}>
                <Why />
            </div>
        </>
    );
}

export default Home;
