var headers = ['col-11', 'col-12', 'col-13', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-110', 'col-11', 'col-12', 'col-13', 'col-14', 'col-15', 'col-16', 'col-17', 'col-18', 'col-19'];
var rows = [];

function createRow(items) {
    var row = {};
    items.forEach(function (element) {
        row[element] = 'some data'
    });
    return row;
}

for (var i = 0; i <= 100; i++) {
    rows[i] = createRow(headers);
}

function createTable(headers) {
    var headerRow = document.createElement('tr');

    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');


    var table = document.querySelector('.table-wrapper table');

    headers.forEach(function (text) {
        var th = document.createElement('th');
        var div = document.createElement('div');
        div.innerText = text;
        th.append(div);
        headerRow.append(th);
    })

    thead.append(headerRow);

    rows.forEach(function (row) {
        var bodyRow = document.createElement('tr');

        headers.forEach(function (key) {
            var td = document.createElement('td');
            td.innerText = row[key];
            bodyRow.append(td)
        });

        tbody.append(bodyRow);
    })

    table.append(thead, tbody);
}

createTable(headers);

// var tableWrapper = document.querySelector('div.table-wrapper');

// function disableHover(event) {
//     var table = event.target;
//     clearTimeout(this.timer);
//     if (!table.classList.contains('disableHover')) {
//         table.classList.add('disableHover');
//     }

//     this.timer = setTimeout(() => {
//         table.classList.remove('disableHover');
//     }, 500);
// };
// tableWrapper.addEventListener('scroll', disableHover)
// if(do)tableWrapper.removeEventListener('scroll', disableHover)

