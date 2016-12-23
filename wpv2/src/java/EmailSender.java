/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

/**
 *
 * @author nabeel
 */
public class EmailSender {

    private final String to;

    private final String subjet;

    private final String body;

    public EmailSender(String to, String subject, String body) {

        this.to = to;

        this.subjet = subject;

        this.body = body;
    }

    public void send() {

        //   String to = "sonoojaiswal1988@gmail.com";//change accordingly  
        String from = "sonoojaiswal1987@gmail.com";
 

        //Get the session object  
        Properties properties = System.getProperties();
        
        properties.setProperty("mail.smtp.host", "smtp.gmail.com");
        
        Session session = Session.getDefaultInstance(properties);

        //compose the message  
        try {
            MimeMessage message = new MimeMessage(session);
            message.setFrom(new InternetAddress(from));
            message.addRecipient(Message.RecipientType.TO, new InternetAddress(to));
            message.setSubject(subjet);
            message.setText(body);

            // Send message  
            Transport.send(message);
            System.out.println("message sent successfully....");

        } catch (MessagingException mex) {
            mex.printStackTrace();
        }
    }

}
