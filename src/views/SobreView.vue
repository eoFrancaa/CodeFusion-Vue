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
<style scoped>
.container-sobre {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 100px;
  padding: 0 20px;
}

.sobre-dev {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 250px;
  margin-right: 50px;
}

.fotos-dev {
  width: 120px;
  height: 120px;
  background-color: #d9d9d9;
  border-radius: 50%;
  margin-bottom: 10px;
}

.descricao-dev {
  font-family: 'Poppins', sans-serif;
  text-align: center;
  font-size: 1rem;
}

#funcao-dev {
  font-size: 1rem;
  color: #2c4156;
  font-weight: bold;
  text-align: center;
}

.sobre-texto {
  border-radius: 10px;
  width: 100%;
  max-width: 550px;
  background-color: #ffff;
  color: #1f1f1f;
  margin-top: 30px;
  padding: 30px;
  box-shadow: 3px 3px 10px 0px rgba(0, 0, 0, 0.582);
}

.reforma {
  width: 100%;
}

.text {
  text-align: justify;
  font-family: 'Pavanam', sans-serif;
  font-weight: lighter;
  font-size: 18px;
  background-color: transparent;
}

@media (max-width: 768px) {
  .container-sobre {
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }

  .sobre-dev {
    width: 100%;
    margin-right: 0;
    gap: 20px;
  }

  .fotos-dev {
    width: 100px;
    height: 100px;
  }

  .descricao-dev,
  #funcao-dev {
    font-size: 1rem;
  }

  .sobre-texto {
    width: 90%;
    padding: 20px;
  }

  .text {
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .container-sobre {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  .sobre-dev {
    width: 100%;
    align-items: center;
    gap: 20px;
  }

  .fotos-dev {
    width: 80px;
    height: 80px;
  }

  .descricao-dev {
    font-size: 0.9rem;
  }

  #funcao-dev {
    font-size: 0.9rem;
  }

  .sobre-texto {
    width: 90%;
    padding: 20px;
    margin-top: 20px;
  }

  .text {
    font-size: 14px;
  }
}
</style>


