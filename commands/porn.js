
module.exports = {
    name: 'porn',
    description: "this is a warn command" ,
    execute(message, args){
         var number =  Math.floor(Math.random() * 100) + 1;
         console.log(number);
         if(number < 10){
            message.reply("ananas");
         }
        else if(number < 20){
            message.reply("bazam ananasss");
         }
         else if(number < 30){
            message.reply("واقعا ک");
         }
         else if(number < 40){
            message.reply("خجالت اوره ");
         }
         else if(number < 50){
            message.reply("همچنان اناناس");
         }
         else if(number < 60){
            message.reply("حاجی بسه");
         }
         else if(number < 70){
            message.reply("حرفی ندارم");
         }
         else if(number < 80){
            message.reply("بای");
         }
         else if(number < 90){
             message.reply("https://www.aparat.com/result/amoozesh_namaz" +" داداش برو خودتو اصلاح کن  ");
         }
         else if(number < 100){
             message.reply("بای بای");
         }
     
         
    }
}
