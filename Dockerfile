FROM nginx:1.9.14

COPY nginx.tmpl /etc/nginx/nginx.tmpl
COPY /out /usr/share/nginx/html

EXPOSE 80

STOPSIGNAL SIGTERM

CMD /bin/sh -c "envsubst '\$BASE_PATH \$TWITTER_URL \$INSTAGRAM_URL \$LINKEDIN_URL' < /etc/nginx/nginx.tmpl > /etc/nginx/nginx.conf && nginx -g 'daemon off;' || cat /etc/nginx/nginx.conf"