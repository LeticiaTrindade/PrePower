import React from "react";
import "./style.css";

import secretary from '../../assets/Icons/secretary.svg';
import math from '../../assets/Icons/math.svg';
import person from '../../assets/Icons/person-team.svg';
import operation from '../../assets/Icons/operation.svg';

import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Administrator() {
    return (
        <>
            <Header />
            <div class="courses">
                <div class="d-flex justify-content-around ">
                    <div class="">
                        <div class="category d-flex align-items-center">
                            <Link to="/administracao/assistente-administrativo" ><img class="icon" src={operation} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Assistente Administrativo</h1>

                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/administracao/secretariado" ><img class="icon" src={secretary} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Secretariado</h1>
                            </div>
                        </div>
                    </div>
                    <div>                    <div class=" category d-flex align-items-center">
                        <Link to="/administracao/lideranca" ><img class="icon" src={person} /></Link>
                        <div class="d-flex flex-column">
                            <h1>Liderança</h1>
                        </div>
                    </div>

                    <div class="">
                        <div class="  category d-flex align-items-center">
                            <Link to="/administracao/matematica-financeira" ><img class="icon" src={math} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Matemática Financeira</h1>
                            </div>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}
export default Administrator;