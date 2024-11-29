<template>

<h1 class="title">Conselhos</h1>
<div>
<label >Ano</label>
<select  name="Ano">
  <option value="2022">2022</option>
  <option value="2023">2023</option>
  <option value="2024">2024</option>
</select>
<label >Trimestre</label>
<select  name="Trimestre">
  <option value="1º Trimestre">1º Trimestre</option>
  <option value="2º Trimestre">2º Trimestre</option>
  <option value="3º Trimestre">3º Trimestre</option>
</select>
<label >Turma</label>
<select  name="Turma">
  <option value="3info1">3info1</option>
  <option value="3info2">3info2</option>
  <option value="3info3">3info3</option>
</select>
</div>
<div>
    <select  name="Disciplina" placeholder="Disciplina">
  <option value="Geografia">Geografia</option>
  <option value="Dev. Mobile">Dev. Mobile</option>
</select>
</div>

<div>
<select  name="Filtro" placeholder="Filtrar por:">
  <option value="Nota < 6">Nota menor de 6</option>
  <option value="3info2">Mais ocorrencias</option>
</select>

<select  name="Turma" placeholder="Ordenar por:">
  <option value="Ordem Alfabetica A-Z">Ordem Alfabetica A-Z</option>
  <option value="Ordem Alfabetica Z-A">Ordem Alfabetica Z-A</option>
  <option value="Maior Nota">Maior Nota</option>
</select>
</div>


    <tr>
        <td>Nome</td>
        <td>Nota</td>
        <td>Ocorrencias</td>
    </tr>
    <tr>
        <td>Ted</td>
        <td>2</td>
        <td>Ver Ocorrencias</td>
    </tr>
    <tr>
        <td>Ralf</td>
        <td>6</td>
        <td>Ver Ocorrencias</td>
    </tr>



</template>

<style scoped>
.title{
    margin-top: 15vh;
}

</style>