import EventHandler from './EventHandler';

export default class MockEventHandler implements EventHandler {
    addEventListenerToClass(clazz: string, event: string, callbackEvent: any) {
        console.log(clazz, event, callbackEvent);
    }
}
