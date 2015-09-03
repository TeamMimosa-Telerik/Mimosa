import gameEvent from './events/mainGamepageEvents.js';
import router from './tools/routerManager.js';

export function init() {

    router.routerManager();
    gameEvent.gameEvents();

}
 