new Vue({
  el: '#app',
  data () {
    return {
      shortLink: null,
      longLink: null
      
    }
  },
  methods:{
    shorten() {
      if (this.longLink == null || this.longLink == undefined || this.longLink == "") {
        return;
      }     
      const article = { long_url: this.longLink };
      const headers = { 
        "Authorization": "Bearer 02699c9ce01c7925ac6d693f779743f78383cf3c",
        'Content-Type': 'application/json'
      };
      axios.post("https://api-ssl.bitly.com/v4/shorten", article, { headers })
        .then((response) =>{          
            this.shortLink = response.data["id"];            
          
        }).catch((error) => {
          this.shortLink=null;
          alert(error)  
        }) 
    }
  }

})
