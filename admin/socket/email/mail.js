"use strict";
const nodemailer = require("nodemailer");
	
	let transporter = nodemailer.createTransport({
		host: "smtp.163.com",
		// port: 465,
		// secure: true, // true for 465, false for other ports
		auth: {
		  user: "xiwenpp@163.com", //发送方邮箱
		  pass: "52NIxifu" // smtp授权码 	qq	vbpoxwmnctoihfge
		}
	  });

	function sendMail(mail,code){
		return new Promise((resolve,reject)=>{
			if(!mail || !code){
				reject('参数错误')
			}
			//邮件信息
			let mailOptions = {
			from: '"Fred Foo 👻" <xiwenpp@163.com>', // sender address
			to: `${mail}`, // list of receivers
			subject: "希文Gershwin科技注册验证码", // Subject line
			text: `欢迎注册您的验证码是${code},有效期5分钟，请注意安全`, // plain text body
			// html: "<b>Hello world?</b>" // html body
			};
		
			transporter.sendMail(mailOptions,(err,data)=>{
				if(err){
					reject('验证码发送失败')
				}else{
					resolve('验证码发送ok')
				}
			})
			
		})
	}
	module.exports={sendMail}
  
