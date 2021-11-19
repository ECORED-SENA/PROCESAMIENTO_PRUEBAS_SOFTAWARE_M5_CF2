export default {
  global: {
    componenteFormativo: '<em>Frontend</em> con HTML5, CSS y JSS',
    descripcionCurso:
      'Este componente formativo pretende mostrar el desarrollo <em>web</em> utilizando lenguajes como HTML5, CSS y JSS; explicando, además, sus funciones, componentes y semántica junto a las bondades que brinda trabajar desarrollos independientes de la parte del servidor y para el usuario, llamado <em>frontend</em>. Mostrará, también, cómo mezclando estos lenguajes se pueden crear grandes y complejos desarrollos <em>web</em>. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructura de una página <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura del cuerpo de una página <i>web</i>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Nuevos elementos HTML5',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Referencias y etiquetas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'CSS',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Referencias de estilos y propiedades de CSS3',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Selectores',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'JavaScript',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'API',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Librerías',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Pruebas y depuración de código',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        '100 Web Hosting. (s.f.). Referencia etiquetas HTML5. [Web log post]. Cafetero 100.',
      link: 'https://www.cafetero100.com/manual-html5/',
    },

    {
      referencia:
        'Crea tu web creando internet. (s.f.). Estilos CSS: referencia. [Web log post]. Espaciolatino.',
      link: 'https://creatuweb.espaciolatino.com/tutorhtml/tema17.html',
    },

    {
      referencia:
        'Martínez, M. (2020). 12 librerías JavaScript que deberías conocer. [Web log post]. Profile.',
      link: 'https://profile.es/blog/librerias-javascript/',
    },

    {
      referencia: 'Mdn web docs. (2021). File. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/File',
    },

    {
      referencia:
        'Mdn web docs. (2021). WebSockets. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/WebSockets_API',
    },

    {
      referencia:
        'Mdn web docs. (2021). Almacenamiento. [Web log post]. MDN Web Docs.',
      link: 'https://developer.mozilla.org/es/docs/Web/API/Storage',
    },

    {
      referencia:
        'Nieto, I. (2003). Eventos en JavaScript. [Web log post]. Laplace.',
      link:
        'http://laplace.ucv.cl/Cursos/Old/FisComputacional/javascript/Tutorial/javascript5.html',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'conjunto de definiciones y protocolos que se utilizan para desarrollar e integrar el <em>software</em> de las aplicaciones. API significa interfaz de programación de aplicaciones. Las API permiten que sus productos y servicios se comuniquen con otros, sin necesidad de saber cómo están implementados.',
    },
    {
      termino: 'Aplicación',
      significado:
        'programa informático diseñado como una herramienta para realizar operaciones o funciones específicas. Generalmente, son diseñadas para facilitar ciertas tareas complejas y hacer más sencilla la experiencia informática de las personas.',
    },
    {
      termino: 'Base de datos',
      significado:
        'recopilación organizada de información o datos estructurados, que normalmente se almacena de forma electrónica en un sistema informático.',
    },
    {
      termino: 'Browser',
      terminoHtml: '<em>Browser</em>',
      significado:
        'término inglés que se utiliza para identificar a un navegador <em>web</em> o navegador de Internet. Consiste en un <em>software</em>, programa o incluso aplicación, que ofrece al usuario el acceso a la red.',
    },
    {
      termino: 'Depurar',
      significado:
        'quitar de una cosa lo malo, lo que es extraño o lo que no sirve para dejarla pura.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'identificación de la ubicación geográfica a partir de un dispositivo conectado a internet. Existen muchas tecnologías aptas para determinar la geolocalización de una persona',
    },
    {
      termino: 'Icono',
      significado:
        'signo que representa un objeto o una idea con los que guarda una relación de identidad o semejanza formal',
    },
    {
      termino: 'Interfaz',
      significado:
        'se designa, en informática, la conexión física y funcional que se establece entre dos aparatos, dispositivos o sistemas que funcionan independientemente uno del otro. En este sentido, la comunicación entre un ser humano y una computadora se realiza por medio de una interfaz.',
    },
    {
      termino: 'Servidor',
      significado:
        'conjunto de computadoras capaz de atender las peticiones de un cliente y devolverle una respuesta en concordancia.',
    },
    {
      termino: 'Sintáctico',
      significado:
        'análisis de las funciones sintácticas o relaciones de concordancia y jerarquía que guardan las palabras cuando se agrupan entre sí en forma de sintagmas',
    },
    {
      termino: 'Sintaxis',
      significado:
        'parte de la gramática que estudia el modo en que se combinan las palabras y los grupos que estas forman para expresar significados, así como las relaciones que se establecen entre todas esas unidades.',
    },
    {
      termino: 'Sitio web',
      terminoHtml: 'Sitio <em>web</em>',
      significado:
        'conjunto de páginas <em>web</em> accesibles a través de internet, convenientemente enlazadas y con una finalidad concreta.',
    },
    {
      termino: 'Web',
      terminoHtml: '<em>Web</em>',
      significado:
        'conjunto de información que se encuentra en una dirección determinada de internet.',
    },
  ],
  complementario: [
    {
      texto: 'Fazt. (2018). Curso HTML para principiantes. [Video]. Youtube.',
      tipo: 'Video youtube',
      link: 'https://www.youtube.com/embed/rbuYtrNUxg4',
    },
    {
      texto: 'Fazt. (2018). Curso CSS para principiantes. [Video]. Youtube. ',
      tipo: 'Video youtube',
      link: 'https://www.youtube.com/embed/W6GTDfrWjXs',
    },
    {
      texto:
        'Fazt. (2018). Curso Javascript para principiantes. [Video]. Youtube. ',
      tipo: 'Video youtube',
      link: 'https://www.youtube.com/embed/RqQ1d1qEWlE',
    },
    {
      texto:
        'Codificándolo. (2021). Como consumir una API en JavaScript. [Video]. Youtube. ',
      tipo: 'Video youtube',
      link: 'https://www.youtube.com/embed/a2cQ7YLyjzE',
    },
    {
      texto:
        'Bernardez, R. (2015). Sácale chispas a Chrome Developer Tools (DevTools). [Video]. Youtube. ',
      tipo: 'Video youtube',
      link: 'https://www.youtube.com/embed/xBXYIs4-xJE',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'David Eduardo Lozada Cerón',
        cargo: 'Experto Temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro agropecuario La Granja - Regional Tolima',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de la gestión industrial - Distrito capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro: 'Centro de la gestión industrial - Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ricardo Alfonso González Vargas',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
