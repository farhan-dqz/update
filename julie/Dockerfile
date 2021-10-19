FROM quay.io/lyfe00011/test:beta

RUN git clone https://github.com/farhan-dqz/Julie-Mwol /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
RUN yarn install --no-audit
RUN git clone https://github.com/farhan-dqz/media
RUN git clone https://github.com/afnanplk/test
RUN git clone https://github.com/afnanplk/uploads
RUN cp -R /root/Utils/* /root/WhatsAsenaDuplicated 
CMD ["node", "bot.js"]
