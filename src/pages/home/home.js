import React from "react";
import Header from "../../components/Header/header";
import "../../css/home.css";
import fotoPessoal from "../../img/foto.jpeg";
import {FaLinkedin, FaFileAlt, FaCheck} from "react-icons/fa";
import projeto1 from "../../img/projeto1.png";
import projeto2 from "../../img/projeto2.png";
import projeto3 from "../../img/pokedex.png";
import projeto4 from "../../img/calculadora.png";
import {FaInstagram, FaFacebook, FaGithub, FaWhatsapp} from  "react-icons/fa";
import {MdEmail, MdLocationOn} from "react-icons/md";

export default function Home(){
    return (
        <>
            <Header/>
            <section className="home" id="home">
                <div className="descricao">
                    <h1> Gerlândio Bernardo</h1>
                    <h2>Desenvolvedor FullStack</h2>
                    <p >
                        Graduando em Análise e Desenvolvimento de Sistemas <br></br>
                        IFPB Campus Cajazeiras. Estou buscando cada vez mais<br></br> 
                        conhecimentos na área do Front End com React e Back<br></br> 
                        End com ExpressJs, além de está estudando TypeScript, <br></br>
                        Javascript e Banco de Dados.<br></br> <br></br>
                        <span id="linkedin">
                            <a href="#">
                                <FaLinkedin className="icons"/> 
                                Linkedin
                                </a>
                        </span>
                        <span id="curriculo">
                            <a href="#">
                                <FaFileAlt className="icons"/> 
                                Curriculo
                                </a>
                        </span>
                    </p>

                </div>
                <div className="imagem" id="imagem">
                    <img src={fotoPessoal} alt="Imagem Pessoal"/>

                </div>

            </section>
            <section className="projetos" id="projetos">
                <h2>Projetos</h2>
                <p>Confira alguns projetos desenvolvido por min</p>
                <div  id="projetos1">

                        <div className="projetosDesenvolvidos">
                            <a href="https://github.com/GerlandioBernardo/4-Atividade-LSW" target="_blank">
                                <img src={projeto1} alt="projeto 1"/>
                            </a>

                        </div>
                        <div className="projetosDesenvolvidos">
                            <a href="#" target="_blank">
                                <img src={projeto2} alt="projeto 2"/>
                            </a>

                        </div>
                    </div>
                    <div id="projetos2">
                        <div className="projetosDesenvolvidos">
                            <a href="https://github.com/GerlandioBernardo/Mini-Poke-dex" target="_blank">
                                <img src={projeto3} alt="projeto 3"/>
                            </a>

                        </div>
                        <div className="projetosDesenvolvidos">
                        <a href="https://github.com/GerlandioBernardo/Simples-Calculadora" target="_blank">
                                <img src={projeto4} alt="projeto 4"/>
                            </a>

                        </div>
                    
                    </div>
                    <div id="buttonVejaMais">
                        <a href="https://github.com/GerlandioBernardo" id="vejaMais">Veja mais</a>
                    </div>

            </section>
            <section className="tecnologias" id="tecnologias">
                <h2>Tecnologias</h2>
                <p>Confira algumas tecnologias mais utilizadas por min </p>
                <div id="center">
                    <div id="parte1">
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/> <span>Javascript</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/>  <span>Java</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/> <span>React-js</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/> <span>Express-js</span>
                        </div>
                    </div>
                    <div id="parte2">
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/> <span>TypeScript</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/>  <span>Node</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/>  <span>Linux</span>
                        </div>
                        <div className="tecnologiasUtilizadas">
                            <FaCheck className="iconsTecn"/>  <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>

            </section>
            <section className="contato" id="contato">
                <h2>Contato</h2>
                <p>Fique a vontade para entra em contato comigo</p>
                <div id="meiosDeContato">
                    <div id="contatos">
                        <div className="contatoMeios">
                            <strong>Whatsapp:</strong><br></br>
                            <FaWhatsapp className="iconsContato"/> (83) 99916-0477
                        </div>
                        <div className="contatoMeios" >
                        <strong>E-mail:</strong><br></br>
                            <MdEmail className="iconsContato"/> gerlandios51@gmail.com
                        </div>
                        <div className="contatoMeios">
                            <strong>Localização:</strong><br></br>
                            <MdLocationOn className="iconsContato"/> Cajazeiras - Paraíba - Brasil
                        </div>
                    </div>

                </div>

            </section>
            <footer>
                <span className="iconsFooter">
                    <a href="#" ><FaInstagram/></a>
                </span>
                <span className="iconsFooter">
                    <a href="https://github.com/GerlandioBernardo"><FaGithub/></a>
                </span>
                <span className="iconsFooter">
                    <a href="#"><FaFacebook/></a>
                </span>
                <span className="iconsFooter">
                    <a href="#"><FaWhatsapp/></a>
                </span>
            </footer>
        </>
    )
}