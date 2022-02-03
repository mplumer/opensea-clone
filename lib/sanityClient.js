import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'tctbtrcs',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skWMhuOeNoIMvEIXLYmC3GCrR4xmmsA0olGeeK37ccXrQaXL2CesLPHqXJtff0G2zOutTB9YgmzGkoXBpBLoHxTyCbL5BTjnMgJarpXd2NXbb3KGuXghiP5JhvcPfoB7GTM9k4BmyBmGGdQIx5z4TdnXvcUASTa2vr5754eiGAZ1NfnEOSPY',
    useCdn: false,
})