import React from "react";
import "./style.css";
import book from "../../../assets/Icons/book.svg";
import Header from "../../Header";
import Footer from "../../Footer";

function Powerpoint() {
    return (
        <>
            <Header />

            <div class="d-flex justify-content-between body">
                <div>
                    <div class=" card d-flex">
                        <a href="https://drive.google.com/file/d/1T-NAqpbd-LtsTJgCW3AyuDnfuFPC4STt/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 1</h1>
                    </div>

                    <div class=" card d-flex ">
                        <a href="https://drive.google.com/file/d/1nRRP5CdZUjVCO217D6Wul4nuNsK939j2/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 2</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1LCMT0ajNBQZBU0B6tCGbIRwwKzNxiGwX/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 3</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/17-TZTRXfPWNip7u_tZ9RPi2rN2gmGGg5/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 4</h1>
                    </div>
                </div>
                <div>
                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1Vv2g7kTun64U5haQL4j6MhBYLMQBYTFV/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 5</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1RYEgOxqPl9DCogV3aM4J8f2Qqnm3_2p_/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 6</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1J1q8P1nAVn7l9HONrPVRKdvUFLx_5-sH/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 7</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1X2MOCGKyzcejr5lMqTKgoNml_XK-29gm/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 8</h1>
                    </div>
                </div>
                <div>
                    <div class=" card d-flex">
                        <a href="https://drive.google.com/file/d/1Fiktfsg-jOKXTK7M7Lrt32tp46qPwkLQ/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 9</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1TBrSN6Ty-fWlBCZ2e7wmgZql8DvIZ3Xq/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 10</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/15wTixIfTJ5x16CIq6KLbLiCRAXPJAnBV/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 11</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1zoGRuzgG0JsEbf5Fck5JDwhh7Ag9vDWv/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 12</h1>
                    </div>
                </div>

                <div>
                    <div class="card d-flex disabled-course">
                        <a  target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 13</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 14</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 15</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a  target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 16</h1>
                    </div>

                </div>

                <div class="card d-flex disabled-course">
                    <a href="" target="_blank"><img class="icon" src={book} /></a>
                    <h1>Prova</h1>
                </div>


            </div >
            <Footer />
        </>
    );
}

export default Powerpoint;