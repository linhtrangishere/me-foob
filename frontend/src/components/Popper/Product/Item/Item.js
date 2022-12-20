import React, { useEffect, useState } from 'react';
import styles from './Item.module.scss';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import images from '~/assets/images';
import Text from '~/components/Text';

const cx = classNames.bind(styles);

function Item({ children, data = {}, order = false }) {
    const [amount, setAmount] = useState(0);
    const [product, setProduct] = useState({ ma: '', ten: '', gia: 0, sl: 0 });

    function format(n) {
        return n.toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== '.' && (a.length - i) % 3 === 0 ? '.' + c : c;
        });
    }
    const handleOnClickAdd = () => {
        setAmount(amount + 1);
        if (product.sl === 0) setProduct({ ma: data.MaMonAn, ten: data.TenMonAn, gia: data.Gia, sl: amount + 1 });
        else
            setProduct(() => {
                var obj = product;
                obj.sl = amount + 1;
                setProduct(obj);
            });
    };

    const handleOnClickSub = () => {
        if (amount > 0) {
            setAmount(amount - 1);
            setProduct(() => {
                var obj = product;
                obj.sl = amount - 1;
                setProduct(obj);
            });
        }
    };

    useEffect(() => {
        if (order) {
            var arr = JSON.parse(localStorage.getItem('Món ăn'));
            if (arr.length === 0) arr = [product];
            else {
                arr.push(product);
            }
            localStorage.setItem('Món ăn', JSON.stringify(arr));
        }
    });

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
                            <Text>{format(data && data.Gia)}</Text>
                            {amount > 0 && <Text>Số lượng: {format(amount)}</Text>}
                            <div className={cx('btn')}>
                                <Button className={cx('sub')} onClick={handleOnClickSub}>
                                    asd
                                </Button>
                                <Button className={cx('add')} onClick={handleOnClickAdd}>
                                    asd
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
