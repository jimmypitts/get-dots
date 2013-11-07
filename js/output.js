$(document).ready(function() {
    $('#output').append('<pre></pre>');

    $('#show').click(function() {
        var new_points = [];
        for (var i in points) {
            var point = points[i];
            new_points.push({x: point[0], y: point[1]});
        }

        $('#output').removeClass('hide').empty().append(JSON.stringify(new_points, undefined, 2));
    });    
});
