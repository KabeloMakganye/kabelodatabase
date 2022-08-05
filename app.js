var http = require('http')

const express = require("express");
const port = 3000;

const bodyParser = require("body-parser")
const cors = require("cors")
const morgan=require("morgan")


const app = express();


process.env["NODE_TLS_REJECT_UNAUTHORIZED"]=0;

const db = require("./db");


app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.use(express.json());



// app.use("/in", clock_in);
// app.use("/out", clock_out);
// app.use("/all_employees",get_all);

var em;
var nm;

class ad{
    constructor()
    {
        var add;
    }
}
z=new ad();

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

  app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kabeloref@gmail.com',
    pass: 'Neontle#3'
  }
});

var mailOptions = {
  from: 'kabeloref@gmail.com',
  to: 'kabelomakganye@icloud.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};



app.get('/in/:name/:email',(req,res,next)=> {
    db.func("fn_add_new_clock",[req.params.email,req.params.name])
    // db.any("SELECT * FROM clock_in_out")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     }) 
     .catch(error => {
         console.log(error);
     })
})


/*app.get("/",(req,res)=> {
        res.send("Hello Welcome to Kabelo's API");
        console.log("Running")
  })*/
app.get('/all',(req,res)=> {
    db.func("getall_employees")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.post('/sendemail',(req,res)=> {
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'joesdrivethrough@gmail.com',
    pass: 'hqznwdjsfzzjowdj'
  }
});

var mailOptions = {
  from: 'joesdrivethrough@gmail.com',
  to: req.body.sendereamil,
  subject: 'Suggestion',
  text: req.body.sugestionmessage + req.body.sugestionname
};
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
          res.send('not sent');
        } else {
          console.log('Suggestion sent: ' + info.response);
          res.send('suggestion sent');
        }
      })
})

//create account
app.post('/register',(req,res)=> {
    // res.send("Sign up coming soon")
   db.func("fn_add_new_user",[
    req.body.name,
    req.body.surname,
    req.body.email])
    .then(rows => {
        if (rows[0].fn_add_new_user > 1) {
            //res.send("User registractered please confirm")
            var nodemailer = require('nodemailer');

            var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                user: 'joesdrivethrough@gmail.com',
                pass: 'hqznwdjsfzzjowdj'
              },
              from: 'joesdrivethrough@gmail.com',
            });
            
            var mailOptions = {
              from: 'joesdrivethrough@gmail.com',
              to: req.body.email,
              subject: 'BraJoes car wash login details',
              text: 'Hi. '+
              '\n\nYour user details are as follows. '+
              '\n\nName: '+req.body.name+
              '\n'+'Surname: '+req.body.surname+
              '\nPassword: '+ req.body.password+ 
              '\nReference number: '+ rows[0].fn_add_new_user+
              '\n\nKind regards'+
              '\nBrajoe Car wash '
              /*,html:'<h3>Hi.</h3> '+
              '<br><p>Your user details are as follows. </p>'+
              '<br><br><p>Name: '+req.body.name+
              '</p>'+'<p>Surname: '+req.body.surname+
              '</p><p>Password: '+ req.body.password+ 
              '</p><p>Reference number: '+ rows[0].fn_add_new_user+
              '</p><br><br><p>Kind regards'+
              '</p><p>Brajoe Car wash </p>'*/

            };
                transporter.sendMail(mailOptions, function(error, info){
                    /*if (error.message == 'No recipients defined') {
                      console.log(error.message);
                      res.send('Invalid email. please enter valid email. Ao');
                      return;
                    } else */
                    if (error) {
                        if (error.message == 'No recipients defined' )
                        {
                            res.send('Invalid email. please enter valid email. Ao.');
                        }
                        else {
                            res.send('Something went wrong. please try again.');
                        }
                        console.log(error.message);
                    } else {
                      console.log('Suggestion sent: ' + info.response);
                      res.send('User registered, copy of login details sent to your email');
                      //add activation procedure here
                    }
                  })
                  //res.send('User registered, copy of login details sent to your email');
        }
        else {
            res.send("user already registered")
            console.log(rows[0].fn_add_new_user);
        }
        //console.log(rows[0].fn_add_new_user);
    })
    .catch(error => {
        res.send("Something wrong happened")
    })
})

