import React from 'react';
import styles from './Why.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Why({ children }) {
    return (
        <>
            <div className={cx('why')}>
                <h1 className={cx('title')}>Tại sao nên lựa chọn GrabFood?</h1>
                <div className={cx('description')}>
                    <Text className={cx('par')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} /><strong>Nhanh nhất</strong> - GrabFood cung cấp dịch vụ giao
                        đồ ăn nhanh nhất thị trường.
                    </Text>
                    <Text className={cx('par')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                        <strong>Dễ dàng nhất</strong> - Giờ đây, bạn chỉ cần thực hiện vài cú nhấp chuột hoặc chạm nhẹ
                        là đã có thể đặt đồ ăn. Hãy đặt đồ ăn trực tuyến hoặc tải xuống siêu ứng dụng Grab của chúng tôi
                        để có trải nghiệm nhanh hơn và thú vị hơn.
                    </Text>
                    <Text className={cx('par')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                        <strong>Đáp ứng mọi nhu cầu</strong> - Từ món ăn đặc sản địa phương đến các nhà hàng được ưa
                        thích, nhiều lựa chọn đa dạng chắc chắn sẽ luôn làm hài lòng khẩu vị của bạn.
                    </Text>
                    <Text className={cx('par')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                        <strong>Thanh toán dễ dàng</strong> - Giao và nhận đồ ăn thật dễ dàng. Thanh toán bằng GrabPay
                        thậm chí còn dễ dàng hơn nữa.
                    </Text>
                    <Text className={cx('par')}>
                        <FontAwesomeIcon className={cx('icon')} icon={faCheck} />
                        <strong>Nhiều quà tặng hơn</strong> - Tích điểm GrabRewards cho mỗi đơn hàng của bạn và sử dụng
                        điểm thưởng để đổi lấy nhiều ưu đãi hơn.
                    </Text>
                </div>
            </div>
        </>
    );
}

export default Why;
