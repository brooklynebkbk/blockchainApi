$(function() {
console.log( "mic check!" );
$("#button").click(function(){
  console.log("clicked");
})
});
  // let body = $("body");
  // let row = $("#row");
  //logs character information
  //let charcterInput =
  //let characterRealm =
  // $.ajax({
  //     url: "https://us.api.battle.net/wow/character/Khaz%20Modan/Shadowstryke?fields=items&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //     method: "GET",
  //     success: function(data){
  //       console.log(data.items);
  //       console.log(data.items.back.id, data.items.back.itemLevel, data.items.back.name, data.items.back.quality);
  //       // $("#items").text(data.items);
  //     }
  // });
  // $.ajax({
  //   url: "https://us.api.battle.net/wow/item/141448?locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(stats){
  //     console.log(stats);
  //     console.log("Specific info on stats: "+stats.name, stats.id, stats.requiredLevel, stats.icon);
  //     $("#icon").attr("src='http://media.blizzard.com/d3/icons/items/large/<API response for "+stats.icon+".png'");

  //   }
  // });
  // $.ajax({
  //   url:"https://us.api.battle.net/wow/data/character/achievements?locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   succes: function(achievements){
  //     console.log(achievements)
  //   }
  // });
  // $.ajax({
  //   url:"https://us.api.battle.net/wow/boss/?locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(bosses){
  //     console.log(bosses)
  //   }
  // })
  // $.ajax({
  //   url: "https://us.api.battle.net/wow/quest/13146?locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(quest){
  //     console.log(quest);
  //   }
  // });

  // $.ajax({
  //   url:"https://us.api.battle.net/wow/character/Khaz%20Modan/Shadowstryke?fields=quests&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(completed_quests){
  //     console.log(completed_quests.quests)
  //   }
  // });
  // $.ajax({
  //   url: "https://us.api.battle.net/wow/character/Khaz%20Modan/Shadowstryke?fields=achievements&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(achievements){
  //     console.log(achievements.achievements)
  //   }
  // });
  // $.ajax({
  //   url: "https://us.api.battle.net/wow/character/Khaz%20Modan/Shadowstryke?fields=progression&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
  //   method: "GET",
  //   success: function(progression){
  //     console.log(progression)
  //   }
  // });

// let realm = $("#realm").text().split(" ").join("%20").toString();
// let name = $("body > div.row > div > div > div.card-content.white-text > span:nth-child(1)").text().toString();
// $("#column1").removeClass().addClass("col s12 m4 offset-3");
// row.append("<div class='col s12 offeset-7 m4'><div class='card orange accent-2 center-align'><h5 class='blue-grey-text text-darken-3 center-align'><br>Recent BOSSKILLS</h5><br><div id='bossfeed'></div></div></div>");
//   $.ajax({
//     url: "https://us.api.battle.net/wow/character/"+realm+"/"+name+"?fields=feed&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
//     method: "Get",
//     success: function(stuff){
//       console.log(stuff)
//       $("#bossfeed").empty();
//       (stuff.feed).forEach(function(el){
//         if(el.type ==="BOSSKILL"){
//           // console.log(el.type)
//           // console.log(el.timestamp)
//           // console.log(el.criteria.description)
//           // console.log(el.criteria.id)
//           let type = el.type
//           let timestamp = el.timestamp
//           let name = (el.criteria.description).split("'").join("").toString();
//           let url_slug = (name).split("-").join("").toString();
//           let url = (url_slug).split(" ").join("-").toLowerCase().toString();
//           let id = el.criteria.id
//           // $("#column1").removeClass().addClass("col s12 m4 center-align");
//           // let the_div =
//           $("#bossfeed").append("<p><a href='/bosses#"+url+"'>"+name+"</a></p>");

//           // let inner_div = body.append("<div class='card-panel orange-accent-3'></div>");
//           // let the_span = body.append("<span></span>");
//           // let span_text = body.append(type+timestamp+name+id);
//           // let newod = outer_div.addClass("col s12 offset-4 m4");
//           // let newid = inner_dev.addClass("card-panel orange-accent-3");
//           // span_text.append(the_span);
//           // the_span.append(inner_div);
//           // inner_div.append(outer_div);
//           // the_div.append(row);


//     // <div class="row">
//     //   <div class="col s12 m5">
//     //     <div class="card-panel teal">
//     //       <span class="white-text">I am a very simple card. I am good at containing small bits of information.
//     //       I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
//     //       </span>
//     //     </div>
//     //   </div>
//     // </div>

//         // } else {
//         //   console.log("there are no recent BOSSKILL achievements for your character")
//         }
//       })
//     }
// })


//   // $.ajax({
//   //   url: "https://us.api.battle.net/wow/character/Khaz%20Modan/Shadowstryke?fields=appearance&locale=en_US&apikey=96364mx9y5mxhegzrammhwhwms385wnc",
//   //   method: "GET",
//   //   success: function(appearance){
//   //     console.log(appearance.appearance);

//   //   }
//   // });
// });














// })
// });
















