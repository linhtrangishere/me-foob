import React, { useEffect } from 'react';
import styles from './ProductCoop.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Star from '~/components/Star';
import images from '~/assets/images';
import Button from '~/components/Button';
import Item from './Item';
import ListItem from '../ListItem';

const cx = classNames.bind(styles);

function ProductCoop({ children, hint = false, title, addr, data = {} }) {
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <>
            <div className={cx('list')}>
                <h3 className={cx('Menu')}>
                    <Text>Thực đơn chúng tôi có món ăn</Text>
                </h3>
                <h3 className={cx('type')}>
                    <Text>
                        <Text style={{ marginRight: '12px' }}>Đánh giá:</Text>
                        <Star amount={4.8} />
                    </Text>
                </h3>
            </div>
            <div className={cx('menu')}>
                <h1 className={cx('title')}>
                    <Text>Thực đơn</Text>
                    <Button className={cx('add')} data-toggle="modal" data-target="#add">
                        Thêm món
                    </Button>
                </h1>
                <div className={cx('list-item')}>
                    {data && Object.keys(data).map(function (key) {
                        console.log(data[key])
                        return <Item data={data[key]}/>;
                    })}
                </div>
            </div>
            <div
                className="modal fade"
                id="add"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ overflow: 'hidden' }}>
                        <div className={cx('content-wrapper')}>
                            <div className={cx('content')}>
                                <div className={cx('close')} data-dismiss="modal" aria-label="Close">
                                    <img src={images.close} alt="" />
                                </div>
                            </div>
                            <div className={cx('separate')}></div>
                            <div className={cx('item-modal')}>
                                <div className={cx('link-modal')}>
                                    <div className={cx('group')}>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Tên món ăn</Text>
                                            <input type="text" placeholder="Nhập . . ." />
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Giá</Text>
                                            <input type="text" placeholder="Nhập . . ." />
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Mô tả</Text>
                                            <input type="text" placeholder="Nhập . . ." />
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Hình ảnh</Text>
                                            <input className={cx('file')} type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('footer')}>
                                <div className={cx('btn-modal')} data-dismiss="modal" aria-label="Close">
                                    <div> Hoàn thành</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductCoop;
