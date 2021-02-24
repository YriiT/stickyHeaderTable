let headers = ['col-11', 'col-12', 'col-13', 'col-4', 'col-5', 'col-6', 'col-7', 'col-8', 'col-9', 'col-110', 'col-11', 'col-12', 'col-13', 'col-14', 'col-15', 'col-16', 'col-17', 'col-18', 'col-19'];
let rows = [];

function createRow(items) {
    let row = {};
    items.forEach(element => {
        row[element] = 'some data'
    });
    return row;
}

for (let i = 0; i <= 100; i++) {
    rows[i] = createRow(headers);
}

function createTable(headers) {
    const headerRow = document.createElement('tr');

    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');


    const table = document.querySelector('.table-wrapper table');

    headers.forEach(text => {
        let th = document.createElement('th');
        let div = document.createElement('div');
        div.innerText = text;
        th.append(div);
        headerRow.append(th);
    })

    thead.append(headerRow);

    rows.forEach(row => {
        const bodyRow = document.createElement('tr');

        headers.forEach(key => {
            let td = document.createElement('td');
            td.innerText = row[key];
            bodyRow.append(td)
        });

        tbody.append(bodyRow);
    })

    table.append(thead, tbody);
}

createTable(headers);

// const tableWrapper = document.querySelector('div.table-wrapper');

// function disableHover(event) {
//     const table = event.target;
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

