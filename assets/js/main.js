const { createApp } = Vue

  createApp({
    data() {
      return {
        urlValue: '',
      }
    },
    methods: {
        getUrlValue(){
          if(this.urlValue.length !== 0){

            const qrcode = new QRious({
                element: document.getElementById("qrcode"),
                value: this.urlValue,
                background: 'hsl(216, 95%, 58%)',
                backgroundAlpha: 1,
                foreground: '#FFFFFF',
                foregroundAlpha: 1,
                size: 250,
                
            });
          }
        }
    },
  }).mount('#app')