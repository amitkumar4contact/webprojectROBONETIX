/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Properties;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 *
 * @author zishan
 */

public class EmailSender {

    //It is used to send email.
    public boolean sendMail(String to, String subject, String content) {
        String SMTP_HOST_NAME = "smtp.gmail.com";
        int SMTP_HOST_PORT = 465;
        String SMTP_AUTH_USER = "contactus5289@gmail.com";
        String SMTP_AUTH_PWD = "hell0.w0rld";
        Properties props = new Properties();
        props.put("mail.transport.protocol", "smtps");
        props.put("mail.smtps.host", SMTP_HOST_NAME);
        props.put("mail.smtps.auth", "true");
        props.put("mail.smtps.ssl.trust", "*");
        Session mailSession = Session.getInstance(props);
        // mailSession.setDebug(true);
        try {
            Transport transport = mailSession.getTransport();
            transport.connect(SMTP_HOST_NAME, SMTP_HOST_PORT, SMTP_AUTH_USER, SMTP_AUTH_PWD);
            MimeMessage message = new MimeMessage(mailSession);
            message.setSubject(subject);
            message.setContent(content, "text/html");
            message.setFrom(new InternetAddress(SMTP_AUTH_USER));
            message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
            transport.sendMessage(message, message.getRecipients(Message.RecipientType.TO));
            transport.close();
            return true;
        } catch (MessagingException me) {
            System.out.println(me);
            return false;
        }
    }

    public static void main(String[] args) {

        EmailSender er = new EmailSender();
        er.sendMail("nabeel.awt@gmail.com", "", "");

    }

}
