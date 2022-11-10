---
number: 1
title: 'Sistema de análisis de datos para farmacéuticas'
headline: 'Gestión de reportes y analíticas para farmacéutica con presencia en México, Colombia y Centroamérica.'
services: ['Agile Development']
methodology: 'Scrum'
duration: '2021, 2022'
startDate: '2021'
endDate: '2022'
aditionalDateInfo:
leguages: ['typescript', 'javascript', 'html', 'css', 'sass']
frameworks: ['vue', 'react']
tools: ['apache-spark']
platforms: ['kibana']
images: ['image', 'image-1', 'image-2', 'image-3']
---

Nuestro cliente, una farmacéutica con presencia en México, Colombia y Centroamérica, requiere  múltiples fuentes de información para llevar a cabo sus operaciones. Estas fuentes de datos eran manualmente recolectadas, depuradas y procesadas en una colección de reportes compartidos por Excel a todos los actores clave.

En primer lugar realizamos un Discovery con más de x directores regionales y gerentes de distrito, lo que nos permitió conocer las diferentes fuentes de información involucradas y las necesidades de cada una de las áreas. Después, diseñamos un plan de trabajo en múltiples fases para la implementación de una solución a la medida, con una interfaz gráfica de carga masiva de datos con algoritmos propios de validación y depuración de datos. Éstos son inyectados en una plataforma que procesa, en horas, la información de años y genera índices optimizados para la creación de docenas de reportes a la medida que pueden ser consultados en tiempo real.

La solución implementa las 5 etapas de análisis de datos, con elecciones de tecnología específicas para cada una de ellas. Tiene en la fase de colección APIs Java, que catalogan la información y la inyectan en un mecanismo robusto basado en Apache Spark, que depura y organiza en su totalidad la información utilizando Data Proc de Google Cloud y Big Query de Google Cloud. Finalmente, se generan índices de Elastic Search que son utilizados por una interfaz web híbrida de Vue JS y Kibana.