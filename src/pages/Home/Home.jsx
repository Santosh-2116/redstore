import React from 'react'
import Category from '../../components/Category/Category'
import FeatureProducts from '../../components/Features Products/FeatureProducts'
import LatestProducts from '../../components/Latest Products/LatestProducts'
import Offer from '../../components/Offer/Offer'
import Testimonials from '../../components/Testimonials/Testimonials'
import Brands from '../../components/Brands/Brands'
import Hero from '../../components/Hero Section/Hero'

export default function Home() {
  return (
    <>
      <Hero/>
      <Category/>
      <FeatureProducts/>
      <LatestProducts/>
      <Offer/>
      <Testimonials/>
      <Brands/>
    </>
  )
}
