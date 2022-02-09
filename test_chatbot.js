import chatbot_panel from 'https://dfo.boost.ai/chatPanel/chatPanel.js';

const urlBase = 'https://dfo.boost.ai/';

var boost = window.chatbot_panel.boostChatPanel({
    urlBase: urlBase,
    filterValues: ['9990', 'selvbetjening'],
    pace: "fast"
});


