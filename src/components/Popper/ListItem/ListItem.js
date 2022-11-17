import React, { useRef, useState } from 'react';
import styles from './ListItem.module.scss';

import classNames from 'classnames/bind';
import Text from '~/components/Text';
import Item from './Item';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function ListItem({ children, hint = false, title, addr }) {
    const classesListItem = cx('list-item', {
        hint,
    });

    const refBtnLeft = useRef();
    const refBtnRight = useRef();
    const refTransform = useRef();

    const [position, setPosition] = useState(0);
    const [positionIndex, setPositionIndex] = useState(0);

    const handleOnClickLeft = () => {
        const width = refTransform.current.offsetWidth / 4;
        refTransform.current.style.transform = `translateX(${position + width}px)`;
        setPositionIndex(positionIndex - 1);
        setPosition(position + width);
    };
    const handleOnClickRight = () => {
        const width = refTransform.current.offsetWidth / 4;
        refTransform.current.style.transform = `translateX(${position - width}px)`;
        setPositionIndex(positionIndex + 1);
        setPosition(position - width);
    };

    return (
        <div className={cx('list')}>
            <div className={cx('list-cover')}>
                <h1 className={cx('title')}>
                    <Text>{title}</Text>
                    {!hint && <Text green>{addr}</Text>}
                </h1>
                <div className={classesListItem} ref={refTransform}>
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                    <Item hint={hint} />
                </div>
                {!hint && (
                    <Button seeMore to="/">
                        See More
                    </Button>
                )}
            </div>
            {!hint && (
                <div className={cx('btn')}>
                    {positionIndex !== 0 && (
                        <div className={cx('btn-prev')} ref={refBtnLeft}>
                            <Button onClick={handleOnClickLeft}>
                                <img src={images.left} alt="" />
                            </Button>
                        </div>
                    )}
                    {positionIndex !== 8 - 4 && (
                        <div className={cx('btn-next')} ref={refBtnRight}>
                            <Button onClick={handleOnClickRight}>
                                <img src={images.right} alt="" />
                            </Button>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default ListItem;
