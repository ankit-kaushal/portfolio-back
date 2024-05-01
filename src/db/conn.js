const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ankitkaushal882:B9740CCs6TCMdTJb@cluster0.hcapf5i.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB Connected Successfully");
}).catch((e)=>{
    console.log("No connection",e);
})