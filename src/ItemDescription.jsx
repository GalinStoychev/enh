import React, { useRef, useCallback, useState, useEffect } from 'react';
import ContentEditable from "react-contenteditable";
import ContentAnalysisService from "./services/content-analysis";

import { Suggestions } from "./Suggestions"

export const ItemDescription = ({ itemDescription, onChange }) => {
  const [description, setDescription] = useState(itemDescription)
  const [time, setTime] = useState(null)
  
  // must save suggestions both ways because react-contenteditable doesn't work well with hooks
  const [suggestions, setSuggestions] = useState([])
  const updatedSuggestions = useRef([]);

  useEffect(() => {
    if(description) {
      setSuggestions([])
      setNewSuggestions(description)
    }
  }, [description]);

  const checkForHover = useCallback((e) => {
    updatedSuggestions.current.find(suggestion => {
      const element = document.getElementById(suggestion.id)
        if (element && isOverlap(element, e)) {
        element.classList.add('hovered-highlighted-text')
        // add pop up
        return true
      }
    })
  }, [updatedSuggestions])

  const removeHoveredSuggestionColor = useCallback((e) => {
    updatedSuggestions.current.forEach(suggestion => {
      const element = document.getElementById(suggestion.id)
      if (element) {
        element.classList.remove('hovered-highlighted-text')
      }
    })
  }, [updatedSuggestions])

  const handleDescriptionChange = (e) => {
    const value = e.target.value.replace(/&nbsp;/g, " ")
    onChange(value)
    setDescription(value)
  }

  return (
    <div className='content-description-wrapper'>
      <ContentEditable
        className='content-description-title no-focus'
        html={ description }
        disabled={ false }
        onChange={ handleDescriptionChange }
        onMouseEnter={ checkForHover }
        onMouseLeave={ removeHoveredSuggestionColor }
      />

      { suggestions.length > 0
        ? <Suggestions suggestions={ suggestions } text={ description } />
        : ''
      }
    </div>
  )

  function setNewSuggestions(text) {
    if (time) { clearTimeout(time) }
    let newTimeout = setTimeout(function() {
      const newSuggestions = new ContentAnalysisService(text).call()
      newSuggestions.forEach((suggestion, index) => suggestion.id = index)
      updatedSuggestions.current = newSuggestions
      setSuggestions(newSuggestions)
    }, 1000);

    setTime(newTimeout);
  }

  function isOverlap(element, e) {    
    const left = element.getBoundingClientRect().left + window.scrollX
    const top = element.getBoundingClientRect().top + window.scrollY
    const right = left + element.offsetWidth
    const bottom = top + element.offsetHeight

    return ( e.pageX > left - 2 && e.pageX < right && e.pageY > top - 2 && e.pageY < bottom );
  }
}