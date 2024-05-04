
function array_function()
{
    var my_array = prompt("Please enter many numbers  sepaarated by commas (e.g., 1, 2, 3): ");
    my_array = my_array.split(',');
    var max,min;
    var sum = 0 ;

    max = Math.max(...my_array);
    min = Math.min(...my_array);

    for(var i = 0 ;i< my_array.length;i++) sum += parseInt(my_array[i]);

    alert ("max = "+max+" , min = "+min+"\n sum = "+sum)
}


