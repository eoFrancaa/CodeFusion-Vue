<script>
import { ref } from 'vue';

export default {
  setup() {

    const pessoa = ref([
      { nome: 'Rafael de França', descricao: 'Designer, Programador,Front-end Back-end' },
      { nome: 'Eduardo Gabriel dos Santos', descricao: 'Programador, Front-end ' },
      { nome: 'Leandro gustavo dos santos',  descricao: ' Programador Back-end' },
    ]);

    return {
      pessoa
    };
  }
};
</script>
<template>
  <div class="container-sobre">
    <div class="sobre-dev">
      <div class="fotos-dev" v-for="(pessoa, index) in pessoa" :key="index">
        <p class="descricao-dev">{{ pessoa.nome }}</p>
        <h4 id="funcao-dev">Funções:</h4>
        <p class="descricao-dev">{{ pessoa.descricao }}</p>
    </div>
    </div>
    <div class="sobre-texto">
      <div class="reforma">
      <p class="text"> A equipe CodeFusion desenvolveu este site como parte de um Hackathon realizado no IFC Araquari. Durante o evento, nosso time se dedicou a criar uma solução inovadora, aplicando habilidades técnicas e criatividade para atender aos desafios propostos. Estamos orgulhosos do resultado alcançado e do aprendizado compartilhado ao longo dessa jornada colaborativa.   </p>
      </div>

    </div>
  </div>
</template>
<style>
.container-sobre{
  display: flex;
  margin-top: 175px;
  margin-left: 150px;
  justify-content: space-around;
}
.sobre-dev{
  display: flex;
  flex-direction: column;
  gap: 100px;
}
.fotos-dev{
  width: 150px;
  height: 150px;
  background-color: #D9D9D9;
  border-radius: 50%;
  margin-right: 50px;
}
.sobre-texto{
  border-radius: 10px;
  width: 500px;
  height: 601px;
  background-color: #FFFF;
  color: #1f1f1f;
  margin-top: 30px;
  margin-left: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.582);
}
.reforma{
  width: 360px;
  height: 550px;
}
.text{
  background-color: #D9D9D9;
  text-align: left;
  font-family: 'Pavanam', sans-serif;
  font-weight: lighter;
  font-size: 28px;
  background-color: transparent;

}
.descricao-dev{
  margin-left: 155px;
  white-space: nowrap;
  font-family: 'Poppins', sans-serif;
}
#funcao-dev{
  font-size: 1.1rem;
  margin-left: 155px;
  white-space: nowrap;
  color: #2C4156;
}
</style>
