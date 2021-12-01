<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 JavaScript

    .row.bg_03
      .col-lg-12.px-5.py-4
        .row.align-items-center.bg_10.mb-5.mt-5(data-aos="flip-up")
          .col-lg-4.p-0
            img.img-a(src='@/assets/curso/tema_4/img_1.png', alt='Texto que describa la imagen')
          .col-lg-8.p-4
            p JavaScript es un lenguaje de programación de secuencia de comandos para la web; es un lenguaje que no necesita compilador, como otros lenguajes, y se ejecuta directamente en el navegador.

            p Es momento de profundizar en los elementos de empleo del JavaScript; para ello, explore se sugiere conscientemente el recurso que se presenta, procurando llevar registro de los aspectos más destacados en la libreta personal de apuntes:
   
        .titulo-quinto.color-primario(data-aos="flip-up")
          h4 Empleo de JavaScript

        p(data-aos="flip-up") JavaScript se utiliza, normalmente, en la web pero también para:

        ol.lista-ol--cuadro
          li(data-aos="slide-right") 
            .lista-ol--cuadro__vineta
              span 1
            span Desarrollo de todo el #[i backend] de una aplicación, programando con #[b Node.js], que sigue siendo JavaScript.
          li(data-aos="slide-left") 
            .lista-ol--cuadro__vineta
              span 2
            | Sistemas operativos.
          li(data-aos="slide-right") 
            .lista-ol--cuadro__vineta
              span 3
            | Servidores de internet.
          li(data-aos="slide-left") 
            .lista-ol--cuadro__vineta
              span 4
            | Bases de datos.
          li(data-aos="slide-right")  
            .lista-ol--cuadro__vineta
              span 5
            | Plataformas de juego.
          li(data-aos="slide-left") 
            .lista-ol--cuadro__vineta
              span 6
            p Desarrollo  <strong> móvil.</strong>

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="flip-up")
      .row.justify-content-center(titulo="Selectores")
        .col-lg-10
          p Los selectores funcionan de forma muy similar a los del CSS y permite seleccionar y encontrar elementos dentro del HTML.
          img.img-a(src='@/assets/curso/tema_4/img_3.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Selectores (clase o tipo)")
        .col-lg-10
          p El selector se puede utilizar buscando por la #[b clase] o por el #[b tipo].
          img.img-a(src='@/assets/curso/tema_4/img_5.png', alt='Texto que describa la imagen')

      .row.justify-content-center(titulo="Eventos")
        .col-lg-10
          .row.align-items-center.justify-content-center
            .col-lg-4
              img.img-a(src='@/assets/curso/tema_4/img_19.png', alt='Texto que describa la imagen')
            .col-lg-6
              p.mb-4 La interacción del usuario con una aplicación, página o sitio web se establece como evento; por lo tanto, un evento es una acción que el usuario quiere hacer en determinada parte de la aplicación. Por ejemplo, darle clic a un botón o cambiar un valor de un elemento de texto, entre otros.

              .cajon.color-secundario.p-4
                p.mb-0 Estas acciones se capturan mediante manejadores de eventos ya establecidos y se programan mediante funciones en #[b JavaScript].

      .row.justify-content-center(titulo="Ejemplo de funcionamiento")
        .col-lg-10
          p Este es un ejemplo práctico de cómo funciona un evento. En el momento en que el cursor esté en el campo de texto, automáticamente arroja la alerta.
          img.img-a(src='@/assets/curso/tema_4/img_6.svg', alt='Texto que describa la imagen')


    .row
      .col-lg-12.bg_11.p-4
        .row.justify-content-center.mb-5
          .col-sm-6.col-xl-5.mb-4.mb-xl-0(data-aos="slide-left")
            .tarjeta.tarjeta-flip.color-secundario.bg_6(@mouseover="indicadorTarjetaFlip = false")
              .indicador--hover(v-if="indicadorTarjetaFlip")
              .tarjeta-flip__contenedor
                .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_2/img_10.svg')})`}")
                .tarjeta-flip__contenido.p-4.p-xl-5
                  img.img-a.mb-3(src='@/assets/curso/tema_2/img_12.png', alt='Texto que describa la imagen')
                  p.mb-0.text-center En esta tabla se especifican los eventos que pueden utilizarse.#[br] #[b ¡Conózcalos!]

        .row.justify-content-center(data-aos="flip-up")
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1
              span Eventos
            
            table
              thead
                tr.bg_the.text-center
                  th.tabl_anc 
                    h4.mb-0 Evento
                  th 
                    h4.mb-0 Se ejecuta cuando
              tbody
                tr.bg_td
                  td #[b onAbort]	
                  td El usuario interrumpe la carga de una imagen.
                tr.bg_td1
                  td #[b onBlur]	
                  td Un elemento de formulario, una ventana o un marco pierden el foco.
                tr.bg_td
                  td #[b onChange]	
                  td El valor de un campo de formulario cambia.
                tr.bg_td1
                  td #[b onClick]	
                  td Se hace clic en un objeto o formulario.
                tr.bg_td
                  td #[b onDblClick]	
                  td Se hace doble clic en un objeto o formulario.
                tr.bg_td1
                  td #[b onDragDrop]	
                  td El usuario arrastra y suelta un objeto en la ventana.
                tr.bg_td
                  td #[b onError]	
                  td La carga de un documento o imagen produce un error.
                tr.bg_td1
                  td #[b onFocus]	
                  td Una ventana, marco o elemento de formulario recibe el foco.
                tr.bg_td
                  td #[b onKeyDown]	
                  td El usuario pulsa una tecla.
                tr.bg_td1
                  td #[b onKeyPress]	
                  td El usuario mantiene pulsada una tecla.
                tr.bg_td
                  td #[b onKeyUp]	
                  td El usuario libera una tecla.
                tr.bg_td1
                  td #[b onLoad]	
                  td El navegador termina la carga de una ventana.
                tr.bg_td
                  td #[b onMouseDown]	
                  td El usuario pulsa un botón del ratón.
                tr.bg_td1
                  td #[b onMouseMove]	
                  td El usuario mueve el puntero.
                tr.bg_td
                  td #[b onMouseOut]	
                  td El puntero abandona un área o enlace.
                tr.bg_td1
                  td #[b onMouseOver]	
                  td El puntero entra en un área o imagen.
                tr.bg_td
                  td #[b onMouseUp]	
                  td El usuario libera un botón del ratón.
                tr.bg_td1
                  td #[b onMove]	
                  td Se mueve una ventana o un marco.
                tr.bg_td
                  td #[b onReset]	
                  td El usuario limpia un formulario.
                tr.bg_td1
                  td #[b onResize]	
                  td Se cambia el tamaño de una ventana o marco.
                tr.bg_td
                  td #[b onSelect]	
                  td Se selecciona el texto del campo texto o área de texto de un formulario.
                tr.bg_td1
                  td #[b onSubmit]	
                  td El usuario envía un formulario.
                tr.bg_td
                  td #[b onUnload]	
                  td El usuario abandona una página.

    separador
    #t_4_1.titulo-segundo(data-aos="flip-up").mb-4
      .h2 4.1  API

    p.mb-5(data-aos="flip-up") Las API #[b (Interfaces de Programación de Aplicaciones)], son aplicaciones que crean los desarrolladores para, a su vez, crear funcionalidades de forma más sencilla y rápida. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-6.bg_13.p-2
        p.text-center.mb-0 A continuación, se presentan algunos tipos de #[b API]:

    LineaTiempoD.linea-tiempo-d.mb-5(data-aos="flip-up")
      p(numero="1" titulo="<i>Geolocation</i>") API sencilla que consiste en utilizar objetos sencillos. Contiene tres métodos para el control y recuperación de datos geográficos.
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_8.png', alt='Texto que describa la imagen')
      
      p(numero="2" titulo="<i>Position</i>") Presenta la ubicación de un dispositivo móvil y maneja el objeto #[b Coordinates] que muestra la ubicación actual y una marca de tiempo, incluyendo latitud, longitud, altitud, velocidad, dirección de movimiento y otras.
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_9.png', alt='Texto que describa la imagen')

      p(numero="3" titulo="<i>File</i>") La API #[b #[i File]] provee información de archivos y permite que el JavaScript tenga acceso a su contenido. Los objetos #[b #[i File]] que se recuperan a través del objeto #[u FileList (en-US)], retornan utilizando el elemento #[b &lt;input&gt;]. El objeto #[b #[i File]] puede ser utilizado en cualquier contexto: #[u FileReader, URL.createObjectURL()], #[u createImageBitmap() (en-US)], y #[u XMLHttpRequest.send()].
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_10.png', alt='Texto que describa la imagen')

      p(numero="4" titulo="<i>File</i> (propiedades)") Observe en la tabla, algunas de las propiedades de #[b #[i File]] y su descripción.
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_11.png', alt='Texto que describa la imagen')

      p(numero="5" titulo="<i>File</i> (métodos)") La interfaz #[i File] no define algún método, pero los hereda de la interfaz #[u Blob].
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_12.png', alt='Texto que describa la imagen')

      p(numero="6" titulo="<i>Web socket</i>") Tecnología que permite abrir una sesión de comunicación entre el navegador del usuario y un servidor. Puede enviar mensajes a un servidor y recibir respuestas controladas, sin tener que consultar al servidor.
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_13.png', alt='Texto que describa la imagen')

      p(numero="7" titulo="<i>Storage</i>") Permite acceso y almacenamiento desde la sesión al almacenamiento local en el dispositivo para añadir, modificar o eliminar datos almacenados, entre otros aspectos. Para manipular y tener acceso a almacenamiento de la sesión se debe utilizar el método #[u Window.sessionStorage] y para manipular el almacenamiento local, debe utilizarse #[u Window.localStorage].
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_14.png', alt='Texto que describa la imagen')

      p(numero="8" titulo="<i>Windows.sessionStorage</i>") Permite acceder al almacenamiento asociado a la sesión actual. La propiedad #[b sessionStorage] se comporta similar a #[u localStorage]; la diferencia es que la información se almacena en #[b localStorage] y no expira, solo se elimina al finalizar la sesión.
        img.img-a.mt-4(src='@/assets/curso/tema_4/img_15.png', alt='Texto que describa la imagen')

    separador
    .row.bg_15.p-4
      .col-lg-12
        #t_4_2.titulo-segundo(data-aos="flip-up").mb-4.mt-4
          .h2 4.2 Librerías

        .row.justify-content-center
          .col-lg-10
            .row.align-items-center.mb-5
              .col-lg-4(data-aos="slide-left") 
                img.img-a(src='@/assets/curso/tema_4/img_17.png', alt='Texto que describa la imagen')
              .col-lg-8(data-aos="slide-right")  
                p Las librerías JavaScript son códigos reutilizables que permiten que los desarrolladores no tengan que preocuparse en desarrollar las cosas desde cero, lo cual hace más ágil el desarrollo.

                p En la siguiente tabla, se exponen las librerías más comunes y frecuentemente usadas por los desarrolladores:
    .row.bg_14
      .col-lg-12
        .row.justify-content-center
          .col-lg-11(data-aos="flip-up")
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2
              span Librerías
            table.mb-0
              thead
                tr
                  th.tabl_anc
                  th                  
              tbody.bor_the
                tr.bg_td2
                  td.tabl_anc #[b jQuery]	
                  td Permite realizar tareas de una forma más fácil y rápida, manipulación DOM. Permite agregar interactividad y efectos visuales en un sitio web.
                tr
                  td.tabl_anc #[b Moments.js]	
                  td Ayuda a trabajar con las fechas. Lo que permite, en vez de mostrar la fecha en formato “publicado el 10 de diciembre del 2021 a las 10:00 p.m.”, como lo devuelve JavaScript, esta librería lo estandariza y simplifica.
                tr.bg_td2
                  td.tabl_anc #[b anime.js]	
                  td Permite animar diferentes propiedades CSS, SVG o atributos DOM en una página web. Controla los aspectos de la animación y brinda muchas formas de especificar las propiedades que se quieren animar.
                tr
                  td.tabl_anc #[b D3.js]	
                  td Es utilizada para manipular documentos basados en datos. Proporciona una gran facilidad y flexibilidad para crear visualizaciones de datos.
                tr.bg_td2
                  td.tabl_anc #[b Chart.js]	
                  td Es una librería muy fácil de utilizar y permite incluir gráficos animados e interactivos.
                tr
                  td.tabl_anc #[b MathJS]	
                  td Librería matemática para JavaScript. Ofrece una solución integrada para trabajar con tipos de datos: números, números grandes, números complejos, fracciones, unidades y matrices.
                tr.bg_td2
                  td.tabl_anc #[b Hammer.js]	
                  td Se utiliza para crear aplicaciones web que requieren realizar acciones como 	desplazarse, deslizar, rotar y hacer #[i zoom] en los gestos táctiles.
                tr
                  td.tabl_anc #[b React]	
                  td Ayuda a crear interfaces interactivas para el usuario. Con esta librería permite diseñar vistas simples.

      



</template>

<script>
import LineaTiempoDD from '../components/LineaTiempoDD'
export default {
  name: 'Tema2',
  components: {
    LineaTiempoDD,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        texto:
          'Esta plantilla está dividida en secciones, en donde se suministrará información relevante para el usuario; la <strong>cabecera</strong> es, normalmente, utilizada para mostrar, entre otros, banners e imágenes corporativas de la empresa dueña del sitio <i>web</i>.',
        imagen: require('@/assets/curso/tema_2/img_13.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Bajo la cabecera se encuentra la <b>barra de navegación</b>: allí se muestra, normalmente, el menú de navegación de todo el sitio <i>web</i> e información principal. Si se tiene una sección de noticias y está en el menú de navegación, me mostrarán, en la parte de información principal, las noticias que se hayan cargado al sitio <i>web</i>.',
        imagen: require('@/assets/curso/tema_2/img_14.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'En la <a>barra lateral</a> pueden mostrarse <i>links</i> de interés para los usuarios o información del autor, entre otras cosas. Por último, se cuenta con la sección Institucional, a la que se llamó de esta forma porque, normalmente, se utiliza para mostrar información de la empresa del autor; generalmente, estas plantillas son utilizadas para crear blogs.',
        imagen: require('@/assets/curso/tema_2/img_15.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'Este es un ejemplo de una estructura y su escrita en código HTML.',
        imagen: require('@/assets/curso/tema_2/img_16.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'HTML5 permite crear esta estructura básica, usando nuevos elementos para dividir la plantilla y mostrar la sección correspondiente. Al momento de crear la estructura de la plantilla dentro del <b>body</b>, como se muestra en la imagen, se utilizan etiquetas que permiten dividir y estructurar las secciones del sitio, página o aplicación <i>web</i>.',
        imagen: require('@/assets/curso/tema_2/img_17.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        texto:
          'La etiqueta &lt;header&gt; se utiliza para la cabecera, teniendo en cuenta que la etiqueta &lt;head&gt; y &lt;header&gt; son totalmente diferentes; &lt;nav&gt; es utilizada para colocar el menú de navegación, &lt;section&gt; es la sección que mostrará la información dependiendo de lo que se quiere mostrar, &lt;aside&gt; y hace parte de la estructura del body que  se puede utilizar para poner información personal o enlaces importantes; por último está el <footer&gt;.',
        imagen: require('@/assets/curso/tema_2/img_18.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
