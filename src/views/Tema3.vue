<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3 
      h1 CSS
    
    img.img-a(src='@/assets/curso/tema_3/img_1.svg', alt='Texto que describa la imagen')(data-aos="flip-up")

    .bg_7.p-5.p_top4.mb-5
      p.mb-0 El CSS (hojas de estilo en cascada), es la manera en que se da formato a un grupo de elementos del documento #[b HTML]. Cascada, en tanto refiere que los elementos tendrán un formato, teniendo en cuenta la jerarquía.

    p.mb-5(data-aos="flip-up") Se invita a profundizar, entonces, los aspectos más sobresalientes e importantes de las hojas de estilo en cascada (CSS), estudiando atentamente el recurso que se presenta a continuación:

    figure.mb-5(data-aos="flip-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    #t_3_1.titulo-segundo(data-aos="flip-up").mb-4
      .h2 3.1 Referencias de estilos y propiedades de CSS3

    .row(data-aos="slide-left")
      .col-lg-6
        .cajon.color-primario.p-4
          p.mb-0 Con relación a las referencias de estilos, existe una guía básica de estilos muy comunes y más utilizados, con los que se puede dar formato a las distintas páginas web.

    .row.mb-5(data-aos="slide-right")
      .col-lg-12.z-i
        img.img-a.im_top1(src='@/assets/curso/tema_3/img_2.png', alt='Texto que describa la imagen')

    .row.align-items-center
      .col-lg-8
        .bg_7.p-4
          .row.align-items-center
            .col-lg-8(data-aos="slide-left")
              p.mb-0 Explore el Anexo_3_ReferenciasDeEstilosYPropiedadesCSS3 y encuentre allí los estilos de uso más frecuente, en la asignación de formato en la creación de páginas web.
            .col-lg-4(data-aos="slide-right")
              a.anexo(:href="obtenerLink('/downloads/Anexo_3_ReferenciasDeEstilosYPropiedadesCSS3.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  h5.mb-0 Descargar

        .row.align-items-center.mb-0.p-4
          .col-lg-8(data-aos="slide-left")
            p.mb-0 Todos los elementos de estilo actualizados pueden ser encontrados, navegando el siguiente enlace:
          .col-lg-4(data-aos="slide-right")
            a.anexo(href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                h5.mb-0 Enlace web
        
      .col-lg-4(data-aos="slide-left")
        img.img-a(src='@/assets/curso/tema_3/img_3.png', alt='Texto que describa la imagen')

    separador
    #t_3_2.titulo-segundo(data-aos="flip-up").mb-4
      .h2 3.2 Selectores

    p.mb-5(data-aos="flip-up") Los selectores son utilizados para hacer referencia a las etiquetas del HTML. Estos selectores están clasificados en ciertos tipos; por lo que en este punto del componente se invita a abordar tales tipos de selectores, los que se explican en el recurso que se presenta a continuación:

    .row
      .col-lg-12.bg_01
        figure.mb-5(data-aos="flip-up")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
