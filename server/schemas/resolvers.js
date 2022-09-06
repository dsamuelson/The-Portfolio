const { Project, Response } = require('../models');
const nodemailer = require('nodemailer')

const resolvers = {
    Query: {
        projects: async () => {
            return await Project.find({});
        },
        responses: async () => {
            return await Response.find({});
        }
    },
    Mutation: {
        addResponse: async (parent, args) => {
            const response = await Response.create(args);

            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true, // true for 465, false for other ports
                auth: {
                user: 'dsamuelson89@gmail.com',
                pass: process.env.APPASW,
                },
            });

            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: `${args.email}`,
                to: "dsamuelson89@gmail.com",
                subject: `Portfolio request from ${args.name}`,
                text: `Name: ${args.name}, Email: ${args.email}
                Message: ${args.message}`, 
            });

            console.log("Message sent: %s", info.messageId);

            return response;
        }
    }
}

module.exports = resolvers;