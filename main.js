let dialy = document.querySelector(".daily");
let weekly = document.querySelector(".weekly");
let monthly = document.querySelector(".monthly");
let intervals = document.querySelectorAll(".interval p");


intervals.forEach(ele => {
    ele.addEventListener("click", () => {
        let active = document.querySelector(".interval p.active");
        if(ele.className == "active"){
            ele.classList.add("active");
        }else{
            active.classList.remove("active");
        }

        ele.classList.add("active");
    })
});


// SHOW DEFAULT DATA ON LOAD
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .then(document.getElementById("daily", function () {appendData(data)}))
    .catch(function (err) {
        console.log(err);
    });

    function appendData(data) {
        
        let management = document.querySelector(".management").innerHTML = `
            ${data.map(function (card) {
                return `
                    <div class="task_container ${card.title.split(' ').join('')}">
                        <div class="task_card rounded">
                            <div class="task">
                                <p class="title">${card.title}</p>
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </div>
                            <div class="time">
                                <p class="current">${card.timeframes.weekly.current}hrs</p>
                                <p class="previous">Last Week - <span class="previous">${card.timeframes.weekly.previous}hrs</span></p>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
        `
    }


// TO FETCH WEEKLY DATA ON CLICK
weekly.addEventListener("click", () => {
    fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .then(document.getElementById("daily", function () {appendData(data)}))
    .catch(function (err) {
        console.log(err);
    });

    function appendData(data) {
        
        let management = document.querySelector(".management").innerHTML = `
            ${data.map(function (card) {
                return `
                    <div class="task_container ${card.title.split(' ').join('')}">
                        <div class="task_card rounded">
                            <div class="task">
                                <p class="title">${card.title}</p>
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </div>
                            <div class="time">
                                <p class="current">${card.timeframes.weekly.current}hrs</p>
                                <p class="previous">Last Week - <span class="previous">${card.timeframes.weekly.previous}hrs</span></p>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
        `
    }
})

// TO FETCH DAILY DATA ON CLICK
dialy.addEventListener("click", () => {
    fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        loadDaily(data);
    })
    .catch(function (err) {
        console.log(err);
    });
    
    function loadDaily(data) {
        let management = document.querySelector(".management").innerHTML = `
            ${data.map(function (card) {
                return `
                    <div class="task_container ${card.title.split(' ').join('')}">
                        <div class="task_card rounded">
                            <div class="task">
                                <p class="title">${card.title}</p>
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </div>
                            <div class="time">
                                <p class="current">${card.timeframes.daily.current}hrs</p>
                                <p class="previous">Yesterday - <span class="previous">${card.timeframes.daily.previous}hrs</span></p>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
            `
    }
})


// TO FETCH MONTHLY DATA ON CLICK
monthly.addEventListener("click", () => {
    fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        loadMonthly(data);
    })
    .catch(function (err) {
        console.log(err);
    });
    
    function loadMonthly(data) {
        let management = document.querySelector(".management").innerHTML = `
            ${data.map(function (card) {
                return `
                    <div class="task_container ${card.title.split(' ').join('')}">
                        <div class="task_card rounded">
                            <div class="task">
                                <p class="title">${card.title}</p>
                                <i class='bx bx-dots-horizontal-rounded'></i>
                            </div>
                            <div class="time">
                                <p class="current">${card.timeframes.monthly.current}hrs</p>
                                <p class="previous">Last Month - <span class="previous">${card.timeframes.monthly.previous}hrs</span></p>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
            `
    }
})