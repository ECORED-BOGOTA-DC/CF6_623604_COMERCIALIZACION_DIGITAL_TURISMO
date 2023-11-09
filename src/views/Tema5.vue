<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1(data-aos="fade-left") Presupuesto de <em>marketing online</em>

    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema5/img-1.svg" style="max-width: 610px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4 
        p Ha arribado a una de las secciones críticas del plan de mercadeo, aquella en la que se asignan los recursos monetarios para el desarrollo del plan. Hasta ahora, se han definido las líneas estratégicas y detallado las acciones tácticas que les darán contenido. Pero todas esas acciones conllevan un costo y es importante determinarlo para que el plan de mercadeo se desarrolle sin contratiempos. 

        p Una vez más, se debe ser congruente con los objetivos, ya que el presupuesto ha de estar alineado con ellos y con las capacidades financieras de la empresa; es por esto por lo que se debe siempre determinar el ROI en cada una de las acciones. El Retorno de Inversión (ROI) es un indicador financiero que mide la relación entre el presupuesto de mercadeo y el beneficio generado. Es un indicador fundamental para la evaluación de cualquier acción de mercadeo.
    
    p.mb-5 Es normal que, para acciones puntuales, el presupuesto se determine por las propuestas comerciales realizadas por las agencias o empresas que proveen el servicio. De otro lado, para determinar el presupuesto general de mercadeo, existen algunas fórmulas que verá a continuación:
    
    .row.mb-4
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.jpg')})`}"
              style="background-size: cover"
            )
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-2.svg" style="max-width: 210px" alt="imagen decorativa")
              p En este método, es el mismo plan de mercadeo el que determina el presupuesto y no al revés. Para esto, se presupuesta cada acción del plan de forma individual y se valora su retorno de inversión, dotándolas de fondos para que alcancen un mínimo de rentabilidad.
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-3.svg" style="max-width: 321px" alt="imagen decorativa")
              p La determinación del presupuesto con base en los beneficios obtenidos el año anterior es un método que no tiene en cuenta el ciclo de vida de la empresa ni el comportamiento del sector, por lo tanto, puede conducir a inversiones ineficaces por exceso o por defecto, creando un riesgo.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-3.jpg')})`}"
              style="background-size: cover"
            )
    
    .row.mb-4
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-4.jpg')})`}"
              style="background-size: cover"
            )
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-4.svg" style="max-width: 381px" alt="imagen decorativa")
              p Aunque comparar nuestras acciones con las de la competencia puede ser eficaz en términos de cuota de mercado, este no es un método recomendable para determinar el presupuesto, dado que la situación de los competidores puede ser muy diferente a la nuestra.
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-5.svg" style="max-width: 244px" alt="imagen decorativa")
              p Este método determina una asignación presupuestal acorde con las directrices de la gerencia. Se considera eficiente en términos de control de los recursos, pero puede llegar a ser ineficiente para cubrir las necesidades del plan de mercadeo.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-5.jpg')})`}"
              style="background-size: cover"
            )
    
    .row.mb-5
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-6.jpg')})`}"
              style="background-size: cover"
            )
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-6.svg" style="max-width: 400px" alt="imagen decorativa")
              p Es el método más usado y puede hacerse con base en las ventas del año anterior o en la proyección de ventas del año en curso. 
 
              p Es un método eficaz, ya que ata el desarrollo del plan al crecimiento de la empresa.
      .col-md-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba(@mouseover="indicadorTarjetaSlide = false" style="background-color: #DBEDF8")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4(style="min-height: 255px; background-color: #DBEDF8")
              img.mb-4(src="@/assets/curso/temas/tema5/img-7.svg" style="max-width: 417px" alt="imagen decorativa")
              p Es un método similar al anterior, solo que más conservador, ya que para el cálculo del presupuesto solo se tiene en cuenta el margen de utilidad bruto.
            .tarjeta-slide__img(
              :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-7.jpg')})`}"
              style="background-size: cover"
            )

    p El presupuesto se describe como una fase crítica del proceso, y en realidad lo es, puesto que el presupuesto óptimo será el que le permita maximizar el retorno de inversión en la ejecución del plan de mercadeo digital. Pero, en realidad, es mucho más sencillo expresarlo que lograr determinarlo; sin embargo, para tal fin, va a trazar una ruta que le ayudará con este cometido.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1 ¿Qué debe tener en cuenta al calcular un presupuesto de mercadeo?
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.order-2.order-lg-1.pe-lg-4.d-flex.align-items-end
        .p-4.px-lg-5.w-100
          p Esta pregunta en sí misma es compleja, al querer saber cuánto se puede o se debe destinar al mercadeo de una organización. 

          p Partiendo de la base de que cada empresa es diferente en sí misma, para intentar contestar esta pregunta, diferentes estudios proponen, en primer lugar, hacer una diferenciación según el tamaño de la empresa y considerar aspectos como la naturaleza del negocio, el comportamiento del público objetivo, el proceso de compra y el comportamiento de la competencia. Posteriormente, elaborar un plan de mercadeo, que debe valorar el momento de la empresa, el mercado y el contexto socioeconómico. Dicho esto, no es lo mismo presupuestar recursos de mercadeo para una empresa que acaba de nacer o que acaba de comenzar su camino <em>online</em> que para una empresa con un recorrido hecho.
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto.ms-xl-0(src="@/assets/curso/temas/tema5/img-8.jpg" style="max-width: 610px" alt="imagen decorativa")

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") ¿Cuánto se debe destinar al mercadeo en una organización?
    
    p En este aspecto, existe una fórmula popularizada que habla del 10 % del ingreso bruto; sin embargo, esa cifra no es universal (Gutiérrez, 2020). Al consultar diversas fuentes y estudios, se pueden exponer los siguientes valores de referencia:

    p.mb-5 Para empresas nuevas, se recomienda destinar del 15 al 20 % de los ingresos brutos al mercadeo, mientras que en empresas consolidadas, esta cifra sería del 8 al 12 % de los ingresos brutos. Este porcentaje varía de acuerdo con el tipo de compañía:

    img.col-xl-10.col-lg-8.mx-auto.mb-5(src="@/assets/curso/temas/tema5/img-9.svg" alt="imagen decorativa")

    p Como se mencionó, estos valores son referenciales. Lo que sí se puede afirmar es que la tendencia a invertir partidas más amplias en mercadeo digital crece, mientras que la inversión en medios tradicionales cae.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2 Cinco pasos para preparar el presupuesto de mercadeo
    
    p.mb-5 Ahora que se tienen valores de referencia de acuerdo con el tipo de empresa, observe los pasos a seguir para construir un presupuesto de mercadeo:

    h3.mb-5 1. Conocer al <em>buyer</em> persona y verificar el embudo de venta

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #3D672F")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-10.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4
        p Antes de definir las asignaciones presupuestales, hay que auditar el proyecto, centrándose en el público objetivo: ¿cómo es el <em>buyer</em> persona? Y analizar el embudo de venta: ¿cuál es la forma en que compra? En síntesis, hay que entender bien al quién y, más aún, el cómo de la compra. Esto permitirá identificar los canales y acciones que se deben activar, mantener o eliminar de la estrategia de mercadeo, y ayudará a una distribución del presupuesto.

    h3.mb-5 2.  Alinear el plan de mercadeo con los objetivos empresariales y priorizar actividades

    p.mb-5 Este concepto se ha revisado ya varias veces, lo que resalta la importancia del enfoque, y por eso cabe recordar el refrán popular: “el que mucho abarca, poco aprieta”. Así que será de gran ayuda revisar las acciones y priorizar de acuerdo con el tiempo (trimestre o año) e identificar cuáles de estas acciones implican un costo. Por tal motivo, a continuación, se presentan algunas acciones o ideas que pueden ser útiles al momento de alinear y priorizar las acciones y objetivos:
  
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-1.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Artículos promocionados en medios <em>online</em>
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-2.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Formaciones
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-3.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Publicidad en <br>medios impresos
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-4.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Diseño gráfico

      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-5.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Generación de contenidos <br>para el blog
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-6.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Publicidad <em>online</em>
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-7.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Eventos
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-8.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center Mantenimiento de <br>página web y blog
      
      .tarjeta(style="background-color: #FFF4D9; overflow: hidden; box-shadow: 0 0 3px 3px #00000010")
        img(src='@/assets/curso/temas/tema5/slyF-9.jpg' alt='imagen decorativa')
        .p-4
          h4.text-center <em>Software</em>

    h3.mb-5 3. Controlar costos operacionales

    .d-flex.flex-wrap.mb-5.align-items-end
      .col-lg-6.order-2.order-lg-1.pe-lg-4
        p.mb-4 Una vez asignadas las partidas de inversión en mercadeo y de saber cuáles son prioritarias para la compañía, hay que evaluar si se dispone del <em>staff</em> necesario para llevar este plan a cabo. Preguntas como:
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | ¿Se necesitará contratar equipo propio?
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | ¿En prácticas, media jornada o jornada completa? 
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | ¿Se van a subcontratar algunas acciones a una agencia o consultor externo?  
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto.ms-xl-0(src="@/assets/curso/temas/tema5/img-11.svg" style="max-width: 488px" alt="imagen decorativa")

    p.mb-5 En cualquiera de esas situaciones, esto acarreará un costo, estos costos complementan el plan de mercadeo y dan una visión completa de la situación.

    h3.mb-5 4. Verificar imprevistos

    .d-flex.flex-wrap.mb-5.align-items-center
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema5/img-12.svg" style="max-width: 471px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4
        p Aunque haya una buena planificación, es posible que el plan inicial se vea alterado por factores externos o internos. Una partida para imprevistos que permita cubrir eventualidades será un gran recurso llegado el momento. Como recomendación, vale mencionar que este presupuesto no debería utilizarse. Si por algún motivo se utiliza el presupuesto de imprevistos, hay que identificar en qué se está invirtiendo y posiblemente modificar las partidas habituales teniendo en cuenta esta información.
    
    h3.mb-5 5.  Revisar mes a mes tus resultados

    p.mb-5 El documento presupuestal se debe actualizar mes a mes con la inversión que se va realizando. Tener visibilidad sobre los gastos previstos y los gastos reales le ayudará a identificar puntos ciegos de su estrategia y a valorar si el presupuesto definido permite llegar a los objetivos de mercadeo planteados.

    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema5/img-13.svg" style="max-width: 87px" alt="imagen decorativa")
      p.col-md.mb-0.ps-md-4 Como ha visto en estos pasos, preparar un buen presupuesto de mercadeo es un reto, pero lo importante es dedicar tiempo a analizar la situación actual y los objetivos como compañía, para lograr el presupuesto más acoplado posible, luego, ir ejecutando, midiendo y ajustando el plan.

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-17.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Plan de <em>marketing</em>
              p Dentro del siguiente material encontrará plan de mercadeo que lo ayudarán a consolidar la información necesaria para obtener resultados óptimos en la formación y ejecución de estos. Lo invitamos a consultarlos para complementar la temática explicada.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_2_plan_de_marketing.docx')" target="_blank")
                span Descargar 
                i.fas.fa-link

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-17.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3 Planilla presupuesto <em>marketing</em>
              p Dentro del siguiente material encontrará plan de mercadeo que lo ayudarán a consolidar la información necesaria para obtener resultados óptimos en la formación y ejecución de estos. Lo invitamos a consultarlos para complementar la temática explicada.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_3_planilla_presupuesto_marketing.xlsx')" target="_blank")
                span Descargar 
                i.fas.fa-link
    


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    indicadorTarjetaSlide: true,
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
