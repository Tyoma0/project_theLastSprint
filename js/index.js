


// const colors = {
//     GREEN: 'green',
//     BLUE: 'blue',
//     RED: 'red',
//     YELLOW: 'yellow',
//     PURPLE: 'purple',
// }

// const MOCK_NOTES = [
//     {
//         id: 1,
//         title: 'Работа с формами',
//         content: 'К определённым полям формы можно обратиться через form.elements по значению, указанному в атрибуте name',
//         color: 'green',
//         isFavorite: false,
//     },
//     // ...
// ]

// const model = {
//     notes: MOCK_NOTES,
// }

// const view = {
//     init() {
//         this.renderNotes(model.notes)
//         this.bindEvents()
//     },
//     renderNotes(notes) {
//         const notesList = document.querySelector('.notes-list')
//         notesList.innerHTML = ''
//         notes.forEach(note => {
//             const noteElement = document.createElement('li')
//             noteElement.className = 'note'
//             noteElement.innerHTML = `
//                 <div class="note-header" style="background-color: ${note.color};">
//                     <h3>${note.title}</h3>
//                     <button class="favorite ${note.isFavorite ? 'active' : ''}" data-id="${note.id}">
//                         <img src="${note.isFavorite ? './images/heart active.png' : './images/heart.png'}" alt="Избранное">
//                     </button>
//                     <button class="delete" data-id="${note.id}">
//                         <img src="./images/trash.png" alt="Удалить">
//                     </button>
//                 </div>
//                 <p>${note.content}</p>
//             `
//             notesList.appendChild(noteElement)
//         })
//         document.getElementById('note-count').textContent = model.notes.length

//         // Показываем фильтр, если есть хотя бы одна заметка
//         if (model.notes.length > 0) {
//             document.querySelector('.filter-box').classList.remove('hidden')
//             document.querySelector('.no-notes-message').classList.add('hidden')
//         } else {
//             document.querySelector('.filter-box').classList.add('hidden')
//             document.querySelector('.no-notes-message').classList.remove('hidden')
//         }
//     },
//     bindEvents() {
//         document.querySelector('.note-form').addEventListener('submit', this.handleFormSubmit.bind(this))
//         document.getElementById('filter-favorite').addEventListener('change', this.handleFilterChange.bind(this))
//         document.querySelector('.notes-list').addEventListener('click', this.handleNoteAction.bind(this))
//     },
//     handleFormSubmit(event) {
//         event.preventDefault()
//         const title = document.getElementById('note-title').value
//         const content = document.getElementById('note-text').value
//         const color = document.querySelector('input[name="color"]:checked').value

//         if (!title || !content) {
//             this.showMessage('Заполните все поля', 'error')
//             return
//         }

//         if (title.length > 50) {
//             this.showMessage('Максимальная длина заголовка - 50 символов', 'error')
//             return
//         }

//         const newNote = {
//             id: Date.now(),
//             title,
//             content,
//             color,
//             isFavorite: false,
//         }

//         model.notes.unshift(newNote)
//         this.renderNotes(model.notes)
//         this.showMessage('Заметка добавлена', 'success')
//         event.target.reset()
//     },
//     handleFilterChange() {
//         const filter = document.getElementById('filter-favorite').checked
//         const filteredNotes = filter ? model.notes.filter(note => note.isFavorite) : model.notes
//         this.renderNotes(filteredNotes)
//     },
//     handleNoteAction(event) {
//         const target = event.target
//         const noteId = target.closest('.favorite, .delete').dataset.id

//         if (target.closest('.favorite')) {
//             const note = model.notes.find(note => note.id == noteId)
//             note.isFavorite = !note.isFavorite
//             this.updateFavoriteIcon(noteId, note.isFavorite)
//         } else if (target.closest('.delete')) {
//             model.notes = model.notes.filter(note => note.id != noteId)
//             this.renderNotes(model.notes)
//             this.showMessage('Заметка удалена', 'success')
//         }
//     },
//     updateFavoriteIcon(noteId, isFavorite) {
//         const favoriteButton = document.querySelector(`.favorite[data-id="${noteId}"]`)
//         if (favoriteButton) {
//             favoriteButton.innerHTML = `
//                 <img src="${isFavorite ? './images/heart active.png' : './images/heart.png'}" alt="Избранное">
//             `
//         }
//     },
//     showMessage(text, type) {
//         const messagesBox = document.querySelector('.messages-box')
//         messagesBox.textContent = text
//         messagesBox.className = `messages-box ${type}`
//         messagesBox.style.display = 'block'
//         setTimeout(() => {
//             messagesBox.style.display = 'none'
//         }, 3000)
//     },
// }

