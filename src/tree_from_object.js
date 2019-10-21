const container = document.getElementById('container');
let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

function treeToObj(container, data) {
    container.append(treeFromObject(data));
}

function treeFromObject(obj) {
    const ul = document.createElement('ul');

    for (let key in obj) {
        let li = document.createElement('li');
        li.textContent = key;
        li.append(treeFromObject(obj[key]));
        ul.append(li);
    }

    return ul;
}

treeToObj(container, data);
