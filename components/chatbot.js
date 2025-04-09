// require('dotenv').config({path:"./.env"});
"use client"
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from './chatbot.module.css'




export default function Chatbot() {
  const { GoogleGenerativeAI} = require("@google/generative-ai");
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `You are an AI-powered customer support assistant for PurelyYou, a platform that provides personalized skincare recommendations. Give concise answers and keep the following points in mind: 
    
    1. PurelyYou offers users personalized skincare recommendations based on the information they provide in our form. 
    2. Our platform helps users narrow down what items are best suited.
    3. We have a database of over 500 skincare items. The database includes cleansers, moisturizers, toners, and serums. Our database does not include makeup products.
    4. The form that users fill out to get recommendations is acessed through clicking the 'Get customizing today' button on the homepage.
    5. Our homepage showcases some of the brands listed in our database.
    6. Our mission statement is as follows:
        "We believe that everyone deserves healthy, radiant skin. However, navigating the vast world of skincare can be overwhelming and confusing.
        Our mission is to simplify this process by offering personalized solutions that are easy to follow. By understanding your skin’s needs and providing tailored recommendations, we aim to empower you to achieve your best skin yet.
        Because when you feel good in your skin, it reflects in your confidence and overall well-being."
    7. Only answer questions regarding how to navigate the site, our mission statement, where to find some brands in our database. Do not give users skincare or beauty recommendations. 
    8. If a user asks for recommendations, guide them to filling out the form on our site.
    9. If a user's query falls outside what you can respond, apologize for the inconvenience and that you cannot answer that question. If they ask about makeup, let them know our site does not handle makeup products.
    10. Our recommendations should not be taken as professional advice. We simply narrow down to potential products that may be beneficial to the user. Remind users to ultimately consult their doctors.
    11. Always maintain user privacy and do not share personal information.
    12. If you're unsure about any information, it's okay to say you don't know.
    13. Keep your answers as concise as possible. Aim for 1-2 sentences.

    Your goal is to provide accurate information, assist with common inquiries, and ensure a positive experience for all users.`
  });

  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: `Hi! I'm the PurelyYou Support Agent, how can I help you today?`
  }])

  const [message, setMessage] = useState('')

  async function run(userMessage) {
    setMessage('')
    setMessages((messages)=>[
      ...messages,
      {role: 'user', content:userMessage},
      {role: 'assistant', content:''}])

    console.log(userMessage)
    const result = await model.generateContent(userMessage)
    const response = await result.response
    const text = await response.text()
    setMessages((messages)=>[
      ...(messages.slice(0,messages.length-1)),
      {role: 'assistant', content:text}
    ])
    console.log(result)
    console.log(response.body)
  }

  const messagesEndRef = React.createRef()
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(()=>{
    scrollToBottom(),[messages]
  });

  return(
    <div className={styles.chatbot}>
        <Box  width='38vw' height='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
    <Typography variant='h5' width='50%' display='flex' justifyContent='center' alignItems='center' bgcolor={"#637788"} border={'px solid black'} padding={0.5} color={'white'}>Welcome to the PurelyYou Support Center</Typography>
    <Stack direction='column' width='50%' height='40vh' border='1px solid black' bgcolor='white' padding={2} spacing={3}>
      <Stack direction='column' spacing={2} flexGrow={1} overflow='auto' maxHeight='100%'>
        {messages.map((message, index)=>(
          <Box key={index} display='flex' justifyContent={message.role === 'assistant' ? "flex-start" : "flex-end"}>
            <Box bgcolor={message.role==='assistant' ? 'primary.main' : 'secondary.main'} color='white' borderRadius={16} padding={3}>
              {message.content}
            </Box>
          </Box>
        ))}
        <Box ref={messagesEndRef}/>
      </Stack>
      <Stack direction='row' spacing={2}>
        <TextField label='message' fullWidth value={message} onChange={(e) =>setMessage(e.target.value)}/>
        <Button variant="contained" onClick={()=>{run(message)}}>Send</Button>
      </Stack>
    </Stack>
  </Box>
    </div>
  )
  
}