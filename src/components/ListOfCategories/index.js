import React, { Fragment, useState, useEffect } from 'react'
import { Category } from '../Category'
import { Item, List } from './styles'

function useCategoriesData () {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-venetronic-deivypereira.vercel.app/categories')
      .then(response => response.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
};

export const ListOfCategory = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)

  useEffect(function () {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 100
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const RenderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'> <Category /></Item> : categories.map(category => <Item key={category}><Category {...category} /></Item>)
    }
    </List>
  )
  return (
    <>
      {RenderList()}
      {showFixed && RenderList(true)}
    </>
  )
}
