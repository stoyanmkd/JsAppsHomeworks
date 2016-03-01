$(document).ready(function(){
    $('.button').click(function(){

        $.ajax({
            type: 'POST',
            dataType: "text",
            success: function(){
                var input = $('textarea.input').val();
                var json_obj = $.parseJSON(input);//parse JSON
                var output = '<table><tr><th>Manufacturer</th><th>Model</th><th>Year</th><th>Price</th><th>Class</th></tr>';

                for (var i in json_obj) {
                    output+= '<tr><td>' + json_obj[i].manufacturer +'</td>' +
                        '<td>' + json_obj[i].model +'</td>' +
                        '<td>' + json_obj[i].year +'</td>' +
                        '<td>' + json_obj[i].price +'</td>' +
                        '<td>' + json_obj[i].class +'</td></tr>';
                }

                output += '</table>';
                $('.output').html(output);
            }
        })
    });
});