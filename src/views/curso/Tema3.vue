<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Uso de herramientas como Jenkins'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El uso de herramientas como Jenkins se ha convertido en una práctica fundamental en la automatización del desarrollo de software, especialmente en entornos de integración y entrega continua (CI/CD). Jenkins permite orquestar procesos como compilación, pruebas, despliegues y validaciones mediante pipelines configurables, lo que asegura la consistencia y trazabilidad del producto en cada etapa. Gracias a su capacidad de integrarse con sistemas de control de versiones, herramientas de pruebas y plataformas en la nube, Jenkins facilita la implementación eficiente de cambios, el seguimiento de líneas base y la mejora continua en proyectos de software (Naik & Naik, 2024).
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
    

    .titulo-figura.mb-2
      h5 Figura 1. 
      span Diagrama sobre integración continua con Jenkins
    
    figure.bg-color-info.p-4.p-md-5
      img(src="@/assets/curso/tema3/f1.png", data-aos="zoom-in", style="max-width: 760px").mx-auto
    figcaption.mt-2.text-center.mb-5 Towardsaws. (s.f.). Diagrama sobre integración continua con Jenkins [Imagen]. Medium.


    titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Introducción a Jenkins y su rol en la integración continua (CI/CD)

    .bg-color-1.mb-5(data-aos="fade-up", style="background-color: #FCEEB5 !important")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema3/2.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Jenkins es una herramienta de automatización open source ampliamente utilizada en proyectos de desarrollo de software para implementar prácticas de Integración Continua (CI) y Entrega Continua (CD) (Naik & Naik, 2024). Su arquitectura basada en plugins le permite integrarse con múltiples tecnologías como Git, Maven, Docker, Kubernetes, entre otras, lo que la convierte en una plataforma altamente extensible y adaptable.


    h2(data-aos="fade-left").mb-4 Función en la Integración Continua (CI)

    
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-5 En la práctica de Integración Continua, Jenkins automatiza la validación constante del código. Cada vez que un desarrollador realiza un cambio en el repositorio (por ejemplo, un push a Git), Jenkins puede:
    
        .bg-color-1.p-4(data-aos="fade-left", style="background-color: #EDDBFD !important").mb-4
          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Descargar el nuevo código.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Compilar el proyecto.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Ejecutar pruebas unitarias.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Validar la calidad del código con herramientas como SonarQube.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Generar artefactos listos para despliegue.

        p(data-aos="fade-left").mb-4 Este proceso garantiza que el software se mantenga funcional, detectando errores en etapas tempranas del desarrollo.

        p(data-aos="fade-left").mb-5 #[b Ejemplo.] En un entorno ágil, cuando se integra nuevo código, Jenkins se activa automáticamente para compilar, ejecutar pruebas y generar informes. Si falla alguna prueba, se alerta al equipo, acortando los tiempos de respuesta.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")


    h2(data-aos="fade-left").mb-4 Rol en la Entrega Continua (CD)

    //Bloque 1: imagen-texto-color 4:8      
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el contexto de Entrega Continua, Jenkins automatiza la entrega de software hacia entornos de staging o producción mediante pipelines configurables. Sus funciones incluyen:

        .bg-color-5.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Pruebas de integración.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Validaciones de seguridad.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Despliegue automatizado en servidores.


    //Bloque 2: texto-color-imagen 8:4

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Esto reduce errores humanos, mejora la trazabilidad y permite entregas frecuentes y confiables.

        p(data-aos="fade-left").mb-4 #[b Ejemplo.] Una empresa configura Jenkins para generar una imagen Docker y desplegarla en un clúster Kubernetes de prueba tras aprobarse cambios. Si las validaciones son exitosas, Jenkins ejecuta el despliegue en producción de forma automatizada.

        p(data-aos="fade-left").mb-4 Las ventajas del uso de Jenkins son:
    
        .bg-color-info.p-4(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Reduce tareas manuales, incrementando la productividad.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Eleva la calidad del software mediante pruebas constantes.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Facilita la detección y corrección temprana de errores.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Agiliza el tiempo de entrega al mercado.
          
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")


    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/6.png', alt='')
    
          .col-lg-8.text-white
            h2.mb-4(data-aos="flip-up") Automatización continua con Jenkins: instalación, configuración y buenas prácticas
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Automatización continua con Jenkins, donde se aborda el proceso completo de implementación de Jenkins como herramienta clave en entornos de integración y entrega continua (CI/CD).
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Automatización continua con Jenkins: instalación, configuración y buenas prácticas
    
    titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Monitoreo, gestión y mejores prácticas en Jenkins

    p(data-aos="fade-left").mb-4 El monitoreo y la gestión efectiva de Jenkins son fundamentales para garantizar la estabilidad, continuidad y eficiencia de los procesos de Integración Continua y Entrega Continua (CI/CD). Una administración adecuada permite anticipar fallos, optimizar recursos y mejorar la productividad, mientras que las buenas prácticas refuerzan la calidad del software y la seguridad del entorno (Smart, 2011). Los aspectos clave para la gestión eficiente de Jenkins son:

    //Bloque 3: slider a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-7.order-lg-1
              h5 Monitoreo
              p Supervisión de compilaciones, recursos, agentes y tiempos de ejecución mediante plugins como Monitoring o Performance Plugin.
              p #[b Ejemplo.] Alertas ante compilaciones lentas o agentes saturados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-7.order-lg-1
              h5 Usuarios y permisos
              p Gestión de roles y autenticación segura (LDAP, Active Directory, OAuth).
              p #[b Ejemplo.] Acceso limitado a ciertos jobs según perfil.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-7.order-lg-1
              h5 Organización de pipelines
              p Uso de pipelines declarativos, parametrizados y reutilizables mediante Jenkins Shared Libraries.
              p #[b Ejemplo.] Reutilización de lógica común en proyectos de microservicios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/10.png")
            .col-lg-7.order-lg-1
              h5 Gestión de agentes (nodes)
              p Uso eficiente de agentes estáticos o dinámicos en contenedores o nubes.
              p #[b Ejemplo.] Creación automática de agentes efímeros con Kubernetes Plugin.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/11.png")
            .col-lg-7.order-lg-1
              h5 Backup y recuperación
              p Respaldo periódico de configuración, jobs y credenciales.
              p #[b Ejemplo.] Backup automatizado programado que guarda la configuración en un repositorio seguro.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/12.png")
            .col-lg-7.order-lg-1
              h5 Estabilidad y seguridad
              p Actualización regular, control de plugins, uso seguro de credenciales, auditoría de actividades.
              p #[b Ejemplo.] Notificaciones automáticas ante cambios críticos en configuraciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema3/13.png")
            .col-lg-7.order-lg-1
              h5 Escalabilidad y rendimiento
              p Soporte para múltiples pipelines en paralelo y distribución de carga.
              p #[b Ejemplo.] Ejecución concurrente de módulos en grandes proyectos para acelerar entregas.
  
    //Bloque 4: texto-color-imagen 8:4
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Las mejores prácticas recomendadas son:

        .bg-color-1.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Actualizar Jenkins y sus plugins de forma regular.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Usar credenciales cifradas y evitar secretos en texto plano.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Limitar los plugins al mínimo necesario.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Auditar registros de actividad periódicamente.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Automatizar pruebas y revisiones de pipelines.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/14.png", data-aos="zoom-in")


    h2(data-aos="fade-left").mb-4 Recurso complementario: uso de Git Flow

    //Bloque 5: imagen-texto-color 8:4
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El video educativo presentado en este capítulo aborda Git Flow, una estrategia de ramificación que organiza el trabajo en equipos de desarrollo mediante el uso estructurado de ramas:

        .bg-color-2.p-4.py-lg-5(data-aos="fade-left").mb-4
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Main: versión estable de producción.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Develop: rama base para integración de nuevas funcionalidades.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Feature: ramas individuales para el desarrollo de nuevas características.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Release: preparación de versiones para producción.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Hotfix: correcciones urgentes sobre la versión estable.

        p(data-aos="fade-left") A través de ejemplos, se muestra cómo Git Flow mantiene una línea base estable y permite el trabajo colaborativo sin comprometer la calidad del producto. Esta práctica promueve la trazabilidad, organización y eficiencia en el control de versiones y se alinea perfectamente con entornos de integración continua como Jenkins.


    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/6wqd74ZccMM?si=3ptnmj9YfBTakyJV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>


    //bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.raatti.net/~raatti/books/devops/pdf/learningcontinuousintegrationwithjenkins.pdf" target="_blank" rel="noopener noreferrer") Pathania, N. (2024). Learning Continuous Integration with Jenkins (3.ª ed.). Packt Publishing.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=RET4vHRMDek" target="_blank" rel="noopener noreferrer") OpenWebinars. (2021, 31 de marzo). ¿QUÉ ES JENKINS?. [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema3', // Cambiar X por número del tema (Tema1, Tema2, Tema3, etc.)

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'temaX' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2
      // tema3 → cuestionarios.tema3
      cuestionario: cuestionarios.tema3,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
