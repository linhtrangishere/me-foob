import React, { useEffect, useRef, useState } from 'react';
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
    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Desc, setDesc] = useState();
    const refInput = useRef();
    const handleOnClickAdd = () => {
        console.log(data[0].MaThucDon)
        fetch(`http://localhost:5000/branch/add/${data[0].MaThucDon}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({TenMonAn: Name,
                                Gia: Price,
                                MieuTa: Desc
                            })
        })
            .then((res) => {
                return res.json();
            })
    }
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
                        return <Item key={key} data={data[key]}/>;
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
                                            <input type="text" placeholder="Nhập . . ." value={Name !== undefined && Name} onChange={
                                                (e) => {
                                                    setName(e.target.value)
                                                }
                                            } ref={refInput}/>
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Giá</Text>
                                            <input type="text" placeholder="Nhập . . ." value={Price !== undefined && Price} onChange={
                                                (e) => {
                                                    setPrice(e.target.value)
                                                }
                                            } ref={refInput}/>
                                        </div>
                                        <div className={cx('text-input')}>
                                            <Text className={cx('text')}>Mô tả</Text>
                                            <input type="text" placeholder="Nhập . . ." value={Desc !== undefined && Desc} onChange={
                                                (e) => {
                                                    setDesc(e.target.value)
                                                }
                                            } ref={refInput}/>
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
                                    <Button className={cx('btn')} onClick={handleOnClickAdd}>
                                        Hoan thanh
                                    </Button>
                                    {/* <div> Hoàn thành</div> */}
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
