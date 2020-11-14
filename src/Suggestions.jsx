import React from 'react';
import BackgroundColorPartitions from "./services/background-color-partitions";

export const Suggestions = ({ suggestions, text }) => {
  const displaySuggestionsBackground = () => {
    const backgroundColorPartitions = new BackgroundColorPartitions(suggestions, text).call()
    return backgroundColorPartitions.map((partition) => {
      const [a1, a2] = partition.range

      if(partition.empty) {
        return (
          <span key={ Math.random(100) }>
            { text.substring(a1, a2 + 1) }
          </span>
        )
      }

      return (
        <span className='suggestions-background-color' key={ Math.random(100) }>
          { text.substring(a1, a2 + 1) }
        </span>
      )
    })
  }

   const notHighlightedText = (index) => {
    if (index !== 0) {
      return (
        <span className='hidden-text'>
          { text.substring(0, index) }
        </span>
      )
    }
  }

  const displaySuggestions = () => {
    return suggestions.map(({ id, range }) => {
      const [a1, a2] = range

      return (
        <div key={ id } className='highlighted-element'>
          { notHighlightedText(a1) }
          <mark id={ id } className='highlighted-text'>
            { text.substring(a1, a2 + 1) }
          </mark>
        </div>
      )
    })
  }

  return (
    <div className='highlighted-elements-wrapper content-description-title'>
      <div className='suggestions-background'>{ displaySuggestionsBackground() }</div>
      { displaySuggestions() }
    </div>
  )
}