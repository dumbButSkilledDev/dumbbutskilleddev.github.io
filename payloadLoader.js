function injectPayloadW(encodedData, win) {
    win.document.write(atob(encodedData));
}

function injectPayloadC(encodedData) {
    window.open().document.write(atob(encodedData));
}

function injectPayloadO(encodedData) {
    document.write(atob(encodedData));
}
