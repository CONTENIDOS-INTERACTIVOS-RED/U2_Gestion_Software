<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Desarrollo de aplicaciones y análisis de datos en IOT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    //Bloque 1
    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") La gestión de cambios es un proceso clave dentro de la gestión de la configuración de software, orientado a controlar de forma ordenada las modificaciones que se realizan sobre los productos o artefactos del proyecto. Su propósito es garantizar que todo cambio sea evaluado, aprobado, implementado y documentado de manera formal, minimizando así los riesgos asociados a la alteración del sistema. Esta práctica permite mantener la trazabilidad, prevenir errores y asegurar la estabilidad del software en desarrollo o en producción (Pérez Martínez, 2015).

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Introducción a la gestión de cambios en el desarrollo de software

    p(data-aos="fade-up") A continuación, se presenta un video que expone en detalle el proceso de gestión de cambios en el desarrollo de software, abordando sus etapas clave, herramientas utilizadas y su relevancia para garantizar la calidad y estabilidad de los sistemas.
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/9cqLwqWDCzs?si=F1b2M6SlLRnGqFf9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Tipos de cambios en proyectos de software

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-up") En el desarrollo de software, los cambios son una constante inevitable debido a factores como la evolución de los requisitos del cliente, la corrección de errores, las mejoras de rendimiento o la adaptación a nuevos entornos tecnológicos. Para gestionarlos adecuadamente, es fundamental clasificarlos según su naturaleza, origen y alcance, lo cual permite priorizarlos, asignar recursos correctamente y minimizar riesgos durante su implementación (Guillamón Morales, 2013). A continuación, se presenta una tabla con los principales tipos de cambios en proyectos de software:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.svg", alt="")


    //Bloque 2 - slider-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-1.png")
            .col-lg-7.order-lg-1
              h5 Correctivo
              p Modificaciones necesarias para corregir errores detectados tras la implementación. 
              p #[b Ejemplo.] Un botón que no responde por un error de lógica debe ser corregido.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-2.png")
            .col-lg-7.order-lg-1
              h5 Adaptativo
              p Ajustes que permiten que el software funcione en nuevos entornos sin cambiar su funcionalidad principal. 
              p #[b Ejemplo.] Adaptar una aplicación para correr en una nueva versión de Windows o en Linux.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-3.png")
            .col-lg-7.order-lg-1
              h5 Perfectivo
              p Mejoras de rendimiento, eficiencia o legibilidad del código sin alterar el comportamiento del sistema. 
              p #[b Ejemplo.] Optimizar una función que se ejecuta en 5 segundos para que lo haga en 1 segundo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-4.png")
            .col-lg-7.order-lg-1
              h5 Evolutivo
              p Cambios que añaden nuevas funcionalidades o amplían las existentes, respondiendo a nuevas necesidades del negocio. 
              p #[b Ejemplo.] Agregar un módulo de notificaciones por correo electrónico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-5.png")
            .col-lg-7.order-lg-1
              h5 Urgente o de emergencia
              p Cambios aplicados inmediatamente ante situaciones críticas, con documentación posterior. 
              p #[b Ejemplo.] Corregir un fallo de seguridad que permite accesos no autorizados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/slide-6.png")
            .col-lg-7.order-lg-1
              h5 Estratégico
              p Modificaciones alineadas con metas a largo plazo, como transformaciones tecnológicas o integraciones. 
              p #[b Ejemplo.] Migrar de una arquitectura monolítica a microservicios para mejorar la escalabilidad.
    
    
    .bg-full-width.bg-color-17.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 La clasificación adecuada de los cambios fortalece la toma de decisiones, mejora la planificación y optimiza el uso de recursos. Identificar si un cambio es correctivo, adaptativo, perfectivo o estratégico permite al equipo técnico y de gestión actuar con precisión y anticiparse a posibles impactos en el desarrollo y mantenimiento del producto.
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Proceso de solicitud y evaluación de cambios


    .row.mb-5
      .col-lg-8
        p En la gestión de la configuración de software, el proceso de solicitud y evaluación de cambios es una práctica esencial para garantizar que las modificaciones propuestas sean analizadas de forma estructurada, eficiente y alineada con los objetivos del proyecto. Este proceso permite controlar el impacto técnico de los cambios, evaluar su viabilidad económica, considerar su urgencia y verificar su coherencia con la planificación global del sistema (Pérez Martínez, 2015). El proceso se desarrolla en las siguientes etapas:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/4.svg", alt="")
    

    //Bloque 3 - img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="1. Identificación de la necesidad de cambio")
            p Cualquier miembro del equipo o incluso el cliente puede detectar una necesidad de cambio. Las causas pueden ser errores, nuevas funcionalidades, problemas de compatibilidad o políticas de mejora continua.
            p #[b Ejemplo.] Un tester sugiere ajustar el módulo de autenticación porque no cumple con un requisito funcional.
    
          .div(titulo="2. Documentación y registro de la solicitud")
            p Se elabora una Request For Change (RFC) con la descripción del problema, justificación, objetivo, alcance y áreas afectadas. La solicitud se registra en una herramienta para asegurar la trazabilidad.
            p #[b Ejemplo.] Se documenta en Jira la solicitud CHG-2025-001 para encriptar datos sensibles.
    
          .div(titulo="3. Evaluación técnica y de impacto")
            p Un comité o responsable técnico evalúa la factibilidad técnica, recursos, riesgos, tiempo estimado y efectos secundarios.
            p #[b Ejemplo.] El cambio tomará dos días de desarrollo y podría afectar la integración con el sistema de pagos.
    
          .div(titulo="4. Priorización y decisión")
            p Con base en la evaluación, se decide si el cambio se aprueba, posterga o rechaza. Se consideran factores como urgencia, valor y disponibilidad de recursos.
            p #[b Ejemplo.] El comité aprueba la solicitud y la agenda para la próxima iteración del sprint.

          .div(titulo="5. Notificación y planificación")
            p Se informa al solicitante y al equipo técnico. El cambio se planifica, se asignan responsables y fechas, y se consideran dependencias técnicas.
            p #[b Ejemplo.] La tarea se incorpora al tablero de trabajo de la próxima semana.

          .div(titulo="6. Seguimiento y cierre")
            p Se valida la correcta implementación del cambio y que no haya introducido nuevos errores. Si es conforme, se cierra y archiva la solicitud.
            p #[b Ejemplo.] El equipo de QA valida el cambio y lo cierra con nota de conformidad.
    
    //Bloque 4
    .bg-full-width.bg-color-17.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg.text-white
            p.mb-0 Este proceso funciona como columna vertebral del control de calidad y estabilidad del software durante su ciclo de vida. Aplicarlo con rigurosidad permite mantener el orden, evitar modificaciones arbitrarias y asegurar que cada cambio aporte valor sin comprometer la integridad del sistema. Además, fortalece la trazabilidad, mejora la colaboración entre equipos y promueve una cultura de mejora continua (Guillamón Morales, 2013).


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Herramientas para la gestión de cambios

    .row.mb-5
      .col-lg-8
        .bg-color-5.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 En el contexto del desarrollo de software, las herramientas para la gestión de cambios son plataformas especializadas que permiten registrar, organizar, monitorear y controlar cada modificación solicitada en un sistema. Estas soluciones proporcionan un entorno colaborativo donde los equipos pueden mantener la trazabilidad, evaluar el impacto de los cambios y asegurar que las decisiones se documenten y ejecuten de manera ordenada.
        
        p(data-aos="fade-left") A continuación, se presentan las principales herramientas utilizadas para este propósito:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in").mb-4.mb-lg-0

    //Bloque 5 - slider a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-lg-1
              h5 Jira Software
              p Registro de solicitudes, gestión de tareas y seguimiento en metodologías ágiles (Scrum, Kanban).
              p #[b Ejemplo.] Un analista solicita actualizar una interfaz y el equipo la vincula a una historia de usuario en desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-lg-1
              h5 ServiceNow
              p Orientada a ITSM; permite registrar RFCs, automatizar flujos de aprobación y evaluar riesgos.
              p #[b Ejemplo.] Un cambio en una base de datos crítica requiere aprobación antes de implementarse.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-lg-1
              h5 Git + GitHub/GitLab
              p Control de versiones con gestión de cambios mediante pull requests o merge requests, revisión colaborativa y pruebas automáticas.
              p #[b Ejemplo.] Un desarrollador propone una mejora, crea una rama y solicita revisión mediante un pull request.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-lg-1
              h5 Redmine
              p Gestión de proyectos y cambios con flujos personalizados, seguimiento del tiempo y soporte para documentación.
              p #[b Ejemplo.] Un cliente externo solicita una modificación en la lógica de facturación para la siguiente entrega.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-lg-1
              h5 Azure DevOps
              p Integración de planificación, control de versiones y despliegue; gestión de cambios a través de work items.
              p #[b Ejemplo.] Una mejora de seguridad se valida automáticamente mediante pruebas antes del despliegue.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-lg-1
              h5 ChangeGear
              p Plataforma especializada alineada con ITIL; permite programar ventanas de cambio, enviar notificaciones y hacer análisis de impacto.
              p #[b Ejemplo.] Antes de actualizar un sistema crítico de salud, se genera una solicitud formal con respaldo completo.
  
  
    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Control y aprobación de cambios

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") El control y la aprobación de cambios representan una fase esencial dentro del proceso de gestión de la configuración en proyectos de software (Guillamón Morales, 2013). Estas prácticas aseguran que toda modificación propuesta, ya sea a nivel de código, arquitectura, documentación o infraestructura, sea debidamente evaluada, validada y autorizada antes de su implementación. Su finalidad es preservar la integridad del producto, minimizar los riesgos técnicos y organizar el trabajo del equipo en torno a decisiones documentadas y trazables. A continuación, se diferencian claramente las funciones de control y aprobación mediante la siguiente tabla:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/14.png", alt="")


     
     
    //Bloque 6 - img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Objetivo")
            p #[b Control de cambios:] organizar el flujo de solicitudes mediante políticas y procedimientos.
            p #[b Aprobación de cambios:] autorizar o rechazar formalmente los cambios tras un análisis técnico y estratégico.
    
          .div(titulo="Actividades clave")
            p #[b Control de cambios:] registro, clasificación, seguimiento de estados y asignación de responsables.
            p #[b Aprobación de cambios:] evaluación de impacto, viabilidad, riesgos y toma de decisiones (aprobación, rechazo o postergación).
    
          .div(titulo="Herramientas")
            p #[b Control de cambios:] Jira, Redmine, Azure DevOps para crear y rastrear tickets con datos relevantes del cambio.
            p #[b Aprobación de cambios:] Comité de Control de Cambios (CCB) o responsables técnicos que deliberan con base en criterios establecidos.
    
          .div(titulo="Ejemplo")
            p #[b Control de cambios:] se registra una modificación menor en el sistema de inicio de sesión, clasificada y asignada al equipo de backend.
            p #[b Aprobación de cambios:] antes de una actualización crítica de base de datos, el CCB aprueba la solicitud bajo condiciones específicas.
  

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Los criterios comunes para la aprobación de cambios son:
    
        .bg-color-5.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color.color-dark
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Evaluación del impacto funcional y técnico.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Disponibilidad de recursos para su ejecución.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Revisión de pruebas preliminares (si aplica).
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Compatibilidad con otras funcionalidades.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Análisis de riesgos y plan de mitigación.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/16.png", data-aos="zoom-in")


    p(data-aos="fade-left").mb-4 Las ventajas del control y la aprobación formal son:

    //Bloque 7 - slyderf-cards
    .bg-full-width.bg-color-9
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/22.png', alt='')
    
          .col-lg-8
    
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/17.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evita cambios improvisados
                p.text-center Evita cambios improvisados o mal documentados.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/18.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Mejora la trazabilidad
                p.text-center Mejora la trazabilidad de las decisiones técnicas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protege la estabilidad
                p.text-center Protege la estabilidad del entorno de producción.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Promueve la responsabilidad
                p.text-center Promueve la responsabilidad compartida y la transparencia.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Facilita la planificación
                p.text-center Facilita la planificación de recursos y tiempos.

  
    .bg-full-width.bg-color-17.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center.text-white
          .col-lg-auto
            img(src="@/assets/curso/tema1/23.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El control y la aprobación de cambios no deben considerarse tareas burocráticas, sino mecanismos clave para garantizar la calidad, estabilidad y coherencia del producto (Pérez Martínez, 2015). Aplicarlos correctamente permite tomar decisiones informadas, distribuir responsabilidades de manera equitativa y reducir la posibilidad de errores críticos. Adoptar una cultura de evaluación previa al cambio refleja un alto nivel de madurez en la gestión del desarrollo de software.



    .bg-full-width.bg-color-3.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center.text-white
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Seguimiento, documentación y cierre de cambios
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Seguimiento, documentación y cierre de cambios, donde se aborda el proceso posterior a la implementación de modificaciones en proyectos de software. 
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Seguimiento, documentación y cierre de cambios
    
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/24.png', alt='')
    
    


    // Bloque 31/31: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511" target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=NMboEio-xXM" target="_blank" rel="noopener noreferrer") Comunicación 360°. (2014, 28 de marzo). Gestión del Cambio en proyectos IT - Webinar. [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
