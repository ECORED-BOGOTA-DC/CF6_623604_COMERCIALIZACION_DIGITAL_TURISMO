<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span
          i.fas.fa-info
      h1(data-aos="fade-left") Introducción
    p.mb-5(data-aos="fade-right") El plan de mercadeo es un proceso muy importante en toda organización, este es muy amplio y abarca diferentes aspectos. Observe, entonces, a través del siguiente video, un poco lo que representa este plan como aspecto introductorio de este componente:

    figure.col-xl-10.mx-auto(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
