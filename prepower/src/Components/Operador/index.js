import React from "react";
import "./style.css";
import operador from '../../assets/Icons/introducao-a-informatica.svg';
import windows from '../../assets/Icons/windows.svg';
import outlook from '../../assets/Icons/outlook.svg';
import word from '../../assets/Icons/word.svg';
import excel from '../../assets/Icons/excel.svg';
import powerpoint from '../../assets/Icons/powerpoint.svg';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Operador() {
    return (
        <>
            <Header />
            <div class="courses">
                <div class="d-flex justify-content-around ">
                    <div class="left">
                        <div class="category d-flex align-items-center">
                            <Link to="/operador-de-computador/informatica" ><img class="icon" src={operador} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Introdução à informática</h1>

                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/operador-de-computador/windows11"><img class="icon " src={windows} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Windows 11</h1>
                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/operador-de-computador/internet"><img class="icon" src={outlook} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Internet e Outlook</h1>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="  category d-flex align-items-center">
                            <Link to="/operador-de-computador/word"><img class="icon" src={word} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Word 2021</h1>
                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/operador-de-computador/powerpoint"><img class="icon" src={powerpoint} /></Link>
                            <div class="d-flex flex-column">
                                <h1>PowerPoint 2021</h1></div>
                        </div>

                        <div class="category d-flex align-items-center">
                            <Link to="/operador-de-computador/excel"><img class="icon" src={excel} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Excel 2021</h1> </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Operador;