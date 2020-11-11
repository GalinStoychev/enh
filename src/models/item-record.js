export default class ItemRecord {
  constructor(title = 'Title',
              name = 'Company Name',
              description = 'Company Description',
              location = 'New York, NY',
              period = 'Date period') {
    this.title = title
    this.name = name
    this.description = description
    this.location = location
    this.period = period
    this.id = this.generateId()
  }

  generateId() {
    return Math.random().toString(36).substr(2, 9)
  }
}