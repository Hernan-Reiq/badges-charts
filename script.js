var ctx = document.getElementById('myChart').getContext('2d');
var datachart = {
    labels: ['Front-end', 'Back-end', 'Diseño', 'Tecnologías'],
    datasets: [{
        data: [13, 8, 3, 6],
        backgroundColor: [
            'rgba(26, 26, 26, 1)',
            'rgba(59, 147, 247, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 193, 7, 1)'
        ],
        borderColor: [
            'rgba(26, 26, 26, 1)',
            'rgba(59, 147, 247, 1)',
            'rgba(255, 0, 0, 1)',
            'rgba(255, 193, 7, 1)'
        ],
        borderWidth: 1
    }]
};
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: datachart
});