app.post('/image',(req,res)=> {
    console.log("hi"+req.body.todo);
    db.func("set_pic",req.body.todo)
    .then(rows => {
        console.log(rows);
        res.json(rows);
        res.send("Sign up coming soon")
    })
    .catch(error => {
        console.log(error);
        res.send("Something wrong happened")
    })
})

app.get('/bydate/:date',(req,res)=> {
    db.func("get_by_date",req.params.date)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/set_pic/:pic',(req,res,next)=> {
    db.func("set_pic",req.params.pic)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/get_pic',(req,res)=> {
    db.func("get_pic")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/get_all',(req,res)=> {
    db.func("get_all")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/get_by_email/:email',(req,res)=> {
    db.func("get_by_email",req.params.email)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get("/get_tot_hours/:email",(req,res,next)=> {
    db.func("get_tot_hours",req.params.email)
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get("/fn_set_hours/:email/:hours",(req,res,next)=> {
    db.func("fn_set_hours",[req.params.email,req.params.hours])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })
  app.get("/fn_change_password/:pass/:email",(req,res,next)=> {
    db.func("fn_change_password",[req.params.pass,req.params.email])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get("/fn_cunstomlockout/:email/:date/:tim",(req,res,next)=> {
    db.func("fn_customlockout",[req.params.email,req.params.date,req.params.tim])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get('/fn_get_activities',(req,res)=> {
    db.func("fn_get_activities")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})


app.get("/fn_add_new_activity/:name/:email/:newac/:newacdes/:newpriority/:newdeadline/:byuser",(req,res,next)=> {
    db.func("fn_add_new_activity",
    [
        req.params.name,
        req.params.email,
        req.params.newac,
        req.params.newacdes,
        req.params.newpriority,
        req.params.newdeadline,
        req.params.byuser
    ])
   // db.any("SELECT * FROM clock_in_out")
    .then(rows => {
        console.log(rows);
        res.json(rows);
    }) 
    .catch(error => {
        console.log(error);
    })
  })

  app.get('/fn_get_activitiy_by_email/:email',(req,res)=> {
    db.func("fn_get_activitiy_by_email",req.params.email)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/set_on/:pin',(req,res)=> {
    db.func("set_on",req.params.pin)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/set_room2on/:pin',(req,res)=> {
    db.func("set_room2on",req.params.pin)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})


app.get('/get_pir/',(req,res)=> {
    db.func("get_pir")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_get_chat/',(req,res)=> {
    db.func("fn_get_chat")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_add_chat/:name/:email/:chat',(req,res)=> {
    db.func("fn_add_chat",
    [
        req.params.name,
        req.params.email,
        req.params.chat
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get('/fn_get_gitlink/',(req,res)=> {
    db.func("fn_get_gitlinks")
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get("/fn_set_seen/:message",(req,res)=> {
    db.func("fn_set_seen",req.params.message)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/set_status/:sts_/:email_/:note_",(req,res)=> {
    db.func("set_status",
    [
        req.params.sts_,
        req.params.email_,
        req.params.note_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/fn_add_new_github/:program_name_/:githublink_/:addedBy",(req,res)=> {
    db.func("fn_add_new_github",
    [
        req.params.program_name_,
        req.params.githublink_,
        req.params.addedBy
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/fn_add_new_sales_business_application/:date_written_/:product_name_/:cost_/:contract_term_/:escallation_/:settlements_/:company_street_number_/:company_name_/:company_town_/:company_city_/:province_/:registered_company_name_/:trading_as_/:years_trading_/:registration_number_/:vat_number_/:turnover_/:owners_id_/:designation_/:telephone_/:cell_number_/:fax_/:postal_address_/:email_address_/:next_of_kin_/:landlord_details_/:company_/:no_/:bank_name_/:account_number_/:branch_name_/:trade_references_/:agent_",(req,res)=> {
    db.func("fn_add_new_sales_business_application",
    [
        req.params.date_written_,
        req.params.product_name_,
        req.params.cost_,
        req.params.contract_term_,
        req.params.escallation_,
        req.params.settlements_,
        req.params.company_street_number_,
        req.params.company_name_,
        req.params.company_town_,
        req.params.company_city_,
        req.params.province_,
        req.params.registered_company_name_,
        req.params.trading_as_,
        req.params.years_trading_,
        req.params.registration_number_,
        req.params.vat_number_,
        req.params.turnover_,
        req.params.owners_id_,
        req.params.designation_,
        req.params.telephone_,
        req.params.cell_number_,
        req.params.fax_,
        req.params.postal_address_,
        req.params.email_address_,
        req.params.next_of_kin_,
        req.params.landlord_details_,
        req.params.company_,
        req.params.no_,
        req.params.bank_name_,
        req.params.account_number_,
        req.params.branch_name_,
        req.params.trade_references_,
        req.params.agent_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get("/fn_add_new_sales_indiv_application/:date_written_/:product_name_/:cost_/:contract_term_/:escallation_/:settlements_/:street_number_/:customer_name_/:customer_town_/:customer_city_/:province_/:employers_name_/:years_employed_/:work_telephone_no_/:work_fax_no_/:id_no_/:marital_status_/:designation_/:telephone_/:cell_number_/:fax_/:alternative_number_/:postal_address_/:email_address_/:next_of_kin_/:next_of_kin_contacts_/:bank_name_/:account_number_/:branch_name_/:agent_",(req,res)=> {
    db.func("fn_add_new_sales_indiv_application",
    [
        req.params.date_written_,
        req.params.product_name_,
        req.params.cost_,
        req.params.contract_term_,
        req.params.escallation_,
        req.params.settlements_,
        req.params.street_number_,
        req.params.customer_name_,
        req.params.customer_town_,
        req.params.customer_city_,
        req.params.province_,
        req.params.employers_name_,
        req.params.years_employed_,
        req.params.work_telephone_no_,
        req.params.work_fax_no_,
        req.params.id_no_,
        req.params.marital_status_,
        req.params.designation_,
        req.params.telephone_,
        req.params.cell_number_,
        req.params.fax_,
        req.params.alternative_number_,
        req.params.postal_address_,
        req.params.email_address_,
        req.params.next_of_kin_,
        req.params.next_of_kin_contacts_,
        req.params.bank_name_,
        req.params.account_number_,
        req.params.branch_name_,
        req.params.agent_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/fn_get_all_busines_forms/:agent',(req,res)=> {
    db.func("fn_get_all_busines_forms",req.params.agent)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/fn_get_all_indiv_forms/:agent',(req,res)=> {
    db.func("fn_get_all_indiv_forms",req.params.agent)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/fn_get_selected_indiv_sales/:num',(req,res)=> {
    db.func("fn_get_selected_indiv_sales",req.params.num)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
app.get('/fn_get_selected_business_sale/:num',(req,res)=> {
    db.func("fn_get_selected_business_sale",req.params.num)
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get("/fn_update_indiv_form/:id_/:selectedindivdate_written/:selectedindivproduct_name/:selectedindivcost/:selectedindivcontract_term/:selectedindivescallation/:selectedindivsettlements/:selectedindivstreet_number/:selectedindivcustomer_name/:selectedindivcustomer_town/:selectedindivcustomer_city/:selectedindivprovince/:selectedindivemployers_name/:selectedindivyears_employed/:selectedindivwork_telephone_no/:selectedindivwork_fax_no/:selectedindivid_no/:selectedindivmarital_status/:selectedindivdesignation/:selectedindivtelephone/:selectedindivcell_number/:selectedindivfax/:selectedindivalternative_number/:selectedindivpostal_address/:selectedindivemail_address/:selectedindivnext_of_kin/:selectedindivnext_of_kin_contacts/:selectedindivbank_name/:selectedindivaccount_number/:selectedindivbranch_name",(req,res)=> {
    db.func("fn_update_indiv_form",
    [
        req.params.id_,
        req.params.selectedindivdate_written,
        req.params.selectedindivproduct_name,
        req.params.selectedindivcost,
        req.params.selectedindivcontract_term,
        req.params.selectedindivescallation,
        req.params.selectedindivsettlements,
        req.params.selectedindivstreet_number,
        req.params.selectedindivcustomer_name,
        req.params.selectedindivcustomer_town,
        req.params.selectedindivcustomer_city,
        req.params.selectedindivprovince,
        req.params.selectedindivemployers_name,
        req.params.selectedindivyears_employed,
        req.params.selectedindivwork_telephone_no,
        req.params.selectedindivwork_fax_no,
        req.params.selectedindivid_no,
        req.params.selectedindivmarital_status,
        req.params.selectedindivdesignation,
        req.params.selectedindivtelephone,
        req.params.selectedindivcell_number,
        req.params.selectedindivfax,
        req.params.selectedindivalternative_number,
        req.params.selectedindivpostal_address,
        req.params.selectedindivemail_address,
        req.params.selectedindivnext_of_kin,
        req.params.selectedindivnext_of_kin_contacts,
        req.params.selectedindivbank_name,
        req.params.selectedindivaccount_number,
        req.params.selectedindivbranch_name
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})

app.get("/fn_update_business_form/:id_/:date_written_/:product_name_/:cost_/:contract_term_/:escallation_/:settlements_/:company_street_number_/:company_name_/:company_town_/:company_city_/:province_/:registered_company_name_/:trading_as_/:years_trading_/:registration_number_/:vat_number_/:turnover_/:owners_id_/:designation_/:telephone_/:cell_number_/:fax_/:postal_address_/:email_address_/:next_of_kin_/:landlord_details_/:company_/:no_/:bank_name_/:account_number_/:branch_name_/:trade_references_/:agent_",(req,res)=> {
    db.func("fn_update_business_form",
    [
        req.params.id_,
        req.params.date_written_,
        req.params.product_name_,
        req.params.cost_,
        req.params.contract_term_,
        req.params.escallation_,
        req.params.settlements_,
        req.params.company_street_number_,
        req.params.company_name_,
        req.params.company_town_,
        req.params.company_city_,
        req.params.province_,
        req.params.registered_company_name_,
        req.params.trading_as_,
        req.params.years_trading_,
        req.params.registration_number_,
        req.params.vat_number_,
        req.params.turnover_,
        req.params.owners_id_,
        req.params.designation_,
        req.params.telephone_,
        req.params.cell_number_,
        req.params.fax_,
        req.params.postal_address_,
        req.params.email_address_,
        req.params.next_of_kin_,
        req.params.landlord_details_,
        req.params.company_,
        req.params.no_,
        req.params.bank_name_,
        req.params.account_number_,
        req.params.branch_name_,
        req.params.trade_references_,
        req.params.agent_
    ])
     .then(rows => {
         console.log(rows);
         res.json(rows);
     })
     .catch(error => {
         console.log(error);
     })
})
/* http.createServer(function(request, response) {
    response.writeHead(200, {"Constent-Type": "test/plain"})
    response.end("kabelo TESTING\n")
}).listen(process.env.PORT) */

app.use(cors());
app.listen(process.env.PORT)
module.exports=ad;
app.listen(port, () =>
 console.log(`server running at::: http://localhost:${port}`)
);
