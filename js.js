let stats = {
    raw: false,
    processed: false,
    sweets: false,
    ingr: false,
}


function display(className) {
    let elements = document.getElementsByClassName(className)
    for (let i of elements) {
        document.getElementById('result').appendChild(i);
    }
}

function remove(className) {
    let parent = document.getElementById('result')
    let elements = parent.getElementsByClassName(className)
    for (let i = elements.length - 1; i >= 0; i--) {
        document.getElementById('main').appendChild(elements[i]);
    }
}


function showOnly(className) {
    if (!stats[className]) {
        stats[className] = true;
        display(className)
    }
    else {
        stats[className] = false;
        remove(className)
    }
}
function reset() {
    let parent = document.getElementById('result')
    // reverse because it removes elements from this array and length becomes smaller
    for (let i = parent.childNodes.length - 1; i >= 0; i--) {
        document.getElementById('main').appendChild(parent.childNodes[i]);
    }
    for (let i of Object.keys(stats)) {
        stats[i] = false;
    }
}
