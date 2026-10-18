(function () {
  const paths = {
    'brain-circuit': '<circle cx="12" cy="12" r="3"/><path d="M12 3v6m0 6v6M3 12h6m6 0h6M5.6 5.6l4.2 4.2m4.4 4.4 4.2 4.2m0-12.8-4.2 4.2m-4.4 4.4-4.2 4.2"/>',
    clapperboard: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 9 18-4M8 5l3 4m2-4 3 4"/>',
    image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8" cy="9" r="1.5"/><path d="m4 17 5-5 3 3 2-2 6 6"/>',
    'pen-line': '<path d="m4 20 4.5-1 9.7-9.7a2.1 2.1 0 0 0-3-3L5.5 16 4 20Z"/><path d="m13.5 7.5 3 3M14 20h6"/>',
    presentation: '<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M12 16v4m-4 0h8M7 8h10M7 12h6"/>',
    'code-2': '<path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14"/>',
    'audio-lines': '<path d="M4 10v4m4-7v10m4-13v16m4-13v10m4-7v4"/>',
    palette: '<circle cx="12" cy="12" r="9"/><circle cx="8" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="16" cy="10" r="1"/><path d="M15 17c0 1.1-.9 2-2 2h-1"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
    bot: '<rect x="4" y="7" width="16" height="13" rx="3"/><path d="M12 3v4m-5 5h.01M17 12h.01M8 16h8"/>',
    'graduation-cap': '<path d="m3 9 9-5 9 5-9 5-9-5Z"/><path d="M7 12v4c3 2 7 2 10 0v-4M21 9v6"/>',
    languages: '<path d="M4 5h8M8 3v2m-3 8c1.5-1.5 3-4 3-7m-5 7c2 2 4 3 7 4M14 20l4-10 4 10m-6-3h4"/>',
    github: '<path d="M9 19c-4 1-4-2-5-2m10 4v-3.5c0-1 .1-1.4-.5-2 2.5-.3 5-1.2 5-5.5a4.3 4.3 0 0 0-1.2-3.1A4 4 0 0 0 17.2 4S16.2 3.7 14 5a10.3 10.3 0 0 0-4 0C7.8 3.7 6.8 4 6.8 4a4 4 0 0 0-1.1 2.9A4.3 4.3 0 0 0 4.5 10c0 4.3 2.5 5.2 5 5.5-.6.6-.6 1.1-.6 2V21"/>',
    'chart-no-axes-column-increasing': '<path d="M4 19V5m0 14h16M8 16v-3m4 3V9m4 7V6m4 10v-8"/>',
    'badge-plus': '<circle cx="12" cy="12" r="9"/><path d="M12 8v8m-4-4h8"/>',
    'book-open': '<path d="M3 5a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v16a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2V5Zm18 0a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v16a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2V5Z"/>'
  }

  const makeSvg = name => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.search}</svg>`

  window.renderSiteIcons = function () {
    document.querySelectorAll('.sidebar .side-link i[data-lucide]').forEach(icon => {
      icon.outerHTML = makeSvg(icon.dataset.lucide)
    })
    if (window.lucide?.createIcons) {
      window.lucide.createIcons({attrs: {'stroke-width': 1.8}})
    } else {
      document.querySelectorAll('i[data-lucide]').forEach(icon => {
        icon.outerHTML = makeSvg(icon.dataset.lucide)
      })
    }
  }
})()
