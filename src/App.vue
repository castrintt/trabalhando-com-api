<template>
  <div id="app">
    <header class="cabecalho">
      <strong class="vue__titulo">Vue nutri</strong>
    </header>

    <div class="carregando" v-if="loading">
      <h1>Buscando informações...</h1>
    </div>
    <article v-else v-for="item in nutri" :key="item.id" class="post">
      <strong class="titulo">
        {{ item.titulo }}
      </strong>
      <img :src="item.capa" class="img" />
      <span class="categoria"> Categoria: {{ item.categoria }} </span>
      <p class="subtitulo">
        {{ item.subtitulo }}
      </p>
      <a class="botao" href="#">Acessar</a>
    </article>
  </div>
</template>

<script>
import api from "./services/api.js";

export default {
  name: "App",
  data() {
    return {
      nutri: [],
      loading: true,
    };
  },
  async created() {
    const response = await api.get("?api=posts");
    this.nutri = response.data;
    this.loading = false;
  },
};
</script>

<style scoped>
.cabecalho {
  text-transform: uppercase;
  background-image: url("https://blog.consumer.com.br/wp-content/uploads/2020/11/Delivery-de-comida-saudável.capa_.jpg");
  background-position: center center;
  background-size: cover;
  height: 10rem;
  background-attachment: scroll;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.cabecalho strong {
  background-color: rgba(0, 0, 0, 0.295);
  height: 80%;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 3rem;
  color: white;
  border-radius: 5px;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.877);
}
.post {
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: justify;
  max-width: 85%;
  margin: 0 auto;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);

  border-radius: 5px;
}

.img {
  max-width: 80%;
  margin: 0 auto;
}

.post:not(.post:first-child) {
  margin-top: 20px;
}

.titulo {
  padding: 8px;
  background-color: white;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 10px;
  color: rgb(90, 90, 90);
  margin-top: 5px;
}
.categoria {
  background-color: white;
  max-width: 80%;
  margin: 0 auto;
  text-align: justify;
  width: 100%;
  padding: 8px 8px 8px 0;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1.5px;
}

.subtitulo {
  max-width: 80%;
  width: 100%;
  text-align: justify;
  line-height: 20px;
  margin: 0 auto;
  font-size: 16px;
  background-color: white;
}

.botao {
  max-width: 80%;
  width: 100%;
  text-align: justify;
  text-decoration: none;
  margin: 0 auto;
  padding: 5px 5px 10px 0;
  cursor: pointer;
  color: green;
  font-weight: bold;
  background-color: white;
}

.botao:hover {
  text-decoration: underline;
  color: blue;
}

.carregando {
  margin: 0 auto;
  max-width: 80%;
  width: 100%;
}

.carregando h1 {
  text-align: center;
  margin-top: 50px;
  font-size: 20px;
}
</style>