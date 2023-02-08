import React from "react";
import "../css/Footer.css"

export default function Footer() {
    return(
        <footer className="bg-light text-center ">
            {/*секция ссылок на соцсети*/}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                        <span>Мы в социальных сетях:</span>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                    </div>
                </section>
            {/*секция полезной информации(телефон, адрес, описание)*/}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i>Авалон
                            </h6>
                            <p>
                                Компания «Авалон» - официальный дистрибьютор немецкого масла ROWE в России.
                                Мы - команда единомышленников, действия которых направлены на качественный конечный результат.
                                А именно на обеспечение потребителей исключительно качественным продуктом на максимально выгодных условиях.
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Контакты</h6>
                            <p><i className="fas fa-home me-3"></i> Адрес: г. Москва, ул.Лосевская д.18</p>
                            <p><i className="fas fa-home me-3"></i>Работаем: ежедневно с 9:00 до 18:00</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                Email: info@rowe-av.ru
                            </p>
                            <p><i className="fas fa-phone me-3"></i>Позвоните нам +7(495) 369-44-00</p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Копирайт*/}
            <div className="text-center p-3">
                Авалон-официальный дистрибьютор ROWE © 2023
            </div>
        </footer>
    )
}