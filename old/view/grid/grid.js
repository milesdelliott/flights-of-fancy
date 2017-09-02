let letters = document.getElementsByClassName('grid-letter');
let grid = document.getElementById('grid');
function handleClick(i) {
    if (i % 2 == 1) {
        grid.setAttribute('style', 'grid-template-columns: repeat(9, 1fr)')
    } else {
        grid.setAttribute('style', 'grid-template-columns: repeat(8, 1fr)')
    }
}
[].forEach.call(letters, function (l,i) {
    l.setAttribute('onclick', 'handleClick('+i+')')
})
