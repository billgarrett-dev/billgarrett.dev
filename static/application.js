function onClickShowDetail(permalink) {
    fetch(permalink)
        .then((response) => response.text())
        .then((text) => {
            var div = document.getElementById("detail-target")
            div.innerHTML = text
        })
        .catch((err) => console.error(err))
    return false
}