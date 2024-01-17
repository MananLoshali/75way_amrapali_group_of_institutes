import nodemailer from "nodemailer"

const sendMail = async (req: Request, res: Response) => {
    let testAccount = await nodemailer.createTestAccount();

    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: 'madaline.smith12@ethereal.email',
            pass: 'DZSjcRsSPsVE2R1kVE'
        }
    })

    let info = await transporter.sendMail({
        from: '"Manan Loshali"<madaline.smith12@ethereal.email>', //sender mail address
        to: "mananloshali@gmail.com",
        subject: "Hello ",
        text: "hello how are you",
        html: "<b>HELLO HOW ARE YOU</b>",
    });
}