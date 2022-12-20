import React, { useRef, useState } from 'react';
import styles from './Item.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Text from '~/components/Text';
import Star from '~/components/Star';

const cx = classNames.bind(styles);

function Item({ children, data = {} }) {
    const [Price, setPrice] = useState();
    const [Sale, setSale] = useState();
    const refInput = useRef();
    const handleOnClickDelete = () => {
        fetch(`http://localhost:5000/branch/delete/${data.MaMonAn}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }
    const handleOnClickUpdatePrice = () => {
        fetch(`http://localhost:5000/branch/updatePrice/${data.MaMonAn}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Gia: Price
            })
        })
    }
    const handleOnClickSaleOff = () => {
        fetch(`http://localhost:5000/branch/saleoff/${data.MaMonAn}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                PhanTram: Sale
            })
        })
    }
    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }

    return (
        <>
            <div className={cx('item')}>
                <div className={cx('link')}>
                    <div className={cx('img')}>
                        <img src={images.product} alt="" />
                    </div>
                    <div className={cx('group')}>
                        <h6 className={cx('name')}>
                            <Text>{data && data.TenMonAn}</Text>
                        </h6>
                        <div className={cx('group-row')}>
                            <Text>{data && data.Gia}</Text>
                            <div className={cx('btn')}>
                                <Button className={cx('remove')} onClick={handleOnClickDelete}>Xóa</Button>
                                <Button data-toggle="modal" data-target="#view">
                                    Xem
                                </Button>
                                <Button
                                    data-toggle="modal"
                                    data-target="#edit"
                                >
                                    Sửa
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="view"
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
                                    <div className={cx('img')}>
                                        <img src={images.product} alt="" />
                                    </div>
                                    <div className={cx('group')}>
                                        <h6 className={cx('name')}>
                                            <Text>Cơm Tấm Thăng Trầm - Tân Trang</Text>
                                            <Text className={cx('type')}>Cơm</Text>
                                        </h6>
                                        <div className={cx('group-row')}>
                                            <Text>{format(70000)}</Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('separate-big')}></div>
                            <div className={cx('rating')}>
                                <div className={cx('rating-item')}>
                                    <Text>
                                        <strong>Tên khách hàng:</strong> Anh Ngọc Trần
                                    </Text>
                                    <Text>
                                        <strong>Bình luận:</strong> Ngon quá bạn ek
                                    </Text>
                                    <Text>
                                        <Text style={{ marginRight: '8px' }}>
                                            <strong>Đánh giá:</strong>
                                        </Text>
                                        <Star amount={4.8} />
                                    </Text>
                                    <div className={cx('separate')}></div>
                                </div>
                                <div className={cx('rating-item')}>
                                    <Text>
                                        <strong>Tên khách hàng:</strong> Anh Ngọc Trần
                                    </Text>
                                    <Text>
                                        <strong>Bình luận:</strong> Ngon quá bạn ek
                                    </Text>
                                    <Text>
                                        <Text style={{ marginRight: '8px' }}>
                                            <strong>Đánh giá:</strong>
                                        </Text>
                                        <Star amount={4.8} />
                                    </Text>
                                    <div className={cx('separate')}></div>
                                </div>
                                <div className={cx('rating-item')}>
                                    <Text>
                                        <strong>Tên khách hàng :</strong> Anh Ngọc Trần
                                    </Text>
                                    <Text>
                                        <strong>Bình luận :</strong> Ngon quá bạn ek
                                    </Text>
                                    <Text>
                                        <Text style={{ marginRight: '8px' }}>
                                            <strong>Đánh giá:</strong>
                                        </Text>
                                        <Star amount={4.8} />
                                    </Text>
                                    <div className={cx('separate')}></div>
                                </div>
                                <div className={cx('rating-item')}>
                                    <Text>
                                        <strong>Tên khách hàng:</strong> Anh Ngọc Trần
                                    </Text>
                                    <Text>
                                        <strong>Bình luận:</strong> Ngon quá bạn ek
                                    </Text>
                                    <Text>
                                        <Text style={{ marginRight: '8px' }}>
                                            <strong>Đánh giá:</strong>
                                        </Text>
                                        <Star amount={4.8} />
                                    </Text>
                                    <div className={cx('separate')}></div>
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
            <div
                className="modal fade"
                id="edit"
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
                                    <div className={cx('img')}>
                                        <img src={images.product} alt="" />
                                    </div>
                                    <div className={cx('group')}>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Tên món ăn</Text>
                                            <input type="text" placeholder='Để trống nếu không sửa' />
                                        </div>
                                        <div className={cx('btn-modal')} data-dismiss="modal" aria-label="Close">
                                            <div>Cập nhật tên món</div>
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Giá</Text>
                                            <input type="text" placeholder='Để trống nếu không sửa' value={Price !== undefined && Price} onChange={
                                                (e) => {
                                                    setPrice(e.target.value)
                                                }
                                            } ref={refInput}/>
                                        </div>
                                        <div className={cx('btn-modal')} data-dismiss="modal" aria-label="Close" onClick={handleOnClickUpdatePrice}>
                                            <div>Cập nhật giá</div>
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Khuyến mãi</Text>
                                            <input type="text" placeholder='20% sale off nhập 20' value={Sale !== undefined && Sale} onChange={
                                                (e) => {
                                                    setSale(e.target.value)
                                                }
                                            } ref={refInput}/>
                                        </div>
                                        <div className={cx('btn-modal')} data-dismiss="modal" aria-label="Close" onClick={handleOnClickSaleOff}>
                                            <div>Áp dụng khuyến mãi</div>
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Mô tả</Text>
                                            <input type="text" placeholder='Để trống nếu không sửa' />
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Hình ảnh</Text>
                                            <input className={cx('file')} type="file" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('separate-big')}></div>
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

export default Item;
