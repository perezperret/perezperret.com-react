export const imageUrl = (assetName) => {
  const assetInfo = assetName.split('-')
  const assetFiletype = assetInfo[assetInfo.length - 1]
  const assetIdentifier = assetInfo.slice(1, assetInfo.length - 1).join('-')
  const assetUrl = `${assetIdentifier}.${assetFiletype}`
  return `https://cdn.sanity.io/images/3b138hut/production/${assetUrl}?w=500`
}
