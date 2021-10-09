let dialy = document.querySelector(".daily");

fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    // .then(function (data) {
    //     // document.getElementById("daily").addEventListener("click", loadDaily(data));
    //     // document.getElementById("weekly").addEventListener("click", appendData(data));
    //     loadDaily(data)
    // })
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
                                <p class="previous">Last Week - <span class="previous">${card.timeframes.daily.previous}hrs</span></p>
                            </div>
                        </div>
                    </div>
                `
            }).join("")}
            `
    }