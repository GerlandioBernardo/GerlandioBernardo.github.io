import React from "react";
import {Link} from "react-router-dom";
import "../../css/header.css";

export default function Header(){
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link> Home</Link>
                    </li>
                    <li>
                        <Link>Projetos</Link>
                    </li>
                    <li>
                        <Link>Tecnologias</Link>
                    </li>
                    <li>
                        <Link>Contato</Link>
                    </li>
                </ul>
            </nav>

        </header>
    )
}