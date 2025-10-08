
const purpleButton=document.getElementById('make-purple')
            purpleButton.onclick=makePurple;

            function makePurple(){
                document.body.style.backgroundColor='purple';
            }
        // final 

        document.getElementById('make-orange').addEventListener('click',function(){
            document.body.style.backgroundColor='orange';
        })