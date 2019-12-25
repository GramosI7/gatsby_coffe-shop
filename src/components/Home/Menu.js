import React, { useState } from "react"
import Title from "../Globals/Title"
import Img from "gatsby-image"

const getCategories = items => {
  let tempItems = items.map(({ node }) => {
    return node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["all", ...categories]
  return categories
}

export default function Menu({ items }) {
  const [itemsState, setItemsState] = useState(items.edges)
  const [coffeItems, setCoffeItems] = useState(items.edges)
  const [categories, setCategories] = useState(getCategories(items.edges))

  function handleItems(category) {
    let tempItems = [...itemsState]
    if (category === "all") {
      setCoffeItems(tempItems)
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setCoffeItems(items)
    }
  }

  if (itemsState.length > 0) {
    return (
      <section className="menu py-5">
        <div className="container">
          <Title title="best of our menu"></Title>
          <div className="row mb-5">
            <div className="col-10 mx-auto text-center">
              {categories.map((category, index) => (
                <button
                  className="btn btn-yellow text-capitalize m-3"
                  type="button"
                  key={index}
                  onClick={() => handleItems(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="row">
            {coffeItems.map(({ node }) => (
              <div
                key={node.id}
                className="col-11 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Img fixed={node.image.fixed} />
                </div>
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <small>{node.title}</small>
                    </h6>
                    <h6 className="mb-0">
                      <small>${node.title}</small>
                    </h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  return (
    <section className="menu py-5">
      <div className="container">
        <Title title="best of our menu"></Title>
        <div className="row">
          <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
            <h1>There are no items to display</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
