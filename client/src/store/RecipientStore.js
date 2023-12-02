import {makeAutoObservable} from "mobx";

export default class RecipientStore {
    constructor() {
        this._recipients = []
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setRecipients(recipients) {
        this._recipients = recipients
    }

    setSelectedRecipient(recipient) {
        this.setPage(1)
        this._selectedRecipient = recipient
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get recipients() {
        return this._recipients
    }

    get selectedRecipient() {
        return this._selectedRecipient
    }

    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
