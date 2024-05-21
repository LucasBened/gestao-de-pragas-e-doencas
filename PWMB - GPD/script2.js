google.charts.load('current', {
  packages: ['geochart'],
})
google.charts.setOnLoadCallback(drawRegionsMap)

function drawRegionsMap() {
  var data = google.visualization.arrayToDataTable([
    [
      'País',
      'Zonas Afetadas',
      'População',
      { role: 'tooltip', type: 'string', p: { html: true } },
    ],
    [
      'Germany',
      200,
      83000000,
      '<b>Alemanha</b><br>Zonas Afetadas: 200<br>População: 83M',
    ],
    [
      'United States',
      300,
      328000000,
      '<b>Estados Unidos</b><br>Zonas Afetadas: 300<br>População: 328M',
    ],
    [
      'Brazil',
      400,
      209000000,
      '<b>Brasil</b><br>Zonas Afetadas: 400<br>População: 209M',
    ],
    [
      'Canada',
      500,
      37000000,
      '<b>Canadá</b><br>Zonas Afetadas: 500<br>População: 37M',
    ],
    [
      'France',
      600,
      67000000,
      '<b>França</b><br>Zonas Afetadas: 600<br>População: 67M',
    ],
    [
      'RU',
      700,
      66000000,
      '<b>Reino Unido</b><br>Zonas Afetadas: 700<br>População: 66M',
    ],
  ])

  var options = {
    colorAxis: { colors: ['red', 'orange'] }, // Define a escala de cores
    legend: 'none',
    tooltip: { isHtml: true }, // Permitir HTML nos tooltips
  }

  var chart = new google.visualization.GeoChart(
    document.getElementById('regions_div2'),
  )
  chart.draw(data, options)
}