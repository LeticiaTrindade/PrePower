import React from "react";
import "./style.css";
import book from "../../../assets/Icons/book.svg";
import Header from "../../Header";
import Footer from "../../Footer";

function ProfessionDoctor() {
    return (
        <>
            <Header />

            <div class="d-flex justify-content-between body">
                <div>
                    <div class=" card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 1</h1>
                    </div>

                    <div class=" card d-flex disabled-course ">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 2</h1>
                    </div>

                    <div class="card d-flex disabled-course" >
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 3</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 4</h1>
                    </div>
                </div>
                <div>
                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 5</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 6</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 7</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 8</h1>
                    </div>
                </div>
                <div>
                    <div class=" card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 9</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 10</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 11</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
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

export default ProfessionDoctor;