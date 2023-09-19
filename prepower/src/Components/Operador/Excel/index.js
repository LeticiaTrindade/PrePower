import React from "react";
import "./style.css";
import book from "../../../assets/Icons/book.svg";
import Header from "../../Header";
import Footer from "../../Footer";

function Excel() {
    return (
        <>
            <Header />

            <div class="d-flex justify-content-between body">
                <div>
                    <div class=" card d-flex">
                        <a href="https://drive.google.com/file/d/19YL6sJB6qJyTj8G30yzigbg0nM1-47ir/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 1</h1>
                    </div>

                    <div class=" card d-flex ">
                        <a href="https://drive.google.com/file/d/1jfequuM8NpsI4CYc-2mfIrwPZWRAi3Tx/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 2</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1D-AZl_32VqBNU95oGQgs7195gDfYW-4j/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 3</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1sYLDiUobrmyYb8Ll6ZDCuRjzlUghSABQ/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 4</h1>
                    </div>
                </div>
                <div>
                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1kG3uAgQWPuFJ6x7GJYT9ChQuyeFzw0we/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 5</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1SSY4T7VQn4D71Ruw6uYaZ1nIvRiOZTFO/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 6</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1Zh72FJQy_ocN1Th1KytGWaDWMOpmttiv/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 7</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/11OUidshe6m75mzon9xjQZ9v-nfMYcLK7/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 8</h1>
                    </div>
                </div>
                <div>
                    <div class=" card d-flex">
                        <a href="https://drive.google.com/file/d/1TnZ_MQLsn5IDtNOCRrLuYaRKERigu0sQ/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 9</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1zbVXnD5RMmVetiokimRa-tAvEVbWx1pO/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 10</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/10IqScFpITv28Vz7qM5yD5pf0QIcJwik_/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 11</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1ledtoTvFs0Dl5JDbObT2ql1NE_VZygSp/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 12</h1>
                    </div>
                </div>

                <div>
                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/16y8GqoJsmu7J6fognJii35t1WBili-Au/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 13</h1>
                    </div>

                    <div class="card d-flex">
                        <a href="https://drive.google.com/file/d/1Q2z7AyLn60tpqQTUM366vIThTNIpPl3e/view?usp=sharing" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 14</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
                        <h1>Atividade 15</h1>
                    </div>

                    <div class="card d-flex disabled-course">
                        <a href="" target="_blank"><img class="icon" src={book} /></a>
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

export default Excel;