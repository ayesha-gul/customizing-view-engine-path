    let express = require("express");
    let app = express();
    let port = 3000;
    let path = require("path");




 // these two lines of code for using static site in express

   // set the path 
 //let staticSite = path.join(__dirname,"public");
  
 //using the middleware
// app.use(express.static(staticSite))

                // app.get("/", (req,res) => {
                //     res.send("hello to us")
                // });


// to show dynamic effect in static site

// to rechange the views engine name into templates


                      let templatePath = path.join(__dirname, 'templates')

                      app.set("view engine",'hbs');
                      app.set("views", templatePath);
                      
                              app.get("/", (req,res) => {
                                  res.render("index.hbs", {
                                    // can add dynamic effect as a object
                                    Graduation: "My graduation"
                                  });
                              })
                              
                              app.get("/about", (req,res) => {
                                res.send("my about page");
                            })
                                
                        app.listen(port, "127.0.0.1", () => {
                            console.log("listening to the port no 3000");
                        });

    
  // usse of partials as components in react built ones and we can use them by recalling in dffrnt files
  //working of partials are same as components  
  // need to require hbs template to use partials
  //let hbs = require("hbs");
//   let express = require("express");
//   let app = express();
//   let port = 3000;
//   let path = require("path");


//  // let partialsPath = path.join(__dirname,"templates/partials")
//   let templatePath = path.join(__dirname, 'templates')

//   app.set("view engine",'hbs');
//   app.set("views", templatePath);
//   hbs.registerPartials(partialsPath);

//   app.get("/", (req,res) => {
//     res.render("index.hbs", {
//       // can add dynamic effect as a object
//       Graduation: "My graduation"
//     });
// })

// app.get("/about", (req,res) => {
//   res.send("my about page");
// })
  
// app.listen(port, "127.0.0.1", () => {
// console.log("listening to the port no 3000");
// });