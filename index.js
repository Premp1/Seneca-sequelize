const Product=require('./Product')
const seneca = require('seneca')()
const sequelize=require('./config')


async function connect(options) {
    try {
        await sequelize.authenticate();
        //await Product.sync();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

seneca.add({role:"admin",add:'prod'},async(args,respond)=>{

    const a=await Product.create({ProductName:args.name,ProductType:args.type})
    respond(null,{result:a})
})
seneca.add({role:"admin",fetch:'prod'},async(args,respond)=>{

    const a=await Product.findAll()
    respond(null,{result:a})
})
// seneca.act({role:"admin",add:'prod',name:'Helepad',type:'Air'},function (err, result) {
//         if (err) return console.error(err)
//         console.log(result)
//       })
sequelize.sync();
seneca.use(connect);
seneca.listen({type:'http',port:8080})
