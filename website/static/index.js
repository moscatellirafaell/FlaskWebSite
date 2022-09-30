function deleteNote(noteId) {
    fetch("/delete-note", {
        method: "POST",
        body: JSON.stringfy({ noteId: noteId }),
    }).then((_res)) => {
        window.location.href = "/";
    });
}