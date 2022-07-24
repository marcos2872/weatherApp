import React from 'react';
import {
  UilGithub,
  UilLinkedin,
} from '@iconscout/react-unicons';

export default function Footer() {
  return (
    <div className="flex flex-row gap-5 text-white">
      <section className="flex flex-col gap-5">
        <div className="flex flex-row gap-2">
          <p className="flex">
            Marcos Souza
          </p>
          <a href="https://github.com/marcos2872" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub />
          </a>
          <a href="https://www.linkedin.com/in/marcos-souza-a298a9209/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin />
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <p>Laura Lana</p>
          <a href="https://github.com/lauralana" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub />
          </a>
          <a href="https://www.linkedin.com/in/laura-lana/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin />
          </a>
        </div>
        <div className="flex flex-row gap-2">
          <p>Daniel Rubens</p>
          <a href="https://github.com/danielrubens" target="blanck" name="gitm" id="gitm" className="flex">
            <UilGithub />
          </a>
          <a href="https://www.linkedin.com/in/daniel-rubens-556a7898/" target="blanck" name="gitm" id="gitm" className="flex">
            <UilLinkedin />
          </a>
        </div>
      </section>
      <section>
        <p>Projeto feito com a api OpenWeather, tailwindcss, Jest RTL, java Script e React</p>
        <a href="https://github.com/marcos2872/weatherApp" target="blanck">Repositório do Projeto</a>
      </section>
    </div>
  );
}
