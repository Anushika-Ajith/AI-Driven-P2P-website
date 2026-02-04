class WhatsAppWidget extends HTMLElement {
    connectedCallback() {
      const phone = this.getAttribute("phone") || "";
      const message = encodeURIComponent(this.getAttribute("message") || "Hello!");
  
      this.innerHTML = `
        <style>
          .wp-btn {
            position: fixed;
            bottom: 25px;
            right: 25px;
            z-index: 99999;
            cursor: pointer;
          }
  
          .wp-btn img {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            transition: 0.2s;
          }
  
          .wp-btn img:hover {
            transform: scale(1.08);
          }
        </style>
  
        <a class="wp-btn" 
           href="https://wa.me/${phone}?text=${message}" 
           target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"/>
        </a>
      `;
    }
  }
  
  customElements.define("whatsapp-widget", WhatsAppWidget);
  