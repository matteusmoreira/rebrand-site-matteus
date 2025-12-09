"use client";

import React, { useEffect } from "react";
import { renderCanvas } from "./ui/canvas";
import { Rocket, Mail, Github, Linkedin, ChevronDown, Code, Database, ArrowRight } from "lucide-react";

export function Hero() {
    useEffect(() => {
        renderCanvas();
    }, []);

    return (
        <section id="home" className="relative min-h-screen">
            <div className="animation-delay-8 animate-fadeIn mt-20 flex flex-col items-center justify-center px-4 text-center md:mt-20">
                <div className="z-10 mb-6 mt-10 sm:justify-center md:mb-4 md:mt-20">
                    <div className="relative flex items-center whitespace-nowrap rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs leading-6 text-indigo-400">
                        <span className="relative flex h-2 w-2 mr-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        Disponível para novos projetos
                        <a
                            href="#contact"
                            rel="noreferrer"
                            className="hover:text-indigo-300 ml-1 flex items-center font-semibold"
                        >
                            <div className="absolute inset-0 flex" aria-hidden="true" />
                            Contrate-me{" "}
                            <span aria-hidden="true">
                                <ArrowRight className="h-4 w-4 ml-1" />
                            </span>
                        </a>
                    </div>
                </div>

                <div className="mb-10 mt-4 md:mt-6">
                    <div className="px-2">
                        <div className="border-slate-700 relative mx-auto h-full max-w-7xl border p-6 md:px-12 md:py-20" style={{ maskImage: 'radial-gradient(800rem 96rem at center, white, transparent)' }}>
                            <h1 className="flex select-none flex-col px-3 py-2 text-center text-5xl font-semibold leading-none tracking-tight md:flex-col md:text-8xl lg:flex-row lg:text-8xl">
                                <span className="absolute -left-5 -top-5 text-indigo-500 text-3xl font-bold">+</span>
                                <span className="absolute -bottom-5 -left-5 text-indigo-500 text-3xl font-bold">+</span>
                                <span className="absolute -right-5 -top-5 text-indigo-500 text-3xl font-bold">+</span>
                                <span className="absolute -bottom-5 -right-5 text-indigo-500 text-3xl font-bold">+</span>
                                <span className="gradient-text">
                                    Transformando Ideias em Código de Alta Performance.
                                </span>
                            </h1>
                            <div className="flex items-center justify-center gap-1 mt-6">
                                <span className="relative flex h-3 w-3 items-center justify-center">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                                </span>
                                <p className="text-xs text-green-500">Pronto para começar</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="mt-8 text-2xl md:text-2xl">
                        Bem-vindo ao meu mundo criativo! Eu sou{" "}
                        <span className="gradient-text font-bold">Matteus Moreira</span>
                    </h2>

                    <p className="md:text-md mx-auto mb-16 mt-2 max-w-2xl px-6 text-sm text-slate-400 sm:px-6 md:max-w-4xl md:px-20 lg:text-lg">
                        Eu crio experiências digitais imersivas e escaláveis. Especialista em React, arquitetura de software e design centrado no usuário.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-lg bg-white text-slate-900 font-bold hover:bg-slate-200 transition-colors flex items-center gap-2"
                        >
                            <Rocket size={20} />
                            Ver Projetos
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-lg glass-panel text-white font-bold hover:bg-slate-800 transition-colors flex items-center gap-2"
                        >
                            <Mail size={20} />
                            Fale Comigo
                        </a>
                    </div>

                    <div className="flex gap-6 pt-8 justify-center">
                        <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-indigo-400 transition-colors">
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
                <ChevronDown className="text-slate-500" size={32} />
            </div>

            <canvas
                className="bg-transparent pointer-events-none absolute inset-0 mx-auto"
                id="canvas"
            ></canvas>
        </section>
    );
}

export default Hero;
