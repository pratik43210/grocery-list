/* eslint-disable react/prop-types */
export default function Footer({length}) {
  return (
    <footer>
        <p>{length} List {length===1?"Item":"Items"}</p>
    </footer>
  )
}