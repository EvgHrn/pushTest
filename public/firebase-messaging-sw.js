importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");
const firebaseConfig = {
    apiKey: "AIzaSyB1GlGJi1naoccuhakNoF53d9PUhtkynqc",
    authDomain: "pushtest-5b8c5.firebaseapp.com",
    databaseURL: "https://pushtest-5b8c5.firebaseio.com",
    projectId: "pushtest-5b8c5",
    storageBucket: "pushtest-5b8c5.appspot.com",
    messagingSenderId: "1040037119059",
    appId: "1:1040037119059:web:581ef0f66b58dfd372f2a6",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
        .then(() => {
            return registration.showNotification("my notification title");
        });
    return promiseChain;
});
self.addEventListener("notificationclick", function(event) {
    console.log(event);
});