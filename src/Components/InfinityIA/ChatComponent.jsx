import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './ChatComponent.css';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);

    const ApiKey = 'AIzaSyASom9PU4CeO-UXzGA7Z1wbXQ3ow3CWKo0'; 
    const genAI = new GoogleGenerativeAI(ApiKey);
    
    useEffect(() => {
        const setupChat = async () => {
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: "\nPor favor, proporciona respuestas cortas y concisas. Si es necesario listar elementos o hacer preguntas, asegúrate de separar cada ítem o pregunta con saltos de línea para una mejor claridad. Eres un Licenciado en Turismo, experto en actividades culturales y sociales en todo el mundo. Das buenas recomendaciones sobre itinerarios de viajes y todo relacionado al turismo de acuerdo a lo que te pide el usuario. Con una o dos preguntas ya puedes generar un itinerario de viaje, sin necesidad de pedir más, a excepción que el usuario lo pida. Quiero que reemplaces los # y * con saltos de linea. Con una sola consulta del usuario ya  respondes con un itinerario armado, que vas a modificar de acuerdo a lo que te pida el usuario. No hace falta que hagas muchas preguntas. Con una o dos basta. Solo respondes a tematicas relacionadas con el turismo, viajes y sociedad, no sobre otros temas. GENERA LA SALIDA CON SALTOS DE LINEA, LAS PREGUNTAS CON SALTO DE LINEA. NO RESPONDAS CON * NI CON *, NI CON ***, #, EN SU LUGAR ESCRIBE ABAJO LAS PREGUNTAS Y RESPUESTAS CON SALTO DE LINEA.",
            });
            const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 64,
                maxOutputTokens: 1500,
                responseMimeType: "text/plain",
            };
            const chatSession = model.startChat({
                generationConfig,
            });
            const initialResponse = await chatSession.sendMessage("Hola");
            setMessages([{ text: initialResponse.response.text(), fromUser: false }]);
        };
        setupChat();
    }, []);

    const handleSendMessage = async () => {
        setLoading(true);
        const chatSession = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: "\nPor favor, proporciona respuestas cortas y concisas. Si es necesario listar elementos o hacer preguntas, asegúrate de separar cada ítem o pregunta con saltos de línea para una mejor claridad.\nEres un Licenciado en Turismo, experto en actividades culturales y sociales en todo el mundo. Das buenas recomendaciones sobre itinerarios de viajes y turismo de acuerdo a lo que te pide el usuario. Con una o dos preguntas ya puedes generar un itinerario de viaje, sin necesidad de pedir más, a excepción que el usuario lo pida. Quiero que reemplaces los # y * con saltos de linea. Con una sola consulta del usuario ya  respondes con un itinerario armado, que vas a modificar de acuerdo a lo que te pida el usuario. No hace falta que hagas muchas preguntas. Con una o dos basta. Solo respondes a tematicas relacionadas con el turismo, viajes y sociedad, no sobre otros temas. Utiliza \n para dar tus respuestas",
        }).startChat();
        
        const response = await chatSession.sendMessage(inputText);
        const formattedMessages = formatChatMessages(inputText, response.response.text());
        setMessages([...messages, ...formattedMessages]);
        setInputText('');
        setLoading(false);
    };

    const formatChatMessages = (userInput, botResponse) => {
        // Separar líneas basadas en asteriscos y almohadillas
        const lines = botResponse.split(/\n+/);
        const formattedLines = lines.map(line => {
            if (line.trim().startsWith('*')) {
                return line.replace(/\* /g, '\n');
            } else if (line.trim().startsWith('#')) {
                return line.replace(/# /g, '\n');
            } else {
                return line;
            }
        });
        const formattedResponse = formattedLines.join('\n');
        
        return [
            { text: userInput, fromUser: true },
            { text: formattedResponse, fromUser: false }
        ];
    };

    return (
        <div className="chat-container">
            <div className="info-panel">
                <h3>¿Cómo usar el chatbot?</h3>
                <p>
                    ¡Bienvenido al chat de InfinityIA de asistencia turística! Aquí encontrarás recomendaciones personalizadas para tus viajes basadas en tus preferencias. Sigue estos pasos para comenzar:
                </p>
                <ul>
                    <li><p className='item'>Escribe un mensaje:</p> Ingresa tu consulta o lo que te gustaría saber sobre tu próximo viaje.</li>
                    <li><p className='item'>Interactúa:</p> El Infinity IA responderá proporcionando información útil sobre itinerarios, actividades culturales, alojamiento, transporte y más, adaptados a tus intereses específicos en destinos turísticos.</li>
                    <li><p className='item'>Explora opciones:</p> Pregunta sobre lugares de interés, restaurantes recomendados, consejos de viaje o cualquier otra duda relacionada con tu viaje.</li>
                    <li><p className='item'>Historial de conversaciones:</p> El chat mantiene un registro de la conversación para que puedas seguir fácilmente el hilo y revisar recomendaciones anteriores.</li>
                </ul>
                <p>Después de tomar en cuenta todas estas recomendaciones ¡No dudes en enviarnos un mensaje para empezar esta aventura con nosotros!</p>
            </div>
            <div className="chat-content">
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.fromUser ? 'user-message' : 'ai-message'}`}>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>
                <div className="chat-input">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Escribe un mensaje..."
                    />
                    <button onClick={handleSendMessage} disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatComponent;
