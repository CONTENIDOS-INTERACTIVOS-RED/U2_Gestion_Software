export default {
  tema3: {
    tema: '2. Definición de líneas base',
    titulo: 'Ponte a prueba',
    introduccion:
      'Demuestra lo que aprendiste sobre líneas base, gestión de configuración y control de cambios en software.',
    barajarPreguntas: true,
    preguntas: [
      {
        id: 1,
        texto:
          '¿Cuál es el propósito principal de una línea base en la gestión de configuración de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Eliminar versiones obsoletas del sistema',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Establecer un punto de control autorizado para futuras modificaciones',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Automatizar la entrega continua del producto',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Registrar el historial de cambios de los usuarios finales',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Una línea base establece un punto de control autorizado para futuras modificaciones.',
        mensaje_incorrecto:
          'Incorrecto. Una línea base establece un punto de control autorizado para futuras modificaciones.',
      },
      {
        id: 2,
        texto:
          '¿Cuál de las siguientes opciones representa una actividad clave dentro de la gestión de cambios en un proyecto de software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Borrar versiones anteriores del código',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Desplegar automáticamente los cambios al entorno de producción',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto:
              'Evaluar el impacto de una solicitud de cambio antes de su aprobación',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto:
              'Implementar nuevas funcionalidades sin documentación previa',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Evaluar el impacto de una solicitud de cambio antes de su aprobación es una actividad clave.',
        mensaje_incorrecto:
          'Incorrecto. Evaluar el impacto de una solicitud de cambio antes de su aprobación es una actividad clave.',
      },
      {
        id: 3,
        texto:
          '¿Qué característica distingue a Jenkins como herramienta en el contexto de DevOps?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Permite diseñar interfaces gráficas de usuario',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto:
              'Facilita la integración continua mediante ejecución automática de jobs',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto:
              'Sustituye completamente a los sistemas de control de versiones',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto:
              'Limita la colaboración entre equipos de desarrollo y operaciones',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Jenkins facilita la integración continua mediante ejecución automática de jobs.',
        mensaje_incorrecto:
          'Incorrecto. Jenkins facilita la integración continua mediante ejecución automática de jobs.',
      },
      {
        id: 4,
        texto:
          '¿Qué elemento debe estar presente antes de aprobar oficialmente una nueva línea base?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Validación automatizada por Jenkins',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Revisión formal del producto o componente involucrado',
            esCorrecta: true,
          },
          {
            id: 'c',
            texto: 'Permiso directo del cliente final',
            esCorrecta: false,
          },
          {
            id: 'd',
            texto: 'Eliminación de versiones anteriores del repositorio',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Se requiere una revisión formal del producto o componente involucrado.',
        mensaje_incorrecto:
          'Incorrecto. Se requiere una revisión formal del producto o componente involucrado.',
      },
      {
        id: 5,
        texto:
          '¿Cuál de las siguientes acciones representa una buena práctica en el mantenimiento de líneas base a lo largo del ciclo de vida del software?',
        imagen: '',
        barajarRespuestas: true,
        opciones: [
          {
            id: 'a',
            texto: 'Reemplazar la línea base cada vez que se hace un commit',
            esCorrecta: false,
          },
          {
            id: 'b',
            texto: 'Establecer líneas base solo al final del proyecto',
            esCorrecta: false,
          },
          {
            id: 'c',
            texto: 'Controlar cambios mediante registros y auditorías',
            esCorrecta: true,
          },
          {
            id: 'd',
            texto:
              'Permitir cambios sin aprobación previa para mantener agilidad',
            esCorrecta: false,
          },
        ],
        mensaje_correcto:
          '¡Correcto! Controlar cambios mediante registros y auditorías es una buena práctica.',
        mensaje_incorrecto:
          'Incorrecto. Controlar cambios mediante registros y auditorías es una buena práctica.',
      },
    ],
  },
}
