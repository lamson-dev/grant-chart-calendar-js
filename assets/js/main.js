var today = new Date();

let maxDateOfMonth = 32 - new Date(today.getFullYear(), today.getMonth(), 32).getDate();

const grantArr = [

    {
        device: 'Vsmart Aris 5G - 1',
        start: "2020-06-27 14:27:07",
        end: "2020-07-05 14:27:07",

    },
    {
        device: 'Vsmart Aris 5G - 2',
        start: "2020-06-03 14:27:07",
        end: "2020-06-06 14:27:07",

    },
    {
        device: 'Vsmart Aris 5G - 2',
        start: "2020-07-04 14:27:07",
        end: "2020-07-19 14:27:07",

    },
    {
        device: 'Vsmart Aris 5G - 2',
        start: "2020-06-07 14:27:07",
        end: "2020-06-16 14:27:07",

    },
    {
        device: 'Vsmart Aris 5G - 2',
        start: "2020-07-06 14:27:07",
        end: "2020-07-31 12:27:07",

    },
    {
        device: 'Vsmart Aris 5G - 3',
        start: "2020-07-30 14:27:07",
        end: "2020-08-02 14:27:07",

    },

];

showMonth(today.getFullYear(), today.getMonth());

rederChart();
// render chartEach field data row
function rederChart() {
    document.getElementById('body_calendar').innerHTML = "";
    grantArr.forEach(element => {
        var startDate = new Date(element.start);
        var endDate = new Date(element.end);

        showGrantBar(startDate, endDate, element.device);
    });
}


function showMonth(year, month) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];

    let date = 1;
    let headCalendarTable = document.getElementById('head_calendar');

    // clear calendar table 
    headCalendarTable.innerHTML = "";

    var title = document.createElement('th');

    title.innerHTML = "title";

    headCalendarTable.appendChild(title);

    document.getElementById('calendar_now').innerText = year + " - " + months[month];

    for (let index = 1; index <= maxDateOfMonth; index++) {
        if (date > maxDateOfMonth) {
            break;
        } else {

            var cell = document.createElement('th');
            cell.appendChild(document.createTextNode(index));
            headCalendarTable.appendChild(cell);

            date++;
        }
    }
}

function showGrantBar(start_stone, end_stone, title = 'no title') {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let start_date = new Date(start_stone);
    let end_date = new Date(end_stone);

    let body_calendar = document.getElementById('body_calendar');

    let row_grant = document.createElement('tr');

    // render title at cell 0 each row of table
    var cell_head = document.createElement('th');

    cell_head.appendChild(document.createTextNode(title + " ( " + start_date.getDate() + "/" + months[start_date.getMonth()] + " - " + end_date.getDate() + "/" + months[end_date.getMonth()] + ")"));

    row_grant.append(cell_head);

    if (start_date.getMonth() < today.getMonth() && end_date.getMonth() === today.getMonth()) {

        for (let index = 1; index <= maxDateOfMonth; index++) {

            var cell = row_grant.insertCell(index);

            index <= end_date.getDate() ? cell.classList.add('grant-bar') : null;

            index === 1 ? cell.appendChild(document.createTextNode("<")) : null;
        }

    } else if (end_date.getMonth() > today.getMonth() && start_date.getMonth() === today.getMonth()) {

        for (let index = 1; index <= maxDateOfMonth; index++) {

            var cell = row_grant.insertCell(index);

            index >= start_date.getDate() ? cell.classList.add('grant-bar') : null;

            index === maxDateOfMonth ? cell.appendChild(document.createTextNode(">")) : null;
        }

    } else if (end_date.getMonth() === today.getMonth() && start_date.getMonth() === today.getMonth()) {

        for (let index = 1; index <= maxDateOfMonth; index++) {

            if (index >= start_date.getDate() && index <= end_date.getDate()) {
                row_grant.insertCell(index).classList.add('grant-bar');
            } else {
                row_grant.insertCell(index);
            }
        }
    } else {
        for (let index = 1; index <= maxDateOfMonth; index++) {
            row_grant.insertCell(index);
        }
    }
    body_calendar.appendChild(row_grant);
}

function nextMonth() {
    today.setMonth(today.getMonth() + 1);

    showMonth(today.getFullYear(), today.getMonth());
    rederChart();
}
function previousMonth() {
    today.setMonth(today.getMonth() - 1);

    showMonth(today.getFullYear(), today.getMonth());
    rederChart();
}