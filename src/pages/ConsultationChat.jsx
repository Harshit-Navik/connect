import React, { useState, useRef, useEffect } from 'react';

const ConsultationChat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'doctor',
      name: 'Dr. Anya',
      content: 'Hello John, how are you feeling today?',
      timestamp: '10:00 AM'
    },
    {
      id: 2,
      sender: 'patient',
      name: 'You',
      content: 'Hi Dr. Sharma, I\'m feeling a bit better, thank you. Still have some concerns about my recent test results.',
      timestamp: '10:02 AM'
    },
    {
      id: 3,
      sender: 'doctor',
      name: 'Dr. Anya',
      content: 'Understood. Let\'s review those together now. I have them pulled up on my screen.',
      timestamp: '10:03 AM'
    },
    {
      id: 4,
      sender: 'patient',
      name: 'You',
      content: 'Great, I\'m eager to understand them better.',
      timestamp: '10:04 AM'
    },
    {
      id: 5,
      sender: 'doctor',
      name: 'Dr. Anya',
      content: 'Okay, I see here that your Vitamin D levels are slightly lower than optimal.',
      timestamp: '10:05 AM'
    },
    {
      id: 6,
      sender: 'patient',
      name: 'You',
      content: 'Is that a major concern? What should I do about it?',
      timestamp: '10:06 AM'
    }
  ]);

  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const newMsg = {
      id: messages.length + 1,
      sender: 'patient',
      name: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setNewMessage('');

    // Simulate doctor's response after 2 seconds
    setTimeout(() => {
      const doctorResponse = {
        id: messages.length + 2,
        sender: 'doctor',
        name: 'Dr. Anya',
        content: 'Thanks for sharing. Let me review that and I\'ll get back to you shortly.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, doctorResponse]);
    }, 2000);
  };

  const handleStartVideoCall = () => {
    alert('Starting video call with Dr. Anya Sharma...');
  };

  const handleShareFiles = () => {
    alert('File sharing feature would open here...');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Consultation with Dr. Anya Sharma & Patient John Doe
          </h1>
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Secure video consultation • Started: Today, 10:00 AM
            </p>
            <button
              onClick={handleStartVideoCall}
              className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-200 flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Join Video Call
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Chat Header */}
          <div className="bg-blue-600 text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="font-semibold">AS</span>
                </div>
                <div>
                  <h3 className="font-semibold">Dr. Anya Sharma</h3>
                  <p className="text-blue-100 text-sm">Cardiologist • Online</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={handleShareFiles}
                  className="p-2 hover:bg-blue-500 rounded-lg transition duration-200"
                  title="Share Files"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-blue-500 rounded-lg transition duration-200" title="Call">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'patient' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === 'patient'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white text-gray-900 border border-gray-200 rounded-bl-none'
                  }`}
                >
                  {message.sender === 'doctor' && (
                    <div className="text-xs font-medium text-blue-600 mb-1">
                      {message.name}
                    </div>
                  )}
                  <div className="text-sm">{message.content}</div>
                  <div
                    className={`text-xs mt-1 ${
                      message.sender === 'patient' ? 'text-blue-200' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Typing Indicator */}
          <div className="bg-white border-t border-gray-200 p-4">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span>Dr. Anya is typing...</span>
            </div>
          </div>

          {/* Message Input */}
          <div className="bg-white border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={!newMessage.trim()}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Consultation Details Sidebar */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Patient Info */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Patient Information</h3>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-600">Name</label>
                <p className="text-gray-900">John Doe</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Age</label>
                <p className="text-gray-900">35 years</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Condition</label>
                <p className="text-gray-900">Vitamin D Deficiency</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Last Visit</label>
                <p className="text-gray-900">March 15, 2024</p>
              </div>
            </div>
          </div>

          {/* Consultation Notes */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Notes</h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">Current Concerns</h4>
                <ul className="text-yellow-700 text-sm list-disc list-inside space-y-1">
                  <li>Fatigue and low energy levels</li>
                  <li>Vitamin D test results review</li>
                  <li>Diet and supplement recommendations</li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Discussion Points</h4>
                <ul className="text-blue-700 text-sm list-disc list-inside space-y-1">
                  <li>Review lab results for Vitamin D levels</li>
                  <li>Discuss dietary sources of Vitamin D</li>
                  <li>Consider Vitamin D supplementation</li>
                  <li>Follow-up plan and next steps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationChat;