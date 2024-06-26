import React, { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './ChatComponent.css'

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
                systemInstruction: "\"Eres un Licenciado en Turismo, experto en actividades culturales y sociales en todo el mundo. Das buenas recomendaciones sobre itinerarios de viajes, alojamiento, ubicaciones, distancias y medios de transporte de acuerdo a las preferencias del usuario\"",
            });
            const generationConfig = {
                temperature: 1,
                topP: 0.95,
                topK: 64,
                maxOutputTokens: 8192,
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
            systemInstruction: "\"Eres un Licenciado en Turismo, experto en actividades culturales y sociales en todo el mundo. Das buenas recomendaciones sobre itinerarios de viajes, alojamiento, ubicaciones, distancias y medios de transporte de acuerdo a las preferencias del usuario\"",
        }).startChat({
           
        });
        const response = await chatSession.sendMessage(inputText);
        setMessages([...messages, { text: inputText, fromUser: true }, { text: response.response.text(), fromUser: false }]);
        setInputText('');
        setLoading(false);
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
            <div className="chat-messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.fromUser ? 'user-message' : 'ai-message'}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
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
}    

export default ChatComponent;
