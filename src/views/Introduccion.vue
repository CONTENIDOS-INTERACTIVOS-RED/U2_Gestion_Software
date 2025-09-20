<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left") La Unidad de Fundamentos y Arquitectura de IoT constituye el cimiento conceptual y técnico sobre el cual construirá su comprensión del Internet de las Cosas como paradigma transformador de la ingeniería de software contemporánea. Esta unidad aborda los elementos esenciales que permiten que dispositivos físicos se conecten, comuniquen y colaboren para crear ecosistemas digitales inteligentes que están redefiniendo sectores como la salud, manufactura, agricultura y ciudades inteligentes. Su dominio de estos fundamentos le proporcionará las herramientas necesarias para diseñar, implementar y gestionar soluciones de software que aprovechen la convergencia entre el mundo físico y digital.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/intro/1.svg" data-aos="zoom-in", style="max-width: 124px")
    
      .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
        figure
          img(src="@/assets/curso/intro/2.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-3.h-100(data-aos="fade-left")
          p(data-aos="fade-left").mb-5 En el desarrollo de software, garantizar la integridad y el control de los artefactos del proyecto a lo largo del tiempo es esencial para mantener la calidad, la trazabilidad y la coherencia del producto final. La gestión de la configuración responde a esta necesidad al establecer procesos, estándares y herramientas que permiten identificar, controlar y documentar los componentes del software y sus posibles modificaciones. Esta unidad tiene como objetivo dotar al estudiante de los conocimientos y habilidades necesarios para gestionar eficazmente los elementos que conforman un sistema de software durante todo su ciclo de vida.

    
    .bg-full-width.bg-color-17.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Asimismo, se estudiará en profundidad el concepto de líneas base, que representan versiones estables y aprobadas de elementos del proyecto sobre las cuales se construyen y validan nuevas iteraciones del software. A través del análisis de los diferentes tipos de líneas base y los criterios para su definición, los estudiantes comprenderán cómo mantener la coherencia y facilitar la gestión de versiones dentro del equipo de desarrollo. Por último, se explorará el uso de herramientas modernas como Jenkins, ampliamente utilizadas en el contexto de integración y entrega continua (CI/CD). Estas plataformas permiten automatizar tareas repetitivas, gestionar cambios de manera eficiente y asegurar que las modificaciones se integren y desplieguen sin comprometer la estabilidad del sistema.


</template>
