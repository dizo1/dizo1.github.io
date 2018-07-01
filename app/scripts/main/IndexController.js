import idb from 'idb';
export default function IndexController(container){
    this._openSocket();
    this._registerServiceWorker();
}

IndexController.prototype._registerServiceWorker=function(){
    if(!navigator.serviceWorker)return;
    navigator,serviceWorker.register('/sw.js').then(function(){
        console.log('Registered SW');
    }).catch(function(){
        console.log('Registration Failed!');
    });
};