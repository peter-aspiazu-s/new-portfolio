import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// No necesito 'dotenv.config()' en Next.js, ya carga .env
// Las variables de entorno se acceden directamente con process.env

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json(); // Parsea el cuerpo de la solicitud JSON

    // Validar datos básicos antes de continuar
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Faltan campos obligatorios (nombre, email, mensaje).' }, { status: 400 });
    }
    
    // Configura tu transporter de Nodemailer
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: process.env.EMAIL_USER, // Tu correo de envío
        pass: process.env.EMAIL_PASSWORD, // Tu contraseña de aplicación de Gmail
      },
      secure: true,
    });

    const mailData = {
      from: process.env.EMAIL_USER, // Remitente (tu propio correo)
      to: process.env.RECIPIENT_EMAIL || 'paspiazusabando@gmail.com', // Correo al que se enviará el mensaje
      subject: subject,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: `
        <div>
          <h3>Nuevo mensaje de tu portafolio</h3>
          <p><strong>De:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Asunto:</strong> ${subject}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${message}</p>
        </div>
      `,
    };

    // Envía el correo
    await transporter.sendMail(mailData);

    // Responde al cliente con éxito
    return NextResponse.json({ message: 'Correo enviado correctamente' }, { status: 200 });

  } catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json({ message: 'Error al enviar el correo' }, { status: 500 });
  }
}