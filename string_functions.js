
        function revers_string()
        {
            var str = prompt("Please enter a String to reverse ");
            str = str.split('').reverse().join('');
            str.length;
            alert("the reversed String is : "+str);

        }

        function count_char()
        {
            var str = prompt("Please enter a String to count number of char ");
            alert(str+ " : has "+str.length+" characters");

        }

        function capitalizeWords()
        {
            var str = prompt("Please enter a Sentence to capitalizes the first letter of each word ");
            var new_str = ""
            for(var i = 0 ; i<str.length;i++)
            {
                if( str[i-1] == " " || i == 0) new_str += " "+str[i].toUpperCase();
                else new_str += str[i]
            }

            alert(new_str);

        }


        // call all functions : 

       // revers_string();
        //count_char()
        //capitalizeWords();