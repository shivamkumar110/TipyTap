export default {
    lastId: 0,
    generateId (prefix = 'id') {
        this.lastId++
        return `${prefix}${this.lastId}`
    }
}