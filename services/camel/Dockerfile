FROM almalinux:9.4

RUN dnf -y update
RUN curl -Ls https://sh.jbang.dev | bash -s - app setup

WORKDIR /root/.jbang/bin/

RUN ./jbang trust add https://github.com
RUN ./jbang app install camel@apache/camel
RUN mkdir -p /root/camel/routes