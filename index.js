function gerarEscala(tecnicos) {
  let escala = []
  let turnoAtual = 0
  for (let dia = 1; dia <= 3; dia++) {
    let linha = `Dia ${dia}: `
    for (let turno = 0; turno < 3; turno++) {
      let tecnico = tecnicos[(turnoAtual + turno) % tecnicos.length]
      let nomeTurno = ['Manhã', 'Tarde', 'Noite'][turno]
      linha += `${nomeTurno} - ${tecnico}, `
    }
    escala.push(linha.trim().slice(0, -2))
    turnoAtual = (turnoAtual + 1) % tecnicos.length
  }
  return escala
}

let equipe = ['Ana', 'Bruno', 'Carla']
let resultado = gerarEscala(equipe)
resultado.forEach(l => console.log(l))