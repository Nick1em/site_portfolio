document.addEventListener('DOMContentLoaded', () => {

  const modal = document.getElementById('pdf-modal')
  const modalPdf = document.getElementById('modal-pdf')
  const buttons = document.querySelectorAll('.open-pdf')
  const closeBtn = document.querySelector('.close')

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const pdfSrc = btn.dataset.pdf
      modalPdf.src = pdfSrc
      modal.classList.add('active')
    })
  })

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active')
    modalPdf.src = ""
  })

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active')
      modalPdf.src = ""
    }
  })

  // fechar clicando fora
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active')
      modalPdf.src = ""
    }
  })

})

console.log(closeBtn)