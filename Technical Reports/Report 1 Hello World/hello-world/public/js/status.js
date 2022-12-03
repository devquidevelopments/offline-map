document.addEventListener('DOMContentLoaded', init, false);

/**
 * Checks whether the website is online or offline and changes element in index.html
 * to mirror this.
 * 
 * @author Diogo Spinola
 * @see https://blog.logrocket.com/how-to-build-a-progressive-web-app-pwa-with-node-js/
 * 
 */
function init() {
    if (!navigator.onLine) {
        const statusElem = document.querySelector('.page-status')
        statusElem.innerHTML = 'offline'
    }
}