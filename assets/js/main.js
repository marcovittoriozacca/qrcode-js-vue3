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
                background: '#FFFFFF',
                backgroundAlpha: 1,
                size: 200,
            });
          }
        },
        download(){
          if(this.urlValue.length !== 0){
            const qrcodeCanvas = document.getElementById("qrcode");
            image = qrcodeCanvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
            const link = document.createElement('a');
            link.download = 'qrcode.png';
            link.href = image;
            link.click();

          }
        }
    },
  }).mount('#app')