import React from 'react'
import Breadcrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'
import BusinessLawHomeComp from '../components/BusinessLaw'

const BusinessLawPage = () => {
    return (
        <Layout title="Business Law">
            <Breadcrumb />
            <BusinessLawHomeComp />
        </Layout>
    )
}

export default BusinessLawPage