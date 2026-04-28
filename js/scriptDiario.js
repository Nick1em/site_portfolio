fetch('/json/post.json')
  .then(res => res.json())
  .then(posts => {

    // 🔹 Ordena do mais novo pro mais antigo
    posts.sort((a, b) => new Date(b.data) - new Date(a.data))

    const featuredContainer = document.getElementById('featured-post')
    const listContainer = document.querySelector('.post-list')

    // 🟢 Função para renderizar qualquer post
    function renderPost(post) {
      fetch(`/posts/${post.file}`)
        .then(res => res.text())
        .then(md => {

          const html = marked.parse(md)

          featuredContainer.innerHTML = `
            <h1>${post.titulo}</h1>
            <p>${post.data}</p>
            ${html}
          `

          // 🔥 Scroll pro topo
          window.scrollTo({ top: 0, behavior: 'smooth' })

          // 🔥 Atualiza item ativo na lateral
          document.querySelectorAll('.post-link').forEach(el => {
            el.classList.remove('active')
          })

          const activeEl = document.querySelector(`[data-file="${post.file}"]`)
          if (activeEl) activeEl.classList.add('active')
        })
    }

    // 🟡 Monta lista lateral COMPLETA (inclui o mais recente)
    listContainer.innerHTML = ""

    posts.forEach(post => {
      listContainer.innerHTML += `
         <li class="post-link" data-file="${post.file}">
      ${post.titulo}
    </li>
      `
    })

    // 🟢 Render inicial → primeiro da lista (mais recente)
    renderPost(posts[0])

    // 🟣 Clique nos posts (robusto)
    document.addEventListener('click', e => {
      const postEl = e.target.closest('.post-link')

      if (postEl) {
        const file = postEl.dataset.file
        const selectedPost = posts.find(p => p.file === file)

        renderPost(selectedPost)
      }
    })

  })