import React from "react";
import "./style.css";
import logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <Link class="navbar-brand " to='/PrePower'><img class="logo" src={logo}/></Link>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class=" d-flex navbar-nav me-auto mb-lg-2">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/PrePower' >Página Inicial</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://portaldoaluno.prepara.com.br/login/" target="_blank">Portal do Aluno</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" target="_blank">Fale Conosco</a>
                            </li>
                        </ul>                        
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;