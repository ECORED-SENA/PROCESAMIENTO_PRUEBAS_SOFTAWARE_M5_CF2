<template lang="pug">
.linea-tiempo-d
  .linea-tiempo-d__item.row(
    v-for="(item, index) in elements"
    :key="'linea-tiempo-d-key-'+item.id"
    :class="{'linea-tiempo-d__item--selected' : selected === item.id}"
  )
    .col-auto.linea-tiempo-d__item__col-number
      .linea-tiempo-d__item__number.tarjeta.tarjeta--gris(
        :class="[,{'px-3' : item.numero.length > 1}]"
         @click="selected = item.id"
         @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
      )
        .indicador__container(v-if="mostrarIndicador && index === 1")
          .indicador--click
        span(v-html="item.numero")
      .linea-tiempo-d__item__dots(
        v-if="index < elements.length -1"
      )

    .col(:class="{'mb-4' : index < elements.length -1}")
      .linea-tiempo-d__item__content.tarjeta.tarjeta--gris
        .linea-tiempo-d__item__content__title.px-3(
          @click="selected = item.id"
          @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
        )
          span(v-html="item.titulo")
        .linea-tiempo-d__item__content__slot(
          :style="{ height: rendered && selected === item.id ? getActiveHeight(item.id) : 0 } "
        )
          .p-3.pt-0(:ref="item.id" v-child="item.elm" )

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'LineaTiempoDD',
  mixins: [componentSlotMixins],
  props: {
    claseTarjeta: {
      type: String,
      default: '',
    },
    tipo: {
      type: String,
      default: 'a',
    },
  },
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.domUpdated()
      }, 5000)
    })
  },
  methods: {
    cardClass(id) {
      const clasesFinales = []
      if (this.claseTarjeta.length) {
        clasesFinales.push(this.claseTarjeta)
      } else {
        clasesFinales.push('tarjeta tarjeta--blanca')
      }
      if (this.selected === id) {
        clasesFinales.push('linea-tiempo-d__activo')
      }
      return clasesFinales
    },
  },
}
</script>

<style lang="sass"></style>
