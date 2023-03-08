import React, { Fragment } from 'react'
import Images from '@/assests/img'
import DataVisualization from '@/components/data visualization/DataVisualization';

function DataVisualizationPage() {
  const heading="My Dashboard"
  const paragraph="Lorem is simply a dummy text where you can use this as dummy"
  const image=Images.datadiscovery;
  const text="Start creating your own data visualization"
  const status="Empty"
  const name="Generate Now"
  return (
    <Fragment>
      <DataVisualization heading={heading} paragraph={paragraph} image={image} text={text} status={status} name={name} />
    </Fragment>
  )
}

export default DataVisualizationPage