// function init() {
//     view.init()
// }

// init()

const colors = {
    GREEN: 'green',
    BLUE: 'blue',
    RED: 'red',
    YELLOW: 'yellow',
    PURPLE: 'purple',
}

const MOCK_NOTES = [
   
    // ...
]

const model = {
    notes: MOCK_NOTES,
}

const view = {
    init() {
        this.renderNotes(model.notes)
        this.bindEvents()
    },
    renderNotes(notes) {
        const notesList = document.querySelector('.notes-list')
        notesList.innerHTML = ''
        notes.forEach(note => {
            const noteElement = document.createElement('li')
            noteElement.className = 'note'
            noteElement.innerHTML = `
                <div class="note-header" style="background-color: ${note.color};">
                    <h3>${note.title}</h3>
                    <div class="note1">
                    <button class="favorite ${note.isFavorite ? 'active' : ''}" data-id="${note.id}">
                        <img src="${note.isFavorite ? './images/heart active.png' : './images/serdce.png'}" alt="Избранное">
                    </button>
                    <button class="delete" data-id="${note.id}">
                        <img src="./images/trash.png" alt="Удалить">
                    </button>
                </div>
                </div>
                <p>${note.content}</p>
            `
            notesList.appendChild(noteElement)
        })
        document.getElementById('note-count').textContent = model.notes.length

        // Показываем фильтр, если есть хотя бы одна заметка
        if (model.notes.length > 0) {
            document.querySelector('.filter-box').classList.remove('hidden')
            document.querySelector('.no-notes-message').classList.add('hidden')
        } else {
            document.querySelector('.filter-box').classList.add('hidden')
            document.querySelector('.no-notes-message').classList.remove('hidden')
        }
    },
    bindEvents() {
        document.querySelector('.note-form').addEventListener('submit', this.handleFormSubmit.bind(this))
        document.getElementById('filter-favorite').addEventListener('change', this.handleFilterChange.bind(this))
        document.querySelector('.notes-list').addEventListener('click', this.handleNoteAction.bind(this))
    },
    handleFormSubmit(event) {
        event.preventDefault()
        const title = document.getElementById('note-title').value
        const content = document.getElementById('note-text').value
        const color = document.querySelector('input[name="color"]:checked').value

        if (!title || !content) {
            this.showMessage('Заполните все поля', 'error')
            return
        }

        if (title.length > 50) {
            this.showMessage('Максимальная длина заголовка - 50 символов', 'error')
            return
        }

        const newNote = {
            id: Date.now(),
            title,
            content,
            color,
            isFavorite: false,
        }

        model.notes.unshift(newNote)
        this.renderNotes(model.notes)
        this.showMessage('Заметка добавлена', 'success')
        event.target.reset()
    },
    handleFilterChange() {
        const filter = document.getElementById('filter-favorite').checked
        const filteredNotes = filter ? model.notes.filter(note => note.isFavorite) : model.notes
        this.renderNotes(filteredNotes)
    },
    handleNoteAction(event) {
        const target = event.target
        const noteId = target.closest('.favorite, .delete').dataset.id

        if (target.closest('.favorite')) {
            const note = model.notes.find(note => note.id == noteId)
            note.isFavorite = !note.isFavorite
            this.updateFavoriteIcon(noteId, note.isFavorite)
        } else if (target.closest('.delete')) {
            model.notes = model.notes.filter(note => note.id != noteId)
            this.renderNotes(model.notes)
            this.showMessage('Заметка удалена', 'success')
        }
    },
    updateFavoriteIcon(noteId, isFavorite) {
        const favoriteButton = document.querySelector(`.favorite[data-id="${noteId}"]`)
        if (favoriteButton) {
            favoriteButton.innerHTML = `
                <img src="${isFavorite ? './images/heart active.png' : './images/serdce.png'}" alt="Избранное">
            `
        }
    },
    showMessage(text, type) {
        const messagesBox = document.querySelector('.messages-box')
        messagesBox.textContent = text
        messagesBox.className = `messages-box ${type}`
        messagesBox.style.display = 'block'
        setTimeout(() => {
            messagesBox.style.display = 'none'
        }, 3000)
    },
}

function init() {
    view.init()
}

init()