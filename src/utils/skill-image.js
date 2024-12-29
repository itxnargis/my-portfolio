import adobeXd from '../../src/assets/skills/adobe-xd.svg';
import adobeaudition from '../../src/assets/skills/adobeaudition.svg';
import afterEffects from '../../src/assets/skills/after-effects.svg';
import angular from '../../src/assets/skills/angular.svg';
import aws from '../../src/assets/skills/aws.svg';
import azure from '../../src/assets/skills/azure.svg';
import blender from '../../src/assets/skills/blender.svg';
import bootstrap from '../../src/assets/skills/bootstrap.svg';
import bulma from '../../src/assets/skills/bulma.svg';
import c from '../../src/assets/skills/c.svg';
import canva from '../../src/assets/skills/canva.svg';
import capacitorjs from '../../src/assets/skills/capacitorjs.svg';
import coffeescript from '../../src/assets/skills/coffeescript.svg';
import cplusplus from '../../src/assets/skills/cplusplus.svg';
import csharp from '../../src/assets/skills/csharp.svg';
import css from '../../src/assets/skills/css.svg';
import dart from '../../src/assets/skills/dart.svg';
import deno from '../../src/assets/skills/deno.svg';
import django from '../../src/assets/skills/django.svg';
import docker from '../../src/assets/skills/docker.svg';
import fastify from '../../src/assets/skills/fastify.svg';
import figma from '../../src/assets/skills/figma.svg';
import firebase from '../../src/assets/skills/firebase.svg';
import flutter from '../../src/assets/skills/flutter.svg';
import gcp from '../../src/assets/skills/gcp.svg';
import gimp from '../../src/assets/skills/gimp.svg';
import git from '../../src/assets/skills/git.svg';
import go from '../../src/assets/skills/go.svg';
import graphql from '../../src/assets/skills/graphql.svg';
import haxe from '../../src/assets/skills/haxe.svg';
import html from '../../src/assets/skills/html.svg';
import illustrator from '../../src/assets/skills/illustrator.svg';
import ionic from '../../src/assets/skills/ionic.svg';
import java from '../../src/assets/skills/java.svg';
import javascript from '../../src/assets/skills/javascript.svg';
import julia from '../../src/assets/skills/julia.svg';
import kotlin from '../../src/assets/skills/kotlin.svg';
import lightroom from '../../src/assets/skills/lightroom.svg';
import markdown from '../../src/assets/skills/markdown.svg';
import materialui from '../../src/assets/skills/materialui.svg';
import matlab from '../../src/assets/skills/matlab.svg';
import memsql from '../../src/assets/skills/memsql.svg';
import microsoftoffice from '../../src/assets/skills/microsoftoffice.svg';
import mongoDB from '../../src/assets/skills/mongoDB.svg';
import mysql from '../../src/assets/skills/mysql.svg';
import nextJS from '../../src/assets/skills/nextJS.svg';
import nginx from '../../src/assets/skills/nginx.svg';
import numpy from '../../src/assets/skills/numpy.svg';
import nuxtJS from '../../src/assets/skills/nuxtJS.svg';
import opencv from '../../src/assets/skills/opencv.svg';
import photoshop from '../../src/assets/skills/photoshop.svg';
import php from '../../src/assets/skills/php.svg';
import picsart from '../../src/assets/skills/picsart.svg';
import postgresql from '../../src/assets/skills/postgresql.svg';
import premierepro from '../../src/assets/skills/premierepro.svg';
import python from '../../src/assets/skills/python.svg';
import pytorch from '../../src/assets/skills/pytorch.svg';
import react from '../../src/assets/skills/react.svg';
import ruby from '../../src/assets/skills/ruby.svg';
import selenium from '../../src/assets/skills/selenium.svg';
import sketch from '../../src/assets/skills/sketch.svg';
import strapi from '../../src/assets/skills/strapi.svg';
import svelte from '../../src/assets/skills/svelte.svg';
import swift from '../../src/assets/skills/swift.svg';
import tailwind from '../../src/assets/skills/tailwind.svg';
import tensorflow from '../../src/assets/skills/tensorflow.svg';
import typescript from '../../src/assets/skills/typescript.svg';
import unity from '../../src/assets/skills/unity.svg';
import vitejs from '../../src/assets/skills/vitejs.svg';
import vue from '../../src/assets/skills/vue.svg';
import vuetifyjs from '../../src/assets/skills/vuetifyjs.svg';
import webix from '../../src/assets/skills/webix.svg';
import wolframalpha from '../../src/assets/skills/wolframalpha.svg';
import wordpress from '../../src/assets/skills/wordpress.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}