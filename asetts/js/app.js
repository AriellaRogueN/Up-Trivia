

$.ajax({
    type: 'GET',
    url: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean",
    dataType: "json",
    success: function (data) {
        console.log(data);
        const category= data.results[0].category
        console.log (category)
        const question1 = data.results[0].question
        const correct1 = data.results[0].correct_answer
        const incorrect1 = data.results[0].incorrect_answers
        console.log(correct1)
        
        const question2 = data.results[1].question
        const correct2 = data.results[0].correct_answer
        const incorrect2 = data.results[0].incorrect_answers
        const question3 = data.results[2].question
        const correct3 = data.results[0].correct_answer
        const incorrect3 = data.results[0].incorrect_answers
        const question4 = data.results[3].question
        const correct4 = data.results[0].correct_answer
        const incorrect4 = data.results[0].incorrect_answers
        const question5 = data.results[4].question
        const correct5 = data.results[0].correct_answer
        const incorrect5 = data.results[0].incorrect_answers
        const question6 = data.results[5].question
        const correct6 = data.results[0].correct_answer
        const incorrect6 = data.results[0].incorrect_answers
        const question7 = data.results[6].question
        const correct7 = data.results[0].correct_answer
        const incorrect7 = data.results[0].incorrect_answers
        const question8 = data.results[7].question
        const correct8 = data.results[0].correct_answer
        const incorrect8 = data.results[0].incorrect_answers
        const question9 = data.results[8].question
        const correct9 = data.results[0].correct_answer
        const incorrect9 = data.results[0].incorrect_answers
        const question10 = data.results[9].question
        console.log(question10);
        const correct10 = data.results[0].correct_answer
        const incorrect10 = data.results[0].incorrect_answers

// 
       
    
 $(".btn-next").click(function () {
            $(".question").append("<h4>" + question1 + "</h4>" +
                                  "<div class='row'>" +
                                  "<div class='input-field col s3'>" +
                                  "<input value='' id='answer1' type='text' class='validate'>"  +
                                  "<label class='active' for='answer1'>False or True</label>"+
                                  "<button class='btn waves-effect waves-light btn-send' type='submit' name='action'>Submit<i class='material-icons right'>send</i>" +
                                  "</button></div></div>")

     Materialize.updateTextFields();

             $(".init").hide();                  
           });
          
        $(".btn-send").click(function () {
            const answer1 = $("#answer1").val();
            if (answer1 === correct1) {
                alert("You Win!");
            }
            else {
                alert("Loose");
            }
        })
            
        

               
        
            
            
            
            }   



});


                                
                                