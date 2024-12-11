import React from "react";
import python from "../../assets/python.svg";
import flask from "../../assets/flask.svg";
import express from "../../assets/express.svg";
import mongo from "../../assets/mongo.svg";
import nginx from "../../assets/nginx.svg";
import docker from "../../assets/docker.svg";
import rest from "../../assets/rest.svg";
import django from "../../assets/django.svg";
const Backend = () => {
  return (
    <div className="skills__content">
      <h2 className="skills__title">Backend Developer</h2>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <img src={python} alt="html-logo" />
            <h2 className="sklls__name">Python</h2>
          </div>

          <div className="skills__data">
            <img src={flask} alt="html-logo" />
            <h2 className="sklls__name">Flask</h2>
          </div>

          <div className="skills__data">
            <img src={express} alt="html-logo" />
            <h2 className="sklls__name">Express</h2>
          </div>

          <div className="skills__data">
            <img src={mongo} alt="html-logo" />
            <h2 className="sklls__name">MongoDB</h2>
          </div>

          <div className="skills__data">
            <img src={django} alt="html-logo" />
            <h2 className="sklls__name">Django</h2>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <img src={nginx} alt="html-logo" />
            <h2 className="sklls__name">Nignx</h2>
          </div>

          <div className="skills__data">
            <img src={docker} alt="html-logo" />
            <h2 className="sklls__name">Docker</h2>
          </div>

          <div className="skills__data">
            <img src={rest} alt="html-logo" />
            <h2 className="sklls__name">REST-API</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
