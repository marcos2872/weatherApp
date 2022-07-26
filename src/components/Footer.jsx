import React from 'react';
import {
  UilGithub,
  UilLinkedin,
} from '@iconscout/react-unicons';

export default function Footer() {
  return (
    <div className="flex flex-row gap-5 text-white">
      <section className="flex flex-col gap-2">   
        <p className="flex flex-col text-xs items-center"> Desenvolvido por : </p> 
        <div className="flex flex-row gap-2 text-xs justify-center">
          <p>- Marcos Souza </p>
          <a href="https://github.com/marcos2872" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub size={16}/>
          </a>
          <a href="https://www.linkedin.com/in/marcos-souza-a298a9209/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin size={16}/>
          </a>
          <p>- Laura Lana</p>
          <a href="https://github.com/lauralana" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub size={16}/>
          </a>
          <a href="https://www.linkedin.com/in/laura-lana/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin size={16}/>
          </a>
          <p>- Daniel Rubens</p>
          <a href="https://github.com/danielrubens" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub size={16}/>
          </a>
          <a href="https://www.linkedin.com/in/daniel-rubens-556a7898/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin size={16}/>
          </a>
        </div>
          <a href="https://github.com/marcos2872/weatherApp" target="blanck" className="mt-5 text-xs flex justify-center"> Clique aqui para acessar o repositório do Projeto</a>
      </section>
    </div>
  );
}

// <p className="text-sm">Projeto feito com a API OpenWeather, Tailwindcss, Jest RTL, Java Script e React</p>
