const container = document.getElementById('container');
const data = {
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
        const li = document.createElement('li');
        li.textContent = key;
        li.append(treeFromObject(obj[key]));
        ul.append(li);
    }

    return ul;
}

treeToObj(container, data);
