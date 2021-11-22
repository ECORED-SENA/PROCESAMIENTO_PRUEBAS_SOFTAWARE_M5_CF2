<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Pruebas y depuración de código

    .bloque-texto-h.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-h__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_4/img_18.png')})`}"
      )
      .bloque-texto-h__texto.p-4
        p.mb-0 En el desarrollo tienen mucha importancia las pruebas de desarrollador que están orientadas a prueba y error, cada vez que se va escribiendo cualquier código, pues cada lenguaje de programación tiene su validador de sintaxis. Además, las herramientas para la depuración son diferentes y son utilizadas según las preferencias del desarrollador.

    p.mb-5(data-aos="flip-up") En este punto del componente formativo, se estudiarán los depuradores para aplicaciones, sitios y páginas web mediante el recurso que se propone a continuación:

    figure(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
    



</template>

<script>
export default {
  name: 'Tema5',
  components: {},
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
