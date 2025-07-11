   // src/lib/gtag.js
   export const GA_MEASUREMENT_ID = 'G-YWP39X6VKG'; // <-- Replace with your ID

   // Log page views
   export const pageview = (url) => {
     window.gtag('config', GA_MEASUREMENT_ID, {
       page_path: url,
     });
   };