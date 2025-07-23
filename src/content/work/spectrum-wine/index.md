---
number: 1
title: ["Spectrum Wine"]
headline: []
solutions: ["Mobile App"]
services: []
methodologies: []
period: []
thumbnail: "spectrum-wine-thumbnail"
cover: "spectrum-wine-cover"
storyType: "Trabajo"
introduction: { title: "", content: "" }
---

## Contexto

Una reconocida casa de subastas de vinos buscaba mejorar su presencia digital al pasar de su tradicional plataforma de subastas en línea a una aplicación móvil más atractiva y fácil de usar. A pesar de tener un historial exitoso de subastas de vinos en línea, la aplicación móvil existente estaba teniendo un bajo desempeño, caracterizada por un mal diseño, tiempos de respuesta lentos y una experiencia de usuario generalmente insatisfactoria, lo que contribuía a bajas tasas de adopción. El objetivo era claro: desarrollar una nueva aplicación que no solo facilitara la navegación y la puja en subastas de vinos, sino que también elevara la experiencia general del usuario para cumplir con las expectativas de los usuarios móviles de hoy.

## Desafío

El proyecto presentó dos desafíos principales: en primer lugar, la integración con la extensa base de datos de la casa de vinos para mostrar el inventario de subastas en tiempo real, incluyendo información detallada sobre los vinos como la añada, la región y las notas de cata, junto con el estado actual de las pujas. El acceso rápido y eficiente a los datos era crucial para una experiencia de usuario fluida. En segundo lugar, el manejo de datos confidenciales exigía medidas de seguridad estrictas para proteger contra el fraude y asegurar que la información del usuario permaneciera segura, dada la naturaleza de alto valor de los artículos en subasta.

Otro desafío importante fue lograr una experiencia de subasta en vivo sincronizada, conectando el evento de subasta física con la subasta en vivo en la aplicación móvil. Ambos debían funcionar como un solo evento, lo que requería actualizaciones precisas en tiempo real para las pujas y el estado de la subasta en ambas plataformas.

Además, el proceso de carga de imágenes de las botellas de vino necesitaba ser optimizado. El equipo de Spectrum Wine anteriormente tenía que eliminar manualmente el fondo de las imágenes antes de subir las fotos, lo que ralentizaba su flujo de trabajo y generaba inconsistencias.

## Solución

Nuestro enfoque fue diseñar una aplicación móvil personalizada utilizando una API RESTful para una integración fluida con la base de datos de inventario de la casa de vinos. Esta solución garantizó la presentación rápida y eficiente de datos de subastas en tiempo real a los usuarios de la aplicación. Para abordar las preocupaciones de seguridad, incorporamos múltiples capas de protección de datos, incluyendo la encriptación de información sensible y la implementación de controles de acceso estrictos. La aplicación presentó capacidades para que los usuarios crearan listas de seguimiento, contactaran directamente con los vendedores, enviaran pujas y participaran activamente en las subastas, mejorando el compromiso y la satisfacción del usuario.

Para conectar la subasta física con la subasta en vivo en la aplicación, desarrollamos una aplicación web dedicada para el encargado de la subasta. Esta herramienta le permitió gestionar las pujas, controlar el flujo del evento y garantizar que tanto los participantes presenciales como los usuarios de la app móvil pudieran intervenir en la misma subasta sin interrupciones. Con esta configuración, cada puja se reflejaba al instante en ambos canales, creando una experiencia de subasta unificada y dinámica.

Para optimizar el proceso de carga de imágenes, Logic Kernel desarrolló una aplicación simple pero robusta que elimina automáticamente el fondo de las fotos de las botellas de vino justo después de ser tomadas. Se implementó un modelo basado en LLM entrenado a medida para lograr una eliminación de fondo de alta calidad, reduciendo el trabajo manual y mejorando la presentación general de las botellas en subasta.

![](/work/spectrum-wine-figure-1.jpg)

## Impacto

La introducción de la nueva aplicación móvil mejoró significativamente la presencia en línea y la experiencia del usuario de la casa de vinos. Al proporcionar una plataforma rápida, confiable y segura para las subastas de vinos, la aplicación fomentó una mayor confianza entre los usuarios, lo que, a su vez, llevó a mayores tasas de adopción y una participación más activa en las subastas. El enfoque de desarrollo ágil permitió una entrega continua de valor y una adaptabilidad a las necesidades evolutivas de la casa de vinos, culminando en un producto que no solo cumplió, sino que superó sus expectativas.

## Conclusión

El lanzamiento de la aplicación móvil de Spectrum Wine ha transformado el mundo de las subastas de vinos, combinando la tradición con la tecnología moderna para mejorar la experiencia de las subastas. Esta iniciativa ha ampliado el alcance de las subastas de vinos finos a nivel global, reforzando nuestro compromiso con soluciones digitales innovadoras y centradas en el usuario. Spectrum Wine ahora lidera en el espacio de subastas digitales, con una plataforma que refleja su oferta de alta calidad. Esta colaboración destaca nuestra capacidad para navegar desafíos y promover avances en la industria, mostrando nuestro liderazgo en innovación digital.

## Tecnologías

Algunas de las tecnologías e integraciones implementadas en este proyecto.

<div class="story_story__mainContent__technologies__v5XXm">
  <div class="story_story__mainContent__technologies__images__6NSg5">
    <div>
      <img loading="lazy" src="/technologies/html.svg" alt="HTML"/>
      <img loading="lazy" src="/technologies/css.svg" alt="CSS"/>
      <img loading="lazy" src="/technologies/javascript.svg" alt="JavaScript"/>
      <img loading="lazy" src="/technologies/vue.svg" alt="Vue"/>
    </div>
    <div>
      <img loading="lazy" src="/technologies/sass.svg" alt="Sass"/>
      <img loading="lazy" src="/technologies/cordova.png" alt="Cordova"/>
      <img loading="lazy" src="/technologies/node.svg" alt="Node.js"/>
    </div>
  </div>
</div>
