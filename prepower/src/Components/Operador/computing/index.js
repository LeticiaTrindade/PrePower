import React from "react";
import "./style.css";
import book from '../../../assets/Icons/book.svg';
import Header from '../../Header';
import Footer from '../../Footer';


function Computing() {
    return (
        <>
            <Header />
            <div class="d-flex justify-content-between body">
                <div className="">
                    <div class=" card d-flex">
                        <a href="https://forms.gle/kLGFgoK7RadXip6Q6 " target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 1</h1>
                    </div>

                    <div class=" card d-flex">
                        <a href="https://forms.gle/TNfxaQsLvuC5HzvT9" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 2</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://forms.gle/NxRe6PTtnxpJjRTL9 " target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 3</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 4</h1>
                    </div>

                </div><div>

                    <div class="card d-flex ">
                        <a href="https://forms.gle/s8ahfVqYMDQELje76" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 5</h1>
                    </div>

                    <div class="card d-flex ">
                        <a href="https://forms.gle/QWE88ZrdTecTGNpn9" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 6</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://forms.gle/7eGNxRrsEL5JeNDL8" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 7</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 8</h1>
                    </div>
                </div>
                <div className="">
                    <div class=" card d-flex ">
                        <a href="https://forms.gle/G9LADuP5S14UmSXQ9" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 9</h1>
                    </div>

                    <div class="card d-flex ">
                        <a href="https://forms.gle/FRmMt42PmgH3FJFB8" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 10</h1>
                    </div>

                    <div class="card d-flex ">
                        <a href="https://forms.gle/qpFMFWcP7cHS7mZN9" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 11</h1>
                    </div>

                    <div class="card d-flex ">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 12</h1>
                    </div>
                </div><div>
                    <div class="card d-flex ">
                        <a href="https://forms.gle/zRoFwkN8kzovzYf86" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 13</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 14</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 15</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a><img class="icon" src={book} /></a>
                        <h1>Atividade 16</h1>
                    </div>
                </div>

                <div class="card d-flex ">
                    <a href="https://forms.gle/6RJ9SYxapAGWWzKy6" target="_blank"><img class="icon" src={book} /></a>
                    <h1>Prova</h1>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Computing;