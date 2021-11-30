<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos básicos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema_1/img_1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un conjunto de tecnologías orientadas a la presentación de datos y la creación de interfaz de usuario, están presentes en la construcción de aplicaciones #[i web]. Unas se ocupan de aquellos contenidos que se deben presentar, otras se encargan de cómo darle estilo visual a aquello que se está presentando y, finalmente, otras se encargan de controlar el comportamiento de los elementos que se presentaron en la interfaz de usuario. 

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-8
        p.text-center Estas tecnologías son #[b HTTP] (#[i Hypertext Transfer Protocol]), #[b CSS] (#[i Cascading Style Sheets]) y #[b JavaScript], respectivamente. Las dos primeras serán el objeto principal de estudio de esta unidad temática, las que se explican a continuación:

    .row
      .col-lg-12.bg_01
        .row.justify-content-center.mb-5(data-aos="flip-up")
          .col-md-8.mb-5
            SlyderF(columnas="col-12")
              .tarjeta.bg_02.p-4
                .row.justify-content-center.mb-5.mt-4
                  .col-8
                    img(src='@/assets/curso/tema_1/img_3.svg' alt='AvatarTop')
                h5 HTML (documentos)
                p Las aplicaciones o sitios #[i web] están compuestos, principalmente, por varios documentos HTML, estos documentos cuentan con una estructura escrita por etiquetas, que permiten que el #[i browser] lo interprete y muestre lo que, normalmente, se ve al momento de acceder a una página #[i web], portal #[i web], sitio #[i web] o aplicación #[i web].


              .tarjeta.bg_02.p-4
                .row.justify-content-center.mb-5.mt-4
                  .col-8
                    img(src='@/assets/curso/tema_1/img_4.svg' alt='AvatarTop')
                h5 HTML (interpretación del navegador)
                p Para que el #[i browser] o navegador de Internet (Mozilla, Explorer (Edge), Chrome... etc.) interprete estos documentos, debe guardarse con la extensión .HTML, por ejemplo miPagina.html

              .tarjeta.bg_02.p-4
                .row.justify-content-center.mb-5.mt-4
                  .col-8
                    img(src='@/assets/curso/tema_1/img_5.svg' alt='AvatarTop')
                h5 HTML (editores de texto)
                p Para crear un documento HTML sencillo no es necesario obtener una herramienta en específico, solo con un editor de texto es suficiente para escribir y construir estos documentos, sin embargo, existen herramientas que permiten crear varios documentos HTML grandes, ordenados y más amigables, aumentado la velocidad en el desarrollo.
                
              .tarjeta.bg_02.p-4
                .row.justify-content-center.mb-5.mt-4
                  .col-8
                    img(src='@/assets/curso/tema_1/img_6.svg' alt='AvatarTop')
                h5 HTML (sintaxis)
                p La sintaxis del HTML se basa en etiquetas que, normalmente, se generan:  una, para la apertura de un bloque de información y otra para cerrarla.

              .tarjeta.bg_02.p-4
                .row.justify-content-center.mb-5.mt-4
                  .col-8
                    img(src='@/assets/curso/tema_1/img_7.svg' alt='AvatarTop')
                h5 HTML (estructura de las etiquetas)
                p Etiqueta de apertura #[b &lt;html&gt;] y etiqueta de cierre #[b &lt;/html&gt;]. Nótese que la etiqueta de cierre siempre lleva un carácter especial #[b ( / )], de esta forma, el #[i browser] lee el contenido entre las etiquetas y lo muestra al usuario mediante el #[i browser].


    
    
  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
