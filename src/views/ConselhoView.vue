<template>
  <h1 class="title">Conselhos</h1>
  <div class="Filtro-conselho">
    <div>
      <label>Ano</label>
      <select name="Ano">
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
    <div>
      <label>Trimestre</label>
      <select name="Trimestre">
        <option value="1º Trimestre">1º Trimestre</option>
        <option value="2º Trimestre">2º Trimestre</option>
        <option value="3º Trimestre">3º Trimestre</option>
      </select>
    </div>
    <div>
      <label>Turma</label>
      <select name="Turma">
        <option value="3info1">3info1</option>
        <option value="3info2">3info2</option>
        <option value="3info3">3info3</option>
      </select>
    </div>
  </div>
  <div class="Filtro-conselho">
    <div>
      <label>Disciplina</label>
      <select name="Disciplina" placeholder="Disciplina">
        <option value="Geografia">Geografia</option>
        <option value="Dev. Mobile">Dev. Mobile</option>
      </select>
    </div>
    <div>
      <label>Filtrar por:</label>
      <select name="Filtro" placeholder="Filtrar por:">
        <option value="Nota < 6">Nota menor de 6</option>
        <option value="3info2">Mais ocorrencias</option>
      </select>
    </div>
    <div>
      <label>Ordenar por:</label>
      <select name="Turma" placeholder="Ordenar por:">
        <option value="Ordem Alfabetica A-Z">Ordem Alfabetica A-Z</option>
        <option value="Ordem Alfabetica Z-A">Ordem Alfabetica Z-A</option>
        <option value="Maior Nota">Maior Nota</option>
      </select>
    </div>
  </div>

  <tr class="coluna-info">
    <td>Nome</td>
    <td>Nota</td>
    <td>Ocorrencias</td>
  </tr>
  <tr class="coluna-desc">
    <td>Rafael de França</td>
    <td>2.0</td>
    <RouterLink class="view-ocorrencias" to="/ocorrencia"><td  @click="goOCorencia">Ver Ocorrencias</td></RouterLink> 
  </tr>
  <hr />
  <tr class="coluna-desc">
    <td>Leandro dos Santos</td>
    <td>6.0</td>
    <RouterLink class="view-ocorrencias" to="/ocorrencia"><td  @click="goOCorencia">Ver Ocorrencias</td></RouterLink> 
  </tr>
  <hr />
</template>

<style scoped>
.title {
  display: flex;
  justify-content: center;
  margin-top: 15vh;
  font-family: 'Poppins', sans-serif;
  color: #2c4156;
}
.Filtro-conselho {
  display: flex;
  justify-content: center;
  gap: 5vh;
  margin-top: 5vh;
  font-family: 'Poppins', sans-serif;
}

.Filtro-conselho select {
  width: 200px;
  height: 40px;
  text-align: center;
  border-radius: 9px;
  border: 1px solid #00000049;
  background-color: transparent;
  font-family: 'Poppins', sans-serif;
}

.coluna-info {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10vh;
  background-color: #2c4156;
  color: White;
  font-family: 'Poppins', sans-serif;
  height: 5vh;
  gap: 40vh;
}
.coluna-desc {
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: #2c4156;
  font-family: 'Poppins', sans-serif;
  height: 5vh;
  border: black;
  gap: 40vh;
}
.view-ocorrencias {
  background-color: #57788d;
  padding: 7px;
  color: #ffff;
  border-radius: 10px;
  font-size: large;
  transition: 0.3s ease-in;
  cursor: pointer;
  text-decoration: none;

}
.view-ocorrencias:hover {
  transform: scale(0.9);
}
</style>

<script setup>

</script>