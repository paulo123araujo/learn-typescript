import EventHandler from './EventHandler';

export default abstract class AbstractShareButton
{
    protected eventHandler: EventHandler;
    protected clazz: string;

    constructor(eventHandler: EventHandler, clazz: string) {
        this.clazz = clazz;
        this.eventHandler = eventHandler;
    }

    abstract createAction(): any;

    bind() {
        const action = this.createAction()
        this.eventHandler.addEventListenerToClass(this.clazz, 'click', action);
    }
}
