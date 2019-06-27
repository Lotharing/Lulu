 $i = 0;
        $('#start').click(function(){
            $i++;
            if($i >=6 ){
                $('#start').hide();
                $('#stop').show();
            }
        })
        $('#stop').click(function(){
            alert('还不够吗，我都词穷啦！！')
            $(this).hide();
        })
