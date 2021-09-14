import Image from "next/image"
import styles from "../styles/Home.module.css"


export default function Home() {

  return (
    <div className={styles.uwu}>
      <h1>Cookies</h1>
      <hr></hr>
      <Image src="/cookie.jpg" width="275" height="183"></Image>
      <br />
      <a href="https://nextjs.org/">Image source</a>
      <ol>
        <li>Chocalate Chip Cookies</li>
        <li>Butter</li>
        <li>Sugar</li>
        <li>Flour</li>
      </ol>
      <h2>2. Instructions</h2>
      <ol>
        <li>Preheat the oven to 350 F.</li>
        <li>Microwave the butter for about 40 seconds. Butter should be completely melted but shouldn't be hot.</li>
        <li>In a large bowl, mix butter with the sugars until well-combined.</li>
        <li>Stir in vanilla and egg until incorporated.</li>
        <li>Add the flour, baking soda, and salt. Please read the recipe note about properly measuring flour. </li>
        <li>Mix dough until just combined. Dough should be soft and a little sticky but not overly sticky.</li>
        <li>Stir in chocolate chips.</li>
        <li>Scoop out 1.5 tablespoons of dough (medium cookie scoop) and place 2 inches apart on baking sheet.</li>
        <li>Bake for 7-10 minutes, or until cookies are set. They will be puffy and still look a little underbaked in the middle.3</li>
      </ol>

      <a href="https://go.dev/">Instructions source</a>

    </div>
  )
}