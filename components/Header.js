import { MenuAlt1Icon } from "@heroicons/react/solid";
import { useEffect } from "react"

import { Icon } from "./Icon";
import { SvgLogo, Svg1, Svg2, Svg3, Svg4 } from "./Svg";


export function Header() {
    useEffect(() => {
        const btn1 = document.getElementById("btn-1")
        const btn2 = document.getElementById("btn-2")
        const btn3 = document.getElementById("btn-3")
        const btn4 = document.getElementById("btn-4"),
            gridbtn1 = document.getElementById("gridbtn1"),
            gridbtn2 = document.getElementById("gridbtn2"),
            gridbtn3 = document.getElementById("gridbtn3"),
            gridbtn4 = document.getElementById("gridbtn4");
        const mobileScreen = () => window.innerWidth <= 800;

        btn1.addEventListener("mouseover", () => {
            if (!mobileScreen()) {
                gridbtn1.classList.add("activo")
            }
        })
        btn2.addEventListener("mouseover", () => {
            if (!mobileScreen()) {
                gridbtn2.classList.add("activo")
            }
        })
        btn3.addEventListener("mouseover", () => {
            if (!mobileScreen()) {
                gridbtn3.classList.add("activo")
            }
        })
        btn4.addEventListener("mouseover", () => {
            if (!mobileScreen()) {
                gridbtn4.classList.add("activo")
            }
        })
        gridbtn1.addEventListener("mouseleave", () => {
            if (!mobileScreen()) {
                gridbtn1.classList.remove("activo")
            }
        })
        gridbtn2.addEventListener("mouseleave", () => {
            if (!mobileScreen()) {
                gridbtn2.classList.remove("activo")
            }
        })
        gridbtn3.addEventListener("mouseleave", () => {
            if (!mobileScreen()) {
                gridbtn3.classList.remove("activo")
            }
        })
        gridbtn4.addEventListener("mouseleave", () => {
            if (!mobileScreen()) {
                gridbtn4.classList.remove("activo")
            }
        })
    }, [])
    return (
        <>
            <nav class="menu" id="menu">
                <div class="contenedor contenedor-botones-menu">
                    <button id="btn-menu-barras" class="btn-menu-barras"><Icon Icon={MenuAlt1Icon} /></button>
                    <button id="btn-menu-cerrar" class="btn-menu-cerrar"></button>
                </div>

                <div class="contenedor contenedor-enlaces-nav">
                    <div className="flex flex-row space-x-7 items-center my-auto">
                        <SvgLogo />
                        <div class="btn" id="btn-1">
                            <p>Web Creation</p>
                        </div>
                        <div class="btn" id="btn-2">
                            <p>Elementor For</p>
                        </div>
                        <div class="btn" id="btn-3">
                            <p>Resources</p>
                        </div>
                        <div class="btn" id="btn-4">
                            <p>Community</p>
                        </div>
                        <div class="btn">
                            <p>Pricing</p>
                        </div>
                    </div>

                    <div class="enlaces">
                        <a href="#" class="enlaces-login">Login</a>
                        <a href="#" className="enlaces-started">Get started</a>
                    </div>
                </div>

                <div class="contenedor contenedor-grid">
                    <div class="gridbtn1" id="gridbtn1">
                        <div class="categoriasbtn1">
                            <h3 class="subtitulo">Categorias</h3>
                            <a href="#" class="categoria-item">Drag & Drop Live Editor</a>
                            <a href="#" class="categoria-item">Workflok Optimization</a>
                            <a href="#" class="categoria-item">90+ Widgets</a>
                            <a href="#" class="categoria-item">eCommerce</a>
                            <a href="#" class="categoria-item">Marketing Platform</a>
                            <a href="#" class="categoria-item">Elementor + WordPress</a>
                            <a href="#" class="categoria-item">Advanced Web Creation</a>
                            <a href="#" class="categoria-item">All Features</a>
                        </div>

                        <div class="contenedor-subcategorias">
                            <div class="flex flex-col p-5">
                                <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                                    <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                                    <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                </div>
                                <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                                    <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                                    <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                </div>
                                <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-5">
                                    <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                                    <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div class="subcategoria-imagen">
                            <Svg1 />
                        </div>
                    </div>
                </div>

                <div class="contenedor contenedor-grid">
                    <div class="gridbtn2" id="gridbtn2">
                        <div class="categoriasbtn2">
                            <div class="flex flex-col py-5">
                                <div className="flex flex-row space-x-10 ">
                                    <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
                                        <h1>Advanced Web Creation</h1>
                                        <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                    </div>
                                    <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
                                        <h1>Advanced Web Creation</h1>
                                        <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                    </div>
                                </div>
                                <div className="flex flex-row space-x-10 ">
                                    <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
                                        <h1>Advanced Web Creation</h1>
                                        <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                    </div>
                                    <div className="w-5/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
                                        <h1>Advanced Web Creation</h1>
                                        <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                    </div>
                                </div>
                                <div className="w-3/6 hover:bg-gray-100 rounded-md cursor-pointer p-2">
                                    <h1 className="text-xl font-bold mb-2">Advanced Web Creation</h1>
                                    <p>Create unique websites using advanced animations, custom CSS, separate responsive designs, and more.</p>
                                </div>
                            </div>
                        </div>

                        <div class="subcategoria-imagen">
                            <Svg2 />
                        </div>
                    </div>
                </div>

                <div class="contenedor contenedor-grid">
                    <div class="gridbtn3" id="gridbtn3">
                        <div class="categoriasbtn3">
                            <a href="#" class="categoria-item">Help Center</a>
                            <a href="#" class="categoria-item">Tutorials & Courses </a>
                            <a href="#" class="categoria-item">Developer Tools </a>
                            <a href="#" class="categoria-item">Support</a>
                            <a href="#" class="categoria-item">Blog </a>
                            <a href="#" class="categoria-item">Webinars</a>
                        </div>

                        <div class="subcategoria-imagen">
                            <Svg3 />
                        </div>
                    </div>
                </div>

                <div class="contenedor contenedor-grid">
                    <div class="gridbtn4" id="gridbtn4">
                        <div class="categoriasbtn4">
                            <a href="#" class="categoria-item">Help Center</a>
                            <a href="#" class="categoria-item">Tutorials & Courses </a>
                            <a href="#" class="categoria-item">Developer Tools </a>
                            <a href="#" class="categoria-item">Support</a>
                            <a href="#" class="categoria-item">Blog </a>
                            <a href="#" class="categoria-item">Webinars</a>
                        </div>

                        <div class="subcategoria-imagen">
                            <Svg4 />
                        </div>
                    </div>
                </div>
            </nav >
        </>
    )
}
