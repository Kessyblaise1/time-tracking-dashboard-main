fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    });

    let title = document.querySelector(".task")
    function cowbell(value){
        console.log(value.title)
    }
    function appendData(data) {
        let titles = data.map().join('')
    }