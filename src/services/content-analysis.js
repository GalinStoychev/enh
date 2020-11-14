export default class ContentAnalysis {
  constructor(text) {
    this.text = text
  }

  call() {
    let result = []

    if(this.text.indexOf('many projects') >= 0) {
      result.push(
        {
          "range": this._getIndexes('many projects'),
          "message": "This is vague. Instead of “Managed projects for many clients”, say “Managed projects for 10 clients including BlueBank.”"
        }
      )
    }

    if(this.text.indexOf("I've done many projects") >= 0) {
      result.push(
        {
          "range": this._getIndexes("I've done many projects"),
          "message": "Include a valuable metric if possible. For example: \"Increased revenue by 20% within one month.\"."
        }
      )
    }

    return result  
  }

  _getIndexes(searchText) {
    const startIndex = this.text.indexOf(searchText)
    const endIndex = startIndex + searchText.length - 1
    return [startIndex, endIndex]
  }
}