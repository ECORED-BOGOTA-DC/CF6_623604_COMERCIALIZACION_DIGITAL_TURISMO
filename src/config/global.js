export default {
  global: {
    componenteFormativo: 'Plan de mercadeo digital II',
    descripcionCurso:
      'El plan de mercadeo digital es el documento por el cual se guían todas las acciones de promoción en el ámbito digital de un emprendimiento o negocio. Está claro que, con la irrupción de Internet, ha habido una explosión exponencial de plataformas, herramientas y métodos de promoción a través de <em>World Wide Web</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/float-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Objetivos y métrica en el plan de mercadeo digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Objetivos en el plan de mercadeo digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Indicadores claves de desempeño (KPI)',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medición y analítica de resultados',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planificación y estrategia en el plan de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estrategia',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Método <em>POST</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Acciones <em>online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Marketing</em> de contenidos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Plan editorial',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Características estratégicas de Internet',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: '<em>Mobile Marketing</em>',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: '<em>Email Marketing</em>',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: '<em>Marketing</em> de afiliación',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones <em>offline</em>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Presupuesto de <em>marketing online</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              '¿Qué debe tener en cuenta al calcular un presupuesto de mercadeo?',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cinco pasos para preparar el presupuesto de mercadeo',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/623604_CF06_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Indicadores Claves de desempeño (KPI)',
      referencia:
        'Peterson, E. (2006). <em>The Big Book of the Key Performance Indicators</em>.',
      tipo: 'Libro electrónico',
      link:
        'https://analyticsdemystified.com/wp-content/uploads/2019/01/The_Big_Book_of_Key_Performance_Indicators_by_Eric_Peterson.pdf',
    },
    {
      tema: 'Cinco 5 pasos para preparar el presupuesto de mercadeo',
      referencia:
        'Beltrán, M., Parrales, V. y Ledesma, G. (2019). El Buyer Persona como factor clave entre las tendencias en Gestión Empresarial. <em>Recimundo</em>, 3(3). ',
      tipo: 'Artículo ',
      link:
        'https://doi.org/10.26820/recimundo/3.(3.Esp).noviembre.2019.659-681',
    },
  ],
  glosario: [
    {
      termino: 'Audiencias',
      significado:
        'acorde con la definición de la Real Academia de la Lengua, una audiencia es “número de personas que reciben un mensaje a través de cualquier medio de comunicación”, y justamente ese conjunto de personas que impactamos con nuestros mensajes es lo que en mercadeo digital se conoce como audiencia.',
    },
    {
      termino: '<em>Cross selling</em>',
      significado:
        'el <b><em>cross selling</em></b>, o venta cruzada, hace referencia a ofrecer productos alternos a los originalmente solicitados, en caso de que estos no estén disponibles.',
    },
    {
      termino: 'Código QR',
      significado:
        'son códigos que almacenan información en una matriz de puntos. Son la evolución de los códigos de barras. Se usan para crear interacciones digitales en ámbitos físicos, ya que estos códigos son escaneables con dispositivos móviles.',
    },
    {
      termino: 'KPI',
      significado:
        'es el acrónimo de <b><em>Key Performance Indicators</em></b>, o Indicadores Claves de Desempeño. Son los encargados de medir el desempeño.',
    },
    {
      termino: '<em>Landing page</em>',
      significado:
        'las páginas de aterrizaje son páginas web a las que las personas son dirigidas al dar clic en un enlace o botón de acción (<em>call to action</em>) en un portal o algún <em>banner</em> o anuncio publicitario situado en otra página web, aplicación, red social, correo electrónico o portal de Internet.',
    },
    {
      termino: 'Redes sociales',
      significado:
        'De acuerdo con el portal de mercadeo RD Station, “Las redes sociales son estructuras formadas en Internet por personas u organizaciones que se conectan a partir de intereses o valores comunes. A través de ellas, se crean relaciones entre individuos o empresas de forma rápida, sin jerarquía o límites físicos” (RD Station, 2021). ',
    },
    {
      termino: 'OTA',
      significado:
        'es el acrónimo de <em>Online Travel Agency</em>, o Agencia de Viaje en Línea.',
    },
    {
      termino: '<em>Upselling</em>',
      significado:
        'es una técnica que consiste en la mejora de un producto o servicio, por lo general, al momento de la orden. A manera de ejemplo, cuando en una cadena de comidas rápidas se ordena un combo de hamburguesa, por lo general, el cajero, al tomar la orden, pregunta si se desea agrandar el tamaño de las papas y la gaseosa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Corporación de Medios de Andalucía [CMA]. (s. f.). <em>Algoritmo de Google</em>.',
      link: 'https://cmacomunicacion.com/que-es/algoritmo-de-google/',
    },
    {
      referencia:
        'Gladwell, M. (2007). <em>La clave del éxito. Alfaguara</em>.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez, M. (2020). <em>¿Cuánto presupuesto se debe destinar para marketing en las empresas?</em> Interius Estrategias de Marketing Digital.',
      link:
        'https://blog.interius.com.mx/cuanto-presupuesto-se-debe-destinar-para-marketing-en-las-empresas',
    },
    {
      referencia:
        'KPI.org. (2020). <em>What is a Key Performance Indicator (KPI)?)</em>.',
      link: 'https://www.kpi.org/kpi-basics/',
    },
    {
      referencia: 'RD Station. (2021). <em>Redes Sociales</em>.',
      link:
        'https://www.rdstation.com/es/redes-sociales/#:~:text=Las%20redes%20sociales%20son%20estructuras,sin%20jerarqu%C3%ADa%20o%20l%C3%ADmites%20f%C3%ADsicos.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Harbey Enrique Castelblanco Muñoz',
          cargo: 'Experto Técnico',
          centro: 'Regional Atlántico - Centro Nacional Colombo-Alemán',
        },
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Experta Temática',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gloria Alexandra Orejarena Barrios',
          cargo: 'Diseño Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo de Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación Instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Diseño Web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco',
          cargo: 'Ilustración',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción Audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de Contenidos Inclusivos y Accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de Recursos Educativos Digitales y Vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de Recursos Educativos Digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
