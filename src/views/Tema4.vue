<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Titulo de primer nivel

    .mb-5.pt-5
      div(style="background-color: #FFB338; border-top-right-radius: 60px")
        .d-flex.flex-wrap.align-items-center.col-xl-11.mx-auto.p-4.p-lg-0
          p.col-lg.ps-lg-4.pe-lg-5.mb-0.order-2.order-lg-1 Acorde con la evolución del mercadeo que se ha venido tratando a lo largo de los contenidos, es evidente que hoy en día los esfuerzos se concentran al máximo en la presencia <em>online</em>, pero es también coherente tener presencia <em>offline</em>. A continuación, se enumeran brevemente algunas acciones que pueden integrarse con los activos digitales de la empresa para promover, medir la respuesta del público, enriquecer su experiencia con la marca o gestionar sus demandas de información de forma conveniente y ágil:
          img.mb-4.mb-lg-auto.mx-auto.order-1.order-lg-2(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 336px; margin-top: -5%" alt="imagen decorativa")
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
