import React from "react"
import Product from "./Product"
import Title from "../Globals/Title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 400, maxWidth: 500) {
              src
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  }
`

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
