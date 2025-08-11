// cria referÊncia ao form a ao elemento h3 (onde será exibida a resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const resp1 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
const titulo = frm.inTitulo.value // obtém o ome digitado no form
const duracao = Number(inDuracao.value) // exibe a resposta do programa 
  
const horas = Math.floor(duracao / 60)
  const minutos = duracao % 60

  resp1.innerText = titulo
  resp2.innerText = `${horas} hora(s) e ${minutos} minuto(s)`

  e.preventDefault()
})
