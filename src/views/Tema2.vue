<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2 
      h1 Estructura de una página #[i web]

    .row.bg_03
      .col-lg-12.px-5.py-4
        .row.z-i
          .col-lg-12(data-aos="slide-left")
            img.img-a.mt-5(src='@/assets/curso/tema_2/img_2.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mb-5
          .col-lg-8
            .bg_04.p-5
              p.mt-5.mb-0 Los documentos HTML son estructuras de código estrictamente organizadas, allí se utilizan etiquetas en donde se puede declarar y determinar la forma específica del funcionamiento o apariencia del contenido.
        .row.justify-content-center.mb-5
          .col-lg-7
            p.text-center En este punto del componente formativo, se indica cómo se construye la estructura global de un documento HTML, en el recurso que se muestra a continuación:

        .row.justify-content-center.mb-5
          .col-lg-8
            LineaTiempoD.linea-tiempo-d.mb-5
              p.text-small(numero="1" titulo="&lt;!DOCTYPE&gt;") Se utiliza, inicialmente, para indicar qué tipo de documento es el que tiene que interpretarse o crearse, en este caso HTML. 
                img.img-a.mt-4(src='@/assets/curso/tema_2/img_3.png', alt='Texto que describa la imagen')
              
              p.text-small(numero="2" titulo="&lt;html&gt;") Esta es la etiqueta principal de la estructura de un documento HTML, esta etiqueta encapsula todo el contenido del documento.
                img.img-a.mt-4(src='@/assets/curso/tema_2/img_4.png', alt='Texto que describa la imagen')

              p.text-small(numero="3" titulo="&lt;head&gt;") El documento necesita una cabecera en donde se suministra información (en la parte superior del documento).
                img.img-a.mt-4(src='@/assets/curso/tema_2/img_5.png', alt='Texto que describa la imagen')

              .row(numero="4" titulo="&lt;body&gt;")
                .col-lg-12
                  p.text-small Esta etiqueta permite encapsular todo el contenido que se va a mostrar en el documento HTML.<br><br> Con estas etiquetas ya es posible construir el primer documento estructurado en HTML. A excepción de la primera etiqueta &lt;!DOCTYPE&gt;, todas tienen una etiqueta de apertura y otra de cierre.
                  .row.justify-content-center
                    .col-lg-6
                      img.img-a.mt-4(src='@/assets/curso/tema_2/img_6.png', alt='Texto que describa la imagen')
                    .col-lg-6
                      img.img-a.mt-4(src='@/assets/curso/tema_2/img_7.png', alt='Texto que describa la imagen')

              .row.text-small(numero="5" titulo="&lt;meta&gt;") 
                p Etiqueta que, junto con el atributo específico, permite modificar el comportamiento de lo que se va a mostrar en el documento, por ejemplo: atributo charset=”iso-8859-1” permite especificar la codificación de los caracteres y cómo se mostrará el texto al usuario, el atributo name=”description” content=”Ejemplo de HTML5” y el name=”keywords” content=”HTML5, CSS3, Javascript” define otros aspectos al momento de mostrar un documento Web, la forma correcta de escribir estas etiqueta y la forma de agregarla a la estructura es dentro del bloque <head></head> del documento y se utilizara de forma global para todos los documentos HTML enlazados al sitio o a la aplicación.

                img.img-a.mt-4(src='@/assets/curso/tema_2/img_8.png', alt='Texto que describa la imagen')

              .row.text-small(numero="6" titulo="&lt;title&gt;") 
                p Esta etiqueta permite ponerle un título al documento; este título se mostrará en la pestaña del #[i browser] donde se despliega el documento HTML.

              .row.text-small(numero="7" titulo="&lt;link&gt;") 
                p Esta etiqueta permite agregar estilo css y código javascript.

            .row
              .col-lg-5
                img.img-a(src='@/assets/curso/tema_2/img_9.png', alt='Texto que describa la imagen')

            .row.bg_5.p-4
              .col-lg-5

              .col-lg-7
                p Tenga presente que las etiquetas &lt;meta&gt; &lt;title&gt; y &lt;link&gt; permiten mostrar contenidos más específicos o permiten crear comportamientos en el documento.

    separador
    #t_2_1.titulo-segundo(data-aos="flip-up").mb-4
      .h2 2.1 Estructura del cuerpo de una página #[i web]

    .cajon.color-primario.p-4.mb-4
      p.mb-0 La estructura del cuerpo no es más que la estructura que se crea dentro del body; normalmente se le denomina plantilla, y de esta forma es posible mostrar, organizadamente y por secciones, la información que llegará al usuario.

    p.mb-5 En HTML se utilizan algunos elementos para crear la estructura dentro de body, el elemento utilizado inicialmente para crear esta estructura era la etiqueta &lt;table&gt;, la que permite al desarrollador organizar la información, utilizando filas y columnas para mostrar y organizar información como: imágenes, textos y otros elementos, logrando que el usuario tenga una mejor experiencia visual y no se pierda entre los contenidos.

    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.bg_6(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_2/img_10.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.img-a.mb-3(src='@/assets/curso/tema_2/img_12.png', alt='Texto que describa la imagen')
              p.mb-0 La etiqueta &lt;div&gt; llegó para reemplazar la etiqueta &lt;table&gt; al momento de crear esta estructura. Esta etiqueta lo que hace es separar el cuerpo funcionando como la celda de una tabla, es más fácil de implementar y se utiliza menos código para crear la estructura.

      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema_2/img_11.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              img.img-a.mb-3(src='@/assets/curso/tema_2/img_12.png', alt='Texto que describa la imagen')
              p.mb-0 La forma establecer qué elemento utilizar para la estructura, depende de cada desarrollador, teniendo en cuenta las bondades y la necesidad de lo que se quiera mostrar, en pantalla, al usuario.

    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-5 A continuación, se muestran algunas estructuras del #[strong body] que normalmente se utilizan y se identifican, al momento de ingresar a un sitio #[i web] o a una aplicación #[i web]; se debe tener presente que estas estructuras pueden variar, según el diseñador #[i web], pero, normalmente, se siguen algunos estándares:

        SlyderC.mb-5(:datos="datosSlyder")

    .row.z-i
      .col-lg-4.z-i
        img.img-a(src='@/assets/curso/tema_2/img_19.png', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-4
      .col-lg-8.p_top1
        .row
          .col-lg-6
            hr.hr1.mt-0
        h5.bg_txt1 Elementos del contenido
        p La mayoría de elementos vistos hasta este punto del componente, son elementos orientados a ofrecer metadatos (para los motores de búsqueda, &lt;meta>&gt;>) o de estructura (&lt;header&gt;, &lt;body&gt;). A continuación, se verán aquellos elementos usados para segmentar los contenidos dentro de una página o interface web o, simplemente, para diferenciar los contenidos de la página.

      .row.p_top2
        .col-lg-1
        .col-lg-11
          .row.bg_7.py-4.px-0
            .col-lg-3
            .col-lg-8
              .row.align-items-center
                .col-lg-8
                  p.mb-0 Para afianzar su saber en lo relacionado con los elementos del contenido, estudie atentamente el #[b Anexo_1_ElementosDelContenido]. Recuerde llevar registro de los aspectos más destacados e importantes, en su libreta personal de apuntes.
                .col-lg-4.rig_ane
                  a.anexo.mb-4(:href="obtenerLink('/downloads/Elementos_del_contenido.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      h5.mb-0 Descargar

    separador
    #t_2_2.titulo-segundo(data-aos="flip-up").mb-4
      .h2 2.2  Nuevos elementos HTML5

    p En respuesta a la normal evolución de los sistemas informáticos y la necesidad permanente de mejorar las funcionalidades de desarrollo y la experiencia de usuario, se ha seguido actualizando el código #[b HTML].

    p.mb-5 Se invita a conocer algunas funcionalidades y beneficios de #[b HTML5], con respecto a multimedia, estudiando atentamente el recurso que se muestra a continuación:

    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5.bg_08(titulo="Video" :icono="require('@/assets/curso/tema_2/img_20.svg')")
        .row.p-5
          .col-md-12.mb-4.mb-md-0
            p.mb-5 Este elemento utiliza etiquetas de apertura y de cierre &lt;video&gt; y solo es obligatorio colocar la ruta de acceso al video src; utiliza, además, algunos atributos para el control del elemento como: width y heigth, para el tamaño en el que se va a mostrar el video en el browser.
            img.img-a(src='@/assets/curso/tema_2/img_25.png', alt='Texto que describa la imagen')

      .py-4.py-md-5.bg_08(titulo="Atributos de video" :icono="require('@/assets/curso/tema_2/img_21.svg')")
        .row.p-5
          .col-md-12.mb-4.mb-md-0
            p.mb-5 Algunos atributos adicionales de vídeo son el #[b autoplay], utilizado para indicar al navegador que se reproducirá automáticamente. Así mismo, el #[b loop] que permite reproducir, de nuevo, el video cuando llegue al final. Con esta etiqueta y estos atributos es posible ubicar los videos dentro un sitio o aplicación #[i web].
            img.img-a(src='@/assets/curso/tema_2/img_26.png', alt='Texto que describa la imagen')
      .py-4.py-md-5.bg_08(titulo="Audio" :icono="require('@/assets/curso/tema_2/img_22.svg')")
        .row.p-5
          .col-md-12.mb-4.mb-md-0
            p.mb-5 Este elemento utiliza la etiqueta #[b &lt;audio&gt;], así como en el video. Es decir, utiliza casi los mismos atributos del elemento video.
            img.img-a(src='@/assets/curso/tema_2/img_27.png', alt='Texto que describa la imagen')
      .py-4.py-md-5.bg_08(titulo="Atributos de Audio" :icono="require('@/assets/curso/tema_2/img_23.svg')")
        .row.p-5
          .col-md-12.mb-4.mb-md-0
            p.mb-5 El atributo obligatorio es la ruta del archivo de audio, también cuenta con el atributo #[b autoplay, loop] que tienen el comportamiento con en el video.
            img.img-a(src='@/assets/curso/tema_2/img_28.png', alt='Texto que describa la imagen')

    separador
    #t_2_3.titulo-segundo(data-aos="flip-up").mb-4
      .h2 2.3 Referencias y etiquetas

    .bg_09.p-4
      p.text-center A continuación, se presenta un listado de etiquetas que son las que comúnmente se emplean para la construcción de sitios o interfaces web. 

    .row.justify-content-center
      .col-lg-10.z-i
        img.img-a.im_top(src='@/assets/curso/tema_2/img_29.svg', alt='Texto que describa la imagen')

    .row.justify-content-center
      .col-lg-10
        .bg_7.p-4.p_top3.mb-5
          .row.align-items-center.mt-5 
            .col-lg-8
              p.mb-0 Conozca con mayor detalle, aspectos de suma importancia en lo relacionado con “Referencias y etiquetas”, explorando con atención el #[b Anexo_2_ReferenciasYEtiquetas].
            .col-lg-4
              a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_2_RerefenciasYEtiquetas.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  h5.mb-0 Descargar
        
        .row.align-items-center
            .col-lg-8
              p.mb-0 Si desea encontrar y conocer con mayor detalle, un compendio de las etiquetas completas y actualizadas, visite y explore el enlace que aquí se propone.
            .col-lg-4
              a.anexo.mb-4(href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  h5.mb-0 Enlace web 


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
