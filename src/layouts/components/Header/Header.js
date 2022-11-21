import { useRef } from 'react';
import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ white = false, register = false }) {
    const refChangeBackgroundColor = useRef();
    const refImg1 = useRef();
    const refImg2 = useRef();
    const refBtn = useRef();
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop !== 0 || document.documentElement.scrollTop !== 0) {
            refChangeBackgroundColor.current.style.backgroundColor = '#fff';
            refImg1.current.style.display = 'block';
            refImg2.current.style.display = 'none';
            refBtn.current.classList.add(cx('open'));
        } else {
            if (white) refChangeBackgroundColor.current.style.backgroundColor = '#fff';
            else refChangeBackgroundColor.current.style.backgroundColor = 'transparent';
            refImg1.current.style.display = 'none';
            refImg2.current.style.display = 'block';
            refBtn.current.classList.remove(cx('open'));
        }
    }

    const classesImage = cx({
        white,
    });

    return (
        <>
            <header className={cx('section-container')} ref={refChangeBackgroundColor}>
                <div className={cx('section-content')}>
                    <div className={cx('logo')}>
                        <Button className={cx('logo-link')} to="/">
                            <img src={images.logo} className={classesImage} alt="hih" ref={refImg1} />
                            <img src={images.logo1} className={classesImage} alt="qqq" ref={refImg2} />
                        </Button>
                    </div>
                    {register && (
                        <div className={cx('btn-group')}>
                            <Button headerGroup to="/cart">
                                <div
                                    className={cx('cart-icon')}
                                    style={{ backgroundImage: `url("${images.cart}")` }}
                                ></div>
                            </Button>
                            <Button headerGroup>
                                <div className={cx('login')} data-toggle="modal" data-target="#login">
                                    Đăng nhập
                                </div>
                            </Button>
                            <Button headerGroup href="/register">
                                <div className={cx('login')}>Đăng ký</div>
                            </Button>
                        </div>
                    )}
                </div>
            </header>
            <div className={cx('go-to-top')} ref={refBtn}>
                <Button
                    goToTop
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    <img src={images.up} alt="" />
                </Button>
            </div>
            <div
                className="modal fade"
                id="login"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalScrollableTitle">
                                Đăng nhập
                            </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                {/* <!-- Email input --> */}
                                <div className="form-outline mb-4">
                                    <input type="email" id="form2Example1" className="form-control" />
                                    <label className="form-label" htmlFor="form2Example1">
                                        Email address
                                    </label>
                                </div>

                                {/* <!-- Password input --> */}
                                <div className="form-outline mb-4">
                                    <input type="password" id="form2Example2" className="form-control" />
                                    <label className="form-label" htmlFor="form2Example2">
                                        Password
                                    </label>
                                </div>

                                {/* <!-- 2 column grid layout for inline styling --> */}
                                <div className="row mb-4">
                                    <div className="col d-flex justify-content-center">
                                        {/* <!-- Checkbox --> */}
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="form2Example31"
                                                checked
                                            />
                                            <label className="form-check-label" htmlFor="form2Example31">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col">
                                        {/* <!-- Simple link --> */}
                                        <a href="#!" style={{ color: 'var(--primary-color)' }}>
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>

                                {/* <!-- Submit button --> */}
                                <button
                                    type="button"
                                    className="btn btn-primary btn-block mb-4"
                                    style={{ backgroundColor: 'var(--primary-color)' }}
                                >
                                    Sign in
                                </button>

                                {/* <!-- Register buttons --> */}
                                <div className="text-center">
                                    <p>
                                        Not a member?
                                        <a href="/register" style={{ color: 'var(--primary-color)' }}>
                                            Register
                                        </a>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
