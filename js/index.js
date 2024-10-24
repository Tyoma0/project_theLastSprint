


const model = {
    notes: [],

    addNote(note) {
        this.notes.unshift(note);
    },

    deleteNote(noteId) {
        this.notes = this.notes.filter(note => note.id != noteId);
    },

    toggleFavorite(noteId) {
        const note = this.notes.find(note => note.id == noteId);
        if (note) {
            note.isFavorite = !note.isFavorite;
        }
    },

    getNotes(filterFavorite) {
        return filterFavorite ? this.notes.filter(note => note.isFavorite) : this.notes;
    }
};
const view = {
    init() {
        this.renderNotes(model.getNotes());
        this.bindEvents();
    },

    renderNotes(notes) {
        const notesList = document.querySelector('.notes-list');
        notesList.innerHTML = '';
        notes.forEach(note => {
            const noteElement = document.createElement('li');
            noteElement.className = 'note';
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
            `;
            notesList.appendChild(noteElement);
        });
        document.getElementById('note-count').textContent = model.notes.length;

        if (model.notes.length > 0) {
            document.querySelector('.filter-box').classList.remove('hidden');
            document.querySelector('.no-notes-message').classList.add('hidden');
        } else {
            document.querySelector('.filter-box').classList.add('hidden');
            document.querySelector('.no-notes-message').classList.remove('hidden');
        }
    },

    bindEvents() {
        document.querySelector('.note-form').addEventListener('submit', controller.handleFormSubmit);
        document.getElementById('filter-favorite').addEventListener('change', controller.handleFilterChange);
        document.querySelector('.notes-list').addEventListener('click', controller.handleNoteAction);
    },

    updateFavoriteIcon(noteId, isFavorite) {
        const favoriteButton = document.querySelector(`.favorite[data-id="${noteId}"]`);
        if (favoriteButton) {
            favoriteButton.innerHTML = `
                <img src="${isFavorite ? './images/heart active.png' : './images/serdce.png'}" alt="Избранное">
            `;
        }
    },

    showMessage(text, type) {
        const messagesBox = document.querySelector('.messages-box');
        messagesBox.textContent = text;
        messagesBox.className = `messages-box ${type}`;
        messagesBox.style.display = 'block';
        setTimeout(() => {
            messagesBox.style.display = 'none';
        }, 3000);
    }
};
const controller = {
    handleFormSubmit(event) {
        event.preventDefault();
        const title = document.getElementById('note-title').value;
        const content = document.getElementById('note-text').value;
        const color = document.querySelector('input[name="color"]:checked').value;

        if (!title || !content) {
            view.showMessage('Заполните все поля', 'error');
            return;
        }

        if (title.length > 50) {
            view.showMessage('Максимальная длина заголовка - 50 символов', 'error');
            return;
        }

        const newNote = {
            id: Date.now(),
            title,
            content,
            color,
            isFavorite: false,
        };

        model.addNote(newNote);
        view.renderNotes(model.getNotes());
        view.showMessage('Заметка добавлена', 'success');
        event.target.reset();
    },

    handleFilterChange() {
        const filter = document.getElementById('filter-favorite').checked;
        view.renderNotes(model.getNotes(filter));
    },

    handleNoteAction(event) {
        const target = event.target;
        const noteId = target.closest('.favorite, .delete').dataset.id;

        if (target.closest('.favorite')) {
            model.toggleFavorite(noteId);
            view.updateFavoriteIcon(noteId, model.notes.find(note => note.id == noteId).isFavorite);
        } else if (target.closest('.delete')) {
            model.deleteNote(noteId);
            view.renderNotes(model.getNotes());
            view.showMessage('Заметка удалена', 'success');
        }
    }
};

function init() {
    view.init();
}

init();