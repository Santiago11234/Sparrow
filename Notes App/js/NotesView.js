export default class NotesView{
    //pass this through the first big div in panel
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete} = {}){
        this.root = root; 
        this.onNoteAdd = onNoteAdd
        this.onNoteEdit = onNoteEdit
        this.onNoteDelete = onNoteDelete
        this.onNoteSelect = onNoteSelect
        //the html for the div

        this.root.innerHTML = `
                <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note..">
                <textarea class="notes__body">Takes note..</textarea>
            </div>
        `;
        //click listeners for the buttons
        const btnAddNote = this.root.querySelector(".notes__add");
        const inpTitle = this.root.querySelector(".notes__title");
        const inpBody = this.root.querySelector(".notes__body");
        
        btnAddNote.addEventListener("click", () => {
            this.onNoteAdd();
        });

        [inpTitle, inpBody].forEach(inputField => {
            //when user exits out of the note, it updated stuff
            inputField.addEventListener("blur", ()=> {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            });
        });

        //todo: hide the note preview by default
        this.updateNotePreviewVisibility(false);
    }

    _createListItemHTML(id, title, body, updated){
        const MAX_BODY_LENGTH = 60;
        //the left side list 
        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes__small-title">${title}</div>
                <div class="notes__small-body">
                     ${body.substring(0, MAX_BODY_LENGTH)}
                     ${body.length > MAX_BODY_LENGTH ? "..." : ""}
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined, { dateStyle: "full", timeStyle: "short"})}
                </div>
            </div>
        `;
    }

    updateNoteList(notes){
        const notesListContainer = this.root.querySelector(".notes__list");

        //empty list
        notesListContainer.innerHTML = "";

        for(const note of notes){
const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated));
            
            notesListContainer.insertAdjacentHTML("beforeend", html);
        
        }

        //add select/delete events for each list item
        notesListContainer.querySelectorAll(".notes__list-item").forEach(noteListItem => {
            noteListItem.addEventListener("click", () => {
                this.onNoteSelect(noteListItem.dataset.noteId);
            });
            //confirmation pop up
            noteListItem.addEventListener("dblclick", () => {
                const doDelete = confirm("you sure?");
                if(doDelete){
                    this.onNoteDelete(noteListItem.dataset.noteId);
                }
            })
        });
    }
    

    updateActiveNote(note){
        this.root.querySelector(".notes__title").value = note.title;
        this.root.querySelector(".notes__body").value = note.body;
        
        this.root.querySelectorAll(".notes__list-item").forEach(noteListItem =>{
            noteListItem.classList.remove("notes__list-item--selected");
        });

        this.root.querySelector(`.notes__list-item[data-note-id = "${note.id}"]`).classList.add("notes__list-item--selected");
    }
        updateNotePreviewVisibility(visible){
            this.root.querySelector(".notes__preview").style.visibility = visible ? "visible" : "hidden";
    }
}