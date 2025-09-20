<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Definición de líneas base'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1: img-bloque
    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La definición de líneas base en la gestión de software representa un punto de referencia formal y aprobado de un conjunto de componentes del proyecto, como código fuente, requisitos, documentación o configuraciones (Guillamón Morales, 2013). Estas líneas base permiten controlar y monitorear los cambios a lo largo del ciclo de vida del desarrollo, asegurando que las modificaciones se realicen de forma controlada y trazable. Al establecer una línea base, el equipo puede comparar versiones, evaluar impactos y mantener la coherencia entre entregables, lo que fortalece la calidad y la estabilidad del producto final.
    

    titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Concepto y propósito de las líneas base en la gestión de configuración


    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Una línea base (baseline, en inglés) es una versión formalmente aprobada de uno o varios elementos de configuración, que sirve como referencia para su desarrollo, modificación o validación posterior. Esta versión se considera estable, por lo que cualquier cambio debe ser evaluado y aprobado a través de un proceso de control de cambios. Las líneas base marcan hitos fundamentales en la gestión de la configuración del software, al permitir controlar de forma precisa la evolución del producto. Los propósitos principales de las líneas base:
      .col-lg-4
        figure
          img(src='@/assets/curso/tema2/2.svg', alt='')

    .bg-full-width.bg-color-9.mb-0
      .p-4.p-md-5
        // Bloque 2: tarjetas con iconos de fontawesome
        .row.justify-content-center.align-items-stretch.mb-0.mb-lg-4
          .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
            .bg-gradiente-1.box-shadow.px-4.py-5.h-100
              i.fas.fa-shield-alt.mx-auto.d-block.mb-4(style="font-size: 60px; color: #F5B104").text-center
              h5.mb-2.text-center.text-white Control del cambio
              p.mb-0.text-center.text-white Evitan modificaciones no autorizadas al exigir aprobación formal para cualquier alteración posterior.

          .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
            .bg-gradiente-1.box-shadow.px-4.py-5.h-100
              i.fas.fa-search.mx-auto.d-block.mb-4(style="font-size: 60px; color: #F5B104").text-center
              h5.mb-2.text-center.text-white Punto de referencia para auditorías
              p.mb-0.text-center.text-white Permiten comparar versiones y verificar cumplimiento de requisitos.

          .col-lg-4.mb-4.mb-lg-0(data-aos="zoom-in-up")
            .bg-gradiente-1.box-shadow.px-4.py-5.h-100
              i.fas.fa-route.mx-auto.d-block.mb-4(style="font-size: 60px; color: #F5B104").text-center
              h5.mb-2.text-center.text-white Facilitación de la trazabilidad
              p.mb-0.text-center.text-white Hacen posible rastrear cuándo y por qué se realizaron cambios.

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .bg-gradiente-1.box-shadow.px-4.py-5.h-100
              i.fas.fa-users.mx-auto.d-block.mb-4(style="font-size: 60px; color: #F5B104").text-center
              h5.mb-2.text-center.text-white Soporte a la colaboración
              p.mb-0.text-center.text-white Aseguran que todos los miembros del equipo trabajen con versiones consistentes.

          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .bg-gradiente-1.box-shadow.px-4.py-5.h-100
              i.fas.fa-history.mx-auto.d-block.mb-4(style="font-size: 60px; color: #F5B104").text-center
              h5.mb-2.text-center.text-white Restauración confiable
              p.mb-0.text-center.text-white Permiten volver a un estado estable en caso de errores o fallos.

    

    h2(data-aos="fade-left").mb-4 Ejemplo práctico
    p(data-aos="fade-left").mb-5 Un equipo de desarrollo trabaja en un sistema de gestión académica. Tras finalizar la etapa de análisis, se aprueba una línea base que incluye los requisitos funcionales, diagramas de casos de uso y maquetas de interfaz (Guillamón Morales, 2013). Esta línea base establece un acuerdo claro entre las partes interesadas. Si más adelante se requiere una nueva funcionalidad, esta deberá ser evaluada y aprobada formalmente antes de modificar la línea base. Los tipos comunes de líneas base son:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/infografia1.svg', alt='', style="max-width: 1048px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="10.1%" y="20.3%" numero="+")
                h5 Línea base de requisitos
                p Conjunto aprobado de requisitos del sistema.
    
              .bg-color-white.box-shadow.p-3(x="95%" y="19.8%" numero="+")
                h5 Línea base de diseño
                p Arquitectura y diseño validados del software.
    
              .bg-color-white.box-shadow.p-3(x="2.5%" y="59%" numero="+")
                h5 Línea base de código fuente
                p Versión estable del código lista para pruebas o despliegue.
    
              .bg-color-white.box-shadow.p-3(x="97.5%" y="52%" numero="+")
                h5 Línea base de pruebas
                p Casos de prueba validados vinculados a una versión específica del producto (Chacón & Straub, 2014).
    





    h2(data-aos="fade-left").mb-4 Relación con otras prácticas de gestión

    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-5 Las líneas base se integran con procesos como la integración continua, la gestión de versiones y la documentación técnica. En entornos que utilizan herramientas como Git y Jenkins, se automatizan mediante tags y builds verificados, lo cual incrementa la eficiencia del equipo (Pérez Martínez, 2015).
    
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En conclusión, las líneas base son un componente esencial en la gestión de configuración del software. Su correcta implementación aporta estructura, estabilidad y control, mejora la calidad del producto y fortalece la trazabilidad y la colaboración entre equipos.


    titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Tipos de líneas base en proyectos de software

    .row.mb-5
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-5
          p.mb-0 En la gestión de la configuración del software, las líneas base actúan como puntos de control que garantizan la estabilidad y trazabilidad del producto a lo largo de su ciclo de vida. Cada tipo de línea base se asocia a una fase específica del desarrollo, permitiendo mantener el control sobre la evolución del producto y asegurando que los cambios sean planeados, aprobados y documentados adecuadamente.
        
        p(data-aos="fade-left") A continuación, se describen los tipos más comunes:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in").mb-4.mb-lg-0
    
    //Bloque 3 - img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Línea base de requisitos")
            p Contiene los requisitos funcionales y no funcionales aprobados. Define qué debe hacer el sistema.
            p #[b Ejemplo.] Gestión de préstamos y catálogos en una app de bibliotecas. Si se quiere agregar notificaciones, el cambio debe evaluarse.
    
          .div(titulo="Línea base de diseño")
            p Incluye arquitectura, diagramas y decisiones técnicas validadas. Sirve como referencia durante la codificación.
            p #[b Ejemplo.] En un sistema financiero, define arquitectura en capas y uso de MVC. Cambios estructurales requieren aprobación formal.
    
          .div(titulo="Línea base de código fuente")
            p Versión del código que ha sido validada y aprobada para despliegue.
            p #[b Ejemplo.] Se marca un tag en Git sobre una versión estable probada, lista para producción.
    
          .div(titulo="Línea base de pruebas")
            p Conjunto de casos de prueba, procedimientos y datos validados. Asegura coherencia con requisitos y diseño.
            p #[b Ejemplo.] En un sistema de ventas, incluye pruebas para carrito, descuentos y pagos.

          .div(titulo="Línea base de documentación")
            p Agrupa manuales, guías técnicas e instructivos. Se establece antes de entregas o cierres de fase.
            p #[b Ejemplo.] Manual de administrador y guías para docentes y padres en un sistema escolar.

          .div(titulo="Línea base de configuración")
            p Línea base compuesta que integra requisitos, diseño, código, pruebas y documentación. Representa una instantánea completa del sistema.
            p #[b Ejemplo.] En una auditoría contractual de un sistema hospitalario, refleja todo lo entregado al cliente.
    
    .bg-full-width.bg-color-17.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Estas líneas base, al ser gestionadas correctamente, fortalecen el control del producto, respaldan la trazabilidad de cambios, y permiten una gestión eficaz de entregas, auditorías y evolución del software.
    

    titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Criterios para establecer una línea base

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") En la gestión de configuración de software, establecer una línea base no es una acción arbitraria, sino una decisión estratégica que exige el cumplimiento de criterios técnicos, administrativos y funcionales. Estos criterios garantizan que los elementos incluidos hayan sido revisados, aprobados y documentados, y que se encuentren en un estado de estabilidad suficiente (Guillamón Morales, 2013). A continuación, se presentan los principales criterios que deben cumplirse para formalizar una línea base:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/8.svg", alt="")

    //Bloque 4 - slyder-a
    .bg-full-width.bg-fondo-slider.mb-0
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7.order-lg-1
              h5 Estabilidad del contenido
              p El contenido debe estar libre de cambios pendientes o revisiones frecuentes.
              p #[b Ejemplo.] Requisitos de un sistema médico solo se consolidan si no hay modificaciones pendientes (Chacón & Straub, 2014).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7.order-lg-1
              h5 Aprobación formal de interesados
              p Todos los elementos deben contar con la validación de responsables técnicos, de negocio o clientes.
              p #[b Ejemplo.] Documentos arquitectónicos en un banco deben ser aprobados por el área técnica y de seguridad.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7.order-lg-1
              h5 Documentación completa y verificable
              p Debe existir respaldo con versiones, fechas, autores y estado de revisión.
              p #[b Ejemplo.] Commits de código deben estar asociados a tickets y pruebas en proyectos ágiles.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/12.png")
            .col-lg-7.order-lg-1
              h5 Conformidad con estándares
              p Los artefactos deben ajustarse a políticas técnicas o contractuales del proyecto.
              p #[b Ejemplo.] Los manuales técnicos deben seguir el formato y lenguaje establecidos por la organización.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-lg-1
              h5 Control de versiones adecuado
              p Los elementos deben estar gestionados bajo un sistema de control de versiones.
              p #[b Ejemplo.] Casos de prueba deben estar versionados en herramientas como JIRA o TestRail.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-lg-1
              h5 Disponibilidad y accesibilidad
              p Todos los componentes deben estar accesibles en repositorios oficiales para los equipos autorizados.
              p #[b Ejemplo.] El código fuente debe estar en Git, etiquetado y documentado adecuadamente.
  

    .bg-full-width.bg-color-17
      .px-4.px-md-5.py-4
        .row.align-items-center.text-white
          .col-lg-auto
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Establecer una línea base implica más que congelar artefactos: exige cumplir formalmente con estos criterios para asegurar su integridad, utilidad y trazabilidad a lo largo del proyecto. Una aplicación rigurosa de estos principios no solo fortalece el control de cambios, sino que también mejora la calidad del producto final y reduce los riesgos de ambigüedades, errores y reprocesos innecesarios.

    .bg-full-width.bg-color-3.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center.text-white
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Definición y aprobación de líneas base en proyectos de software
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Definición y aprobación de líneas base en proyectos de software, donde se aborda el proceso sistemático para establecer, aprobar y mantener líneas base en el contexto de la gestión de configuración de proyectos de software.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Definición y aprobación de líneas base en proyectos de software
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='')
    
    

    // Bloque 48/47: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://docs.github.com/es" target="_blank" rel="noopener noreferrer") GitHub. (s.f.). Documentación de GitHub.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=J_s6gub6Jdk" target="_blank" rel="noopener noreferrer") Díez, J. (2013, 20 de febrero). Línea Base de un Proyecto - Project Baseline. [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema2,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
