export default class FormatSuggestions {
  constructor(suggestions, text) {
    this.suggestions = suggestions
    this.text = text
  }

  call() {
    const partitions = this._partitionElements()
    return this._addEmptyPartitions(partitions)
  }

  _partitionElements() {
    const sortedSuggestions = JSON.parse(JSON.stringify(this.suggestions))
    sortedSuggestions.sort((a, b) => a.range[0] - b.range[0])
    
    let lastIndex = sortedSuggestions[0].range[1]
    sortedSuggestions.forEach(suggestion => {
      const index = suggestion.range[1]
      if (lastIndex < index) {
        lastIndex = index
      }
    })

    let result = []
    const size = sortedSuggestions.length
    for (let i = 0; i < size; i++) {
      const [a1, a2] = sortedSuggestions[i].range
      
      if (i + 1 === size) { // last element
        if (a2 < lastIndex) { // leftover
          result.push({ range: [a1, a2 - 1] })
          result.push({ range: [a2, lastIndex] })
        } else {
          result.push({ range: [a1, a2] })
        }
      } else {
        const b1 = sortedSuggestions[i + 1].range[0]
        
        if (a2 < b1) { // no intersection
          result.push({ range: [a1, a2] })
        } else if (a2 >= b1) { // intersection
          result.push({ range: [a1, b1 - 1] })
        }
      }
    }

    return result
  }

  _addEmptyPartitions(partitions) {
    let startIndex = 0
    let result = []
    const size = partitions.length
    const lastIndex = this.text.length - 1
    for (let i = 0; i < size; i++) {
      const [a1, a2] = partitions[i].range

      if (startIndex !== a1) {
        result.push({ range: [startIndex, a1 - 1], empty: true })
      }

      result.push(partitions[i])
      startIndex = a2 + 1

      if (i + 1 === size && startIndex <= lastIndex ) {
        result.push({ range: [startIndex, lastIndex], empty: true })
      }
    }

    return result
  }
}