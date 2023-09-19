import React from "react";
import "./style.css";

import pharmacy from '../../assets/Icons/pharmacy.png';
import tooth from '../../assets/Icons/tooth.svg';
import professionDoctor from '../../assets/Icons/profession-doctor.svg';
import elderly from '../../assets/Icons/elderly.svg';
import frontDesk from '../../assets/Icons/front-desk.svg';

import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

function Saude() {
    return (
        <>
            <Header />
            <div class="courses">
                <div class="d-flex justify-content-around ">
                    <div class="left">
                        <div class="category d-flex align-items-center">
                            <Link to="/saude/atendente-de-farmacia-i" ><img class="icon" src={pharmacy} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Atendente de Farmácia I</h1>

                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/saude/atendente-de-farmacia-ii" ><img class="icon" src={pharmacy} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Atendente de Farmácia II</h1>
                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/saude/cuidador-de-idosos" ><img class="icon" src={elderly} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Cuidador de Idosos</h1>
                            </div>
                        </div>
                    </div>
                    <div class="right">
                        <div class="  category d-flex align-items-center">
                            <Link to="/saude/auxiliar-medico" ><img class="icon" src={professionDoctor} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Auxiliar Médico</h1>
                            </div>
                        </div>

                        <div class=" category d-flex align-items-center">
                            <Link to="/saude/auxiliar-de-servico-odontologico" ><img class="icon" src={tooth} /></Link>
                            <div class="d-flex flex-column">
                                <h1>Auxiliar de Serviço odontológico</h1></div>
                            
                            </div>

                            <div class="category d-flex align-items-center">
                                <Link to="/saude/tecnicas-de-recepcao" ><img class="icon" src={frontDesk} /></Link>
                                <div class="d-flex flex-column">
                                    <h1>Técnicas de Recepção</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Saude;