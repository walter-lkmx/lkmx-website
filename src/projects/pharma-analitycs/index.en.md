---
number: 1
title: 'Data analysis system for pharmaceutical companies'
headline: 'Massive data management and analysis system for the generation of customized reports and to look them up in real time.'
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

Our client, a pharmaceutical company with presence in Mexico, Colombia and Central America, requires multiple information sources to carry out its operations. These data sources were gathered, cleansed and processed manually on a set of reports shared through Excel with all the key players.

First, we had a discovery with more than x regional directors and district managers which allowed us to get to know the different  information sources involved and the needs of each of the areas in regards to them. After this, we designed a work plan with multiple phases for the implementation of a solution with a custom-made graphic interface for bulk data load, with its own data validation and cleansing algorithms which are injected into a platform that processes, in hours, years worth of data and generates optimized indexes for the creation of dozens of customized reports that are seen in real time by the entirety of the company.

The solution implements the 5 stages of data analysis with specific technologies choices for each of them, having Java APIs in the collecting phase which catalog the information and inject it in a robust mechanism based on Apache Spark which cleanses and organizes all the information using Google Cloud’s Dataproc and BigQuery to generate Elasticsearch indexes that are used by a Vue.js and Kibana hybrid web interface.