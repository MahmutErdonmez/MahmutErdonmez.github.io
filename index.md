<html>
<head>
    <meta charset="utf-8" />
    <title>Shorten Link -Bitly</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>
    <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</head>
<body>

<div id="app">    
        <div class="row">   
            <div class="col-md-6">
                <label for="">Long Link</label>
                <input type="text" class="form-control" id="" v-model="longLink" placeholder="e.g https://google.com.tr">        
              </div>
              <div class="col pt-4">
                <button type="submit" class="btn btn-primary" v-on:click="shorten()">Shorten</button>        
              </div>  
        </div>
        <div class="row">
            <div class="col-md-4">
                <label for="">Short Link</label>
                <input type="text" class="form-control" id="" v-model="shortLink" placeholder="e.g bit.ly/3JklOBq">        
              </div>
        </div> 
</div>
    <script src="vue.js"></script>    
</body>
</html>
