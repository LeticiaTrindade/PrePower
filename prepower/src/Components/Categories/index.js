import React from "react";
import "./style.css";
import operador from "../../assets/Icons/introducao-a-informatica.svg";
import health from "../../assets/Icons/health.svg";
import building from "../../assets/Icons/building.svg";
import maintenance from "../../assets/Icons/maintenance.svg";
import pen from "../../assets/Icons/pen.svg";
import iconcode from "../../assets/Icons/code.svg";
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';

function Categories() {
    return (
        <>
            <Header />
            <div class="body">
                <div class="d-flex ">
                    <div class="left">
                        <div class="category d-flex align-items-center">
                            <Link to="/operador-de-computador" ><img class="icon" src={operador} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Operador de Computador</h1>
                                <p>Introdução à informática, Windows 11, Word, Powerpoint, Excel</p>
                            </div>
                        </div>

                        <div class="category d-flex align-items-center">
                            <Link to="/saude"><img class="icon" src={health} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Profissional da Saúde</h1>
                                <p>Atendente de Farmácia, Auxiliar médico, Auxiliar de consultório odontológico, Técnicas de recepção</p>
                            </div>
                        </div>

                        <div class="category d-flex align-items-center">
                            <Link to="/administracao"><img class="icon" src={building} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Rotinas Administrativas</h1>
                                <p>Assistente administrativo, Secretariado, Liderença, Matemática financeira</p>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="category d-flex align-items-center disabled-course">
                            <a><img class="icon" src={pen} /></a>
                            <div class="d-flex flex-column">
                                <h1>Designer Gráfico</h1>
                                <p>Corel Draw, Photoshop, InDesign, Illustrator, Premiere, After Effects</p>
                            </div>
                        </div>

                        <div class="category d-flex align-items-center disabled-course">
                            <a><img class="icon" src={iconcode} /></a>
                            <div class="d-flex flex-column">
                                <h1>Programador</h1>
                                <p>Lógica de Programação, Banco de Dados SQL, C# com Visual Studio</p>
                            </div>
                        </div>

                        <div class="category d-flex align-items-center disabled-course">
                            <a><img class="icon" src={maintenance} /></a>
                            <div class="d-flex flex-column">
                                <h1>Montagem e Manutenção</h1>
                                <p>Montagem e manutenção de Micros, Manutenção de Notebooks, Manutenção de Celulares e Redes</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </>
    );
}

export default Categories;