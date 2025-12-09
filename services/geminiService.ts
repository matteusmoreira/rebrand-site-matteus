import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;

const SYSTEM_INSTRUCTION = `
Você é a IA assistente do portfólio de Matteus Moreira. 
Seu objetivo é responder perguntas de recrutadores e visitantes sobre o Matteus de forma profissional, carismática e breve.

Informações sobre o Matteus:
- Engenheiro de Software Sênior.
- Especialista em React, React Native e Ecossistema JavaScript.
- 6 anos de experiência no mercado.
- Apaixonado por UI Design e Performance.
- Atualmente aberto a propostas internacionais.
- Contato: contato@matteusmoreira.com

Responda sempre em Português do Brasil, de forma polida e convidativa. Tente convencer o usuário a contratar o Matteus.
Não invente fatos que não estão aqui. Se não souber, sugira entrar em contato pelo formulário.
`;

export const getGeminiChat = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
  }
  return chatSession;
};

export const sendMessageStream = async (message: string) => {
  const chat = getGeminiChat();
  return await chat.sendMessageStream({ message });
};