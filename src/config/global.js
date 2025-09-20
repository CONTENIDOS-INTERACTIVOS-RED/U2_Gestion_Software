export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Gestión de la configuración',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de cambios en el desarrollo de software',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Introducción a la gestión de cambios en el desarrollo de software',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de cambios en proyectos de software',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Proceso de solicitud y evaluación de cambios',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Herramientas para la gestión de cambios',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Definición de líneas base',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Concepto y propósito de las líneas base en la gestión de configuración',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de líneas base en proyectos de software',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Criterios para establecer una línea base',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Uso de herramientas como Jenkins',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Introducción a Jenkins y su rol en la integración continua (CI/CD)',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Monitoreo, gestión y mejores prácticas en Jenkins',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Guillamón Morales, A. (2013). Guía práctica para elaborar planes de emergencia y simulacros: (1 ed.). Panamericana Formas e Impresos S.A.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51873?page=1',
    },
    {
      referencia:
        'Pérez Martínez, E. (2015). Documentos técnicos de instalaciones en la edificación. DTIE 20.01 Libro de edificio e instrucciones de funcionamiento y mantenimiento: (1 ed.). Asociación Técnica Española de Climatización y Refrigeración (ATECYR).',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/42354',
    },
    {
      referencia: 'Chacon, S., & Straub, B. (2014). Pro Git. Apress.',
      link: 'https://git-scm.com/book/en/v2',
    },
    {
      referencia:
        "Smart, J. F. (2011). Jenkins: The Definitive Guide. O'Reilly Media.",
      link: '',
    },
    {
      referencia:
        'Naik, P., & Naik, G. (2024). DevOps with Jenkins X. Packt Publishing.',
      link: '',
    },
    {
      referencia:
        'Ruiz, M. G. (2023). Gestión de proyectos de software. Ediciones ENI.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Aprobación de cambios',
      significado:
        'proceso mediante el cual se revisan y autorizan las solicitudes de cambios para asegurar que cumplen con los criterios establecidos antes de su implementación.',
    },
    {
      termino: 'Automatización de pipelines',
      significado:
        'uso de herramientas como Jenkins para crear procesos automáticos que integran, prueban y despliegan software de manera continua.',
    },
    {
      termino: 'Cambio',
      significado:
        'modificación o ajuste realizado a algún componente, documento o sistema dentro de un proyecto de software, que puede afectar su funcionamiento o alcance.',
    },
    {
      termino: 'Definición de líneas base',
      significado:
        'proceso de establecer puntos de referencia oficiales en el desarrollo del software que marcan versiones aprobadas y estables de documentos, código o configuraciones.',
    },
    {
      termino: 'Gestión de cambios',
      significado:
        'conjunto de procedimientos para solicitar, evaluar, aprobar, implementar y registrar modificaciones en un proyecto de software.',
    },
    {
      termino: 'Herramientas de gestión de cambios',
      significado:
        'software especializado que facilita la administración, seguimiento y control de solicitudes de cambio, como Jenkins, Jira o ServiceNow.',
    },
    {
      termino: 'Integración continua (CI)',
      significado:
        'práctica de desarrollo donde el código se integra y prueba frecuentemente para detectar errores de forma temprana y mantener la calidad del software.',
    },
    {
      termino: 'Jenkins',
      significado:
        'herramienta de automatización de código abierto utilizada para implementar procesos de integración y entrega continua en proyectos de software.',
    },
    {
      termino: 'Línea base',
      significado:
        'versión formal y aprobada de un producto de trabajo que sirve como referencia para futuras modificaciones y seguimiento.',
    },
    {
      termino: 'Monitoreo de cambios',
      significado:
        'supervisión continua del estado y progreso de los cambios solicitados para asegurar su correcta implementación y registro.',
    },
    {
      termino: 'Pipeline',
      significado:
        'secuencia automatizada de tareas que se ejecutan en Jenkins para compilar, probar, y desplegar software de forma continua.',
    },
    {
      termino: 'Solicitud de cambio',
      significado:
        'documento o registro formal que describe una propuesta para modificar un componente, funcionalidad o proceso dentro de un proyecto.',
    },
  ],
}
