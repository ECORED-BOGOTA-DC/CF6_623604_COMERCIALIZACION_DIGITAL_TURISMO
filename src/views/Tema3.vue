<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Acciones <em>online</em>
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema3/img-1.jpg" style="max-width: 610px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4
        p A partir de este momento, el plan de mercadeo digital comienza a dar el paso de planificación a la acción. Es aquí donde se empiezan a ejecutar acciones <em>online</em> que impactarán a su público objetivo, pero antes de dar este paso, tenga en cuenta algunas pautas importantes.
        p.mb-0 En primer lugar, es relevante recordar que el <b>mercadeo es social</b>. Nunca en la historia, esta disciplina había tenido un componente humano tan superlativo. Hoy en día, como se puede percibir fácilmente, el mercadeo, a la par con la tecnología, obliga a ser sociales, a interactuar con personas y a saber que las personas funcionan de manera muy concreta al estar sometidas a un entorno sobreexpuesto a la información.

        .cajon.color-primario.p-4.mb-4(style="background-color: #FFECBE")
          p Otra de las características que se debe tener en cuenta es el cambio. Al ser de naturaleza social, el mercadeo cambia, y en ese sentido, una empresa se comporta igual, ya que, al estar inmersa en el entorno social, cambia.
    p En este momento, el mercadeo, las empresas, las personas y la información evolucionan. Cambian con las estaciones del año, con los días de la semana, con las horas del día, cambian de forma, y en este proceso, se acopian nuevas experiencias, que permiten a las empresas modificar la forma de comunicarse con sus “clientes”.

    p Con esto en mente, puede dirigirse a conocer esas acciones que puede contener un plan de mercadeo <em>online</em>.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1. <em>Marketing</em> de contenidos

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mb-4.mb-lg-auto.mx-auto.me-xl-0(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 610px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4
        p Los contenidos son la piedra angular de todo el mercadeo y la comunicación digital. El contenido es el principal valor que una marca o empresa puede transmitir en los canales digitales. Además, por su propia naturaleza, permite establecer una interacción regular y segmentar al público de forma eficaz. Dentro de las industrias turísticas, esto tiene especial relevancia, ya que, en el contenido, recae en gran medida el poder vender.
        p.mb-0 Por lo tanto, el contenido no debe dejarse al azar, ya que se trata de un poderoso instrumento, que le servirá para atraer al público hacia la oferta de valor de su empresa, conseguir su atención, viralizar sus mensajes y fidelizar a sus clientes y prospectos.

    .container-100.d-flex.flex-wrap.align-items-center.py-4.mb-5(style="background-color: #E8F5FE; box-shadow: 0 3px 6px 3px #00000010")
      img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 85px" alt="imagen decorativa")
      p.col-md.mb-0.ps-md-4 Brian Solís, uno de los grandes gurús del Social Media en Estados Unidos, habla de “<b>objetos sociales</b>”, en su artículo “<em>Social Media’s Critical Path: Relevance to Resonance to Significance</em>”. (Solis, 2010).

    p.mb-5 Los define como la unidad básica del <em>Social Media</em> y los considera catalizadores de las conversaciones y la construcción de relaciones sólidas con su público, indicando que pueden tener la forma de un tweet, post, update, video, imagen, etc., compartido en un canal social. Obviamente, se sigue hablando de contenidos.

    .tarjeta.color-primario.p-3.col-xl-10.mx-auto.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-17.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p Lea aquí el artículo: “<em>Social Media’s Critical Path: Relevance to Resonance to Significance</em>”. Así, complementará la temática que está revisando.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo_1_CF3_3_Articulo_Social_Media.pdf')" target="_blank")
                span Ingresar 
                i.fas.fa-link
    p.mb-5 De esta forma, es posible afirmar que el contenido le permite:

    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema3/img-4.svg" style="max-width: 610px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Posicionarse en los motores de búsqueda, incluidos los de las propias redes sociales, captando tráfico de calidad.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Ofrecer valor añadido a sus clientes y prospectos en busca de información, soporte o entretenimiento.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Reducir los costes de la comunicación en otros canales (menor coste por impacto que los medios tradicionales, reducción de las llamadas recibidas en el <em>call center</em>, etc.).
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Generar impactos de marca de forma consentida y no intrusiva.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Conseguir credibilidad mediante la difusión de sus mensajes a través de los propios usuarios. 
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Conseguir autoridad y relevancia en su temática y área de actividad a través de las menciones y referencias de terceros (<em>Retweets, links</em>, “me gusta”).
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Fidelizar a su público a través de la publicación periódica.
    p.mb-5 Este enfoque, al generar valor para el usuario, implica que sea habitual compartir contenido de terceros si dicho contenido es útil e interesante para su público. Además, la difusión de contenido de calidad generado por terceros transmite transparencia, demuestra experiencia y conocimiento de la temática, y contacto con la actualidad del sector, permitiendo entablar relaciones con <em>influencers</em> y líderes de opinión.

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Tipos de contenido

    p.mb-5 A continuación, se mencionan los tipos de contenido más popular, seguramente los conoce todos:

    .d-flex.flex-wrap.mb-5
      .col-lg-6.order-2.order-lg-1.pe-lg-4.d-flex.align-items-end
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Aplicaciones.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Artículos (posts).
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Audios y podcasts.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Fotografías e ilustraciones.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Guías y tutoriales en diferentes formatos (HTML, PDF, video, audio).
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Infografías.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Informes y white papers.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Presentaciones.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              p.mb-0 Videos y videojuegos.
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto.ms-xl-0(src="@/assets/curso/temas/tema3/img-5.jpg" style="max-width: 610px" alt="imagen decorativa")

    p.mb-5 Si bien todas las tipologías de contenido son importantes, el texto es el elemento principal de cualquier sitio web y el principal vehículo de comunicación en las redes sociales. Dentro del argot del mercadeo, a los textos utilizados en la comunicación digital se les conoce como “copy”.

    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #3D672F")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-6.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4
        p Los contenidos como el video online o los videojuegos cada día ganan más relevancia por su eficacia y potencial comunicativo. Pero más allá de que sea uno u otro, en la generación de contenidos, la clave del éxito está en orientar la producción del contenido a satisfacer las expectativas y necesidades del público objetivo.
        p.mb-0 Es por esta razón que, para alcanzar sus objetivos, será necesario que el Plan Editorial, recogido en el Plan de Mercadeo Digital, contemple todos los segmentos de público relevante, desarrollando contenidos adecuados para cada uno de ellos y optimizándolos para ser relevantes en cada uno de los momentos de interacción críticos identificados en el <em>Customer Journey Map</em>. 

    p.mb-5 Considerando los contenidos como configuradores de la experiencia de usuario en cada punto de contacto digital, es posible hablar de las siguientes categorías:

    .tarjeta.p-4.mb-5(style="background-color: #EAEAEA")
      PasosB.color-secundario
        .px-4.pt-lg-5.row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            h3 Contenido Informativo
            p Destaca las características técnicas y funcionales del producto para informar al cliente y captar su interés.
            p.mb-0 En el medio turístico, se usa bastante, ya que, como se ha mencionado, se debe describir un servicio o experiencia antes de que esta suceda.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img-7.jpg', alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            h3 Contenido Contextual
            p Su propósito es construir confianza hacia la marca/empresa y destacar su reputación en el sector en el que opera. 
            p.mb-0 Este tipo de contenidos refleja autoridad y conocimiento por parte de la empresa de la(s) temática(s) más estrechamente vinculada(s) a su actividad, de forma que su oferta comercial gane credibilidad y atractivo ante los clientes potenciales.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img-8.jpg', alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            h3 Contenido Emocional
            p Su objetivo es desarrollar la afinidad y la buena predisposición de los consumidores ante la marca, más allá de la calidad técnica o el precio de sus productos. 
            p.mb-0 Es un paso crítico en la conversión de un prospecto en cliente, ya que cada vez la diferenciación objetiva es más difícil de lograr y son los atributos subjetivos de marcas y productos los que determinan la gran mayoría de las decisiones de compra.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img-9.jpg', alt='imagen decorativa')
        
        .px-4.pt-lg-5.row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            h3 Contenido Motivacional
            p En este caso, la meta es mover al consumidor a completar la acción deseada (descargar un <em>white paper</em>, registrarse en una web o comprar un producto, por ejemplo). Su desarrollo habitualmente se basa en la presentación de casos de éxito y clientes felices que impulsen al público a desear ahorrarse 50 euros al mes, probar ese nuevo sabor o recrearse con ese diseño exclusivo del que todos hablan.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img-10.jpg', alt='imagen decorativa')
          
        .px-4.pt-lg-5.row(titulo="")
          .col-lg-6.mb-4.mb-lg-0
            h3 Contenido Inspiracional 
            p Apela a las convicciones profundas del cliente, hacerle partícipe de objetivos comunes y metas sociales que trascienden la satisfacción de la necesidad inmediata, por ejemplo, hablando de cómo los consumidores de productos de alimentación que cumplen con el estándar de comercio justo impulsan la salida de la pobreza de comunidades locales.
          .col-lg-6
            figure
              img(src='@/assets/curso/temas/tema3/img-11.jpg', alt='imagen decorativa')


    p.mb-5 Como conclusión, se puede decir que la buena comunicación debe dotar de personalidad a la marca para reforzar su posicionamiento, y haciendo referencia en concreto a la producción de contenidos, es importante tener presente la importancia de la narrativa en busca de establecer vínculos emocionales y fidelización con la audiencia. También es relevante mencionar que narrativa no significa abusar de los adornos o florituras; tenga presente que el usuario busca información y servicio, no literatura.

    .d-flex.mb-5
      h3.py-2.px-4(style="background-color: #B6E1FD; border-radius: 50px") Contenido generado por usuarios (UGC)
    
    p.mb-5 El contenido generado por los usuarios (UGC), o <em>User-Generated Content</em>, es una tendencia en crecimiento dentro del <em>marketing</em> de contenidos. Corresponde a las interacciones de los usuarios con la marca, dicho de otra forma, es la evolución digital del antiguo voz a voz. Dentro de este escaparate, es posible ubicar:
    
    .d-flex.flex-wrap.mb-5
      .col-lg-6.order-2.order-lg-1.pe-lg-4.d-flex.align-items-end
        .p-4.px-lg-5.w-100(style="background-color :#F6F6F6")
          ul.lista-ul.mb-0
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Comentarios u opiniones públicas de seguidores.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Imágenes o videos creados por usuarios y que referencien la marca.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | Reseñas digitales de servicios o productos de una marca.
            li.d-flex.mb-0
              .me-2.mt-1.mb-auto(style="min-width: 14px; min-height: 14px; border-radius: 50%; border: 5px solid #EB6F2D")
              | En general, cualquier expresión artística concebida y producida por particulares, que tenga relación con la marca.
      img.order-1.order-lg-2.col-lg-6.mb-4.mb-lg-auto.mx-auto.ms-xl-0(src="@/assets/curso/temas/tema3/img-12.svg" style="max-width: 505px" alt="imagen decorativa")


    .bloque-texto-g.p-3.p-sm-4.p-md-5.mb-5(style="background-color: #FFB338")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-13.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4
        p Una característica de este tipo de contenido es que no es pagado por las marcas, pero sí puede ser estratégicamente promovido por ellas. Como ejemplo de esto, se podría mencionar la campaña de Coca Cola en la que las latas de gaseosa tenían nombres de personas. Esta campaña, en principio, fue concebida para crear una relación más cercana con los clientes y dar el mensaje de que Coca Cola era para todos, pero fue tan exitosa que la gente empezó a buscar su nombre, tomarse fotos con las latas y compartirlas, de forma que se generó un efecto mundial de gente interactuando con la marca, compartiendo contenido y hasta gente solicitando latas con su nombre. Esta clase de interacciones son muy apreciadas por los profesionales del mercadeo, ya que aumentan lo que se conoce como <b><em>“engagement”</em></b> y mejoran el alcance orgánico en plataformas, pero, además de eso, esta clase de contenido conecta a la marca con la realidad.

    .d-flex.flex-wrap.mb-5
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema3/img-14.svg" style="max-width: 610px" alt="imagen decorativa")
      .col-lg-6.ps-lg-4
        .cajon.color-primario.p-4.mb-4(style="background-color: #FFECBE")
          p La tecnología actual, sobre todo la móvil, permite que cualquier persona pueda realizar una producción audiovisual accesible a un gran número de personas y se convierta en un referente en casi cualquier temática. En ocasiones, estas producciones pueden llegar a superar la calidad y profundidad de contenidos generados por marcas y creadores profesionales. Esta misma accesibilidad tecnológica genera un fenómeno adyacente y es la cantidad de contenidos irrelevantes que saturan la red, pero aun así, es posible resaltar que la fortaleza del fenómeno reside justamente en el volumen inabarcable de UGC, el cual garantiza el desarrollo de una cantidad importante de contenidos de alta calidad que rivalizan con los producidos en los canales tradicionales.
    p El UGC provee a las organizaciones de las percepciones y expectativas de su base de clientes, al tiempo que ayuda a los consumidores a fundamentar sus decisiones de compra con base en la ayuda que se prestan compartiendo sus experiencias de consumo. Es indispensable que las empresas identifiquen a sus clientes más satisfechos y comprometidos para motivarlos a compartir su opinión positiva con el resto de la audiencia, dando así aún más credibilidad a los mensajes emanados de la propia empresa y consolidando la posición competitiva de la misma.

    Separador
    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Plan editorial
    
    p.mb-5 Como se mencionó anteriormente, la generación de contenido es uno de los procesos más relevantes en las acciones de mercadeo digital, es también una de las tareas más costosas, independientemente de si se dedican recursos internos o se terceriza esta producción. Observe una explicación al respecto a través del siguiente video: 

    figure.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    p.mb-5 Por ende, en el plan deben estar identificadas las principales fuentes de información (publicaciones digitales sectoriales, blogs temáticos) y definirse la potencialidad de cada contenido para ser utilizado en un post, en una historia, en un tweet, etc., actualizándose mensualmente tras evaluar qué contenidos funcionan mejor en cada canal. Además, debe documentarse el objetivo a que responde cada categoría dentro de la temática, un ejemplo ilustrativo del tono comunicativo que se utilizará y la periodicidad de publicación. Esta última es muy importante, ya que crea un hábito y fideliza a la audiencia.

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
