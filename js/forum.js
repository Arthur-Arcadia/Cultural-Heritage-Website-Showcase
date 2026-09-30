import { postFormData } from './modules/postFormData.js';
import { fetchGetData } from './modules/getData.js';
import {initButtonPressEffect} from './modules/button.js';

const API_URL = 'https://damp-castle-86239-1b70ee448fbd.herokuapp.com/decoapi/genericchat/';
const STUDENT_NUMBER = 's4926903';
const WEBSITE_CODE = '7556cbed';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('chat-form');
    const feedback = document.getElementById('form-feedback');
    const chatContainer = document.getElementById('chat-container');
    const refreshBtn = document.getElementById('refresh-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        feedback.textContent = 'Submitting...';

        const headers = {
            'student_number': STUDENT_NUMBER,
            'uqcloud_zone_id': WEBSITE_CODE
        };

        const { success, data } = await postFormData(form, API_URL, headers);

        if (success) {
            feedback.textContent = data.message || 'Chat post submitted!';
            form.reset();
            loadChats();
        } else {
            feedback.textContent = data.message || 'Something went wrong.';
        }
    });

    refreshBtn.addEventListener('click', loadChats);

    async function loadChats() {
        chatContainer.innerHTML = 'Loading messages...';

        const posts = await fetchGetData(API_URL);
        if (!posts) {
            chatContainer.innerHTML = `<p>Error loading messages. Please try again later.</p>`;
            return;
        }

        chatContainer.innerHTML = posts.map(p => `
        <div class="chat-post">
            <strong>${p.person_name}</strong> <em>${p.chat_date_time}</em><br>
            <strong>${p.chat_post_title}</strong><br>
            <p>${p.chat_post_content}</p>
        </div>
    `).join('');
    }

    loadChats(); // 初始加载
    initButtonPressEffect();
});